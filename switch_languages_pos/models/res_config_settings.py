from odoo import fields, models

class ResConfigSettings(models.TransientModel):
    _inherit = 'res.config.settings'


    enable_switch_lang_pos = fields.Boolean(related='pos_config_id.enable_switch_lang_pos', readonly=False)
