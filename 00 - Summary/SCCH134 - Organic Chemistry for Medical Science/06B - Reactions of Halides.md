---
aliases:
  - Reactions of Halides
---

# Reactions of Halides

- Nucleophilic Substitution (Alkyl Halides): $\ce{Nu- + R-X -> Nu-R + X-}$
	- Reagents
		- Alkane: $\ce{R-X ->[LiAlH4] R-H}$
		- Alcohol: $\ce{R-X ->[H2O \text{or} HO-] R-OH}$
		- Ether: $\ce{R-X ->[ROH \text{or} RO-] R-OR}$
		- Ester: $\ce{R-X ->[R'OO-] R-OOCR'}$
		- Amine: $\ce{R-X ->[NHR2] R-NR2}$
		- Thiol: $\ce{R-X ->[H2S \text{or} HS-] R-SH}$
		- Thioether, sulfide: $\ce{R-X ->[RS-] R-SR}$
		- Nitrile: $\ce{R-X ->[N#C-] R-C#N}$
	- Unimolecular Nucleophilic Substitution $\ce{S_{N}1}$
		- $r=k\left[\ce{RX}\right]$
			- Depends on stability of $\ce{R+}$
				- $3^{\circ}>2^{\circ}\gg1^{\circ}$
			- Depends on stability of $\ce{X-}$
				- Prefer protic solvent (with possible $\ce{H+}$)
		- Non-Stereospecific: Racemic Mixture
		- Mechanism: Stepwise
			1. $\ce{R-X ->[- X-] R+}$
				- Rate Determining Step
				- Possible Rearrangement
			2. $\ce{R+ ->[+ Nu-] R-Nu}$
	- Bimolecular Nucleophilic Substitution $\ce{S_{N}2}$
		- $r=k\left[\ce{RX}\right]\left[\ce{Nu-}\right]$
			- Depends on bulkiness of $\ce{RX}$
				- $1^{\circ}>2^{\circ}\gg3^{\circ}$
			- Depends on strength of $\ce{Nu-}$
		- Inversion of Configuration
		- Mechanism: Concerted
	- Comparison $\ce{S_{N}1}$ and $\ce{S_{N}2}$
		- $\ce{S_{N}2}$ use stronger (generally charged) nucleophile
		- Tertiary halides prefer $\ce{S_{N}1}$; Primary halides prefer $\ce{S_{N}2}$
		- $\ce{S_{N}1}$ prefer polar protic solvent
		- $\ce{S_{N}1}$ is non-stereospecific while $\ce{S_{N}2}$ causes inversion
- Elimination Reaction: $\ce{RX-RH -> R=R}$
	- Unimolecular Elimination $\ce{E1}$
		- Non-Stereospecific
			- Zaitsev Elimination
		- $r=k\left[\ce{RX}\right]$
			- Depends on stability of $\ce{R+}$
				- $3^{\circ}>2^{\circ}\gg1^{\circ}$
		- Mechanism: Stepwise
			1. $\ce{RX-RH ->[- X-] R+-RH}$
				- Rate Determining Step
				- Possible Rearrangement
			2. $\ce{R+-RH ->[- H+] R=R}$
	- Bimolecular Elimination $\ce{E2}$ : $\ce{RX-RH ->[+ Nu-][- H-Nu, - X] R=R}$
		- Anti-Elimination → Only *cis*- or *trans*-
			- Zaitsev Elimination (May results in Hofmann Elimination if large alkali)
			- Note: For cyclohexane, only 1,2-diaxial are anti (1,2-diequatorial is gauche)
		- $r=k\left[\ce{RX}\right]\left[\ce{Nu-}\right]$
			- Depends on strength of $\ce{Nu-}$
		- Mechanism: Concerted
	- Comparison $\ce{E1}$ and $\ce{E2}$
		- $\ce{E2}$ use strong alkali (nucleophile)
		- $\ce{E1}$ is non-stereospecific while $\ce{E2}$ is anti-elimination
	- Competition between $\ce{E}$ and $\ce{S_{N}}$
		- @Room Temperature: $\ce{S_{N}1} > \ce{E1}$
		- @High Temperature: $\ce{E2} > \ce{S_{N}2}$
		- Bulky $\ce{Nu-}$ or $\ce{R-X}$: $\ce{E2} > \ce{S_{N}2}$
- Reduction: $\ce{R-X -> R-H}$
	- w/ Hydride ($\ce{Li+ AlH4-}$)
		- Note: Primary / Secondary Alkyl Halides; Tertiary → Elimination  
				- $1^{\circ}>2^{\circ}\gg3^{\circ}$
		- Inversion of Configuration ~$\ce{S_{N}2}$
		- $\ce{R-X + AlH4- ->[\text{dry} Et2O][\text{or} \text{dry} THF] ->[\text{\(3\) equiv.} R-X] H-R + X- + AlX3}$
			- THF: Tetrahydrofuran: Solvent
	- w/ Metals ($\ce{Zn, Mg}$)
		- Non-Stereospecific (Radical Reaction)
		- $\ce{R-X + M -> R. + M.^{+} + X- -> R-M+ + X- ->[H+][\text{or} H2O] R-H + MOH}$
			- Partial Negative Charge on $\ce{R}$ in Organometals $\ce{R-M+}$
			- Use dry ether as solvent → H-bond / Dipole Interaction helps align atoms
		- $\ce{Zn}$ → $\ce{R-X + Zn -> R-Zn-X ->[HCl] R-H + Cl-Zn-X}$
			- Organozinc can form a bond with nearby halide → double bond (1,2-dihalide) / ring (1,3-dihalide)
		- $\ce{Mg}$ → $\ce{R-X ->[Mg][\text{ether}] -> R-MgX}$
			- Organomagnesium Halide = Grignard Reagent $\ce{R-MgX}$ ($\ce{X}=\ce{Cl, Br, I}$)
				- Strong Partial Negative Charge on $\ce{R}$ → Alkali / Nucleophile
			- $\ce{R-MgX ->[H3O+] R-H + X-Mg-OH}$
			- $\ce{R-MgX ->[HC#CR] R-H + X-Mg-C#CR}$
			- $\ce{R-MgX ->[ROH] R-H + X-Mg-OR}$
			- $\ce{R-MgX ->[RX] R-R + X-Mg-X}$
			- $\ce{R-MgX ->[Ep] R-CH2CH2OH}$ (Epoxy ring opening in Alkali)
			- $\ce{R-MgX ->[H-CO-H] R-CH2OH}$
			- $\ce{R-MgX ->[R-CO-H] R-CHROH}$
			- $\ce{R-MgX ->[R-CO-R] R-CR2OH}$
			- $\ce{R-MgX ->[R-COOEt] R2-CROH}$
			- $\ce{R-MgX ->[(EtO)2-CO] R3-COH}$
			- $\ce{R-MgX ->[R-C#N] R-CO-R}$
			- $\ce{R-MgX ->[CO2] R-COOH}$
		- Sodium → Too reactive
			- Radical before Organosodium forms → Symmetric Alkane (major)
				- Can close small ring like Organozinc
			- Acts as Alkali in $\ce{E2}$ → Alkane-Alkene mixture (minor)
- Nucleophilic Substitution (Aryl Halide): $\ce{Ar-X + Nu- -> Ar-Nu + X-}$
	- $\ce{Ar-X + Nu- -> Ar^{-}-(X)(Nu) -> Ar-Nu + X-}$

## Reference

- Handout SCCH134
