---
aliases:
  - LDE
---

# Linear Differential Equation

$$
L\left[y\right]=\sum\limits_{i=0}^{n}a_{i}(t)y^{(i)}(t)=g(t)
$$

where $L$ is a [[Linear Transformation|Linear]] [[Differentiation|Differential]] operator

Equivalent to first-order [[System of Linear Differential Equations]]:

$$
\mathbf{y}^{\prime}=
\begin{bmatrix}
\mathbf{0}, & \mathbf{I}_{n-1}; \newline
\frac{a_{0}}{a_{n}}, & \frac{a_{i}}{a_{n}}; \newline
\end{bmatrix}
\mathbf{y}
+
\begin{bmatrix}
\mathbf{0}; \newline
\frac{g}{a_{n}}; \newline
\end{bmatrix}
$$

## Solving Techniques

- [[Integrating Factor]] (First-order)

## Related Topics

- [[Homogeneous Linear Differential Equation]]
- [[Inhomogeneous Linear Differential Equation]]

## Reference

- [[04 - Differential Equation]]
