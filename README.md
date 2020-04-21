Needs Markdown install using following command 

python3 -m pip install  "git+ssh://git@github.com/plasmon360/markdown.git@master"

Flex should be installed using pelican-themes
    
    pelican-themes -i ~/Desktop/juluribk_website/Flex 

Check if it is installed by 

 ✗ pelican-themes -l

pip install markdown_katex ghp-import

# For integrating python notebooks in pelican. 
I am using https://github.com/danielfrg/pelican-ipynb
Currently using mode A and Option 1


Local Development:

pelican content -o output 

pelican --listen


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

Change the custom domain name to juluribk.com at https://github.com/plasmon360/plasmon360.github.io/settings
