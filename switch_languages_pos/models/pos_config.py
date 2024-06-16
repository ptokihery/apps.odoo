from odoo import fields, models


class PosConfig(models.Model):
    _inherit = 'pos.config'


    enable_switch_lang_pos = fields.Boolean("Enable switch languages for pos", default=True)

    