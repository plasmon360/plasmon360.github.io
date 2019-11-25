Title: Calculating molarity, weight concentration from absorbance value for plasmonic nanoparticles in solution
Date: 2018-06-20 10:50
Author: juluribk
Category: Publications
Slug: calculating-molarity-weight-concentration-from-absorbance-value-for-plasmonic-nanoparticles-in-solution
Status: published

It is common to measure the peak absorbance of the plasmonic nanoparticles in solution and then get the following:

1.   Molarity (moles/liter)
2.  Number of particles per ml
3.   Weight concentration (ug/ml)

I wrote a small python function to extract these parameters.  The following inputs are needed for the function

1.  d\_nm :   diameter of the particle in nanoparticle
2.  od :  peak OD measured from the absorbance plot
3.  path\_length\_cm :  cuvette length in centimeter
4.  density\_g\_per\_cm3 :  for gold it is 19.28, for silver it is 10.49
5.  molar\_Extinction\_perM\_percm :  Molar extinction coefficient extracted from [here](https://www.sigmaaldrich.com/technical-documents/articles/materials-science/nanomaterials/gold-nanoparticles.html).
6.  This can extracted from measuring absorbance at different concentrations and then fitting a linear line. the slope will be molar extinction coefficient

Here is the code.

\[cc lang ='python'\]

'''  
The code below shows how to convert measured absobance to Molarity (moles of particle/1L of solvent), NPS\_per\_ml, weight concentration  
'''

import math  
def calculate\_molarity\_weight\_percentage\_from\_absorbance(d\_nm=17, peak\_od=0.93, path\_length\_cm=1,  
density\_g\_per\_cm3=19.28,  
molar\_Extinction\_perM\_percm=3.68E8):  
'''  
d\_nm \# diameter of the particle  
od \# peak OD measured from the absorbance plot  
path\_length\_cm \# cuvette length  
density\_g\_per\_cm3 \# for gold it is 19.28, for silver it is 10.49  
molar\_Extinction\_perM\_percm \# Molar extinction coefficient extracted from  
https://www.sigmaaldrich.com/technical-documents/articles/materials-science/nanomaterials/gold-nanoparticles.html  
This can extracted from measuring absorbance at different concentrations and then fitting a linear line. the slope will be molar extinction coefficient  
'''  
print('\\nInput parameters :\\n')

print('Diameter of particle: {} nm'.format(d\_nm))  
print('Density of metal: {} g/cm\^2'.format(density\_g\_per\_cm3))  
print('Measured peak\_OD: {}'.format(peak\_od))  
print('Cuvvette path length: {} cm'.format(path\_length\_cm))  
print('Assumed Molar Extinction : {:.2E} (M-1Cm-1)'.format(molar\_Extinction\_perM\_percm))

print('\\nOutput parameters :\\n')

C\_M = peak\_od / (path\_length\_cm \* molar\_Extinction\_perM\_percm) \# Beer-Lambert Law  
print('Concentration of Nanoparticles (M, moles of particles/1L of solvent) : {:.3E}'.format(C\_M))

\# convert molarity to NPS/ml ( Nanoparticles per ml), here Molarity refers to N Nps per 1000 ml  
NPS\_per\_ml = C\_M \* 6.0221409e+23 / 1000  
print('Nanoparticles per ml : {:.3E}'.format(NPS\_per\_ml))

\# Calculate weight of each Particle  
np\_weight\_g = math.pi \* ((d\_nm / 2.0) \* 1E-7) \*\* 3 \* density\_g\_per\_cm3  
print('Weight of each particle (g) : {:.3E}'.format(np\_weight\_g))

\# Convert Molarity (moles of particles/1L of solvent) to weight\_concentration\_ug\_ml  
weight\_concentration\_ug\_per\_ml = NPS\_per\_ml \* (4.0 / 3) \* np\_weight\_g \* 1E6  
print('Weight\_concentration (ug/ml) : {:.3f}'.format(weight\_concentration\_ug\_per\_ml))  
print(calculate\_molarity\_weight\_percentage\_from\_absorbance(d\_nm=17, peak\_od=0.93, path\_length\_cm=1,  
density\_g\_per\_cm3=19.28,  
molar\_Extinction\_perM\_percm=3.68E8))

\[/cc\]

 

This code when will result in

\[cc lang = 'python'\]

Input parameters :

Diameter of particle: 17 nm  
Density of metal: 19.28 g/cm\^2  
Measured peak\_OD: 0.93  
Cuvvette path length: 1 cm  
Assumed Molar Extinction : 3.68E+08 (M-1Cm-1)

Output parameters :

Concentration of Nanoparticles (M, moles of particles/1L of solvent) : 2.527E-09  
Nanoparticles per ml : 1.522E+12  
Weight of each particle (g) : 3.720E-17  
Weight\_concentration (ug/ml) : 75.481

\[/cc\]
