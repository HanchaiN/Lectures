---
aliases:
    - Homogeneous LDE
---

# Homogeneous Linear Differential Equation

$$
L[y]=\sum\limits_{i=0}^{n}a_{i}(t)y^{(i)}(t)=0
$$

where $L$ is a [[Linear Transformation|Linear]] differential operator

- There are $n$ linearly-independent solutions for $n$-th order [[Homogeneous Linear Differential Equation|Homogeneous LDE]].
    - Superposition Principle: If $y_1$ and $y_2$ are solutions of the [[Homogeneous Linear Differential Equation|Homogeneous LDE]], their linear combinations (i.e. $c_{1}y_{1}+c_{2}y_{2}$) are also solutions of the same DE.
    - The final solution can be solved using the [[Wronskian]].
- w/ const. coefficient $a_{i}\sim\text{const.}$
    - Solve characteristic equation: $\sum\limits_{i=0}^{n} a_{i}r^{i} = 0$  
         (Assume that the solution is in the forms of $e^{rt}$ so that it can cancel its derivatives out.)
    - According to fundamental theorem of algebra, there will be $n$ roots.
    - For each simple root $r$, the associated bases solution is $e^{rt}$.
    - For each multiple root $r$ (with multiplicity $k$), the associated bases solution are $t^{i}e^{rt}$ for $i=0,\dots,k-1$.  
         (by Reduction of Order)
    - For second-order, $a y^{\prime\prime}+b y^{\prime}+c y = 0$,
        - If $r_{1}\ne r_{2}$, $y=c_{1}e^{r_{1}t}+c_{2}e^{r_{2}t}$
            - If $r_{1}\ne r_{2}=\lambda\pm\mu i\in\mathbb{C}$, $y=e^{\lambda t}\left(A\sin(\mu t + \phi)\right)$
        - If $r_1=r_2$, $y=c_{1}e^{rt}+c_{2}te^{rt}$

## Reference

- [[04 - Differential Equation]]
- [Ordinary differential equation - Wikipedia](https://en.wikipedia.org/wiki/Ordinary_differential_equation#Summary_of_exact_solutions)
