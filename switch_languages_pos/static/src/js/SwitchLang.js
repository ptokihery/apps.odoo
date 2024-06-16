odoo.define('switch_languages_pos.SwitchLang', function (require) {
    'use strict';

    const PosComponent = require('point_of_sale.PosComponent');
    const Registries = require('point_of_sale.Registries');
    let rpc = require("web.rpc")
    const { useRef } = owl;

    class SwitchLang extends PosComponent {

        switchLang(event) {
            event.preventDefault()
            if (this.env.pos.config.enable_switch_lang_pos) {
                rpc.query({
                    model: 'pos.order',
                    method: "switch_lang",
                    args: [parseInt(event.target.value)]
                }).then(() => {
                    let color = this.env.pos.current_langs.filter((e) => e.id == event.target.value)[0].color
                    this.trigger('switch-lang', color)

                }).finally(() => {
                    this.env.services.reloadPage()
                })
            }
        }
    }
    SwitchLang.template = "SwitchLang";

    Registries.Component.add(SwitchLang);

    return SwitchLang;

})