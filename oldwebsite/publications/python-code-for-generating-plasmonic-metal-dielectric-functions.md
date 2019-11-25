Title: Python code for generating plasmonic metal dielectric functions
Date: 2015-09-10 08:54
Author: juluribk
Category: Publications
Slug: python-code-for-generating-plasmonic-metal-dielectric-functions
Status: published

\[latexpage\]  
I keep needing a python code to generate the dielectric functions of plasmonic materials such as Au, Ag, Pd, and Pt. I wanted the dielectric functions called by other python codes such as [TMM](https://pypi.python.org/pypi/tmm). So I wrote a python version of LD.m

[LD.m](http://www.mathworks.com/matlabcentral/fileexchange/18040-drude-lorentz-and-debye-lorentz-models-for-the-dielectric-constant-of-metals-and-water) is a matlab file written by Bora Ung that produces dielectric functions of metals either for Lortenz and Loretnz drude models. The dielectric functions are given as follows:

\$\\epsilon(\\omega)=1-\\frac{f\_1\\omega\_p'\^2}{(\\omega\^2+i\\Gamma\_1'\\omega)}+\\sum\_{j=2}\^{n}\\frac{f\_j\\omega\_p'\^2}{(\\omega\_{o,j}'\^2-\\omega\^2-i\\Gamma\_j'\\omega)}\$.

The first part of the function is the Drude part and the second part is the Lorentz part. The parameters for these models are taken from Rakic et al., Optical properties of metallic films for vertical-cavity optoelectronic devices, Applied Optics (1998).

You can find my module (LD.py) and its documentation [at my github account](https://github.com/plasmon360/LD_python).

A typical example is shown below:

\[cc lang='python'\]  
from LD import LD \# Make sure the file is accessible to PYTHONPATH or in the same directory of file which is trying to import  
import numpy as np  
lamda = np.linspace(300E-9,1000E-9,100) \# Creates a wavelength vector from 300 nm to 1000 nm of length 100  
gold = LD(lamda, material = 'Au',model = 'LD') \# Creates gold object with dielectric function of LD model  
print gold.epsilon\_real \# prints the real part of the epislion  
print gold.epsilon\_imag \# prints the imag part of the epsilon  
print gold.n \# prints the real part of the refractive index  
print gold.k \# prints the imag part of the refactive index  
gold.plot\_epsilon() \# plots wavelength vs real epilon and imag epsilon  
gold.plot\_n\_k() \# plots wavelength vs n and k .  
\[/cc\]
