# Motion of Rigid Body

* Angle ($\theta$)
  * $\Delta x=r\Delta \theta$
  * $d\vec{\theta}=\frac{\vec{r}\times d\vec{x}}{r^2}$
  * $dx\_\\perp=d\vec{\theta}\times\vec{r}$
* Angular Velocity ($\omega=\frac{d\theta}{dt}$)
  * $v\_\\theta=r\omega$
  * $\vec{\omega}=\frac{\vec{r}\times\vec{v}}{r^2}​$
  * $v\_\\perp=\vec{\omega}\times\vec{r}$
* Angular Acceleration ($\alpha=\frac{d\omega}{dt}$)
  * $a_r=r\omega^{2}$
  * $a\_\\theta=r\alpha$
* Fixed-axis Rotation at Constant Angular Acceleration
  * $\Delta \omega=\alpha\Delta t$
  * $\Delta \theta=\frac{\omega\_{i}+\omega\_{f}}{2}\Delta t$
  * $\Delta \theta=\omega\_{i}\Delta t+\frac{1}{2}\alpha{\Delta t}^2$
  * $\Delta \theta=\omega\_{f}\Delta t-\frac{1}{2}\alpha{\Delta t}^2$
  * $\omega\_{f}^{2}=\omega\_{i}^{2}+2\alpha\Delta \theta$
* $\vec{\tau}=I\vec{\alpha}$
  * Torque ($\vec{\tau}=\vec{r}\times\vec{F}$)
  * Moment of Inertia ($I=\int\_{M}r^{2}dm$)
    * Inertia tensor ($I\_{ij}=\int\_{M}x\_{i}x\_{j}dm$; $\vec{\tau}=\mathbf{I}\vec{\alpha}$)
* Parallel Axis Theorem
  * Center of Mass ($\vec{x}*\\text{cm}=\frac{1}{M}\int*{M}\vec{x}dm$)
  * $I=I\_\\text{cm}+md^2$
    * $\mathbf{I}=\mathbf{I}\_\\text{cd}+m\left(\left(\vec{r}\cdot\vec{r}\right)\mathbf{E}-\vec{r}\otimes\vec{r}\right)$ ($\mathbf{E}$: Identity Tensor)

## Reference

* Handout SCPY142
* [Moment of inertia - Wikipedia](https://en.wikipedia.org/wiki/Moment_of_inertia)
