# Elasticity

* Stress, Strain, and Modulus ($\sigma=Y\varepsilon$)
  * Stress ($\sigma=\frac{F}{A}$)
  * Strain (Young: $\varepsilon=\frac{\Delta L}{L_0}$)
  * Modulus (Young: $Y=\frac{kL_0}{A}$)
  * Elastic region: Constant Modulus: Hooke's law ($F=k\Delta L$)
* Bending Moments  
  ![Beam\_bending\_moment\_plain.svg](https://upload.wikimedia.org/wikipedia/commons/e/e5/Beam_bending_moment_plain.svg)
  * Consider simple system ($F/2$ @ $x\_{O}=-L/2$, $-F$ @ $x\_{A}=0$, $F/2$ @ $x\_{B}=+L/2$)
  * Internal Torque
    * Consider part of object (assume $x>0$)
      * Total torque should be the same w/ or w/o splitting
      * Missing torque is internal torque on the splitting plane
      * $\tau\_\\text{internal}=-\frac{F}{2}(L/2-x)=\frac{F}{2}(L/2+x)-Fx$
    * Consider short slice of object (assume $y=0$ to be neutral axis: no stretch)
      * The length after bending is $\Delta L=-\frac{y}{R}L_0$ where $R$ is Radius of Curvature
    * $\tau\_\\text{internal}=-\int{ydF}=-\int{y\sigma dA}=-\int{yY\frac{\Delta L}{L_0} dA}=\frac{Y}{R}\int{y^2dA}=\frac{Y}{R}I_A$
    * $\left\lvert R\right\rvert=\frac{Y}{\tau\_\\text{internal}}I_A$
  * Second Moment of Inertia ($I_A=\int{y^2dA}$)
    * aka. Area Moment of Inertia, Moment of Inertial of Area
    * Parallel Axis Theorem: $I_A=I\_{A,\text{cm}}+Ad^2$
  * Polar Moment of Inertia ($J=I_x+I_y$)
    * [Perpendicular Axis Theorem](02%20-%20Motion%20of%20Rigid%20Body.md#perp-axs-thm)
    * Torsional Deformation

## Reference

* Handout SCPY142
* [Bending moment - Wikipedia](https://en.wikipedia.org/wiki/Bending_moment)
