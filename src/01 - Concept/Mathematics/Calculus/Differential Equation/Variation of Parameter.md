# Variation of Parameter

## [Inhomogeneous Linear Differential Equation](Inhomogeneous%20Linear%20Differential%20Equation.md)

* Let $\mathbf{y}\_{c,i}$ be the complementary functions.
* Since the complementary functions are linearly independent, $\det\mathbf{W}\ne0$.
* (Optional) Rearrange into canonical forms: $L\[y\]=\sum\limits\_{i=0}^{n}a\_{i}y^{(i)}$ where $a\_{n}=1$.
* Assume, $y\_{p}=\sum\limits\_{i=1}^{n}c\_{i}y\_{c,i}$ and $\sum\limits\_{i=1}^{n}c\_{i}^{\prime}y\_{c,i}^{(j)}=0$ for $j=0,\dots,n-2$.
* Therefore, $y\_{p}^{(j)}=\sum\limits\_{i=1}^{n}c\_{i}y\_{c,i}^{(j)}$ and $y\_{p}^{(n)}=\sum\limits\_{i=1}^{n}c\_{i}y\_{c,i}^{(n)}+\sum\limits\_{i=1}^{n}c\_{i}^{\prime}y\_{c,i}^{(n-1)}$.
* Hence, $0=\sum\limits\_{i=1}^{n}c\_{i}^{\prime}y\_{c,i}^{(j)}$ for $j=0,\dots,n-2$ and $L\[y\]=a\_{n}\sum\limits\_{i=1}^{n}c\_{i}^{\prime}y\_{c,i}^{(n-1)}$  
  (factor out $c\_{i}$ and satisfy $L\[y\_{c,i}\]=0$)
* Hence, $\mathbf{W}\mathbf{c}^{\prime}=\begin{bmatrix}0,&\dots&0,&\frac{L\[y\]}{a\_{n}};\end{bmatrix}$.
* Solve for $c\_{i}^{\prime}$ using Cramer's rule: $c\_{i}^{\prime}=\frac{W\_{i}}{W}$  
  (where $W$ is the [Wronskian](Wronskian.md) and $W\_{i}$ replace $(y\_{i},\dots,y\_{i}^{(n-1)})$ with $(0,\dots,0,\frac{L\[y\]}{a\_{n}})$)
* Solve for $c\_{i}=\int c\_{i}^{\prime}(t)dt$ and $y\_{p}=\sum\limits\_{i=1}^{n}c\_{i}y\_{c,i}$  
  (constant of integration for $c\_{i}$ is equivalent to complementary function in general solution)

$$
\\begin{align\*}
y&=c\_{i}y\_{c,i}\newline
0&=c\_{i}^{\prime}y\_{c,i}^{(j)}\newline
\\mathbf{y}^{(j)}&=\left(\mathbf{y}^{(j-1)}\right)^{\prime}\newline
&=\left(c\_{i}y\_{c,i}^{(j-1)}\right)^{\prime}\newline
&=c\_{i}y\_{c,i}^{(j)}+c\_{i}^{\prime}y\_{c,i}^{(j-1)}\newline
\\mathbf{y}^{(j)}&=c\_{i}y\_{c,i}^{(j)}\newline
\\mathbf{y}^{(n)}&=c\_{i}y\_{c,i}^{(n)}+c\_{i}^{\prime}y\_{c,i}^{(n-1)}\newline
L\[y\]&=a\_{j}y^{(j)}\newline
&=a\_{j}c\_{i}y\_{c,i}^{(j)}+a\_{n}c\_{i}^{\prime}y\_{c,i}^{(n-1)}\newline
&=c\_{i}L\[y\_{c,i}\]+a\_{n}c\_{i}^{\prime}y\_{c,i}^{(n-1)}\newline
\\frac{L\[y\]}{a\_{n}}&=c\_{i}^{\prime}y\_{c,i}^{(n-1)}\newline
0&=c\_{i}^{\prime}y\_{c,i}^{(j)}\newline
\\begin{bmatrix}0,&\dots&0,&\frac{L\[y\]}{a\_{n}};\end{bmatrix}&=\mathbf{W}\mathbf{c}^{\prime}
\\end{align\*}
$$

## [System of Inhomogeneous Linear Differential Equations](System%20of%20Differential%20Equation/System%20of%20Inhomogeneous%20Linear%20Differential%20Equations.md)

(First-order)

* For the complementary functions $\mathbf{y}*{c,i}$, let $\mathbf{\Phi}=\begin{bmatrix}\mathbf{y}*{c,1},&\dots&\mathbf{y}\_{c,n};\end{bmatrix}$.
* Since the complementary functions are linearly independent, $W=\det\Phi\ne0$.
* (Optional) Rearrange into canonical forms: $\mathbf{y}^{\prime}=\mathbf{A}\mathbf{y}+\mathbf{b}$.
* Assume, $\mathbf{y}*{p}=\sum\limits*{i=1}^{n}c\_{i}\mathbf{y}\_{c,i}=\mathbf{\Phi}\mathbf{c}$.
* Therefore, $\mathbf{y}\_{p}^{\prime}=\mathbf{\Phi}^{\prime}\mathbf{c}+\mathbf{\Phi}\mathbf{c}^{\prime}$.
* Hence, $\mathbf{\Phi}\mathbf{c}^{\prime}=\mathbf{b}$.
* Solve for $\mathbf{c}^{\prime}$: $\mathbf{c}^{\prime}=\mathbf{\Phi}^{-1}\mathbf{b}$ (may use Cramer's rule).
* Solve for $\mathbf{c}=\int \mathbf{c}^{\prime}(t)dt$ and $\mathbf{y}*{p}=\sum\limits*{i=1}^{n}c\_{i}\mathbf{y}*{c,i}$  
  (constant of integration for $c*{i}$ is equivalent to complementary function in general solution)

$$
\\begin{align\*}
\\mathbf{y}&=\mathbf{\Phi}\mathbf{c}\newline
\\mathbf{y}^{\prime}&=\mathbf{\Phi}^{\prime}\mathbf{c}+\mathbf{\Phi}\mathbf{c}^{\prime}\newline
\\mathbf{y}^{\prime}&=\mathbf{A}\mathbf{y}+\mathbf{b}\newline
\\mathbf{\Phi}^{\prime}\mathbf{c}+\mathbf{\Phi}\mathbf{c}^{\prime}&=\mathbf{A}\mathbf{\Phi}\mathbf{c}+\mathbf{b}\newline
\\left(\mathbf{\Phi}^{\prime}-\mathbf{A}\mathbf{\Phi}\right)\mathbf{c}+\mathbf{\Phi}\mathbf{c}^{\prime}&=\mathbf{b}\newline
\\mathbf{\Phi}\mathbf{c}^{\prime}&=\mathbf{b}
\\end{align\*}
$$

## Related Topics

* [Linear Differential Equation](Linear%20Differential%20Equation.md)
* [System of Linear Differential Equations](System%20of%20Differential%20Equation/System%20of%20Linear%20Differential%20Equations.md)

## Reference

* [04 - Differential Equation](../../../../00%20-%20Summary/SCMA104%20-%20System%20of%20Ordinary%20Differential%20Equations%20and%20Applications%20in%20Medical%20Science/04%20-%20Differential%20Equation.md)
* [Variation of parameters - Wikipedia](https://en.wikipedia.org/wiki/Variation_of_parameters)
