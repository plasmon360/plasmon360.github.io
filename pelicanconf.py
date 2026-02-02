#!/usr/bin/env python

# -*- coding: utf-8 -*- #

from __future__ import unicode_literals

import os

AUTHOR = 'Bala Juluri'
SITENAME = "Bala Juluri"
SITETITLE = "Bala Juluri"
SITESUBTITLE = ""
SITEURL = ''
PATH = 'content'
TIMEZONE = 'America/Los_Angeles'
DEFAULT_LANG = 'en'

# Feed generation
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None



# Social / UI
BIO = 'I love tinkering with python, AI, electronics and woodworking.'
HIDE_AUTHORS = True
SOCIAL = (
    ('envelope', 'mailto:juluribk@gmail.com'),
    ('github', 'https://github.com/plasmon360'),
    ('linkedin', '#'),
    ('stack-overflow', 'https://stackoverflow.com/users/1753919/plasmon360?tab=topactivity'),
    ('google-scholar', 'https://scholar.google.com/citations?user=mfyb2u4AAAAJ&hl=en'),
)

MENUITEMS = (
    ('Archives', '/archives.html'),
    ('Categories', '/categories.html'),
    ('Tags', '/tags.html'),
)


DEFAULT_PAGINATION = 10
MAIN_MENU = True
THEME = "Flex"
RELATIVE_URLS = True
MARKUP = ('md', 'ipynb')
IGNORE_FILES = [".ipynb_checkpoints"]
IPYNB_SKIP_CSS = False
STATIC_PATHS = ['images', 'zip', 'pdfTexts', 'extra']
EXTRA_PATH_METADATA = {
    'extra/custom.css': {'path': 'custom.css'},
}
CUSTOM_CSS = 'custom.css'

# 1. Markdown logic - keep Arithmatex

MARKDOWN = {

    'extension_configs': {
        'markdown.extensions.codehilite': {'css_class': 'highlight'},
        'markdown.extensions.extra': {},
        'markdown.extensions.meta': {},
    },
    'output_format': 'html5',
}
# ADD MATH JS in the article itself. COULD NOT GET IT WORKING WITH PLUGINS etc
