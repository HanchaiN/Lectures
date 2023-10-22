# Limit and Continuity

* [Limit](../../01%20-%20Concept/Mathematics/Calculus/Limit.md)
  * Properties of Limit
    * $\lim\limits\_{x\to a} c = c$
    * [Algebraic Limit Theorem](../../01%20-%20Concept/Mathematics/Calculus/Algebraic%20Limit%20Theorem.md)
  * [Intermediate Form](../../01%20-%20Concept/Mathematics/Calculus/Intermediate%20Form.md)
  * [Squeeze Theorem](../../01%20-%20Concept/Mathematics/Calculus/Squeeze%20Theorem.md)
  * [Infinite Limit](../../01%20-%20Concept/Mathematics/Calculus/Infinite%20Limit.md)
  * [Limit at Infinity](../../01%20-%20Concept/Mathematics/Calculus/Limit%20at%20Infinity.md)
* [Continuity](../../01%20-%20Concept/Mathematics/Calculus/Continuity.md)
* Technique for finding limits
  * Rational Functions ($\lim\_{x\to\infty}\frac{P(x)}{Q(x)}$) → Order Analysis
    * $\displaystyle\frac{P(x)}{Q(x)}\frac{x^{-n}}{x^{-n}}$ where $n$ is maximum degree of $P$ and $Q$
    * May extends to limits at zero ($0=\frac{1}{\infty}$) and others
    * May extends to general function with polynomial expansions
  * Trigonometric Functions → [Squeeze Theorem](../../01%20-%20Concept/Mathematics/Calculus/Squeeze%20Theorem.md)
    * $\displaystyle\lim\_{x\to0}\frac{\sin x}{x}=1$
    * $\displaystyle\lim\_{x\to0}\frac{1-\cos x}{x}=0$
  * $\displaystyle\lim\_{x\to b}f(x)=c,\lim\_{x\to a}g(x)=b\implies\lim\_{x\to a}f(g(x))=c$ if and only if:
    * $f$ is continuous at $b$, or
    * $g(a\pm\varepsilon)\ne b$.
  * L’Hôpital’s rule
    * $\displaystyle\frac{f(x)}{g(x)}=\frac{0}{0},\frac{\infty}{\infty}\implies\lim\_{x\to a}\frac{f(x)}{g(x)}=\lim\_{x\to a}\frac{f^{\prime}(x)}{g^{\prime}(x)}$

## Reference

* Handout SCMA104
* [Limit of a function - Wikipedia](https://en.wikipedia.org/wiki/Limit_of_a_function)
