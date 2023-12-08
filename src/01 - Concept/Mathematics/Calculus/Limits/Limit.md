# Limit

* $\displaystyle\lim\_{x\to a^-}f(x)=f(x)\mid x\lessapprox a$

* $\displaystyle\lim\_{x\to a^+}f(x)=f(x)\mid x\gtrapprox a$

* $\displaystyle\lim\_{x\to a}f(x)=L\iff\lim\_{x\to a^-}f(x)=\lim\_{x\to a^{+}}f(x)=L$

* $\displaystyle\lim\_{x\to a}f(x)=L \iff \forall \varepsilon>0,\exists \delta>0,\forall x\left\[0\<\\left\lvert x-a\right\rvert\<\\delta\implies\left\lvert f(x)-L\right\rvert\<\\varepsilon\right\]$
  
  ````tikz
    \usetikzlibrary{arrows.meta}
  
    \begin{document}
      \begin{tikzpicture}[scale=.5]
    	% Axes
    	\draw[->] (-0.5,0) -- (12.5,0) node[right] {\(x\)};  
    	\draw[->] (0,-0.5) -- (0,12.5) node[above] {\(f(x)\)};
    	% Graph
    	\draw[domain=0:12,range=0:12,smooth,variable=\x,blue] plot ({\x},{(\x^3-18*\x^2+88*\x-96)/32+6});
    	% Epsilon-delta region
    	\draw[dotted] (6.2,0) -- (6.2,5.87525) -- (0,5.87525);
    	\draw[dotted] (5.8,0) -- (5.8,6.12475) -- (0,6.12475);
    	% Epsilon
    	\draw[|-|,red] (0,5.5) -- node[left] {\(L\pm\varepsilon\)} (0,6.5);
    	% Delta
    	\draw[|-|,green!70!black] (6.2,0) -- node[below] {\(a\pm\delta\)} (5.8,0);
      \end{tikzpicture}
    \end{document}
  ````

## Reference

* [01 - Limit and Continuity](../../../../00%20-%20Summary/SCMA104%20-%20System%20of%20Ordinary%20Differential%20Equations%20and%20Applications%20in%20Medical%20Science/01%20-%20Limit%20and%20Continuity.md)
* [Limit of a function - Wikipedia](https://en.wikipedia.org/wiki/Limit_of_a_function)