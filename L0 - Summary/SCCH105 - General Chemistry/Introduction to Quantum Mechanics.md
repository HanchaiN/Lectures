# Introduction to Quantum Mechanics
## Breakdown of Classical Physics
### Ultraviolet Catastrophe
> [!tldr] Quantization of Energy
> Package of Light

- Ideal black body radiation → infinite energy (infinite UV radiation)
- Solution (Max Plank): Quantize light’s energy to photon $E=h\nu$
	- Classically, $h\to 0$ for continuous energy level
### Photoelectric Effect
>[!tldr] Matter Behavior of Wave
> Collision of photon and electron

- $E_{k,\text{max}}=h\nu-W$
  $W=h\nu_0$: Work function (Binding energy of electron w/ material)
  $\nu_0$: Critical frequency (Minimum frequency)
- $\Delta V \propto E_{k}\propto\nu-\nu_0$
  $\text{Current} \propto n_{e}\propto n_{\gamma} \propto \text{Intensity}$
### Double-slit Experiment
>[!tldr] Wave Behavior of Matter
>Self-interference of electron

- Classical Wave: Diffract around slits and interfere with instance of the same wave from the different slit causing the interference pattern.
- Classical Particle: May diffract but cannot interfere with itself.
- Quantum Particle: Somehow causing the interference pattern → Must interfere with itself.
	- One particle will lands on just one point but together forms a clear distribution like that of the interference pattern.
## Theory
### De Broglie Wavelength
- $\lambda=\frac{h}{p}=\frac{h}{mv}$
  From Planck relation: $E=h\nu=h\frac{c}{\lambda}$
  From mass-energy equivalence: $E=mc^2=pc$
  $\therefore \lambda=\frac{h}{p}=\frac{h}{mv}$
- Since normal objects don’t move at the speed of light, we can use $v$ instead of $c$.
  Note: de Broglie uses a different equation for mass-energy equivalence and does not abuse the notations.
### Schrödinger Wave Equation
- $\hat{H}\Psi=\hat{E}\Psi$
  Total Energy: $\hat{E}=i\hbar\frac{d}{dt}$
  Kinetic Energy: $\hat{T}=\frac{1}{2m}\hat{\mathbf{p}}\cdot\hat{\mathbf{p}}=-\frac{\hbar}{2m}\frac{d^2}{dx^2}$
  Potential Energy $\hat{V}=V(x)$
  Hamiltonian operator: $\hat{H}=\hat{T}+\hat{V}=-\frac{\hbar}{2m}\frac{d^2}{dx^2}+V\left(x\right)$
### Heisenberg’s Uncertainty Principle
- $\Delta x \Delta p_x \ge \frac{\hbar}{2}​$
  One cannot precisely observe the position and the momentum of the particle at the same time; This is not due to the issue of the observation but rather that the information does not exist in the first place.
- $\sigma_x \cdot \sigma_{p} \ge \frac{\hbar}{2}$
  Since wavefunction is a continuous function, there’s no definite bound. It’s only meaningful to discuss the standard deviation of the measured value according to the probability distribution
## References
- Handout SCCH105
- [Quantum Operator](https://en.wikipedia.org/wiki/Operator_(physics)#Table_of_QM_operators)