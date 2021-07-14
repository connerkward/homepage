#!/usr/bin/env python
# -*- coding: utf-8 -*- #

AUTHOR = 'Conner Ward'
SITENAME = 'Conner'
# SITESUBTITLE='Developer' # could be cool one day
# SITEURL = 'https://connerward.dev'
# GITHUB_URL='http://github.com/connerkward' # creates an ugly 2012 banner

PATH = 'content'

TIMEZONE = 'America/Los_Angeles'

DEFAULT_LANG = 'en'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
FEED_RSS = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Link Widget
LINKS_WIDGET_NAME="Why would I have links here?"
LINKS = (('Python.org', 'https://www.python.org/'),)

# Social widget
SOCIAL_WIDGET_NAME="SOCIAL"
SOCIAL = (('You can add links in your config file', '#'),
          ('Another social link', '#'),)

DEFAULT_PAGINATION = 2

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True

# Added to Tempalte
DEFAULT_CATEGORY = 'Misc'
DISPLAY_PAGES_ON_MENU = True
DISPLAY_CATEGORIES_ON_MENU = False
PAGE_PATHS = ['pages'] # default, all paths relative to /content (^ define above)
ARTICLE_PATHS = ['posts']
STATIC_PATHS = ['files']
PORT = 8000
ARTICLE_URL = 'posts/{slug}.html'
ARTICLE_SAVE_AS = 'posts/{slug}.html'
PAGE_URL = '{slug}.html'
PAGE_SAVE_AS = '{slug}.html'
MENUITEMS=[("Home", "/"),("Portfolio", "/portfolio"),]
DELETE_OUTPUT_DIRECTORY=True

LOAD_CONTENT_CACHE=True
CACHE_PATH='temp/pelican'
CACHE_CONTENT=True

# THEME='content/themes/basic/'
# THEME_STATIC_PATHS = [THEME]
# CSS_FILE = 'content/themes/basic/style.css'
