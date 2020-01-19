#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHOR = 'Bala Juluri'
SITENAME = "Bala Juluri"
SITETITLE = "Bala Juluri"
SITESUBTITLE = ""
SITEURL = ''
PATH = 'content'

TIMEZONE = 'America/Los_Angeles'

DEFAULT_LANG = 'en'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Blogroll
'''
LINKS = (('Pelican', 'http://getpelican.com/'),
         ('Python.org', 'http://python.org/'),
         ('Jinja2', 'http://jinja.pocoo.org/'),
         ('You can modify those links in your config file', '#'),)
'''

# Social widget
BIO = 'I love tinkering with python, electronics and woodworking.'

SOCIAL = (
            ('envelope','mailto:juluribk@gmail.com'),
            ( 'github','https://github.com/plasmon360'),
          ('linkedin', '#'),
          ('stack-overflow', 'https://stackoverflow.com/users/1753919/plasmon360?tab=topactivity'),
    ('google-scholar', 'https://scholar.google.com/citations?user=mfyb2u4AAAAJ&hl=en'),
          )


MENUITEMS = (('Archives', '/archives.html'),
             ('Categories', '/categories.html'),
             ('Tags', '/tags.html'),)

DEFAULT_PAGINATION = 10

MARKDOWN = {
    'extension_configs': {
        'markdown_katex':{'no_inline_svg': 'True'},
        'markdown.extensions.codehilite': {'css_class': 'highlight', 'linenums':'False'},
        'markdown.extensions.extra': {},
        'markdown.extensions.meta': {},
    },
    'output_format': 'html5',
}

MAIN_MENU = True

THEME = "Flex"

#PYGMENTS_STYLE = 'monokai'

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True
