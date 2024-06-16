# -*- coding: utf-8 -*-
{
    'name': "Switch languages in Pos",
    "version": "16.0.1.0.0",
    'summary': """Switch languages in Pos""",

    'description': """
        The "Switch Languages in POS" module for Odoo allows users to dynamically change the language of the POS interface. 
        This feature enhances customer service and accessibility in multilingual environments, ensuring smoother and more personalized interactions.
    """,

    'author': "Tokihery RANDRIANAMBININTSOA",
    'website': "www.linkedin.com/in/pytokihery",
    "support":"tokihery15@gmail.com",
    'category': 'POS',
    'price': 10,
    'currency': 'EUR',
    'depends': ['point_of_sale'],
    'data': [
        "views/swicth_lang_pos_config.xml",
        "views/swicth_lang_res_config_settings.xml",
        "views/res_lang.xml"

    ],
    "images": [
        "static/description/banner.png",
    ],
    'assets': {
        'point_of_sale.assets': [
            "switch_languages_pos/static/src/js/**/*",
            "switch_languages_pos/static/src/css/switch_languages.css",
            "switch_languages_pos/static/src/xml/**/*",

        ]
    },
    'license': 'OPL-1',
    
}
