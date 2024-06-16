from odoo import models,api,fields


class PosSession(models.Model):
    _inherit = 'pos.session'

    def _pos_ui_models_to_load(self):
        result = super()._pos_ui_models_to_load()
        new_model = 'res.lang'
        result.append(new_model)
        return result

    def _loader_params_res_lang(self):
        return {
            'search_params': {
                'domain': [('active', '=', True)],
                'fields': ['name', 'code', 'color', 'display_name'],
            },
        }

    def _get_pos_ui_res_lang(self, params):
        records_langs = self.env['res.lang'].search_read(**params['search_params'])
        return [{**item, "is_current": item["code"] == self.env.user.lang} for item in records_langs]

class PosOrder(models.Model):
    _inherit = 'pos.order'

    @api.model
    def switch_lang(self, id):
        if id:
            lang = self.env['res.lang'].browse(id)
            self.env.user.lang = lang.code

class ResLang(models.Model):
    _inherit = "res.lang"


    color = fields.Char("Special color (optional)")


