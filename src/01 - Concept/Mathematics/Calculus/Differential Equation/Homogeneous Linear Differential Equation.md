# Homogeneous Linear Differential Equation

$$
L\[y\]=\sum\limits\_{i=0}^{n}a\_{i}(t)y^{(i)}(t)=0
$$

where $L$ is a [Linear](../../Linear%20Transformation.md) differential operator

* There are $n$ linearly-independent solutions for $n$-th order [Homogeneous LDE](Homogeneous%20Linear%20Differential%20Equation.md).
  * Superposition Principle: If $y_1$ and $y_2$ are solutions of the [Homogeneous LDE](Homogeneous%20Linear%20Differential%20Equation.md), their linear combinations (i.e. $c\_{1}y\_{1}+c\_{2}y\_{2}$) are also solutions of the same DE.
  * The final solution can be solved using the [Wronskian](Wronskian.md).
* w/ const. coefficient $a\_{i}\sim\text{const.}$
  * Solve characteristic equation: $\sum\limits\_{i=0}^{n} a\_{i}r^{i} = 0$  
    (Assume that the solution is in the forms of $e^{rt}$ so that it can cancel its derivatives out.)
  * According to fundamental theorem of algebra, there will be $n$ roots.
  * For each simple root $r$, the associated bases solution is $e^{rt}$.
  * For each multiple root $r$ (with multiplicity $k$), the associated bases solution are $t^{i}e^{rt}$ for $i=0,\dots,k-1$.  
    (by Reduction of Order)
  * For second-order, $a y^{\prime\prime}+b y^{\prime}+c y = 0$,
    * If $r\_{1}\ne r\_{2}$, $y=c\_{1}e^{r\_{1}t}+c\_{2}e^{r\_{2}t}$
      * If $r\_{1}\ne r\_{2}=\lambda\pm\mu i\in\mathbb{C}$, $y=e^{\lambda t}\left(A\sin(\mu t + \phi)\right)$
    * If $r_1=r_2$, $y=c\_{1}e^{rt}+c\_{2}te^{rt}$

## Reference

* [04 - Differential Equation](../../../../00%20-%20Summary/SCMA104%20-%20System%20of%20Ordinary%20Differential%20Equations%20and%20Applications%20in%20Medical%20Science/04%20-%20Differential%20Equation.md)
* [Ordinary differential equation - Wikipedia](https://en.wikipedia.org/wiki/Ordinary_differential_equation#Summary_of_exact_solutions)
