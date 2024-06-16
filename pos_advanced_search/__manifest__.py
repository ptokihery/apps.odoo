# -*- coding: utf-8 -*-
{
    'name': "Advanced Search Product in Pos",
    'summary': """Advanced Search Product Pos""",
    'description': """
        This module enhances the Odoo Point of Sale system with advanced search capabilities, 
        featuring auto-completion for faster product lookup. 
        This module allows users to quickly find products by typing partial names
    """,

    'author': "Tokihery RANDRIANAMBININTSOA",
    'website': "www.linkedin.com/in/pytokihery",
    'support': "tokihery15@gmail.com",
    'category': 'POS',
    'version': '16.0.1.0.0',
     'price': 80,
    'currency': 'EUR',
    'depends': ['point_of_sale'],
    "images": [
        "static/description/banner.png",
    ],
    'data': [
        "views/pos_config.xml",
        "views/res_config_settings.xml",
        
    ],
    'assets': {
        'point_of_sale.assets': [
            "pos_advanced_search/static/src/xml/**/*",
            "pos_advanced_search/static/src/js/**/*",
            "pos_advanced_search/static/src/css/autocomplete.css",
        ]
    },
    'license': 'OPL-1',

}
