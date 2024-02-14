# Variation of Parameter

## [[Inhomogeneous Linear Differential Equation]]

- Let $\mathbf{y}_{c,i}$ be the complementary functions.
- Since the complementary functions are linearly independent, $\det\mathbf{W}\ne0$.
- (Optional) Rearrange into canonical forms: $L[y]=\sum\limits_{i=0}^{n}a_{i}y^{(i)}$ where $a_{n}=1$.
- Assume, $y_{p}=\sum\limits_{i=1}^{n}c_{i}y_{c,i}$ and $\sum\limits_{i=1}^{n}c_{i}^{\prime}y_{c,i}^{(j)}=0$ for $j=0,\dots,n-2$.
- Therefore, $y_{p}^{(j)}=\sum\limits_{i=1}^{n}c_{i}y_{c,i}^{(j)}$ and $y_{p}^{(n)}=\sum\limits_{i=1}^{n}c_{i}y_{c,i}^{(n)}+\sum\limits_{i=1}^{n}c_{i}^{\prime}y_{c,i}^{(n-1)}$.
- Hence, $0=\sum\limits_{i=1}^{n}c_{i}^{\prime}y_{c,i}^{(j)}$ for $j=0,\dots,n-2$ and $L[y]=a_{n}\sum\limits_{i=1}^{n}c_{i}^{\prime}y_{c,i}^{(n-1)}$  
  (factor out $c_{i}$ and satisfy $L[y_{c,i}]=0$)
- Hence, $\mathbf{W}\mathbf{c}^{\prime}=\begin{bmatrix}0,&\dots&0,&\frac{L[y]}{a_{n}};\end{bmatrix}$.
- Solve for $c_{i}^{\prime}$ using Cramer's rule: $c_{i}^{\prime}=\frac{W_{i}}{W}$  
  (where $W$ is the [[Wronskian]] and $W_{i}$ replace $(y_{i},\dots,y_{i}^{(n-1)})$ with $(0,\dots,0,\frac{L[y]}{a_{n}})$)
- Solve for $c_{i}=\int c_{i}^{\prime}(t)dt$ and $y_{p}=\sum\limits_{i=1}^{n}c_{i}y_{c,i}$  
  (constant of integration for $c_{i}$ is equivalent to complementary function in general solution)

$$
\begin{align*}
y&=c_{i}y_{c,i}\newline
0&=c_{i}^{\prime}y_{c,i}^{(j)}\newline
\mathbf{y}^{(j)}&=\left(\mathbf{y}^{(j-1)}\right)^{\prime}\newline
&=\left(c_{i}y_{c,i}^{(j-1)}\right)^{\prime}\newline
&=c_{i}y_{c,i}^{(j)}+c_{i}^{\prime}y_{c,i}^{(j-1)}\newline
\mathbf{y}^{(j)}&=c_{i}y_{c,i}^{(j)}\newline
\mathbf{y}^{(n)}&=c_{i}y_{c,i}^{(n)}+c_{i}^{\prime}y_{c,i}^{(n-1)}\newline
L[y]&=a_{j}y^{(j)}\newline
&=a_{j}c_{i}y_{c,i}^{(j)}+a_{n}c_{i}^{\prime}y_{c,i}^{(n-1)}\newline
&=c_{i}L[y_{c,i}]+a_{n}c_{i}^{\prime}y_{c,i}^{(n-1)}\newline
\frac{L[y]}{a_{n}}&=c_{i}^{\prime}y_{c,i}^{(n-1)}\newline
0&=c_{i}^{\prime}y_{c,i}^{(j)}\newline
\begin{bmatrix}0,&\dots&0,&\frac{L[y]}{a_{n}};\end{bmatrix}&=\mathbf{W}\mathbf{c}^{\prime}
\end{align*}
$$

## [[System of Inhomogeneous Linear Differential Equations]]

(First-order)

- For the complementary functions $\mathbf{y}_{c,i}$, let $\mathbf{\Phi}=\begin{bmatrix}\mathbf{y}_{c,1},&\dots&\mathbf{y}_{c,n};\end{bmatrix}$.
- Since the complementary functions are linearly independent, $W=\det\Phi\ne0$.
- (Optional) Rearrange into canonical forms: $\mathbf{y}^{\prime}=\mathbf{A}\mathbf{y}+\mathbf{b}$.
- Assume, $\mathbf{y}_{p}=\sum\limits_{i=1}^{n}c_{i}\mathbf{y}_{c,i}=\mathbf{\Phi}\mathbf{c}$.
- Therefore, $\mathbf{y}_{p}^{\prime}=\mathbf{\Phi}^{\prime}\mathbf{c}+\mathbf{\Phi}\mathbf{c}^{\prime}$.
- Hence, $\mathbf{\Phi}\mathbf{c}^{\prime}=\mathbf{b}$.
- Solve for $\mathbf{c}^{\prime}$: $\mathbf{c}^{\prime}=\mathbf{\Phi}^{-1}\mathbf{b}$ (may use Cramer's rule).
- Solve for $\mathbf{c}=\int \mathbf{c}^{\prime}(t)dt$ and $\mathbf{y}_{p}=\sum\limits_{i=1}^{n}c_{i}\mathbf{y}_{c,i}$  
  (constant of integration for $c_{i}$ is equivalent to complementary function in general solution)

$$
\begin{align*}
\mathbf{y}&=\mathbf{\Phi}\mathbf{c}\newline
\mathbf{y}^{\prime}&=\mathbf{\Phi}^{\prime}\mathbf{c}+\mathbf{\Phi}\mathbf{c}^{\prime}\newline
\mathbf{y}^{\prime}&=\mathbf{A}\mathbf{y}+\mathbf{b}\newline
\mathbf{\Phi}^{\prime}\mathbf{c}+\mathbf{\Phi}\mathbf{c}^{\prime}&=\mathbf{A}\mathbf{\Phi}\mathbf{c}+\mathbf{b}\newline
\left(\mathbf{\Phi}^{\prime}-\mathbf{A}\mathbf{\Phi}\right)\mathbf{c}+\mathbf{\Phi}\mathbf{c}^{\prime}&=\mathbf{b}\newline
\mathbf{\Phi}\mathbf{c}^{\prime}&=\mathbf{b}
\end{align*}
$$

## Related Topics

- [[Linear Differential Equation]]
- [[System of Linear Differential Equations]]

## Reference

- [[04 - Differential Equation]]
- [Variation of parameters - Wikipedia](https://en.wikipedia.org/wiki/Variation_of_parameters)
