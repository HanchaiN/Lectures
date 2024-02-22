---
aliases:
  - Differential Equation
---

# Ordinary Differential Equation

- [[Differential Equation]]
  - [[Ordinary Differential Equation]]
    - [[Linear Differential Equation]]
      - [[Homogeneous Linear Differential Equation]]
  - [[Partial Differential Equation]]
- [[Differential Equation#Solution|Solution]]
- [[Wronskian]]
- [[Abel's Identity]]
- Solving Techniques
  - Integrating Factor
    - Multiply both side by some factor to make it easier to integrate
    - $y^{\prime}+p(t)y=g(t)$ (First-order LDE): $\mu(t)=e^{\int p(t) dt}$  
          $(y\cdot\mu)^{\prime}=y^{\prime}\cdot\mu+y\cdot\mu^{\prime}=y^{\prime}\cdot\mu+y\cdot\mu\cdot p=(y^{\prime}+p\cdot y)\cdot \mu=(g\cdot\mu)$
  - Homogenous First-order ODE ($M(x,y)dx=N(x,y)dy$ where $M$ and $N$ are homogenous function with equal degree $\alpha$)
    - $\overset{\lambda=\frac{1}{x},y=ux}{\implies} u^{\prime}x+u=y^{\prime}=\frac{M(x,y)}{N(x,y)}=\frac{\lambda^{\alpha}M(\lambda x,\lambda y)}{\lambda^{\alpha}N(\lambda x,\lambda y)}=\frac{M(1,u)}{N(1,u)}=f(u)$

## Reference

- Handout SCMA104
- [Ordinary differential equation - Wikipedia](https://en.wikipedia.org/wiki/Ordinary_differential_equation#Summary_of_exact_solutions)
