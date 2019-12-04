Title: Generating plasmonic metal dielectric functions in Python
Date: 2015-09-10 08:54
Author: juluribk
Category: Plasmonics
Tags: Python
Slug: Generating-plasmonic-metal-dielectric-functions-in-Python
Status: published

I keep needing a python code to generate the dielectric functions of plasmonic materials such as Au, Ag, Pd, and Pt. So I wrote a python version of LD.m.

[LD.m](http://www.mathworks.com/matlabcentral/fileexchange/18040-drude-lorentz-and-debye-lorentz-models-for-the-dielectric-constant-of-metals-and-water) is a matlab file written by Bora Ung that produces dielectric functions of metals either for Lortenz and Loretnz drude models. 

The dielectric functions are given as follows:

$`\epsilon(\omega)=1-\frac{f_1\omega_p'^2}{(\omega^2+i\Gamma_1'\omega)}+\sum_{j=2}^{n}\frac{f_j\omega_p'^2}{(\omega_{o,j}'^2-\omega^2-i\Gamma_j'\omega)}`$.

The first part of the function is the Drude part and the second part is the Lorentz part. The parameters for these models are taken from *Rakic et al., Optical properties of metallic films for vertical-cavity optoelectronic devices, Applied Optics (1998).*

<div class = "alert alert-primary">
<strong> Note: </strong> You can find my module (LD.py) and its documentation <a href = "https://github.com/plasmon360/LD_python">at my github account</a>.
</div>

A typical example on how to use this modules is shown below:

    #!python
    import numpy as np

    # Make sure the file is accessible to PYTHONPATH or in the same
    # directory of file which is trying to import
    from LD import LD  
    
    # Creates a wavelength vector from 300 nm to 1000 nm of length
    # 100
    lamda = np.linspace(300E-9, 1000E-9, 100)
    
    # Creates gold object with dielectric function of LD model
    gold = LD(lamda, material='Au', model='LD')
    
    # prints the real part of the epislion
    print gold.epsilon_real 
    
    # prints the imag part of the epsilon
    print gold.epsilon_imag 
    
    # prints the real part of the refractive index
    print gold.n  
    
    # prints the imag part of the refactive index
    print gold.k  
    
    # plots wavelength vs real epilon and imag epsilon
    gold.plot_epsilon()  
    
    # plots wavelength vs n and k .
    gold.plot_n_k()  
 
This is graph comparing the Au eps data obtained using LD.m and LD.python. The are exactly the same.

![]({filename}/images/LD_python_matlab_comp.png){.center}

