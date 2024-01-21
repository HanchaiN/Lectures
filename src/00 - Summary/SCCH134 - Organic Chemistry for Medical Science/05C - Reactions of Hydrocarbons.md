# Reactions of Hydrocarbons

* Acidity: $\ce{C-H \<=> C- + H+}$
  * $\ce{R#CH} > \ce{R2C=CHR} > \ce{CHR3}$
    * Stability of Carbanion: $\ce{R#C-} > \ce{R2C=C^{-}R} > \ce{C^{-}R3}$
  * No reaction with $\ce{NaOH}$, $\ce{NaOEt}$ but $\ce{R#CH}$ react with $\ce{NaNH2}$
* Substitution Reaction
  * Halogenation: $\ce{R-H + X2 ->\[h\nu / \Delta\] R-X + HX}$
    * Radical Substitution
      * Carbon Radical Intermediate
        * Attract Functional Group → Prefer Tertiary Halides
    * Discoloration of Halogens in bright condition
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
      * Alternatively, use NBS (*N*-Bromosuccinimide to create radicals to avoid Halogenation Addition)
      * Note: Ratio per Homotopic (same position-ish) Hydrogen
        * $\ce{F}\to1:1:1$
        * $\ce{Cl}\to1:3.8:5.0$
        * $\ce{Br}\to1:82:1600$
  * Hydroxylation (via Peroxidation): $\ce{R + R'-O-OH ->\[O2\]\[h\nu / \Delta\] ROH}$
    * Radical Substitution
      * Carbon Radical Intermediate
        * Attract Functional Group → Prefer Tertiary Alcohol (and Allylic / Benzylic)
    * Reagent: TBHP (tert-Butylhydroperoxide) $\ce{(CH3)3C-O-OH}$
    * Mechanism (Radical Mechanism)
      1. Peroxidation
         1. Initiation Step
            1. $\ce{R-O-OH ->\[h\nu / \Delta\] R-O. + HO.}$
         1. Propagation Step
            1. $\ce{R-H + HO. -> R. + H2O}$
            1. $\ce{R. + O2 -> R-O-O.}$
            1. $\ce{R-O-O. + R-H -> R-O-OH + R.}$
      1. Termination
         1. $\ce{R-O-OH + R. -> R-O. + R-OH}$
         1. $\ce{R-O. + R-H -> R-OH + R.}$
* Addition Reaction
  * Hydrogenation: $\ce{R=R + H2 ->\[Pd / C\] RH-RH}$ and $\ce{R#R + 2H2 ->\[Pd / C\] RH2-RH2}$
    * Catalyst
      * Alkene Syn-Addition / Alkyne Full Addition: $\ce{Pd / C}$ or $\ce{Ni}$ or $\ce{Pt}$
      * Alkyne Partial Syn-Addition: Lindlar's Catalyst  
        (Poisoned catalyst: $\ce{Pd + BaSO4}$ or $\ce{Pd + CaCO3}$)
        * Results in cis-Alkene
      * Alkyne Partial Anti-Addition: $\ce{Na / NH3}$ or $\ce{Li / NH3}$
        * Results in trans-Alkene
    * Mechanism
      * Alkene addition: Concerted (Ring transition state → Syn-Addition)
        1. $\ce{H-H + 2 M \<-> 2 H-M}$
        1. $\ce{C=C + 2 H-M -> CH-CH}$
      * Alkyne Full Addition: 2 x Alkene Addition
      * Alkyne Syn Addition: 1 x Alkene Addition
      * Alkyne Anti Addition
        1. $\ce{R-C#C-R ->\[+M\]\[-M+\] R-C.=C^{-}-R ->\[+NH3\]\[-NH2-\] R-C.=CH-R}$
           * Anti Addition from the steric effect and *cis*-radical anion electronic repulsion in $\ce{R-C.=C^{-}-R}$ → Prefer *trans*-
        1. $\ce{R-C.=CH-R ->\[+M\]\[-M+\] R-C^{-}=CH-R ->\[+NH3\]\[-NH2-\] C-RH=RH-C}$
  * Halohydrin Formation: $\ce{R=R ->\[X2\]\[ROH\] R(OR)-R(X)}$
    * Anti-Addition
      * Ring Intermediate + Stereospecific (Inversion) Substitution ($\ce{S\_{N}2}$) → Anti-addition
      * Nucleophilic Substitution + Substitute w/ $\ce{ROH}$
        * More $\ce{R}$ → More Electrophilic → Attract $\ce{ROH}$
        * $\ce{X}$ disfavor $\ce{C}$ with more $\ce{H}$
    * Reagent: $\ce{ROH}$ or $\ce{H2O}$
    * Similar to Halogenation via Halonium Ions
  * Halogenation: $\ce{R=R + X2 -> RX-RX}$
    * Anti-Electrophilic Addition
      * Ring Intermediate + Stereospecific (Inversion) Substitution ($\ce{S\_{N}2}$) → Anti-addition
        * Note: Can be non-stereospecific if halonium ring open first ($\ce{S\_{N}1}$)
    * Discoloration of Halogens in dark condition
    * Mechanism  
      ![Alkene-bromine-addition-2D-skeletal.png](https://upload.wikimedia.org/wikipedia/commons/3/33/Alkene-bromine-addition-2D-skeletal.png)
      1. $\ce{R=R + X-X -> R(X+)R + X-}$
         * Note: Halonium ($\ce{RX+R}$) is a ring
      1. $\ce{RX+R + X- -> RX-RX}$
         * Nucleophilic Substitution $\ce{S\_{N}2}$
  * Hydrohalogenation: $\ce{R=R + HX -> RX-RH}$
    * Non-stereospecific Electrophilic Addition
      * Carbocation Intermediate → Non-stereospecific
      * Carbocation Intermediate + Attract Functional Group
        * Markovnikov Addition → $\ce{H}$ prefer $\ce{C}$ with more $\ce{H}$
          * Alkyne $\ce{R#R + 2 HX -> RX2-RH2}$
        * Possible Rearrangement
    * Mechanism (Ionic Mechanism)
      1. $\ce{R=R + H-X -> R+-RH + X-}$
      1. $\ce{R+-RH + X- -> RX-RH}$
  * Hydrohalogenation: $\ce{R=R + HX ->\[H2O2\]\[\\Delta\] RH-RX}$
    * Non-stereospecific Radical Addition
      * Carbon Radical Intermediate → Non-stereospecific
      * Carbon Radical Intermediate + Attacked by Function Group
        * Anti-Markovnikov Addition → $\ce{H}$ disfavor $\ce{C}$ with more $\ce{H}$
          * Alkyne $\ce{R#R + 2 HX ->\[H2O2\] RH2-RX2}$
    * Reagent: $\ce{H2O2}$ or $\ce{ROOR}$ or $\ce{O2}$
    * Mechanism (Radical Mechanism)
      1. Initiation Step
         1. $\ce{RO-OR ->\[\\Delta\] .OR}$
         1. $\ce{HX ->\[+RO.\]\[-ROH\] X.}$
            * Note: Halogen Radical is more stable than Hydrogen Radical
      1. Propagation Step
         1. $\ce{R=R ->\[+X.\] R.-RX}$
         1. $\ce{R.-RX ->\[+HX\]\[-X.\] RH-RX}$
  * Hydration Reaction (acid-catalyzed): $\ce{R=R + H2O ->\[H+\] ROH-RH}$
    * Non-stereospecific Electrophilic Addition
      * Carbocation Intermediate → Non-stereospecific
      * Carbocation Intermediate + Attract Functional Group
        * Markovnikov Addition → $\ce{H}$ prefer $\ce{C}$ with more $\ce{H}$
        * Possible Rearrangement
    * Alkyne → Rearrangement from $\ce{sp^{2}}$-carbocation ($\ce{R=C+-R2}$) to $\ce{p}$-carbocation ($\ce{R3-C+}$)
    * Mechanism
      1. $\ce{R=R ->\[+H+\] R+-RH}$
      1. $\ce{R+-RH ->\[+H2O\] R(OH2+)-RH ->\[-H+\] R(OH)-RH}$
  * Hydration Reaction (Oxymercuration-Demercuration): $\ce{R=R ->\[\\text{1.} Hg(OAc)2, H2O\]\[\\text{2.} NaBH4\] ROH-RH}$
    * Anti-Addition
      * Ring Intermediate + Stereospecific (Inversion) Substitution ($\ce{S\_{N}2}$) → Anti-Addition
        * (+) Stereospecific (Retention) Substitution (No Effect)
      * Nucleophilic Substitution + Substitute w/ Functional Group
        * More $\ce{R}$ → More Electrophilic → Attract Functional Group
        * Markovnikov Addition → $\ce{H}$ prefer $\ce{C}$ with more $\ce{H}$
    * Alkyne → (Enol → Keto) Tautomerization → No Double-Addition
      * Partial Addition
      * Exceptions:
        * Prefer Phenol $\ce{Ar-OH}$
        * Prefer Enol to 1,3-diketones ($\ce{-CO-C=COH-{} \<=> -CO-C-CO-{}}$) (H-bond from ketone to alcohol)
  * Hydration Reaction (Hydroboration-oxidation): $\ce{R=R ->\[\\text{1.} BH3, THF\]\[\\text{2.} H2O2, NaOH\] RH-ROH}$
    * Syn-Addition
      * Addition w/ ring transition state → Syn-Addition
        * (+) Stereospecific (Retention) Substitution (No Effect)
      * Steric Effect + Substitute w/ Halide
        * Anti-Markovnikov Addition → $\ce{H}$ disfavor $\ce{C}$ with more $\ce{H}$
    * Alkyne → (Enol → Keto) Tautomerization → No Double-Addition
      * Use $\ce{R2BH}$ instead of $\ce{BH3}$ (One Hydride → Avoid Multiple Addition)
    * Mechanism
      1. Hydroboration
         1. $\ce{R=R ->\[+BH3\] RH-R(BH2)}$
         1. $\ce{RH-R(BH2) ->\[+2R=R\] (RH-R)3B}$
      1. Oxidation
         1. $\ce{(RH-R)3B ->\[H2O2,NaOH\] 3RH-ROH + B(OH)3}$
  * Epoxidation Reaction: $\ce{R=R + RO-O-OH -> R-Ep-R + RO-OH}$
    * Syn-Addition
      * Addition w/ ring product → Syn-Addition
    * Reagent: Percarboxylic Acid e.g. *m*-CPBA
    * Mechanism: Concerted  
      ![Mcpbaepoxidation-updated.png](https://upload.wikimedia.org/wikipedia/commons/5/5d/Mcpbaepoxidation-updated.png)
  * Epoxide ring opening (acidic): $\ce{R-Ep-R + Nu ->\[H+\] R-CNu-COH-R}$
    * Anti-Substitution ($\ce{S\_{N}2}$)
    * Mechanism: Concerted  
      ![Epoxide\_hydrolysis.svg](https://upload.wikimedia.org/wikipedia/commons/1/12/Epoxide_hydrolysis.svg)
      * $\ce{Nu}$ prefer $\ce{C}$ with less $\ce{H}$ (carbocation character)
  * Epoxide ring opening (basic): $\ce{R-Ep-R + Nu- -> R-COH-CNu-R + OH-}$
    * Anti-Substitution ($\ce{S\_{N}2}$)
    * Mechanism: Concerted  
      ![Epoxide\_hydrolysis.svg](https://upload.wikimedia.org/wikipedia/commons/1/12/Epoxide_hydrolysis.svg)
      * $\ce{Nu}$ prefer $\ce{C}$ with more $\ce{H}$ (steric effect)
* Oxidation of Alkenes
  * Dihydroxylation Reaction: $\ce{R=R ->\[KMnO4\]\[H2O,OH-\] ROH-ROH}$
    * Oxidative Syn-Addition
      * Ring Intermediate → Syn-Addition
    * Reagent: $\ce{KMnO4}$ in cold (room temperature) and neutral - mildly-basic condition
    * Decoloration of Potassium Permanganate
    * Mechanism: Concerted  
      ![Two different paths to produce a glycol. .svg](https://chem.libretexts.org/@api/deki/files/429757/Two_different_paths_to_produce_a_glycol._.svg)
  * Oxidative Cleavage: $\ce{R=R ->\[KMnO4\]\[H+ \text{or} \Delta\] R=O + O=R}$
    * Note: $\ce{R=CHR -> R-CO-H ->\[KMnO4\]\[H+ \text{or} \Delta\] R-CO-OH}$
    * Reagent: $\ce{KMnO4}$ in hot or acidic condition
    * Decoloration of Potassium Permanganate
    * Mechanism: Concerted (Similar to dihydroxylation)
* Oxidation of Alkynes
  * Oxidative Cleavage: $\ce{R=R ->\[KMnO4,H2O\] ROOH + HOOR}$
    * Note: May ionize to $\ce{RCOO-}$ in basic, hot condition
    * Note: $\ce{HO-CO-OH ->\[KMnO4\]\[H+ \text{or} \Delta\] CO2 + H2O}$
* Electrophilic Aromatic Substitution: $\ce{Ar-H + E+ -> Ar-E + H+}$
  * Reagent (Aromatic compounds are too stable and electron-rich for nucleophilic substitution; Lewis acids induce strong electrophile)
    * Halogenation: $\ce{Ar-H ->\[X2\]\[AlX3 \text{or} FeX3\] Ar-X}$
      * $\ce{X2 + AlX3 -> X+ + Al^{-}X4}$
      * $\ce{Al^{-}X4 + H+ -> AlX3 + HX}$
    * Friedel-Crafts Alkylation: $\ce{Ar-H ->\[R-X\]\[AlX3 \text{or} FeX3\] Ar-R}$
      * $\ce{R-X + AlX3 -> R+ + Al^{-}X4}$
        * Possible Rearrangement
      * Use $\ce{Al^{-}X4}$ to accept original hydrogen (like Halogenation)
    * Friedel-Crafts Acylation: $\ce{Ar-H ->\[R-CO-X\]\[AlX3 \text{or} FeX3\] Ar-CO-R}$
      * $\ce{R-CO-X + AlX3 -> R-C+(=O) + Al^{-}X4}$
      * Use $\ce{Al^{-}X4}$ to accept original hydrogen (like Halogenation)
      * Can later reduce carbonyl (Aldehyde / Ketone) out (Indirect Friedel-Crafts Alkylation)
        * Clemmensen Reduction: $\ce{Zn / Hg , H+}$
        * Wolff Kishner Reduction: $\ce{H2N-NH2, NaOH}$ (Hydrazine in alkali @ High Temperature)
    * Nitration: $\ce{Ar-H ->\[\\text{conc.} HNO3\]\[\\text{conc.} H2SO4\] Ar-NO2}$
      * $\ce{HO-NO2 \<=>\[H2SO4\] H2O+-NO2 \<=> NO2+}$
      * Use $\ce{H2O}$ to accept original hydrogen
    * Sulfonation: $\ce{Ar-H ->\[\\text{conc.} H2SO4\]\[\\Delta\] Ar-SO3H}$
      * $\ce{HO-SO3H ->\[H2SO4\]\[-H2O\] SO3}$
      * Use $\ce{H2O}$ to accept original hydrogen
  * Directing Groups (compared to $\ce{H}$)
    * *ortho*-/*para*-directing group
      * Electron Donating Group (EDG)
      * Resonance structure as *ortho*-/*para*-Aromatic Carbanion (attract positive substitution group): $\ce{Ar-Z \<-> Ar^{-}=Z+}$
    * *meta*-directing group
      * Electron Withdrawing Group (EWG)
      * Resonance structure as *ortho*-/*para*-Aromatic Carbocation (repel positive substitution group): $\ce{Ar-Z \<-> Ar+=Z-}$
  * Activating / Deactivating Groups (compared to $\ce{H}$)
    * Induce Negative / Positive partial charge on benzene ring, Making Electrophile prefer/disfavor the phenyl group
    * Note: Friedel-Crafts may not occur if benzene is deactivated
  * Electron Donating Group & Electron Withdrawing Groups
    * Overview
      * Resonance Effect > Inductive Effect
      * Negative: EDG; Positive: EWG
    1. $\pi$-donors (Resonance): $\ce{-NH2}, \ce{-NHR}, \ce{-NR2} > \ce{-OH} > \ce{-OR} > \ce{-NH-CO-R} > \ce{-O-CO-R}$
    1. $\sigma$-donors (Inductive): $\ce{-CH} > \ce{-R} > \ce{-Ar}$
    1. Halogens (Negative Resonance + Positive Inductive):
       * *o*-/*p*-directing (have electron to donate)
       * Deactivating (high EN and induce positive phenol)
    1. Carbonyls and Others: $\ce{-CHO}, \ce{-COR} \< \ce{-SO3H} \< \ce{-COOH} \< \ce{-C#N} \< \ce{-N+R3} \< \ce{-NO2}$
  * Mechanism
    1. $\ce{Ar-H + E+ -> Ar+(H)E -> Ar-E + H+}$ (No rearrangement)
* Benzylic Oxidation
  * $\ce{Ph-CHR2 ->\[KMnO4\]\[H+,\Delta\] Ph-COOH}$
    * Require at least one benzylic hydrogen

## Reference

* Handout SCCH134
