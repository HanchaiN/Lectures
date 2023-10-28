# Ordinary Differential Equation

* Differential Equation: Functional Equation with differential
  * Ordinary Differential Equation: Single independent variable (with $u^\prime=\frac{d}{d t}u$)
    * Linear Differential Equation: $\sum\limits\_{i=0}^{n}a\_{n}(t)y^{(i)}(t)=g(t)$
      * Homogeneous Differential Equation: $g(t)=0$
  * Partial Differential Equation: Multiple independent variables (with $u_x=\frac{\partial}{\partial x}u$, assume that other independent variables are independent/constants relative to $x$)
  * Autonomous Differential Equation: No explicit dependent of independent variable $F(y,y^\prime,\dots,y^{(n)})=0$ (For ODE, may include $\frac{\partial}{\partial x\_{i}} y$ for PDE)
* Order: highest order of differentiation in canonical forms (no integral terms, use FTC-I)
* Solution
  * Define on some open interval.
  * Differentiable up to the equation's order.
  * Satisfy the DE ($F(t,y,y^{\prime},\dots,y^{(n)})=0$ for ODE).
  * Initial value problem: DE w/ initial conditions: exact value of $y(t\_{0}),y^{\prime}(t\_{0}),\dots,y^{(n)}(t\_{0})$
    * General solution will have arbitrary constants (related to constant of integration)
    * Exact solution (w/ initial value): solved for the constants using initial conditions
  * Explicit solution: have the forms of $y(t)$
  * Superposition principle
    * If $y_1$ and $y_2$ are solutions of the Homogeneous DE, their linear combination (i.e. $c\_{1}y\_{1}+c\_{2}y\_{2}$) are also solutions of the same DE.
* Wronskian ($W(f,g)=f\cdot g^{\prime}-g\cdot f^{\prime}$)
  * Generally, $W(f\_{1},\dots,f\_{n})=\det\begin{bmatrix}f\_{1}&f\_{2}&\dots&f\_{n}\\ f\_{1}^{\prime}&f\_{2}^{\prime}&\dots&f\_{n}^{\prime}\\ \vdots&\vdots&\ddots&\vdots \\ f\_{1}^{(n-1)}&f\_{2}^{(n-1)}&\dots&f\_{n}^{(n-1)}\end{bmatrix}$
  * If the Wronskian is non-zero, the solutions $f\_{i}$ are linearly-independent. (If the Wronskian is zero, it is inconclusive.)
    * For $n$-th order LDE, the $n$ independent solutions are the bases that span through all general solutions.
    * The last solution can be find by solving for the Wronskian first.
* Abel's identity
  * For Second-order homogeneous DE ($y^{\prime\prime}+p y^{\prime}+q y = 0$), the Wronskian $W=c\cdot e^{-\int p(t)dt}$ (on an interval where $p$ and $q$ is continuous.
* Solving Techniques
  * Separation of Variable
    * (First-order ODE): $P(y)dy=Q(t)dt$ → $\int P(y)dy = \int Q(t)dt$
      * Note: $P$ and/or $Q$ may be constants, multiplicative inverse, or quotients
  * Integrating Factor
    * Multiply both side by some factor to make it easier to integrate
    * $y^{\prime}+p(t)y=g(t)$ (First-order LDE): $\mu(t)=e^{\int p(t) dt}$  
      $(y\cdot\mu)^{\prime}=y^{\prime}\cdot\mu+y\cdot\mu^{\prime}=y^{\prime}\cdot\mu+y\cdot\mu\cdot p=(y^{\prime}+p\cdot y)\cdot \mu=(g\cdot\mu)$
  * Second-order homogeneous DE w/ (real) const. coefficient ($a y^{\prime\prime}+b y^{\prime}+c y = 0$)
    * Solve characteristic equation: $ar^{2}+br+c=0$
    * If $r\_{1}\ne r\_{2}$, $y=c\_{1}e^{r\_{1}t}+c\_{2}e^{r\_{2}t}$
      * If $r\_{1}\ne r\_{2}=\lambda\pm\mu i\in\mathbb{C}$, $y=e^{\lambda t}\left(A\sin(\mu t + \phi)\right)$
    * If $r_1=r_2$, $y=c\_{1}e^{rt}+c\_{2}te^{rt}$
  * $n$th-order homogeneous DE w/ const. coefficient ($\sum\limits\_{i=0}^{n} a\_{i}y^{(i)} = 0$)
    * Solve characteristic equation: $\sum\limits\_{i=0}^{n} a\_{i}r^{i} = 0$  
      (Assume that the solution is in the forms of $e^{rt}$ so that it can cancel its derivatives out.)
    * For each simple root $r$, the associated bases solution is $e^{rt}$.
    * For each multiple root $r$ (with multiplicity $k$), the associated bases solution are $t^{i}e^{rt}$ for $i=0,\dots,k-1$. (Reduction of Order)
    * The general solution are the linear combinations of the bases.
  * Non-homogeneous LDE w/ const. coefficient ($\sum\limits\_{i=0}^{n} a\_{i}y^{(i)} = g(t)$)
    * The general solution is $y_c+y_p$ where
      * Complementary function ($y_c$) is the solution of the homogeneous DE ($\sum\limits\_{i=0}^{n} a\_{i}y^{(i)} = 0$).
      * Particular integral ($y_p$) differs for each LDE.

## Reference

* Handout SCMA104
