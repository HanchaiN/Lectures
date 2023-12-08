# Squeeze Theorem

$$
g(x)\le f(x)\le h(x); \lim_{x\to a}g(x)=\lim_{x\to a}h(x)=L\implies\lim_{x\to a}f(x)=L
$$

```tikz
\begin{document}
\begin{tikzpicture}[scale=10]
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

```

## Related Topics

- [[Limit]]

## Reference

- [[01 - Limit and Continuity]]
