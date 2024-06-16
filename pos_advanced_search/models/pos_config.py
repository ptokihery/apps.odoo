from odoo import fields, models


class PosConfig(models.Model):
    _inherit = 'pos.config'


    enable_advanced_search_pos = fields.Boolean("Enable advanced search for pos", default=True)
    