---
share: true
aliases:
  - Differential Equation
---

# Ordinary Differential Equation

- [[Differential Equation]]
	- [[Ordinary Differential Equation]]
		- Linear Differential Equation: $L[y]=\sum\limits_{i=0}^{n}a_{i}(t)y^{(i)}(t)=g(t)$  
		  ($L$ is an $n$-th order linear differential operator)
			- Homogeneous Linear Differential Equation: $L[y]=g(t)=0$
	- Partial Differential Equation: Multiple independent variables (with $u_x=\frac{\partial}{\partial x}u$, assume that other independent variables are independent/constants relative to $x$)
- Solution
	- Define on some open interval
	- Differentiable up to the equation's order
	- Satisfy the DE ($F(t,y,y^{\prime},\dots,y^{(n)})=0$ for ODE)
	- Initial value problem: DE w/ initial conditions: exact value of $y(t_{0}),y^{\prime}(t_{0}),\dots,y^{(n)}(t_{0})$
		- General solution will have arbitrary constants (related to constant of integration)
		- Exact solution (w/ initial value): solved for the constants using initial conditions
	- Explicit solution: have the forms of $y(t)$
		- General solution can be explicit
	- Superposition principle
		- (Linear superposition) If $y_1$ and $y_2$ are solutions of the Homogeneous LDE, their linear combination (i.e. $c_{1}y_{1}+c_{2}y_{2}$) are also solutions of the same DE.
- [[Wronskian]]
- [[Abel's identity]]
- Solving Techniques
	- Separation of Variable
		- (First-order ODE): $P(y)dy=Q(t)dt$ → $\int P(y)dy = \int Q(t)dt$
			- Note: $P$ and/or $Q$ may be constants, multiplicative inverse, or quotients
	- Integrating Factor
		- Multiply both side by some factor to make it easier to integrate
		- $y^{\prime}+p(t)y=g(t)$ (First-order LDE): $\mu(t)=e^{\int p(t) dt}$  
		  $(y\cdot\mu)^{\prime}=y^{\prime}\cdot\mu+y\cdot\mu^{\prime}=y^{\prime}\cdot\mu+y\cdot\mu\cdot p=(y^{\prime}+p\cdot y)\cdot \mu=(g\cdot\mu)$
	- Homogenous First-order ODE ($M(x,y)dx=N(x,y)dy$ where $M$ and $N$ are homogenous function with equal degree $\alpha$)
		- $\overset{\lambda=\frac{1}{x},y=ux}{\implies} u^{\prime}x+u=y^{\prime}=\frac{M(x,y)}{N(x,y)}=\frac{\lambda^{\alpha}M(\lambda x,\lambda y)}{\lambda^{\alpha}N(\lambda x,\lambda y)}=\frac{M(1,u)}{N(1,u)}=f(u)$
	- Second-order homogeneous LDE w/ (real) const. coefficient ($a y^{\prime\prime}+b y^{\prime}+c y = 0$)
		- Solve characteristic equation: $ar^{2}+br+c=0$
		- If $r_{1}\ne r_{2}$, $y=c_{1}e^{r_{1}t}+c_{2}e^{r_{2}t}$
			- If $r_{1}\ne r_{2}=\lambda\pm\mu i\in\mathbb{C}$, $y=e^{\lambda t}\left(A\sin(\mu t + \phi)\right)$
		- If $r_1=r_2$, $y=c_{1}e^{rt}+c_{2}te^{rt}$
	- $n$th-order homogeneous LDE w/ const. coefficient ($\sum\limits_{i=0}^{n} a_{i}y^{(i)} = 0$)
		- Solve characteristic equation: $\sum\limits_{i=0}^{n} a_{i}r^{i} = 0$  
		  (Assume that the solution is in the forms of $e^{rt}$ so that it can cancel its derivatives out.)
		- For each simple root $r$, the associated bases solution is $e^{rt}$.
		- For each multiple root $r$ (with multiplicity $k$), the associated bases solution are $t^{i}e^{rt}$ for $i=0,\dots,k-1$. (by Reduction of Order)
		- The general solution are the linear combinations of the bases.
	- Non-homogeneous LDE $L[y] = g(t)$
		- The general solution is $y_{c}+y_{p}$ where
			- Complementary function ($y_{c}$) is the solutions of $L[y] = 0$.
			- Particular integral ($y_{p}$) is a solution of the LDE.
	- Variation of Parameter (finding particular integral for non-homogeneous LDE)
		- (Optional) Rearrange into canonical forms: $L[y]=\sum\limits_{i=0}^{n}a_{i}y^{(i)}$ where $a_{n}=1$
		- Assume $y_{p}=\sum\limits_{i=1}^{n}c_{i}y_{c,i}$ and $\sum\limits_{i=1}^{n}c_{i}^{\prime}y_{c,i}^{(j)}=0$ for $j=0,\dots,n-2$
		- Therefore $y_{p}^{(j)}=\sum\limits_{i=1}^{n}c_{i}y_{c,i}^{(j)}$ and $y_{p}^{(n)}=\sum\limits_{i=1}^{n}c_{i}y_{c,i}^{(n)}+\sum\limits_{i=1}^{n}c_{i}^{\prime}y_{c,i}^{(n-1)}$
		- Hence $0=\sum\limits_{i=1}^{n}c_{i}^{\prime}y_{c,i}^{(j)}$ for $j=0,\dots,n-2$ and $L[y]=a_{n}\sum\limits_{i=1}^{n}c_{i}^{\prime}y_{c,i}^{(n-1)}$  
		  (factor out $c_{i}$ and satisfy $L[y_{c,i}]=0$)
		- Solve for $c_{i}^{\prime}$ using Cramer's rule: $c_{i}^{\prime}=\frac{W_{i}}{W}$  
		  ($W_{i}$ replace $(y_{i},\dots,y_{i}^{(n-1)})$ with $(0,\dots,0,\frac{L[y]}{a_{n}})$)
		- Solve for $c_{i}=\int c_{i}^{\prime}(t)dt$ and $y_{p}=\sum\limits_{i=1}^{n}c_{i}y_{c,i}$  
		  (constant of integration for $c_{i}$ is equivalent to complementary function in general solution)

## Reference

- Handout SCMA104
- [A Practical Course in Differential Equations and Mathematical Modelling](https://doi.org/10.1142/7573)
