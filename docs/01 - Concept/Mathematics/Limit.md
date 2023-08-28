---
share: true
---

# Limit

- $\displaystyle\lim_{x\to a^-}f(x)=f(x)\mid x\lessapprox a$  
- $\displaystyle\lim_{x\to a^+}f(x)=f(x)\mid x\gtrapprox a$  
- $\displaystyle\lim_{x\to a}f(x)=L\iff\lim_{x\to a^-}f(x)=\lim_{x\to a^{+}}f(x)=L$  
- $\displaystyle\lim_{x\to a}f(x)=L \iff \forall \varepsilon>0,\exists \delta>0,\forall x\left[0<\left\lvert x-a\right\rvert<\delta\implies\left\lvert f(x)-L\right\rvert<\varepsilon\right]$  

  ``` tikz
	\usetikzlibrary{arrows.meta}

	\begin{document}
	  \begin{tikzpicture}[scale=.5]
		% Axes
		\draw[->] (-0.5,0) -- (12.5,0) node[right] {$x$};  
		\draw[->] (0,-0.5) -- (0,12.5) node[above] {$f(x)$};
		% Graph
		\draw[domain=0:12,range=0:12,smooth,variable=\x,blue] plot ({\x},{(\x^3-18*\x^2+88*\x-96)/32+6});
		% Epsilon-delta region
		\draw[dotted] (6.2,0) -- (6.2,5.87525) -- (0,5.87525);
		\draw[dotted] (5.8,0) -- (5.8,6.12475) -- (0,6.12475);
		% Epsilon
		\draw[|-|,red] (0,5.5) -- node[left] {$L\pm\varepsilon$} (0,6.5);
		% Delta
		\draw[|-|,green!70!black] (6.2,0) -- node[below] {$a\pm\delta$} (5.8,0);
	  \end{tikzpicture}
	\end{document}
  ```

## Reference

- [[../../00 - Summary/SCMA104 - System of Ordinary Differential Equations and Applications in Medical Science/01 - Limit and Continuity|01 - Limit and Continuity]]
- [Limit of a function - Wikipedia](https://en.wikipedia.org/wiki/Limit_of_a_function)