---
share: true
aliases:
  - Non-homogeneous LDE
---

# Non-homogeneous Linear Differential Equation

$$
L\left[y\right]=\sum\limits_{i=0}^{n}a_{i}(t)y^{(i)}(t)=g(t)\ne0
$$

- The general solution is $y_{c}+y_{p}$ where
	- Complementary function ($y_{c}$) is the solutions of $L[y] = 0$ ([[Homogeneous Linear Differential Equation|Homogeneous LDE]]).
	- Particular integral ($y_{p}$) is a solution of the equation.
- Variation of Parameter
	- (Optional) Rearrange into canonical forms: $L[y]=\sum\limits_{i=0}^{n}a_{i}y^{(i)}$ where $a_{n}=1$
	- Assume $y_{p}=\sum\limits_{i=1}^{n}c_{i}y_{c,i}$ and $\sum\limits_{i=1}^{n}c_{i}^{\prime}y_{c,i}^{(j)}=0$ for $j=0,\dots,n-2$
	- Therefore $y_{p}^{(j)}=\sum\limits_{i=1}^{n}c_{i}y_{c,i}^{(j)}$ and $y_{p}^{(n)}=\sum\limits_{i=1}^{n}c_{i}y_{c,i}^{(n)}+\sum\limits_{i=1}^{n}c_{i}^{\prime}y_{c,i}^{(n-1)}$
	- Hence $0=\sum\limits_{i=1}^{n}c_{i}^{\prime}y_{c,i}^{(j)}$ for $j=0,\dots,n-2$ and $L[y]=a_{n}\sum\limits_{i=1}^{n}c_{i}^{\prime}y_{c,i}^{(n-1)}$  
	  (factor out $c_{i}$ and satisfy $L[y_{c,i}]=0$)
	- Solve for $c_{i}^{\prime}$ using Cramer's rule: $c_{i}^{\prime}=\frac{W_{i}}{W}$  
	  (where $W$ is the [[Wronskian]] and $W_{i}$ replace $(y_{i},\dots,y_{i}^{(n-1)})$ with $(0,\dots,0,\frac{L[y]}{a_{n}})$)
	- Solve for $c_{i}=\int c_{i}^{\prime}(t)dt$ and $y_{p}=\sum\limits_{i=1}^{n}c_{i}y_{c,i}$  
	  (constant of integration for $c_{i}$ is equivalent to complementary function in general solution)

## Reference

- [[04 - Differential Equation]]
- [Variation of parameters - Wikipedia](https://en.wikipedia.org/wiki/Variation_of_parameters)
