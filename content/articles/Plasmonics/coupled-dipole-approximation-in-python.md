Title: Coupled Dipole Approximation in Python
Date: 2016-07-20 09:39
Author: juluribk
Category: Plasmonics
Tags: electromagnetism, Plasmonics, python
Slug: coupled-dipole-approximation-in-python
Status: published

Coupled dipole approximation (CDA) method is a numerical method to calculate the optical properties (scattering and absorption) of interacting dipoles. This method is used in discrete dipole approximation method (like in [DDSCAT](http://www.ddscat.org/) software), where a big particle (also known as target) is broken into lot of interacting dipoles arranged in cubic lattice. CDA can also be used to calculate the optical properties (scattering and absorption) of random particle distributions (like in L. Zhao et al. J. Phys. Chem. B, 107, 30, 7343, 2003) and assuming each particle to be small enough that it behaves like a dipole.

I have implemented CDA in python and used it to calculate the optical properties of nanoparticles that are arranged randomly in cuboid or on a rectangular grid. Once the incident electric field direction ($k$ vector), polarization, positions and radii of particles are given, the code calculates the extinction, scattering and absorption cross-sections. It is important to note that the nano particles should be small enough so that they can act as dipole with quasi-static polarizability.

If you are interested in the numerical part of the code, see below:

The goal of CDA method is to calculate the self-consistent dipole moments of the dipoles that are interacting with each other. Once dipole moments are calculated, scattering and absorption cross-sections can be calculated. Most of the write up below is from Bruce T. Draine and Piotr J. Flatau, "Discrete-Dipole Approximation For Scattering Calculations," J. Opt. Soc. Am. A 11, 1491-1499 (1994).

Let start for simplicity by assuming two dipoles, dipole $1$ positioned at $\vec{r}_1$ and dipole $2$ positioned at $\vec{r}_2$.

The dipole moment of dipole $1$ is given by 
$\vec{p}_1 = p_{1x}\vec{i}+p_{1y}\vec{j}+p_{1z}\vec{k} = \alpha \vec{E}_1$, where $\vec{E}_1 = E_{1x}\vec{i}+E_{1y}\vec{j}+E_{1z}\vec{k}$ is the local electric field at dipole $i$.

Here,

$$
\alpha =  
\begin{bmatrix}  
\alpha_{1xx}&0&0\\  
0&\alpha_{1yy}&0\\  
0&0&\alpha_{1zz}  
\end{bmatrix}  
$$

is the isotropic polarizability tensor of the $i$-th dipole.

The polarizability of the dipole is generally known (generally assumed to follow Clausius-Mossotti relation), but we do not know the local electric field at the dipole $i$, because there are complex contributions from other dipoles (like dipole $2$).

Lets write down the local electric field at dipole $2$: there will be an incident electric field which is given by $\vec{E}_{2inc} = \vec{E}_o e^{i\vec{k}\vec{r}_2}$ and an electric field emanating from dipole $1$:

$$
\vec{E}_2 = \vec{E}_o e^{i\vec{k}\vec{r}_2} + \frac{1}{4\pi\epsilon_o}\left [ \frac{e^{ikr}}{r} k^2 \left( \left ( \vec{n}_{21} \times \vec{p}_1 \right ) \times \vec{n}_{21} \right) + e^{ikr}\left[3\vec{n}_{21}(\vec{n}_{21}\cdot \vec{p}_1)-\vec{p}_1 \right ] \left[\frac{1}{r^3}-\frac{ik}{r^2}\right]\right ]
$$

Here $r_{21} = |\vec{r}_2 - \vec{r}_1|$, $\vec{n}_{21} = \frac{\vec{r}_2 - \vec{r}_1}{r_{21}}$, and $k = |\vec{k}|$ is the wavevector of the incident wave.

For a constant $k$, at the distances near the dipole $1$, the second term dominates (near field); the first term dominates at farther distances (far field).

The above equation can be reduced to a matrix form:

$$
\tiny
\begin{bmatrix}
E_{2x}\\
E_{2y}\\
E_{2z}
\end{bmatrix}
=
\begin{bmatrix}
\alpha_{2xx}&0&0\\
0&\alpha_{2yy}&0\\
0&0&\alpha_{2zz}
\end{bmatrix} ^{-1}
\begin{bmatrix}
P_{2x}\\
P_{2y}\\
P_{2z}
\end{bmatrix}
=
\begin{bmatrix}
E_{2x_{inc}}\\
E_{2y_{inc}}\\
E_{2z_{inc}}
\end{bmatrix}
+
\begin{bmatrix}
A_{12}(n_{21y}^2 +n_{21z}^2) +B_{12}(3n_{21x}^2-1) & n_{21z} n_{21y}(3B_{12}-A_{12}) & n_{21x} n_{21z}(3B_{12}-A_{12}) \\
n_{21x} n_{21y}(3B_{12}-A_{12}) & A_{12}(n_{21x}^2 +n_{21z}^2) +B_{12}(3n_{21y}^2-1) & n_{21y} n_{21z}(3B_{12}-A_{12}) \\
n_{21x} n_{21z}(3B_{12}-A_{12}) & n_{21y} n_{21z}(3B_{12}-A_{12}) & A_{12}(n_{21y}^2 +n_{21x}^2) +B_{12}(3n_{21z}^2-1)
\end{bmatrix}
\begin{bmatrix}
P_{1x}\\
P_{1y}\\
P_{1z}
\end{bmatrix}
$$

where,
$A_{12} = \frac{k^2}{4\pi\epsilon_o}\frac{e^{ikr_{21}}}{r_{21}}$ and $B_{12} = \left[\frac{1}{r_{21}^3}-\frac{ik}{r_{21}^2}\right]\frac{e^{ikr_{21}}}{4\pi\epsilon_o}$

Similarly, we write the electric field near dipole 1 as:

$$
\tiny
\begin{bmatrix}
E_{1x}\\
E_{1y}\\
E_{1z}
\end{bmatrix}
=
\begin{bmatrix}
\alpha_{1xx}&0&0\\
0&\alpha_{1yy}&0\\
0&0&\alpha_{1zz}
\end{bmatrix} ^{-1}
\begin{bmatrix}
P_{1x}\\
P_{1y}\\
P_{1z}
\end{bmatrix}
=
\begin{bmatrix}
E_{1x_{inc}}\\
E_{1y_{inc}}\\
E_{1z_{inc}}
\end{bmatrix}
+
\begin{bmatrix}
A_{21}(n_{12y}^2 +n_{12z}^2) +B_{21}(3n_{12x}^2-1) & n_{12z} n_{12y}(3B_{21}-A_{21}) & n_{12x} n_{12z}(3B_{21}-A_{21}) \\
n_{12x} n_{12y}(3B_{21}-A_{21}) & A_{21}(n_{12x}^2 +n_{12z}^2) +B_{21}(3n_{12y}^2-1) & n_{12y} n_{12z}(3B_{21}-A_{21}) \\
n_{12x} n_{12z}(3B_{21}-A_{21})& n_{12y} n_{12z}(3B_{21}-A_{21}) & A_{21}(n_{12y}^2 +n_{12x}^2) +B_{21}(3n_{12z}^2-1)
\end{bmatrix}
\begin{bmatrix}
P_{2x}\\
P_{2y}\\
P_{2z}
\end{bmatrix}
$$

These two equations can be combined in the form of $AP = E$ matrix equation:

$$
\begin{bmatrix}
\alpha_1^{-1} & \mathbf{M}_{12} \\
\mathbf{M}_{21} & \alpha_2^{-1}
\end{bmatrix}
\begin{bmatrix}
\vec{P}_{1}\\
\vec{P}_{2}
\end{bmatrix}
=
\begin{bmatrix}
E_{1inc}\\
E_{2inc}
\end{bmatrix}
$$

We calculate $A$ from positions and polarizability, and $E$ from the incident fields. We solve for $P$ using numerical iterative methods. For solving $AP=E$, I use Scipy's [BiConjugate Gradient Stabilized method](http://docs.scipy.org/doc/scipy/reference/generated/scipy.sparse.linalg.bicgstab.html).

### [See source code at GitHub here](https://github.com/plasmon360/CDA_PYTHON)

<script>
window.MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    displayMath: [['$$', '$$']],
    processEscapes: true
  },
  options: {
    processHtmlClass: 'arithmatex'
  }
};
</script>
<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js" async></script>