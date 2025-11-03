
Help avilable at 

https://rsip22.github.io/blog/create-a-blog-with-pelican-and-github-pages.html

1) if venv is not present 
    - create a venv with the reuirements.txt
    - source `venv/bin/activiate`
    - `cd plasmon360.github.io`
    - Install custom version of markdown with `python3 -m pip install  "git+ssh://git@github.com/plasmon360/markdown.git@master"`
    - `pip install -r requirements.txt` 
2) add  Markdown install using following command 

poetry 

Flex should be installed using pelican-themes
    
    poetry run pelican-themes -i ../Flex 

Check if it is installed by 

 ✗ poetry run pelican-themes -l


# For integrating python notebooks in pelican. 
I am using https://github.com/danielfrg/pelican-ipynb
Currently using mode A and Option 1


Local Development:

pelican content -o output 

poetry run pelican --listen


Writing  selected content 
pelican --write-selected output/posts/my-post-title.html

Note here that the output the output html required and input source

ghp_import is useful for publishing to github

https://rsip22.github.io/blog/create-a-blog-with-pelican-and-github-pages.html


Deployment
Commit: git add -A && git commit -a -m 'Addded an article on Coin tossingi_edits'

git push 

git pull

make github 

Change the custom domain name to balajuluri.com at https://github.com/plasmon360/plasmon360.github.io/settings




## Domain Management

### juluribk.com
On Sept 9 2023:

Domain owned by webhostingpad.com
Webshostingpad was unable to add records if I dont have a hosting service. this is strange. dealt with customer service without any success.
Also it was getting hard to transfer the domain to square space. So I am letting go this domain for good. PLEASE DONT RENEW IT NEXT YEAR.


### balajuluri.com
On Sept 9 2023

Started a new domain balajuluri.com (with Squarespace domain registrar) 12 dollars/year (first year) and then 20 every year.



balajuluri.com (apex domain) ->  https://plasmon360.github.io/ (need a A record and AAAA records, see GitHub.io docs)

www.balajuluri.com (sub domain) ->  https://plasmon360.github.io/ (need a CNAME record)

Expected bahaviour

Browsers -> Squarespace name servers (search for A/CNAME records) -> github.io
 
DNS records on Square space
![DNS Records](./docs/DNS_records_on_square_space.png)




## Tools:

Find the name server : 

```
Whois balajuluri.com
```

Check A record
```
dig balajuluri.com +noall +answer -t A
```

Check AAAA record 
```Pasted Graphic 4.pngPasted Graphic 4.png
dig balajuluri.com +noall +answer -t AAAA
```

Check CNAME
```
dig www.balajuluri.com +nostats +nocomments +nocmd
```



