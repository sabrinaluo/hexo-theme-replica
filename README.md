# Replica [![LICENSE MIT](https://img.shields.io/badge/LICENSE-MIT-blue.svg)](https://opensource.org/licenses/MIT)
Github style replication for hexo theme. 

Just in case you are working in the office but suddenly have some genius ideas. :two_hearts:  
[Click here to view the demo site](http://sabrinaluo.com/tech)

Issues & Contributions are welcome! :stuck_out_tongue:

## Version
#### v1.0  
Github UI before 2017, which is using the grey navbar

#### v2.0 (in progress)  
Github UI in 2017, which is using the black navbar

## Setup
#### Install
```
git clone git@github.com:sabrinaluo/hexo-theme-replica.git themes/replica
```

#### Configure
Set `theme: replica` in `_config.yml` (the one in your root folder)
**Modifying `your_blog/themes/replica/_config.yml` directly is not recommended, it's better to configure your site through `your_blog/_config.yml`.**

Here is a sample of `my_blog/_config.yml`
```
# Hexo Configuration
## Docs: http://hexo.io/docs/configuration.html
## Source: https://github.com/hexojs/hexo/

# Site
title: My Blog
description: My Blog Description
author: HiiTea
language: zh-CN
timezone: Asia/Shanghai
favicon: https://assets-cdn.github.com/favicon.ico

# URL
## If your site is put in a subdirectory, set url as 'http://yoursite.com/child' and root as '/child/'
url: http://sabrinaluo.com/tech
root: /tech/
permalink: :year/:month/:day/:title/
permalink_defaults:

# Directory
source_dir: source
public_dir: public
tag_dir: tags
archive_dir: archives
category_dir: categories
code_dir: downloads/code
i18n_dir: :lang
skip_render:

# Writing
new_post_name: :year:month:day-:title.md # File name of new posts
default_layout: post
titlecase: false # Transform title into titlecase
external_link: true # Open external links in new tab
filename_case: 0
render_drafts: false
post_asset_folder: false
relative_link: false
future: true
highlight:
  enable: true
  line_number: true
  auto_detect: false
  tab_replace:

# Category & Tag
default_category: uncategorized
category_map:
tag_map:

# Date / Time format
## Hexo uses Moment.js to parse and display date
## You can customize the date format as defined in
## http://momentjs.com/docs/#/displaying/format/
date_format: YYYY-MM-DD
time_format: HH:mm:ss

# Pagination
## Set per_page to 0 to disable pagination
per_page: 0
pagination_dir: page

# Extensions
## Plugins: http://hexo.io/plugins/
## Themes: http://hexo.io/themes/
theme: replica

# Google Analytics
ga: # GA code UA-XXXXXXXX-X

#marked setting for markdown
marked:
  gfm: true
  pedantic: false
  sanitize: false
  tables: true
  breaks: true
  smartLists: true
  smartypants: true

gcs: # GOOGLE CUSTOM SEARCH
baidutongji: # BAIDU TONGJI CODE
disqus: # DISQUS ID

location: Hong Kong
email: xx@example.com

avatar: https://avatars2.githubusercontent.com/u/5300359?v=4&s=460
social:
  github: https://github.com/sabrinaluo
  weibo: http://weibo.com/206663121
  linkedin: 
```

#### Update
```
cd themes/replica
git pull
```

In case you want the old version with grey navbar
```
cd themes/replica
git checkout v1.0
```

## Available Widgets
~~多说~~ (Duoshuo stopped the service since June, 2017)  
百度统计  
Disqus  
Google Analytics  
Google Custom Search Engine[^1]

## License
The MIT License[^2]

Copyright (c) 2015-2017 Hiitea <luohaojing@gmail.com>

[^1]: https://cse.google.com/
[^2]: https://opensource.org/licenses/MIT

## Buy me coffee :yum:
BTC: 19U6USzi7WaFmY3DTkgn67EzYpTqZPNwRG

[![Alipay](http://7xow88.com1.z0.glb.clouddn.com/alip.jpg?imageView2/3/w/150/)](http://7xow88.com1.z0.glb.clouddn.com/alip.jpg)
