Title: Coupled Dipole Approximation in Python
Date: 2016-07-20 09:39
Author: juluribk
Category: Plasmonics
Tags: electromagnetism, Plasmonics, python
Slug: coupled-dipole-approximation-in-python
Status: published

\[latexpage\]

Coupled dipole approximation (CDA) method is a numerical method to calculate the optical properties (scattering and absorption) of interacting dipoles. This method is used in discrete dipole approximation method (like in[DDSCAT](http://www.ddscat.org/)software), where a big particle (also known as target) is broken into lot of interacting dipoles arranged in cubic lattice. CDA can also be used to calculate the optical properties (scattering and absorption) of random particle distributions (like in L. Zhao et al. J. Phys. Chem. B,  107,  30, 7343,2003 ) and assuming each particle to be small enough that it behaves like a dipole.

I have implement cda in python ([see source code link at the bottom of this post]{style="color: #ff0000;"}) and use it to calculate the optical properties of nanoparticles that are arranged randomly in cuboid or on a rectangular grid. Once the incident electric field direction (k vector), polarization, positions and radii of particles are given, the code calculates the extinction, scattering and absorption cross-sections. It is important to note that the nano particles should be small enough so that they can act as dipole with quasi-static polarizability.

\[gallery columns="2" size="medium" ids="1679,1680,1681,1678"\]

If you are interested in the numerical part of the code, see below:

The goal of CDA method is to calculate the self-consistent dipole moments of the dipoles that are interacting with each other. Once dipole moments are calculated, scattering and absorption cross-sections can be calculated. Most of the write up below is from Bruce T. Draine and Piotr J. Flatau, "Discrete-Dipole Approximation For Scattering Calculations," J. Opt. Soc. Am. A 11, 1491-1499 (1994)

Let start for simplicity by assume two dipoles, dipole \$1\$ positioned at \$\\vec{r}\_1\$ and dipole \$1\$ positioned at \$\\vec{r}\_2\$.

The dipole moment of this dipole \$1\$ is given by \$\\vec{p}\_1 = p\_{1x}\\vec{i}+p\_{1y}\\vec{j}+p\_1z\\vec{k} = \\alpha \\vec{E}\_1\$, where \$\\vec{E}\_1 = E\_{1x}\\vec{i}+E\_{1y}\\vec{j}+E\_{1z}\\vec{k}\$ is the local electric field at dipole \$i\$.

Here,

\\\[  
\\alpha =  
\\begin{bmatrix}  
\\alpha\_{1xx}&0&0\\\\  
0&\\alpha\_{1yy}&0\\\\  
0&0&\\alpha\_{1zz}  
\\end{bmatrix}  
\\\] is the isotropic polarizability tensor of the \$i\$ dipole.

The polarizability of the dipole is generally known (generally assumed to follow Clausius-Mossotti relation), but we do not know the local electric field at the dipole \$i\$, because there are complex contributions from other dipoles (like dipole \$2\$).

Lets write down the local electric field at dipole \$2\$, there will be a incident electric field which is given by \$\\vec{E}\_{2inc} = \\vec{E}\_o e\^{i\\vec{k}\\vec{r}\_2}\$ and electric field emanating from dipole \$1\$

\\\[  
\\vec{E}\_2 = \\vec{E}\_o e\^{i\\vec{k}\\vec{r}\_2} + \\frac{1}{4\\pi\\epsilon\_o}\\left \[ \\frac{e\^{ikr}}{r} k\^2 \\left( \\left ( \\vec{n}\_{21} \\times \\vec{p}\_1 \\right ) \\times \\vec{n}\_{21} \\right) + e\^{ikr}\\left\[3\\vec{n}\_{21}(\\vec{n}\_{21}\\cdot \\vec{p}\_1)-\\vec{p}\_1 \\right \] \\left\[\\frac{1}{r\^3}-\\frac{ik}{r\^2}\\right\]\\right \]  
\\\]

Here \$r\_{21}\$ = \$|\\vec{r}\_2 - \\vec{r}\_1|\$  
\$\\vec{n}\_{21} = n\_{21x}\\vec{i}+n\_{21y}\\vec{j}+n\_{21z}\\vec{k} = \\frac{\\vec{r}\_2 - \\vec{r}\_1}{r\_{21}}\$  
\$k\$ = \$|\\vec{k}|\$ is the wavevector of the incident wave.

For a constant \$k\$, at the distances near the dipole \$1\$, the second term dominates and this term is called the near field contribution and the first term dominates at the farther distances from the dipole and is called the far field contribution to the electric field.

Then the above equation can be reduced to a matrix form as follows after some math.

\\\[  
\\tiny  
\\begin{bmatrix}  
E\_{2x}\\\\  
E\_{2y}\\\\  
E\_{2z}  
\\end{bmatrix}  
=  
\\tiny  
\\begin{bmatrix}  
\\alpha\_{2xx}&0&0\\\\  
0&\\alpha\_{2yy}&0\\\\  
0&0&\\alpha\_{2zz}  
\\end{bmatrix} \^{-1}  
\\tiny  
\\begin{bmatrix}  
P\_{2x}\\\\  
P\_{2y}\\\\  
P\_{2z}  
\\end{bmatrix}  
=  
\\tiny  
\\begin{bmatrix}  
E\_{2x\_{inc}}\\\\  
E\_{2y\_{inc}}\\\\  
E\_{2z\_{inc}}  
\\end{bmatrix}  
+  
\\\]

\\\[  
\\tiny  
\\begin{matrix}  
A\_{12}(n\_{21y}\^2 +n\_{21z}\^2) +B\_{12}(3n\_{21x}\^2-1)) & n\_{21z} n\_{21y}(3B\_{12}-A\_{12}) & n\_{21x} n\_{21z}(3B\_{12}-A\_{12}) \\\\  
n\_{21x} n\_{21y}(3B\_{12}-A\_{12}) & A\_{12}(n\_{21x}\^2 +n\_{21z}\^2) +B\_{12}(3n\_{21y}\^2-1)) & n\_{21y} n\_{21z}(3B\_{12}-A\_{12}) \\\\  
n\_{21x} n\_{21z}(3B\_{12}-A\_{12})& n\_{21y} n\_{21z}(3B\_{12}-A\_{12}) & A\_{12}(n\_{21y}\^2 +n\_{21x}\^2) +B\_{12}(3n\_{21z}\^2-1))  
\\end{bmatrix}

\\tiny  
\\begin{bmatrix}  
P\_{1x}\\\\  
P\_{1y}\\\\  
P\_{1z}  
\\end{bmatrix}  
\\\]

where,  
\$A\_{12} = \\frac{k\^2}{4\\pi\\epsilon\_o}\\frac{e\^{ikr\_{21}}}{R\_{21}}\$ and \$B\_{12} = \\left\[\\frac{1}{r\_{21}\^3}-\\frac{ik}{r\_{21}\^2}\\right\]\\frac{e\^{ikr\_{21}}}{4\\pi\\epsilon\_o}\$

Similarly we write the electric field near the dipole \$1\$ as

\\\[  
\\tiny  
\\begin{bmatrix}  
E\_{1x}\\\\  
E\_{1y}\\\\  
E\_{1z}  
\\end{bmatrix}  
=  
\\begin{bmatrix}  
\\alpha\_{1xx}&0&0\\\\  
0&\\alpha\_{1yy}&0\\\\  
0&0&\\alpha\_{1zz}  
\\end{bmatrix} \^{-1}  
\\tiny  
\\begin{bmatrix}  
P\_{1x}\\\\  
P\_{1y}\\\\  
P\_{1z}  
\\end{bmatrix}  
=  
\\begin{bmatrix}  
E\_{1x\_{inc}}\\\\  
E\_{1y\_{inc}}\\\\  
E\_{1z\_{inc}}  
\\end{bmatrix}  
+  
\\\]

\\\[  
\\tiny  
\\begin{bmatrix}  
A\_{21}(n\_{12y}\^2 +n\_{12z}\^2) +B\_{21}(3n\_{12x}\^2-1)) & n\_{12z} n\_{12y}(3B\_{21}-A\_{21}) & n\_{12x} n\_{12z}(3B\_{21}-A\_{21}) \\\\  
n\_{12x} n\_{12y}(3B\_{21}-A\_{21}) & A\_{21}(n\_{12x}\^2 +n\_{12z}\^2) +B\_{21}(3n\_{12y}\^2-1)) & n\_{12y} n\_{12z}(3B\_{21}-A\_{21}) \\\\  
n\_{12x} n\_{12z}(3B\_{21}-A\_{21})& n\_{121y} n\_{12z}(3B\_{21}-A\_{21}) & A\_{21}(n\_{12y}\^2 +n\_{12x}\^2) +B\_{21}(3n\_{12z}\^2-1))  
\\end{bmatrix}  
\\tiny  
\\begin{bmatrix}  
P\_{2x}\\\\  
P\_{2y}\\\\  
P\_{2z}  
\\end{bmatrix}  
\\\]

These two equations can be combined in the form of AP = E matrix equation as follows:

\\\[  
\\begin{bmatrix}  
\\alpha1\^{-1}&\\textbf{M12}&\\\\  
\\textbf{M21}&\\alpha2\^{-1}&  
\\end{bmatrix}  
\\begin{bmatrix}  
\\vec{P}\_{1}\\\\  
\\vec{P}\_{2}\\\\  
\\end{bmatrix}

=  
\\begin{bmatrix}  
E\_{1inc}\\\\  
E\_{2inc}\\\\  
\\end{bmatrix}  
\\\]

We can calcualte A from the positions of dipoles, their polarizability and wavevector, we know E from the incident electric fields, but we do not know \$\\vec{P}\_1\$ and \$\\vec{P}\_2\$ and that is what we find by solving P in AP = E matrix equation.

We can extend the same concept to N dipoles, just the matrices in this case become bigger (A is 3N x 3N matrix, P in 3N and E is 3N column matrixes) and we need numerical iterative methods to solve. For solving the AP=E, I use Scipy's [biConjugate gradient stabilized method](http://docs.scipy.org/doc/scipy/reference/generated/scipy.sparse.linalg.bicgstab.html#scipy.sparse.linalg.bicgstab) .

Once we know these self-consistent dipole moments, we can calculate the scattering and absorption cross-sections using extinction theorem (see equation 8 and 9 in Bruce T. Draine and Piotr J. Flatau, "Discrete-Dipole Approximation For Scattering Calculations," J. Opt. Soc. Am. A 11, 1491-1499 (1994)).

### [[[See source code at GitHub here]{style="color: #ff0000; text-decoration: underline;"}](https://github.com/plasmon360/CDA_PYTHON)]{style="text-decoration: underline;"} {#see-source-code-at-github-here style="text-align: center;"}
