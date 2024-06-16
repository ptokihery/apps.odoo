from odoo import fields, models

class ResConfigSettings(models.TransientModel):
    _inherit = 'res.config.settings'


    enable_advanced_search_pos = fields.Boolean(related='pos_config_id.enable_advanced_search_pos', readonly=False)

