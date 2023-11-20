# Non-homogeneous Linear Differential Equation

$$
L\left\[y\right\]=\sum\limits\_{i=0}^{n}a\_{i}(t)y^{(i)}(t)=g(t)\ne0
$$

* The general solution is $y\_{c}+y\_{p}$ where
  * Complementary function ($y\_{c}$) is the solutions of $L\[y\] = 0$ ([Homogeneous LDE](Homogeneous%20Linear%20Differential%20Equation.md)).
  * Particular integral ($y\_{p}$) is a solution of the equation.
* Variation of Parameter
  * (Optional) Rearrange into canonical forms: $L\[y\]=\sum\limits\_{i=0}^{n}a\_{i}y^{(i)}$ where $a\_{n}=1$
  * Assume $y\_{p}=\sum\limits\_{i=1}^{n}c\_{i}y\_{c,i}$ and $\sum\limits\_{i=1}^{n}c\_{i}^{\prime}y\_{c,i}^{(j)}=0$ for $j=0,\dots,n-2$
  * Therefore $y\_{p}^{(j)}=\sum\limits\_{i=1}^{n}c\_{i}y\_{c,i}^{(j)}$ and $y\_{p}^{(n)}=\sum\limits\_{i=1}^{n}c\_{i}y\_{c,i}^{(n)}+\sum\limits\_{i=1}^{n}c\_{i}^{\prime}y\_{c,i}^{(n-1)}$
  * Hence $0=\sum\limits\_{i=1}^{n}c\_{i}^{\prime}y\_{c,i}^{(j)}$ for $j=0,\dots,n-2$ and $L\[y\]=a\_{n}\sum\limits\_{i=1}^{n}c\_{i}^{\prime}y\_{c,i}^{(n-1)}$  
    (factor out $c\_{i}$ and satisfy $L\[y\_{c,i}\]=0$)
  * Solve for $c\_{i}^{\prime}$ using Cramer's rule: $c\_{i}^{\prime}=\frac{W\_{i}}{W}$  
    (where $W$ is the [Wronskian](Wronskian.md) and $W\_{i}$ replace $(y\_{i},\dots,y\_{i}^{(n-1)})$ with $(0,\dots,0,\frac{L\[y\]}{a\_{n}})$)
  * Solve for $c\_{i}=\int c\_{i}^{\prime}(t)dt$ and $y\_{p}=\sum\limits\_{i=1}^{n}c\_{i}y\_{c,i}$  
    (constant of integration for $c\_{i}$ is equivalent to complementary function in general solution)

## Reference

* [04 - Differential Equation](../../../../00%20-%20Summary/SCMA104%20-%20System%20of%20Ordinary%20Differential%20Equations%20and%20Applications%20in%20Medical%20Science/04%20-%20Differential%20Equation.md)
* [Variation of parameters - Wikipedia](https://en.wikipedia.org/wiki/Variation_of_parameters)
