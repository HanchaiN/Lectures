# Wronskian

$$
W(f,g)=f\cdot g^{\prime}-g\cdot f^{\prime}
$$

Generally,

$$
W(f_{1},\dots,f_{n})
=\det\left(a_{i,j}=f_{i}^{(j)}\right)
=\det
\begin{pmatrix}
f_{1},&f_{2},&\dots&f_{n}; \newline f_{1}^{\prime},&f_{2}^{\prime},&\dots&f_{n}^{\prime}; \newline
\vdots&\vdots&\ddots&\vdots \newline 
f_{1}^{(n-1)},&f_{2}^{(n-1)},&\dots&f_{n}^{(n-1)}; \newline
\end{pmatrix}
$$

If $f_{1},\dots,f_{n}$ are linearly dependent then $W=0$. (the reverse is not necessary true)

## Reference

- [[04 - Differential Equation]]
- [Wronskian - Wikipedia](https://en.wikipedia.org/wiki/Wronskian)
