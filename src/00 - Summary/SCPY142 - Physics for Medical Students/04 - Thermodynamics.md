# Thermodynamics

* Work ($\delta W=F\cdot \delta s=PdV$)
  * Pressure $P=\frac{F}{A}$ is an average (perpendicular) force per unit area, hence the component vectors are aligned
* Energy = Ability to do work
  * Kinetic Energy: $K=\frac{1}{2}mv^{2}$ (classical)
    * For rotating rigid body: $\delta W=\tau \delta\theta\implies K\_{R}=\frac{1}{2}I\omega^{2}$
    * May emerge as Thermal Energy
  * Potential Energy
    * from Conservative Forces (Path independent work)
      * Gravitational Potential Energy: $F=mg\implies U=mgh$
      * Electric Potential Energy: $F=k\frac{qQ}{r^2}\implies U=k\frac{qQ}{r}$
        * May emerge as Chemical Energy
  * Relativistic Energy
    * Rest Mass Energy: $E=mc^{2}$
* Temperature $T$: measure of internal kinetic energy
  * Internal vibrations of atoms, excluding the overall motion of the system
  * Material Expansion: $\Delta L = L\_{0}\alpha\Delta T$
* Heat $Q$: transferred energy due to difference of temperature
  * as vibration of atoms
* [Enthalpy](../../01%20-%20Concept/Physics/Thermodynamics/Enthalpy.md) $H$
* Ideal gas
  * No interaction (except elastic collision)
  * Occupy no volume
  * Ideal gas law: $PV=nRT=k\_{B}NT$
  * Internal Energy: $U=\frac{3}{2}k\_{B}NT$ (monoatomic gas; replace to $\frac{5}{2}$ for non-stretching diatomic gas)
    * Equipartition theorem assumes each (quadratic) degree of freedom have equal energy: $\frac{1}{2}k\_{b}T$
* Thermodynamic processes
  * Isochoric process: $dV=0$
    * $W=0$
    * $Q=\Delta U=\frac{3}{2}nR\Delta T=nC\_{V}\Delta T$
  * Isobaric process: $dP=0$
    * $W=\int P \delta V = P\Delta V=nR\Delta T$
    * $\Delta U=\frac{3}{2}nR\Delta T$
    * $Q=\Delta U + W = \frac{5}{2}nR\Delta T=nC\_{P}\Delta T$
    * $C\_{P}=C\_{V}+R$
  * Isothermal process: $dT = 0$
    * $\Delta U=0$
    * $Q=W=\int P \delta V=\int \frac{nRT}{V} \delta V = nRT\ln \frac{V\_{f}}{V\_{i}}$
  * Adiabatic process: $\delta Q=0$
    * $W=\Delta U=\frac{3}{2}nR\Delta T$
    * $PV^{\gamma}\sim\text{const.}$
      * $\gamma=\frac{C\_{P}}{C\_{V}}$
* Heat engine
  * Heat transferred between reservoirs (const. temp.) and work done by engine
  * $e=\frac{W}{Q_H}$
  * Heat pump: Reversed heat transferred and work done to pump
    * $e=\frac{Q}{W}$ ($Q\_{C}$ for cooling and $Q\_{H}$ for heating)
  * Carnot Engine: Reversible engine with two reservoirs
    * Isothermal heat transfer (reversible)
    * Adiabatic temperature changes (no lost)
    * $e=1-\frac{T\_{C}}{T\_{H}}$
* [Entropy](Entropy.md) $S$
  * $dS = \frac{\delta Q\_\\text{reversible}}{T}$
* [Gibbs free energy](../../01%20-%20Concept/Physics/Thermodynamics/Gibbs%20free%20energy.md) $G$
* Laws of Thermodynamics
  * 0th: heat transferred until temperature equals
    * agrees with equipartition theorem
  * 1st: $dU=\delta Q-\delta W$ (depends of choice of sign)
    * agrees with conservation of energy
  * 2nd: $dS\_{universe}\ge 0$
    * $dS\_{universe} = 0$ iff. reversible process
      * Quasistatic: System is in equilibrium with itself
      * Reversible: System is quasistatic and in equilibrium with environment

## Reference

* Handout SCPY142
