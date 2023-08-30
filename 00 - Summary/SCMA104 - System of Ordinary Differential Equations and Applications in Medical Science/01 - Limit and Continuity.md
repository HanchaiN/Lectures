---
share: true
---

# Limit and Continuity

- [[Limit]]
	- Properties of Limit
		- $\lim\limits_{x\to a} c = c$
		- [[Algebraic Limit Theorem]]
	- [[Intermediate Form]]
	- [[Squeeze Theorem]]
	- [[Infinite Limit]]
	- [[Limit at Infinity]]
- [[Continuity]]
- Technique for finding limits
	- Rational Functions ($\lim_{x\to\infty}\frac{P(x)}{Q(x)}$) → Order Analysis
		- $\displaystyle\frac{P(x)}{Q(x)}\frac{x^{-n}}{x^{-n}}$ where $n$ is maximum degree of $P$ and $Q$
		- May extends to limits at zero ($0=\frac{1}{\infty}$) and others
		- May extends to general function with polynomial expansions
	- Trigonometric Functions → [[Squeeze Theorem]]
		- $\displaystyle\lim_{x\to0}\frac{\sin x}{x}=1$
		- $\displaystyle\lim_{x\to0}\frac{1-\cos x}{x}=0$
	- $\displaystyle\lim_{x\to b}f(x)=c,\lim_{x\to a}g(x)=b\implies\lim_{x\to a}f(g(x))=c$ if and only if:  
		- $f$ is continuous at $b$, or  
		- $g(a\pm\varepsilon)\ne b$.
	- L’Hôpital’s rule
		- $\displaystyle\frac{f(x)}{g(x)}=\frac{0}{0},\frac{\infty}{\infty}\implies\lim_{x\to a}\frac{f(x)}{g(x)}=\lim_{x\to a}\frac{f^{\prime}(x)}{g^{\prime}(x)}$

## Reference

- Handout SCMA104
- [Limit of a function - Wikipedia](https://en.wikipedia.org/wiki/Limit_of_a_function)
