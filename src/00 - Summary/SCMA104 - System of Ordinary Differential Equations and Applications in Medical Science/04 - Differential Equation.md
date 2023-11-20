# Ordinary Differential Equation

* [Differential Equation](../../01%20-%20Concept/Mathematics/Calculus/Differential%20Equation/Differential%20Equation.md)
  * [Ordinary Differential Equation](../../01%20-%20Concept/Mathematics/Calculus/Differential%20Equation/Ordinary%20Differential%20Equation/Ordinary%20Differential%20Equation.md)
    * Linear Differential Equation: $L\[y\]=\sum\limits\_{i=0}^{n}a\_{i}(t)y^{(i)}(t)=g(t)$  
      ($L$ is an $n$-th order linear differential operator)
      * Homogeneous Linear Differential Equation: $L\[y\]=g(t)=0$
  * Partial Differential Equation: Multiple independent variables (with $u_x=\frac{\partial}{\partial x}u$, assume that other independent variables are independent/constants relative to $x$)
* Solution
  * Define on some open interval
  * Differentiable up to the equation's order
  * Satisfy the DE ($F(t,y,y^{\prime},\dots,y^{(n)})=0$ for ODE)
  * Initial value problem: DE w/ initial conditions: exact value of $y(t\_{0}),y^{\prime}(t\_{0}),\dots,y^{(n)}(t\_{0})$
    * General solution will have arbitrary constants (related to constant of integration)
    * Exact solution (w/ initial value): solved for the constants using initial conditions
  * Explicit solution: have the forms of $y(t)$
    * General solution can be explicit
  * Superposition principle
    * (Linear superposition) If $y_1$ and $y_2$ are solutions of the Homogeneous LDE, their linear combination (i.e. $c\_{1}y\_{1}+c\_{2}y\_{2}$) are also solutions of the same DE.
* [Wronskian](../../01%20-%20Concept/Mathematics/Calculus/Differential%20Equation/Ordinary%20Differential%20Equation/Wronskian.md)
* [Abel's identity](../../01%20-%20Concept/Mathematics/Calculus/Differential%20Equation/Ordinary%20Differential%20Equation/Abel's%20Identity.md)
* Solving Techniques
  * Separation of Variable
    * (First-order ODE): $P(y)dy=Q(t)dt$ → $\int P(y)dy = \int Q(t)dt$
      * Note: $P$ and/or $Q$ may be constants, multiplicative inverse, or quotients
  * Integrating Factor
    * Multiply both side by some factor to make it easier to integrate
    * $y^{\prime}+p(t)y=g(t)$ (First-order LDE): $\mu(t)=e^{\int p(t) dt}$  
      $(y\cdot\mu)^{\prime}=y^{\prime}\cdot\mu+y\cdot\mu^{\prime}=y^{\prime}\cdot\mu+y\cdot\mu\cdot p=(y^{\prime}+p\cdot y)\cdot \mu=(g\cdot\mu)$
  * Homogenous First-order ODE ($M(x,y)dx=N(x,y)dy$ where $M$ and $N$ are homogenous function with equal degree $\alpha$)
    * $\overset{\lambda=\frac{1}{x},y=ux}{\implies} u^{\prime}x+u=y^{\prime}=\frac{M(x,y)}{N(x,y)}=\frac{\lambda^{\alpha}M(\lambda x,\lambda y)}{\lambda^{\alpha}N(\lambda x,\lambda y)}=\frac{M(1,u)}{N(1,u)}=f(u)$
  * Second-order homogeneous LDE w/ (real) const. coefficient ($a y^{\prime\prime}+b y^{\prime}+c y = 0$)
    * Solve characteristic equation: $ar^{2}+br+c=0$
    * If $r\_{1}\ne r\_{2}$, $y=c\_{1}e^{r\_{1}t}+c\_{2}e^{r\_{2}t}$
      * If $r\_{1}\ne r\_{2}=\lambda\pm\mu i\in\mathbb{C}$, $y=e^{\lambda t}\left(A\sin(\mu t + \phi)\right)$
    * If $r_1=r_2$, $y=c\_{1}e^{rt}+c\_{2}te^{rt}$
  * $n$th-order homogeneous LDE w/ const. coefficient ($\sum\limits\_{i=0}^{n} a\_{i}y^{(i)} = 0$)
    * Solve characteristic equation: $\sum\limits\_{i=0}^{n} a\_{i}r^{i} = 0$  
      (Assume that the solution is in the forms of $e^{rt}$ so that it can cancel its derivatives out.)
    * For each simple root $r$, the associated bases solution is $e^{rt}$.
    * For each multiple root $r$ (with multiplicity $k$), the associated bases solution are $t^{i}e^{rt}$ for $i=0,\dots,k-1$. (by Reduction of Order)
    * The general solution are the linear combinations of the bases.
  * Non-homogeneous LDE $L\[y\] = g(t)$
    * The general solution is $y\_{c}+y\_{p}$ where
      * Complementary function ($y\_{c}$) is the solutions of $L\[y\] = 0$.
      * Particular integral ($y\_{p}$) is a solution of the LDE.
  * Variation of Parameter (finding particular integral for non-homogeneous LDE)
    * (Optional) Rearrange into canonical forms: $L\[y\]=\sum\limits\_{i=0}^{n}a\_{i}y^{(i)}$ where $a\_{n}=1$
    * Assume $y\_{p}=\sum\limits\_{i=1}^{n}c\_{i}y\_{c,i}$ and $\sum\limits\_{i=1}^{n}c\_{i}^{\prime}y\_{c,i}^{(j)}=0$ for $j=0,\dots,n-2$
    * Therefore $y\_{p}^{(j)}=\sum\limits\_{i=1}^{n}c\_{i}y\_{c,i}^{(j)}$ and $y\_{p}^{(n)}=\sum\limits\_{i=1}^{n}c\_{i}y\_{c,i}^{(n)}+\sum\limits\_{i=1}^{n}c\_{i}^{\prime}y\_{c,i}^{(n-1)}$
    * Hence $0=\sum\limits\_{i=1}^{n}c\_{i}^{\prime}y\_{c,i}^{(j)}$ for $j=0,\dots,n-2$ and $L\[y\]=a\_{n}\sum\limits\_{i=1}^{n}c\_{i}^{\prime}y\_{c,i}^{(n-1)}$  
      (factor out $c\_{i}$ and satisfy $L\[y\_{c,i}\]=0$)
    * Solve for $c\_{i}^{\prime}$ using Cramer's rule: $c\_{i}^{\prime}=\frac{W\_{i}}{W}$  
      ($W\_{i}$ replace $(y\_{i},\dots,y\_{i}^{(n-1)})$ with $(0,\dots,0,\frac{L\[y\]}{a\_{n}})$)
    * Solve for $c\_{i}=\int c\_{i}^{\prime}(t)dt$ and $y\_{p}=\sum\limits\_{i=1}^{n}c\_{i}y\_{c,i}$  
      (constant of integration for $c\_{i}$ is equivalent to complementary function in general solution)

## Reference

* Handout SCMA104
* [A Practical Course in Differential Equations and Mathematical Modelling](https://doi.org/10.1142/7573)
