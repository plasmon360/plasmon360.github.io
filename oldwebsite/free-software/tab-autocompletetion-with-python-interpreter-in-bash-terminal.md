Title: Tab autocompletetion with python interpreter in bash terminal
Date: 2016-10-29 18:16
Author: juluribk
Category: Free Software
Tags: Linux, python
Slug: tab-autocompletetion-with-python-interpreter-in-bash-terminal
Status: published

I want to tab autocomplete commands in my python interpreter within bash terminal. This is very useful when I import a module and just want to browse through the methods and autocomplete.

Found two ways to do it. Thanks to stack overflow posts.

Method 1 ([as mentioned here](http://stackoverflow.com/questions/2603798/ipython-tab-completion-not-working)):

This is easy. Install pyreadline (pip install pyreadline) and use ipython. This is a snapshot of it working.

[![iptyhon\_autocompletion](http://juluribk.com/wp-content/uploads/2016/10/iptyhon_autocompletion.png){.aligncenter .size-full .wp-image-1731 width="708" height="322"}](http://juluribk.com/wp-content/uploads/2016/10/iptyhon_autocompletion.png)

Method 2 ( [as mentioned here](https://docs.python.org/2/library/rlcompleter.html#module-rlcompleter)):

This is for standard  python interpreter in bash terminal (such as in Ubuntu). This method requires readline and rlcompeter modules. Install these modules if you do not have them installed. This can be done with pip.

Basically, the idea is to have a python interpreter look for the value of environment path variable "PYTHONSTARTUP". This variable should be set to a location for the file ("python\_startup\_file.py") with commands that enable tab autocompletion.

In my home directory "/home/bjuluri" I make a file called "python\_startup\_file.py" by

\[cc lang ='bash'\]

bjuluri@bjuluri-VirtualBox:\~\$ gedit python\_startup\_file.py

\[/cc\]

copy and paste following lines

\[cc lang = 'python'\]  
try:  
import readline  
except ImportError:  
print "Module readline not available."  
else:  
import rlcompleter  
readline.parse\_and\_bind("tab: complete")  
\[/cc\]

Save and close the file.

Now lets assign the an environmental variable "PYTHONSTARTUP" to the location of this "python\_startup\_file"

./bashrc is loaded whenever a bash terminal is fired. This file sits in the user's home directory, we will edit it and assign the environmental variable at the end of the file.

\[cc\]

nano .bashrc

\[/cc\]

at the end of the file, copy and paste

\[cc lang = 'bash'\]

export PYTHONSTARTUP="python\_startup\_file.py"

\[/cc\]

Save the file and exit.

reload the .bashrc file in terminal by either opening a new terminal or by typing the following in the current terminal.

\[cc\]

source .bashrc

\[/cc\]

Once those commands run at the python startup, tab autocompletion with suggestions will be enabled in the interpreter.