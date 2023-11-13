# System of Differential Equations

* First-order system of ODE: $\mathbf{y}^{\prime}=\mathbf{f}(t,\mathbf{y})$ (in vector-matrix form)
  * First-order system of LDE: $\mathbf{y}^{\prime}=\mathbf{A}(t)\mathbf{y}+\mathbf{g}(t)$ (in vector-matrix form)
    * Homogeneous: $\mathbf{g}(t)=\vec{0}$
  * Initial condition: $\mathbf{y}(0)=\mathbf{y}\_{0}$
* Eigenvector and Eigenvalue: $\mathbf{A}\mathbf{v}=\lambda\mathbf{v}$ where $\mathbf{v}\ne\vec{0}$
  * Find Eigenvalue: Characteristic polynomial $P(\lambda)=\det(\lambda\mathbf{I}-\mathbf{A})$
  * Find Eigenvector: Solve $(\lambda\mathbf{I}-\mathbf{A})\vec{v}=0$
* Solution
  * Trivial Solution (Homogeneous): $\mathbf{y}=\vec{0}$
  * General solution (Homogeneous, Constant $\mathbf{A}$): $\mathbf{y}=\sum\limits\_{i}c\_{i}e^{\lambda\_{i}t}\mathbf{v}*{i}$ where $\mathbf{v}*{i}$ and $\lambda\_{i}$ are eigenvectors and eigenvalues.
    * Equiv. $\mathbf{y}=e^{\mathbf{A}t}\mathbf{y}\_{0}$
* Behaviors ($\operatorname{Tr}\mathbf{A}=\sum\limits\_{i}\lambda\_{i}$ and $\det\mathbf{A}=\prod\limits\_{i}\lambda\_{i}$) ![File:Stability Diagram.png](https://upload.wikimedia.org/wikipedia/commons/3/3b/Stability_Diagram.png)
  1. $\lambda\_{1},\lambda\_{2}\in\mathbb{R}$: $\mathbf{y}=c\_{i}e^{\lambda\_{i}t}\mathbf{v}\_{i}$
     1. $\lambda\_{1}\cdot\lambda\_{2}\<0$: Unstable Saddle (Saddle)
     1. $\lambda\_{i}>0$: Unstable Node (Source)
     1. $\lambda\_{i}\<0$: Asymptotically Stable Node (Sink)
  1. $\lambda\_{1},\lambda\_{2}=\lambda\pm\mu i\in\mathbb{C}$: $\mathbf{y}=c\_{i}e^{\lambda\_{i}t}\mathbf{v}*{i}=c*{1}e^{\lambda t}(\mathbf{a}\cos\mu t-\mathbf{b}\sin\mu t)+c\_{2}e^{\lambda t}(\mathbf{a}\cos\mu t+\mathbf{b}\sin\mu t)$ ($\mathbf{v}*{1},\mathbf{v}*{2}=\mathbf{a}\pm\mathbf{b}i$)
     1. $\lambda=0$: Stable Orbit (Center)
     1. $\lambda>0$: Unstable Spiral (Spiral Source)
     1. $\lambda\<0$: Asymptotically Stable Spiral (Spiral Sink)
  1. $\lambda\_{1}=\lambda\_{2}$
     1. $A=\lambda I$: $\mathbf{y}=\mathbf{v}e^{\lambda t}$ ($\mathbf{v}$ is any 2D-vector)
        1. $\lambda>0$: Unstable Proper Node (Source, Symmetric)
        1. $\lambda\<0$: Asymptotically Stable Proper Node (Sink, Symmetric)
     1. $A\ne\lambda I$: $\mathbf{y}=c\_{1}\mathbf{v}e^{\lambda t}+c\_{2}(\mathbf{v}te^{\lambda t}+\mathbf{\eta}e^{\lambda t})$ where $(\lambda\mathbf{I}-\mathbf{A})\mathbf{\eta}=-\mathbf{v}$
        1. $\lambda>0$: Unstable Improper Node (Degenerate Source)
        1. $\lambda\<0$: Asymptotically Stable Improper Node (Degenerate Sink)

## Reference

* Handout SCMA104
