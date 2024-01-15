# Reactions of Hydrocarbons

* Acidity: $\ce{C-H \<=> C- + H+}$
  * $\ce{R#CH} > \ce{R2C=CHR} > \ce{CHR3}$
    * Stability of carboanion: $\ce{R#C-} > \ce{R2C=C^{-}R} > \ce{C^{-}R3}$
  * No reaction with $\ce{NaOH}$, $\ce{NaOEt}$ but $\ce{R#CH}$ react with $\ce{NaNH2}$
* Substitution Reaction
  * Halogenation: $\ce{R-H + X2 ->\[h\nu / \Delta\] R-X + HX}$
    * Radical Substitution
      * Stability of Carbon Radical → Prefer Tertiary Halides
    * Mechanism (Radical Mechanism)
      1. Initiation Step
         1. $\ce{X2 ->\[h\nu / \Delta\] 2X.}$
      1. Propagation Step
         1. $\ce{R-H + X. -> R. + HX}$
         1. $\ce{R. + X2 -> R-X + X.}$
      1. Termination Step
         1. $\ce{2X. -> X2}$
         1. $\ce{R. + R. -> R-R}$
         1. $\ce{R. + X. -> R-X}$
    * Prefer $\ce{Br.}$
      * Stability of halogen radical: $\ce{I.} > \ce{Br.} > \ce{Cl.}$
      * Reactivity of halogen radical: $\ce{I.} \< \ce{Br.} \< \ce{Cl.}$
      * $\ce{I.}$ is too inert
      * $\ce{Cl.}$ is too reactive, low selectivity (%major ~ %minor; may prioritize multiplicity)
  * Hydroxylation: $\ce{R + R'-O-OH ->\[O2\]\[h\nu / \Delta\] ROH}$
    * Radical Substitution
      * Stability of Carbon Radical → Prefer Tertiary Alcohol
    * Reagent: TBHP (tert-Butylhydroperoxide) $\ce{(CH3)3C-O-OH}$
    * Mechanism (Radical Mechanism)
* Addition Reaction
  * Hydrogenation: $\ce{R=R + H2 ->\[Pd / C\] RH-RH}$ and $\ce{R#R + 2H2 ->\[Pd / C\] RH2-RH2}$
    * Catalyst
      * Alkene Syn-Addition / Alkyne Full Addition: $\ce{Pd / C}$ or $\ce{Ni}$ or $\ce{Pt}$
      * Alkyne Syn-Addition: Lindlar's Catalyst (Poisoned catalyst: $\ce{Pd + BaSO4}$ or $\ce{Pd + CaCO3}$)
        * Results in cis-Alkene
      * Alkyne Anti-Addition: $\ce{Na / NH3}$ or $\ce{Li / NH3}$
        * Results in trans-Alkene
    * Mechanism
      * Alkene addition: Concerted
        1. $\ce{H-H + 2 M \<-> 2 H-M}$
        1. $\ce{C=C + 2 H-M -> CH-CH}$
      * Alkyne Full Addition: 2 x Alkene Addition
      * Alkyne Syn Addition: 1 x Alkene Addition
      * Alkyne Anti Addition
        1. $\ce{R-C#C-R ->\[+M\]\[-M+\] R-C.=C^{-}-R ->\[+NH3\]\[-NH2-\] R-C.=CH-R}$
           * Anti Addition from the steric effect and cis-radical anion electronic repulsion in $\ce{R-C.=C^{-}-R}$
        1. $\ce{R-C.=CH-R ->\[+M\]\[-M+\] R-C^{-}=CH-R ->\[+NH3\]\[-NH2-\] C-RH=RH-C}$
  * Halogenation: $\ce{R=R + X2 -> RX-RX}$
    * Anti-Addition
    * Mechanism
      1. $\ce{R=R + X-X -> RX+R + X-}$
         
         * "Nucleophilic" Addition
         
         * Note: $\ce{RX+R}$ triangle
           
           ````smiles
           C1([R])([R])[X+]C1([R])([R])
           ````
      
      1. $\ce{RX+R + X- -> RX-RX}$
         
         * Nucleophilic Substitution ($\ce{S\_{N}2}$)
  * Hydrohalogenation: $\ce{R=R + HX -> RX-RH}$
    * Non-stereospecific Electrophilic Addition
      * Stability of Carboxation → Prefer Tertiary Halides
      * Markovnikov Addition → $\ce{H}$ prefer $\ce{C}$ with more $\ce{H}$
    * Mechanism (Ionic Mechanism)
      1. $\ce{R=R + H-X -> R+-RH + X-}$
         * Electrophilic Addition
      1. $\ce{R+-RH + X- -> RX-RH}$
  * Hydrohalogenation: $\ce{R=R + HX ->\[H2O2\]\[\\Delta\] RH-RX}$
    * Non-stereospecific Radical Addition
      * Stability of Carbon Radical → Disfavor Tertiary Halides
      * Anti-Markovnikov Addition → $\ce{H}$ disfavor $\ce{C}$ with more $\ce{H}$
    * Catalyst: $\ce{H2O2}$ or $\ce{ROOR}$
    * Mechanism (Radical Mechanism)
      1. Initiation Step
         1. $\ce{RO-OR ->\[\\Delta\] .OR}$
         1. $\ce{HX ->\[+RO.\]\[-ROH\] X.}$
            * Note: Halogen Radical is more stable than Hydrogen Radical
      1. Propagation Step
         1. $\ce{R=R ->\[+X.\] R.-RX}$
            * Radical Addition
         1. $\ce{R.-RX ->\[+HX\]\[-X.\] RH-RX}$
  * Hydration Reaction (acid-catalyzed): $\ce{R=R + H2O ->\[H+\] ROH-RH}$
    * Non-stereospecific Electrophilic Addition
      * Stability of Carbocation → Prefer tertiary alcohol
      * Markovnikov Addition → $\ce{H}$ prefer $\ce{C}$ with more $\ce{H}$
    * Mechanism (Acid-catalyzed)
      1. $\ce{R=R ->\[+H+\] R+-RH}$
         * Electrophilic Addition
      1. $\ce{R+-RH ->\[+H2O\] R(OH2+)-RH ->\[-H+\] R(OH)-RH}$
  * Hydration Reaction (Hydroboration-oxidation): $\ce{R=R + H2O ->\[H+\] ROH-RH}$
    * Mechanism
      1. Hydroboration
         1. $\ce{R=R ->\[+BH3\] RH-R(BH2)}$
            * "Nucleophilic" Addition
         1. $\ce{RH-R(BH2) ->\[+2R=R\] (RH-R)3B}$
      1. Oxidation
         1. $\ce{(RH-R)3B ->\[H2O2,NaOH\] 3RH-ROH + B(OH)3}$

## Reference

* Handout SCCH134
