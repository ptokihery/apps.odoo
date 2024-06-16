odoo.define('pos_advanced_search.AdvancedSearch', function (require) {
    'use strict';

    const ProductsWidgetControlPanel = require('point_of_sale.ProductsWidgetControlPanel');
    const Registries = require('point_of_sale.Registries');
    const { useListener } = require("@web/core/utils/hooks");

    const { useState } = owl;
    const AdvancedSearch = ProductsWidgetControlPanel_ =>
        class extends ProductsWidgetControlPanel_ {
            setup() {
                super.setup();
                this.stateProposition = useState({show: false, listProductProposition: [], listCategProposition: []})
                useListener('switch-category', this._switchCategory);

            }
            autoCompletionSearch(e){
                if(this.env.pos.config.enable_advanced_search_pos){
                    this.stateProposition.listProductProposition = this.filterByDisplayName(e.target.value, "product")
                    this.stateProposition.listCategProposition = this.filterByDisplayName(e.target.value, "category")
                    this.stateProposition.show = e.target.value
                }else{
                    this.trigger('update-search', e.target.value);
                }
               
            }
            get ShowProposition(){
                return this.stateProposition.show
            }
            _switchCategory(event) {
                if(event.detail === 0){
                    this.trigger('clear-search');
                    this.trigger('update-search', "");
                    
                }
                this.env.pos.setSelectedCategoryId(event.detail);
            }
            price(product) {
                const formattedUnitPrice = this.env.pos.format_currency(
                    product.get_display_price(product.lst_price, 1),
                    'Product Price'
                );
                if (product.to_weight) {
                    return `${formattedUnitPrice}/${
                        this.env.pos.units_by_id[product.uom_id[0]].name
                    }`;
                } else {
                    return formattedUnitPrice;
                }
            }

            get listProductProposition (){
                return this.stateProposition.listProductProposition 
            }
            get listCategProposition (){
                return this.stateProposition.listCategProposition 
            }
            _clearSearchProposition(){
                this.stateProposition.listProductProposition = []
                this.stateProposition.show = false
                this.stateProposition.listCategProposition = []
            }

            _clearSearch() {
                this.searchWordInput.el.value = '';
                this._clearSearchProposition()
                this.trigger('clear-search');
            }
            filterByDisplayName(substring, type) {
                let result = [];
                const data = type === "product"? this.env.pos.db.product_by_id: type === "category" ?this.env.pos.db.category_by_id : {}
                substring = substring.toLowerCase();
                for (let key in data) {
                    let name = type === "product" ? data[key].display_name:data[key].name 
                    if (name && name.toLowerCase().includes(substring)) {
                        result.push(data[key]);
                    }
                }
                return result;
            }
            _onclickItem(item, type){
                if (type==='category') {
                    this.trigger('switch-category', item.id);
                    this.trigger('clear-search');
                }
                if(type==='product'){
                    if (item.pos_categ_id[0] != this.selectedCategoryId) {
                        this.trigger('switch-category', item.pos_categ_id[0]);                    
                    }
                    this.trigger('update-search', item.display_name);
                    this.trigger('click-product', item);
                }
                this._clearSearchProposition()
            }
        
        };

    Registries.Component.extend(ProductsWidgetControlPanel, AdvancedSearch);

    return ProductsWidgetControlPanel;
});
