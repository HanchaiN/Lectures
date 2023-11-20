# Differential Equation

Functional Equation with differential

## Classification

* [Ordinary Differential Equation](Ordinary%20Differential%20Equation.md)
  * [Linear Differential Equation](Linear%20Differential%20Equation.md)
    * [Homogeneous Linear Differential Equation](Homogeneous%20Linear%20Differential%20Equation.md)
    * [Non-homogeneous Linear Differential Equation](Non-homogeneous%20Linear%20Differential%20Equation.md)
* [Partial Differential Equation](Partial%20Differential%20Equation.md)

## Properties

* Autonomous Differential Equation: No explicit dependent of independent variable: $F(y,y^\prime,\dots,y^{(n)})=0$ (For ODE, may include $\frac{\partial}{\partial x\_{i}} y$ for PDE)
* Homogeneity: Homogenous function of derivatives and independent variables
  * $\exists k\_{i},l;\forall\lambda$ If $(x\_{i}, y)$ is a solution, $(\lambda^{k\_{i}} x\_{i}, \lambda^{l} y)$ is also a solution.
    * Since $\bar{y}=\lambda^{l} y(\lambda^{-k}t)$, then $\bar{y}^{(n)}=\lambda^{l-nk} y^{(n)}$.
  * $k=0$ and (WLOG) $l=1$: Homogeneity by function  
    (as in [Homogeneous LDE](Homogeneous%20Linear%20Differential%20Equation.md), provably equivalent to $L\[y\]=0$)
  * $k=l$ and (WLOG) $l=1$: Uniformly homogenous  
    (as in Homogenous First-order [ODE](Ordinary%20Differential%20Equation.md): $M(x,y)dx=N(x,y)dy$)
    * $\overset{\lambda=\frac{1}{x},y=ux}{\implies} u^{\prime}x+u=y^{\prime}=\frac{M(x,y)}{N(x,y)}=\frac{\lambda^{\alpha}M(\lambda x,\lambda y)}{\lambda^{\alpha}N(\lambda x,\lambda y)}=\frac{M(1,u)}{N(1,u)}=f(u)$
* Order: highest order of differentiation in canonical forms (no integral terms, use FTC-I)
* Degree: the maximum degree (sum / max of exponents) of the highest order term

## Solution

* Define on some open interval
* Differentiable up to the equation's order
* Satisfy the DE
* Initial value problem: DE w/ initial conditions: exact value of $y(t\_{0}),y^{\prime}(t\_{0}),\dots,y^{(n)}(t\_{0})$
  * General solution will have arbitrary constants (related to constant of integration)
  * Exact solution (w/ initial value): solved for the constants using initial conditions
* Explicit solution: have the forms of $y(t)$
  * General solution can be explicit

## Reference

* [04 - Differential Equation](../../../../00%20-%20Summary/SCMA104%20-%20System%20of%20Ordinary%20Differential%20Equations%20and%20Applications%20in%20Medical%20Science/04%20-%20Differential%20Equation.md)
* [Differential equation - Wikipedia](https://en.wikipedia.org/wiki/Differential_equation)
* [A Practical Course in Differential Equations and Mathematical Modelling](https://doi.org/10.1142/7573)
