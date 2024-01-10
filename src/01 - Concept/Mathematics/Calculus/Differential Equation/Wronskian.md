# Wronskian

$$
W(f,g)=f\cdot g^{\prime}-g\cdot f^{\prime}
$$

Generally,

$$
W(f\_{1},\dots,f\_{n})
=\det\left(a\_{i,j}=f\_{i}^{(j)}\right)
=\det
\\begin{pmatrix}
f\_{1},&f\_{2},&\dots&f\_{n}; \newline f\_{1}^{\prime},&f\_{2}^{\prime},&\dots&f\_{n}^{\prime}; \newline
\\vdots&\vdots&\ddots&\vdots \newline 
f\_{1}^{(n-1)},&f\_{2}^{(n-1)},&\dots&f\_{n}^{(n-1)}; \newline
\\end{pmatrix}
$$

If $f\_{1},\dots,f\_{n}$ are linearly dependent then $W=0$. (the reverse is not necessary true)

## Related Topics

* [Linear Differential Equation](Linear%20Differential%20Equation.md)

## Reference

* [04 - Differential Equation](../../../../00%20-%20Summary/SCMA104%20-%20System%20of%20Ordinary%20Differential%20Equations%20and%20Applications%20in%20Medical%20Science/04%20-%20Differential%20Equation.md)
* [Wronskian - Wikipedia](https://en.wikipedia.org/wiki/Wronskian)