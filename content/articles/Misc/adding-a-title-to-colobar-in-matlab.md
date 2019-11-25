Title: Adding a title to colobar in Matlab
Date: 2010-03-21 16:34
Author: juluribk
Category: Publications
Tags: Matlab
Slug: adding-a-title-to-colobar-in-matlab
Status: published

To insert a title to the colorbar in matlab.  Use the following code([Source](http://www.mathworks.com/matlabcentral/newsreader/view_thread/171788)):  
\[cc lang='matlab'\]  
load mandrill % Loads a data for the example  
image(X) % Plots an image for the example  
t=colorbar;% Inserts a colorbar. a handle is created  
set(get(t,'ylabel'),'string','My colorbar title','Fontsize',10) % sets the ylabel property of the handle t.  
\[/cc\]
