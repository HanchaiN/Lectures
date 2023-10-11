---
share: true
---

# Ordinary Differential Equation

- Differential Equation: Functional Equation with differential
	- Ordinary Differential Equation: Single independent variable (with $u^\prime=\frac{d}{d t}u$)
		- Linear Differential Equation: $\sum\limits_{i=0}^{n}a_{n}(t)y^{(i)}(t)=g(t)$
			- Homogenous Differential Equation: $g(t)=0$
	- Partial Differential Equation: Multiple independent variables (with $u_x=\frac{\partial}{\partial x}u$, assume that other independent variables are independent/constants relative to $x$)
- Order: highest order of differentiation in canonical forms (no integral terms, use FTC-I)
- Solution
	- Define on some open interval.
	- Differentiable up to the equation’s order.
	- Satisfy the DE ($F(t,y,y^{\prime},\dots,y^{(n)})=0$ for ODE).
	- Initial value problem: w/ initial condition: exact value of $y(t_{0}),y^{\prime}(t_{0}),\dots,y^{(n)}(t_{0})$
		- General solution will have variable constant (related to constant of integration)
		- Exact solution (w/ initial value): solved for the constants
	- Explicit solution: have the forms of $y(t)$
- Separable Differential Equation
	- (First-order ODE): $P(y)dy=Q(t)dt$ → $\int P(y)dy = \int Q(t)dt$
		- Note: $P$ and/or $Q$ may be constants, multiplicative inverse, or quotients
