---
aliases:
  - Protein Structure and Concept of Bio-catalysis and Enzyme Kinetics
---

# Protein Structure and Concept of Bio-catalysis and Enzyme Kinetics

## Amino Acid

- Building block of proteins
	- Polymerization
		- Peptide bond (Amine + Carboxylic Acid → Amide)
	- Chirality
		- Chiral central tetrahedral $\alpha$-carbon
		- Usually L-configured
	- Various Sidechains
- Classification
	- Polarity of Sidechains: Hydrophobic / Acidic / Basic
	- Essential / Conditionally Non-Essential / Non-Essential
	- Uncommon Amino Acids: Derivatives
- Acid-Base: Weak polyprotic
	- $pK_{1}$: Carboxyl Group ($\ce{R-COOH <=>> R-COO- + H+}$)
	- $pK_{2}$: Amino Group ($\ce{R-NH3+ <<=> R-NH2 + H+}$)
	- $pK_\ce{R}$: Depends on side chain
	- Neutrally Zwitterion Form (Ammonium + Carboxylate)
	- Protonation / Deprotonation threshold: $pH = pK$
	- Isoelectric Point $pI$: $pH$ where molecule is neutrally charged
		- Usually, middle between two neighboring threshold ($pK$)
- Protein Purification
	- Ion-exchange chromatography: require $pI - pH = \pm 1$
	- Biosensors

## Protein

- $\pu{>50 \%}$ of cell's dry weight
- Classification
	- Shape
		- Fibrous Proteins
			- Simple, Regular, Insoluble, Linear, Structural Role
		- Globular Proteins
			- Spherical, Compact, Soluble, Cytosolic Function
		- Membrane Proteins
			- Soluble, Membrane System
	- Organization
		- Primary Structure: Amino Acids Sequence
			- Covalent Bonding (Peptide Bonds)
		- Secondary Structure: Regular sub-structures
			- Alpha Helix (Parallel / Anti-parallel)
			- Beta Sheet ($\frac{11}{3}\approx3.6$ AA per revolution)
			- Hydrogen Bonds (Backbones)
		- Tertiary Structure: Three-dimensional Structure
			- Hydrophobic Interaction (Hydrophobic Sidechain)
			- Sidechain Interactions
				- Disulfide Bridges: Covalent Bonding
		- Quaternary Structure: Complex of protein molecules
			- More Stability
			- Genetic Efficiency (Require less polypeptide → less genes)
			- Completion of Catalytic Sites
			- Cooperativity (Activate / Inhibit)
- Examples
	- Collagen: Triple Helix: Helical structure from 3 polypeptides
	- Hemoglobin: 2 $\alpha$-like globin ($\alpha$, $\zeta$) + 2 $\beta$-like globin ($\varepsilon$, $\gamma$, $\delta$, $\beta$)
		- Defective $\alpha$ globin → $\alpha$-Thalassemia and …($\beta$)
		- Fetal: $\beta$-like → $\delta$ globin

## Enzymes

- Catalysts of Life
- Lower activation (free) energy → More molecule have enough energy
- Increase rxn rate by 14-26 order of magnitude
- Specificity: Active Site
	- Environmental Factors
		- Temperature, pH
		- ATP / AMP
		- Ionic Strength of environment
	- Substrate
		- Stereospecificity
- Nomenclature
	- Oxidoreductase (Redox)
	- Transferase (transfer functional groups)
	- Hydrolase (Hydrolysis)
	- Lyase (Bond Cleavage, non redox, non hydrolysis)
	- Isomerase (Isomerization: usually stereoisomers)
	- Ligase (Bond with ATP cleavage)
- Mostly Protein
	- RNA → Ribozyme
	- Cofactors: Components essential to enzyme activity
	- Coenzymes: Organic Cofactors
		- TTP / FAD / NAD / CoA
	- Holoenzyme: Catalytically active complex of proteins and prosthetic group
	- Apoenzyme: Protein without prosthetic group (usually inactive)
- Flexible & Dynamic
	1. Proximity, Orientation
	2. Weak Binding → Conformal change
	3. Transition-State Stabilization
	4. Reaction
		- Acid-Base Catalysis: Proton transfer
		- Covalent Catalysis: Transient covalent bond
		- Metal Ion Catalysis: Metalloenzyme
- Enzyme Kinetics
	- Rate vs Substrate Concentration: Hyperbolic Relationship
		- $r=\frac{r_\text{max}\left[\ce{S}\right]}{K_{M} + \left[\ce{S}\right]}$ → $\frac{1}{v} = \frac{K_{M}}{r_\text{max}}\frac{1}{\left[\ce{S}\right]} + \frac{1}{r_\text{max}}$
	- $K_{M}$: Michaelis Constants: subs. conc. where $r=\frac{1}{2}r_\text{max}$
	- Low $K_{M}$ → Reach $r_\text{max}$ fast
		- Low conc. → approx. linear
		- High conc. → approx. $r_\text{max}$
	- $k_\text{cat}=\frac{r_\text{max}}{\left[\ce{E}\right]}$: Max rate vs Enzyme conc.
- Reversible Inhibition
	- Competitive: Increase (apparent) $K_{M}$
		- Bind with active site → can overwhelmed by subs. conc.
	- Uncompetitive: Decrease (apparent) $K_{M}$ and $r_\text{max}$
		- Bind with different site when substrate bind with enzyme
	- Mixed (Non-competitive): Decrease $r_\text{max}$; Increase / Decrease $K_{M}$
		- Bind with different site (enzyme w/ or w/o substrate)
- Irreversible Inhibition: destroy active site
	- Alkylation / Acylation
	- Insecticides
	- DFP / Organophosphorus
- Regulation: Activator / Inhibitor
	- Covalent Modification
		- Phosphorylation
	- Proteolytic Cleavage
		- Require Cleavage to activate
	- Allosteric Regulation (allosteric = another shape)
		- Regulator Binding (allosteric / regulatory site ≠ active site)
		- Cooperativity: Binding one active site affect of other sites
- Examples
	- Myoglobin: low $K_{m}$ → cannot release much oxygens  
	  ![Oxygen-binding curves|500](https://upload.wikimedia.org/wikipedia/commons/2/2e/Cooperativity_graph.JPG)
		- 4 Hemoglobin subunits: positive cooperativity
			- sigmoid (not hyperbolic) relationship
			- low $\ce{O2}$ conc. → Tense-state → Less $K_{m}$ (and potentially $r_\text{max}$)
			- high $\ce{O2}$ conc. → Relaxed-state → More $K_{m}$

## Reference

- Handout RAID135
