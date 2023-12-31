---
aliases:
  - Wave and Sound
---

# Wave and Sound

- Components
	- Source
	- Medium (for mechanical waves not electromagnetic wave)
	- Interaction within medium
- Classification
	- Transverse (disturbance is perpendicular to the propagation)
	- Longitudinal (disturbance is parallel to the propagation)
- Characteristic
	- Period $T$, Frequency $f=T^{-1}$, and angular velocity $\omega=\frac{2\pi}{T}$
	- Wavelength $\lambda$ and Wave Number $k=\frac{2\pi}{\lambda}$
	- Amplitude $A$
	- Wave velocity $c=f\lambda$ (may use $c$ or $v$ depending on notation)
	- Shape: preferrable sinusoidal $y=A\sin\left(kx-\omega t+\phi\right)$
		- Phase constant $\phi$
		- Phase $kx-\omega t+\phi$
		- Medium velocity $\frac{\partial y}{\partial t}=-A\omega\cos\left(kx-\omega t+\phi\right)$
		- Medium acceleration $\frac{\partial^{2}y}{\partial t^{2}}=-A\omega^{2}\sin\left(kx-\omega t+\phi\right)$
		- Wave equation  
		  $\frac{\partial^{2}y}{\partial t^{2}}=c^{2}\sum\limits\frac{\partial^{2}y}{\partial x_{i}^{2}}$
			- Solution is $y=f_{+}\left(x-ct\right)+f_{-}\left(x+ct\right)$  
			  essentially a superposition of forward and backward wave.
			- Similar solution can be found in higher dimension.
- Wave on string (Transversal)
	- $c=\sqrt{\frac{F}{\mu}}$ ($F$ is tension and $\mu$ is linear density)
	- Power $P=\frac{E}{t}=\frac{1}{2}\mu\omega^{2}A^{2}c$
		- Kinetic Energy
			- $K=\frac{1}{2}mv^{2}$
			- $dK=\frac{1}{2}v^{2}dm=\frac{1}{2}\left(y^{\prime}\right)^{2}\mu dx$
			- $K_{\lambda}=\int_{0}^{\lambda}dK=\frac{1}{4}\mu\omega^{2}A^{2}\lambda$
		- Potential Energy
			- $U=\frac{1}{2}ky^{2}$ (where $F=-ky=ma_{y}$)
			- $dU=\frac{1}{2}\frac{-a_{y}}{y}y^{2}dm=\frac{1}{2}y^{2}\omega^{2}\mu dx$
			- $U_{\lambda}=\int_{0}^{\lambda}dU=\frac{1}{4}\mu\omega^{2}A^{2}\lambda$
		- Total Energy $E_{\lambda}=\frac{1}{2}\mu\omega^{2}A^{2}\lambda$
			- Total per length $\lambda$
			- Total per time $T$
- Sound wave (Longitudinal)
	- Power $P=\frac{1}{2}\mu\omega^{2}A^{2}c$ (similar proof)
	- Intensity $I=\frac{P}{A}$ ($A$ is area)
		- For point source, spherical surface $A=4\pi r^{2}$
	- Intensity level $\beta=10 \log\frac{I}{I_{0}}$
		- $I_{0}=\pu{10E-12 W*m^{-2}}$ (minimum for human hearing)
		- Unit *deci*bel (hence the factor of $10$)
	- Hearing range: $\pu{20 Hz}$ to $\pu{20000 Hz}$
		- Ultrasonic / Infrasonic
	- Application: Ultrasound
		- Medical Analysis @ $<\pu{1 KW*m^{-2}}$
		- Generate Internal Heat @ $\pu{10 KW*m^{-2}}-\pu{100 KW*m^{-2}}$
		- Surgery (break kidney stones / structures) @ $\pu{1 MW*m^{-2}}-\pu{40 MW*m^{-2}}$
		- Not ionize, Not destroy molecular bonds, Not damage muscle
		- Prefer: Wavelength < Object size
		- Low penetration ($\approx 200\lambda$)
	- Doppler: change in perceived frequency due to relative motion
		- $f=f_{0}\frac{v_\text{sound} \pm v_\text{observer}}{v_\text{sound} \pm v_\text{source}}$ (Noted the signature)
			- Move towards each other, increasing $f$.

## Reference

- Handout SCPY142
- [Wave equation - Wikipedia](https://en.wikipedia.org/wiki/Wave_equation)
- [String vibration - Wikipedia](https://en.wikipedia.org/wiki/String_vibration)
