odoo.define('switch_languages_pos.Chrome', function (require) {
    'use strict';
    const { useListener } = require("@web/core/utils/hooks");

    const Chrome = require('point_of_sale.Chrome');
    const Registries = require('point_of_sale.Registries');
    const {useRef, onMounted} = owl;

    const PosSwitchLangChrome = (Chrome) =>
        class extends Chrome {
            setup(){
                super.setup()
                this.posHeader = useRef("pos-topheader")
                useListener('switch-lang', this._switch_lang)
            }
            _switch_lang(event){
                try {
                    this.posHeader.el.style=`background-color:${event.detail}`
                    
                } catch (error) {
                    console.log(error);
                }
            }
            get color(){
                if(this.env.pos.current_langs && this.env.pos.config.enable_switch_lang_pos){
                    const cl = this.env.pos.current_langs.filter((e)=>e.is_current)[0].color
                    return cl
                }else{
                    return ""
                }
            }
        }
    Registries.Component.extend(Chrome, PosSwitchLangChrome)
})
