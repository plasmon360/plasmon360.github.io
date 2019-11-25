Title: Spaces in strings in matlab/octave
Date: 2012-02-24 11:33
Author: juluribk
Category: Matlab
Tags: Matlab, octave
Slug: spaces-in-strings-in-matlaboctave
Status: published

To get spaces in the strings to work in matlab or octave, use

t1={'test test'}

Result is  
t1 =  
{  
\[1,1\] = test test  
}

t2=strcat({'test test '},{'blah blah'})

Result is  
t2 =  
{  
\[1,1\] = test test blah blah  
}

you can use this string in your figures by  
plot(\[1:4\])  
title(t2{})
