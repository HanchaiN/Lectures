# Differential Equation

Functional Equation with differential

## Classification

- [[Ordinary Differential Equation]]
	- [[Linear Differential Equation]]
		- [[Homogeneous Linear Differential Equation]]
		- [[Inhomogeneous Linear Differential Equation]]
- [[Partial Differential Equation]]

## Properties

- Autonomous Differential Equation: No explicit dependent of independent variable: $F(y,y^\prime,\dots,y^{(n)})=0$ (For ODE, may include $\frac{\partial}{\partial x_{i}} y$ for PDE)
- Homogeneity: Homogenous function of derivatives and independent variables
	- $\exists k_{i},l\;\forall\lambda$ If $(x_{i}, y)$ is a solution, $(\lambda^{k_{i}} x_{i}, \lambda^{l} y)$ is also a solution.
		- Since $\bar{y}=\lambda^{l} y(\lambda^{-k}t)$, then $\bar{y}^{(n)}=\lambda^{l-nk} y^{(n)}$.
	- $k=0$ and (WLOG) $l=1$: Homogeneity by function  
	  (as in [[Homogeneous Linear Differential Equation|Homogeneous LDE]], provably equivalent to $L[y]=0$)
	- $k=l$ and (WLOG) $l=1$: Uniformly homogenous  
	  (as in Homogenous First-order [[Ordinary Differential Equation|ODE]]: $M(x,y)dx=N(x,y)dy$)
		- $\overset{\lambda=\frac{1}{x},y=ux}{\implies} u^{\prime}x+u=y^{\prime}=\frac{M(x,y)}{N(x,y)}=\frac{\lambda^{\alpha}M(\lambda x,\lambda y)}{\lambda^{\alpha}N(\lambda x,\lambda y)}=\frac{M(1,u)}{N(1,u)}=f(u)$
- Order: highest order of differentiation in canonical forms (no integral terms, use FTC-I)
- Degree: the maximum degree (sum / max of exponents) of the highest order term

## Solution

- Define on some open interval
- Differentiable up to the equation's order
- Satisfy the DE
- Initial value problem: DE w/ initial conditions: exact value of $y(t_{0}),y^{\prime}(t_{0}),\dots,y^{(n)}(t_{0})$
	- General solution will have arbitrary constants (related to constant of integration)
	- Exact solution (w/ initial value): solved for the constants using initial conditions
- Explicit solution: have the forms of $y(t)$
	- General solution can be explicit

## Reference

- [[04 - Differential Equation]]
- [Differential equation - Wikipedia](https://en.wikipedia.org/wiki/Differential_equation)
- [A Practical Course in Differential Equations and Mathematical Modelling](https://doi.org/10.1142/7573)
