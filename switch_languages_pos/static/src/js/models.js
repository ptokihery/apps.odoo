odoo.define('switch_languages_pos.SwitchLangModel', function (require) {
    "use strict";

var { PosGlobalState, Order } = require('point_of_sale.models');
const Registries = require('point_of_sale.Registries');


const SwitchLangModelPosGlobalState = (PosGlobalState) => class SwitchLangModelPosGlobalState extends PosGlobalState {
    get current_langs(){
        return this.env.pos.langs
    }
    setValueLang(langs){
        return langs.filter((e)=>e.is_current)[0].id
    }

    getColor(langs){
        return langs.filter((e)=>e.is_current)[0].color 
    }
}
Registries.Model.extend(PosGlobalState, SwitchLangModelPosGlobalState);
});
