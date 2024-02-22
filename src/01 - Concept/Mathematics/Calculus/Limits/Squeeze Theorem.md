# Squeeze Theorem

$$
g(x)\le f(x)\le h(x); \lim\_{x\to a}g(x)=\lim\_{x\to a}h(x)=L\implies\lim\_{x\to a}f(x)=L
$$

````tikz
\usetikzlibrary{backgrounds}

\begin{document}
 \begin{tikzpicture}[scale=10, background rectangle/.style={fill=white}, show background rectangle]
 % Axis
 \draw[->] (-.45,0) -- (+.45,0) node[right] {\(x\)};
 \draw[->] (0,-.3) -- (0,+.3) node[above] {\(y\)};
 
 % Graphs
 \draw[domain=-.4:-.01, range=-.25:.25, smooth, variable=\x, blue, thick] plot ({\x}, {-\x*\x * sin(1/(-\x) r)});
 \draw[domain=.01:.4, range=-.25:.25, smooth, variable=\x, blue, thick] plot ({\x}, {\x*\x * sin(1/\x r)});
 \draw[domain=-.4:.4, range=-.25:.25, smooth, variable=\x, red, thick] plot ({\x}, {\x*\x});
 \draw[domain=-.4:.4, range=-.25:.25, smooth, variable=\x, green, thick] plot ({\x}, {-\x*\x});
 
 % Asymptote
 \draw[dashed] (0, -.3) -- (0, .3);
\end{tikzpicture}
\end{document}

````

* Useful for finding limits for Trigonometric Functions

## Related Topics

* [Limit](Limit.md)

## Reference

* [01 - Limit and Continuity](../../../../00%20-%20Summary/SCMA104%20-%20System%20of%20Ordinary%20Differential%20Equations%20and%20Applications%20in%20Medical%20Science/01%20-%20Limit%20and%20Continuity.md)
