# System of Differential Equations

* First-order system of ODE: $\mathbf{y}^{\prime}=\mathbf{f}(t,\mathbf{y})$ (in vector-matrix form)
  * First-order system of LDE: $\mathbf{y}^{\prime}=\mathbf{A}(t)\mathbf{y}+\mathbf{g}(t)$ (in vector-matrix form)
    * Homogeneous: $\mathbf{g}(t)=\vec{0}$
  * Initial condition: $\mathbf{y}(0)$
* Eigenvector and Eigenvalue: $\mathbf{A}\mathbf{v}=\lambda\mathbf{v}$ where $\mathbf{v}\ne\vec{0}$
  * Find Eigenvalue: Characteristic polynomial $P(\lambda)=\det(\lambda\mathbf{I}-\mathbf{A})$
  * Find Eigenvector: Solve $(\lambda\mathbf{I}-\mathbf{A})\vec{v}=0$
* Solution
  * Trivial Solution (Homogeneous): $\mathbf{y}=\vec{0}$
  * General solution (Homogeneous, Constant $\mathbf{A}$): $\mathbf{y}=\sum\limits\_{i}c\_{i}e^{\lambda\_{i}t}\mathbf{v}*{i}$ where $\mathbf{v}*{i}$ and $\lambda\_{i}$ are eigenvectors and eigenvalues.

## Reference

* Handout SCMA104
