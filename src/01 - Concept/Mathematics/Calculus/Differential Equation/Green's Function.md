# Green's Function

For a [Linear Differential Equation](Linear%20Differential%20Equation.md) $L\left\[y\right\]=g\left(x\right)$,

$$
\\begin{align\*}
L\left\[G\left(x;\xi\right)\right\]
&=
\\delta\left(x-\xi\right)\newline
g\left(\xi\right) L\left\[G\left(x;\xi\right)\right\]
&=
g\left(\xi\right) \delta\left(x-\xi\right)\newline
L\left\[g\left(\xi\right) G\left(x;\xi\right)\right\]
&=
g\left(\xi\right) \delta\left(x-\xi\right)\newline
\\int
L\left\[g\left(\xi\right) G\left(x;\xi\right)\right\]
d\xi
&=\int
g\left(\xi\right) \delta\left(x-\xi\right)
d\xi\newline
L\left\[
\\int
g\left(\xi\right) G\left(x;\xi\right)
d\xi
\\right\]
&=g\left(x\right)\newline
y\_{p}\left(x\right)
&=
\\int
g\left(\xi\right) G\left(x;\xi\right)
d\xi
\\end{align\*}
$$

Noted that $G$ already account for the complementary function $y\_{c}$ but with the boundary condition the complementary terms is restricted.

## Exact Forms

|$L$|$G\left(x;\xi\right)$|Boundary Condition|
|---|---------------------|------------------|
|$\nabla^{2}$|$-\frac{1}{4\pi\left\lvert x-\xi\right\rvert}$|$\lim\limits\_{\left\lvert x-\xi\right\rvert\to\infty}G\left(x;\xi\right)=0$|

## Related Topics

* [Linear Differential Equation](Linear%20Differential%20Equation.md)

## Reference

* [Green's functions: the genius way to solve DEs - YouTube](https://youtu.be/ism2SfZgFJg)
* [Green's function - Wikipedia](https://en.wikipedia.org/wiki/Green%27s_function#Table_of_Green's_functions)
