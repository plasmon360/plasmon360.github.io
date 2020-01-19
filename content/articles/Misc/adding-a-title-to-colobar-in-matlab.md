Title: Adding a title to colobar in Matlab
Date: 2010-03-21 16:34
Author: juluribk
Category: Misc
Tags: Matlab
Slug: adding-a-title-to-colobar-in-matlab
Status: published

To insert a title to the colorbar in matlab.  

Use the following code ([Source](http://www.mathworks.com/matlabcentral/newsreader/view_thread/171788)):  
    
    #!matlab
    % Loads a data for the example 
    load mandrill 
    
    % Plots an image for the example 
    image(X) 
    
    % Inserts a colorbar. a handle is created 
    t=colorbar;

    % sets the ylabel property of the handle t. 
    set(get(t,'ylabel'),'string','My colorbar title','Fontsize',10) 
