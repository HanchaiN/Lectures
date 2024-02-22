---
aliases:
    - Differential
---

# Differentiation

- $f^{\prime}(x)=\frac{d}{dx}f(x)=\lim_{h\to0}\frac{f(x+h)-f(x)}{h}$
- $f^{\prime}(a)=\left.\frac{d}{dx}f(x)\right\rvert_{x=a}=\lim_{x\to a}\frac{f(x)-f(a)}{x-a}$
- $f^{(n)}(x)=\frac{d^{n}}{dx^{n}}f(x)=\frac{d}{dx}f^{(n-1)}(x)$
- Equiv.
    - Slope of tangent line at $x=a$.
- Linearity
    - $(cf)^{\prime}=c\cdot f^{\prime}$
    - $(f+g)^{\prime}=f^{\prime}+g^{\prime}$
- Properties
    - $(f\cdot g)^{\prime}=f^{\prime}\cdot g+f\cdot g^{\prime}$
        - $(\frac{f}{g})^{\prime}=\frac{f^{\prime}\cdot g-f\cdot g^{\prime}}{g^2}$
        - $(f\cdot g\cdot h)^{\prime}=f^{\prime}\cdot g\cdot h+f\cdot g^{\prime}\cdot h+f\cdot g\cdot h^{\prime}$
        - $(f\cdot g)^{\prime\prime}=f^{\prime\prime}\cdot g+2f^{\prime}\cdot g^{\prime}+f\cdot g^{\prime\prime}$
    - $(f\circ g)^{\prime}=(f^{\prime}\circ g)\cdot g^{\prime}$
        - $(f^{-1})^{\prime}=\frac{1}{f^{\prime}\circ f^{-1}}$
    - $(f^{g})^\prime=f^{g}(f^{\prime}\frac{g}{f}+g^{\prime}\ln f)$
- Exact forms
    - $\frac{d}{dx}c=0$
    - $\frac{d}{dx}x^{r}=rx^{r-1}$
    - $\frac{d}{dx}\sin x=\cos x$
    - $\frac{d}{dx}\cos x=-\sin x$
    - $\frac{d}{dx}\tan x=\sec^2 x$
    - $\frac{d}{dx}\cot x=-\csc^2 x$
    - $\frac{d}{dx}\sec x=\sec x\tan x$
    - $\frac{d}{dx}\csc x=-\csc x\cot x$
    - $\frac{d}{dx}e^x=e^x$
    - $\frac{d}{dx}a^{x}=a^{x}\ln a$
    - $\frac{d}{dx}\ln \left\lvert x\right\rvert=\frac{1}{x}$
    - $\frac{d}{dx}\log_{a}x=\frac{1}{x\ln a}$

## Related Topics

- [[Limit]]

## Reference

- [[02 - Differentiation]]
- [Differentiation rules - Wikipedia](https://en.wikipedia.org/wiki/Differentiation_rules)
