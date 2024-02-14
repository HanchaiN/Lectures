# System of Homogeneous Linear Differential Equations

(First-order)

$$
\mathbf{y}^{\prime}=\mathbf{A}\mathbf{y}
$$

## Solutions

- Trivial solution: $\mathbf{y}=\mathbf{0}$
- w/ constant coefficient $\mathbf{A}\sim\text{const.}$
	- Solve for eigenvalues and eigenvectors $\lambda_{i}$ and $\mathbf{v}_{i}$.
	- For each eigenvalue-eigenvector pairs $\lambda$ and $\mathbf{v}$, the basis is $\mathbf{v}e^{\lambda t}$.
	- For each pair with multiplicity of $2$, the second basis is $\mathbf{v}te^{\lambda t}+\mathbf{\eta} e^{\lambda t}$ where $(\mathbf{A}-\lambda\mathbf{I})\mathbf{\eta}=\mathbf{v}$.
	- For each eigenvalue with multiplicity $k$, the associated bases solution are $\sum\limits_{i}\mathbf{\eta}_{i} t^{i}e^{\lambda t}$ for $i=0,\dots,k-1$. (solve for $\mathbf{\eta}_{i}$)
		- If the eigenvectors are unique, the coefficients $\mathbf{\eta}_{i}$ are the eigenvectors.
		- $\mathbf{\eta}_{k}\coloneqq\mathbf{0}$
		- $\left(\mathbf{A}-\lambda\mathbf{I}\right)\mathbf{\eta}_{i}=\left(i+1\right)\mathbf{\eta}_{i+1}$
	- Equivalent to $\mathbf{y}=\mathbf{y}(0) e^{\mathbf{A}t}$

## Behaviors

($\operatorname{Tr}\mathbf{A}=\sum\limits_{i}\lambda_{i}$ and $\det\mathbf{A}=\prod\limits_{i}\lambda_{i}$)  
![File:Stability Diagram.png](https://upload.wikimedia.org/wikipedia/commons/3/3b/Stability_Diagram.png)  

1. $\lambda_{1},\lambda_{2}\in\mathbb{R}$: $\mathbf{y}=c_{i}e^{\lambda_{i}t}\mathbf{v}_{i}$  
	1. $\lambda_{1}\cdot\lambda_{2}<0$: Unstable Saddle (Saddle)  
	2. $\lambda_{i}>0$: Unstable Node (Source)  
	3. $\lambda_{i}<0$: Asymptotically Stable Node (Sink)  
2. $\lambda_{1},\lambda_{2}=\lambda\pm\mu i\in\mathbb{C}$: $\mathbf{y}=c_{1}e^{\lambda t}(\mathbf{a}\cos\mu t-\mathbf{b}\sin\mu t)+c_{2}e^{\lambda t}(\mathbf{a}\cos\mu t+\mathbf{b}\sin\mu t)$  
   ($\mathbf{v}_{1},\mathbf{v}_{2}=\mathbf{a}\pm\mathbf{b}i$)  
	1. $\lambda=0$: Neutrally Stable Orbit (Center)  
	2. $\lambda>0$: Unstable Spiral (Spiral Source)  
	3. $\lambda<0$: Asymptotically Stable Spiral (Spiral Sink)  
3. $\lambda_{1}=\lambda_{2}$  
	1. $A=\lambda I$: $\mathbf{y}=\mathbf{v}e^{\lambda t}$ ($\mathbf{v}$ is any 2D-vector since the eigenvectors span the space)  
		1. $\lambda>0$: Unstable Proper Node (Source, Symmetric)  
		2. $\lambda<0$: Asymptotically Stable Proper Node (Sink, Symmetric)  
	2. $A\ne\lambda I$: $\mathbf{y}=c_{1}\mathbf{v}e^{\lambda t}+c_{2}(\mathbf{v}te^{\lambda t}+\mathbf{\eta}e^{\lambda t})$  
		1. $\lambda>0$: Unstable Improper Node (Degenerate Source)  
		2. $\lambda<0$: Asymptotically Stable Improper Node (Degenerate Sink)

## Related Topics

- [[Homogeneous Linear Differential Equation]]
- [[System of Linear Differential Equations]]

## Reference

- [[05 - System of Differential Equations]]
- [Matrix exponential - Wikipedia](https://en.wikipedia.org/wiki/Matrix_exponential)
