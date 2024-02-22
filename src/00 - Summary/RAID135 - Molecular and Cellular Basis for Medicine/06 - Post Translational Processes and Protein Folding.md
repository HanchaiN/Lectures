# Post Translational Processes and Protein Folding

* Translation → Protein's Primary Structure (Nascent Polypeptide Chain)
  * Amino Acids can be abbreviated to 3 or 1 letter
    * Ex. Methionine = Met = M
* Protein Folding → Protein's Tertiary / Quaternary Structure (Functional Protein)
  * Unique Identity & Functions
  * Anfinsen's Dogma: AA seq. determines native 3D structure
    * Sidechain's interaction → spontaneous folding
    * Exception
      * Stable conformation may be aberrant / non-functional
      * Some sequence can fold differently in each condition
  * Molecular Crowding
    * Nascent polypeptides may interact with nearby molecules (proteins)
    * Potentially non-specific protein aggregation
  * Molecular Chaperones
    * Shepherd (Dog) Proteins
    * Guide the folding into stable functional structure
    * Avoid protein aggregation → Fold to stable enough structure before processing
    * Can bind with nascent polypeptide before termination of translation
    * Families
      * Heat Shock Protein (Hsp)
        * Molecular weight: thousands atomic unit
        * Hsp70 Family
        * Assist in folding (early)
        * Reverse denaturation & Aggregation
        * May assisted by Hsp40 (Cochaperones; associated protein)
        * Normally bound with ATP
        * Hsp90 Family
        * Assist in folding (late) for cellular signaling
        * Hsp60 Family (Chaperonins)
        * Induce refolding of improperly folded protein
        * Bind proteins in barrel-like structure
        * In Prokaryote: GroEL, GroES
        * In Eukaryote: Hsp60, TriC, (& CCT)
        * Trigger Factor
        * Prevent aggregation (early)
        * In Eukaryote: Nascent chain-Associated Complex (NAC)
  * $\approx \pu{85 %}$: Spontaneous Folding (may utilize Hsp70, which requires ATP)
    * Hsp70 + Hsp40 binds with nascent polypeptide
    * Hsp70 binding tighten via ATP Hydrolysis
    * Hsp70 detached from folded polypeptide by acquiring ATP
  * $\approx\pu{15 %}$: Require Hsp70 and Hsp60
    * GroEL/GroES Chaperonin System (researched in *E. Coli*)
      * Anfinsen Cage
        * ![GroES-GroEL.png|200](https://upload.wikimedia.org/wikipedia/commons/9/9e/GroES-GroEL.png)
        * GroES (Co-chaperonin): Cap (7 subunits; blue)
        * GroEL: 2 rings (7 subunits each)
        * Cis ring: Same side as cap (green-red/blue)
        * Trans ring: Opposite side as cap (red/blue-green)
        * Double-barrel structure w/ central cavity
        * Isolated Space → Avoid Molecular Crowding → Properly Folding
      * Hsp70 → Partially folded protein
        * Detached from Hsp70 → Transfer to Chaperonin
      * Substrate protein enters in GroEL cis ring (bound to 7 ATP)
        * Inner of GroEL ring is hydrophobic; attracting proteins
      * GroES cap binds to GroEL cis ring → conformal change
        * Initiating protein refolding
      * Cis Ring catalyze ATP Hydrolysis (within $\pu{10 s}$ of conformal change)
        * 7 ATP → 7 Phosphates
        * Weaken binding between GroES and GroEL
      * Substrate protein enters trans ring then 7 ATP binds to Trans Ring
      * Cis Ring unbinds with 7 ADP, GroES Cap, and folded protein
        * Trans Ring acts as Cis Ring; Binds with GroES cap
      * One cycle: 7 ATP (per substrate protein)
        * Portion of substrate proteins are folded each cycle
        * Exponential decay of unfolded ratio
        * In calculation, round up. (If half are fold, it means at least half are folded.)
  * Protein Misfolding Disease
    * At least 35 fatal human diseases
    * Gain of Function
      * Soluble → Insoluble Fibrous
        * Alzheimer's Disease
        * Parkinson's Disease
      * Aggregation
        * Huntington's Disease
      * Induce conformation changes & Aggregation (Prions)
        * Creutzfeldt-Jakob Disease
    * Loss of Function
      * Cystic Fibrosis
* Post-translational Modification (PTMs)
  * Results: Diversity & Complexity
    * Genome: $\approx\pu{20000-25000}$ genes
    * Transcriptome: $\approx\pu{100000}$ transcripts
      * alternative promoters & splicing & mRNA editing
    * Proteome: $>\pu{1000000}$ proteins (PTMs)
  * Proteolytic Cleavage
    * Activation Mechanism → Delayed activity
    * Protein Translocation: Transfer proteins to targets
    * Examples
      * Remove N-terminal methionine (Met-aminopeptidase)
    * Related Diseases
      * Alzheimer's Disease
  * Covalent Modification
    * Phosphorylation ($\ce{-OPO3H2}$ / $\ce{-Pi}$; via Kinase)
      * Reversible (Dephosphorylation via phosphatases)
      * Usually, Ser / Thr / Thy ($\ce{-OH -> -Pi}$)
      * Utilize ATP / ADP as Donor / Acceptor
      * Control protein functions and activities
      * Cell Communication and signaling
        * e.g. Activated Receptor → Phosphorylated Response Protein
      * Related Diseases
        * Diabetes (Type II)
    * Acetylation ($\ce{-COCH3}$)
      * Reversible (Deacetylation)
      * e.g. Histone Modification (Lysine at N-terminal)
        * Histone acetyltransferase (HAT) & Histone deacetylase (HDAC)
        * Acetyl CoA as Donor
        * Decreased positive charge from Histone → Less affinity w/ DNA → Open chromatin state
        * Related Disease: Cancer
    * Methylation ($\ce{-CH3}$)
      * Reversible (Demethylation)
      * e.g. Histone Modification (Lysine at N-terminal)
        * Histone methyltransferase & Histone demethylase (aka Amine oxidase)
        * SAM (S-adenosyl-L-methionine) as Donor
          * Product: SAH (S-adenosyl-L-homocysteine)
        * Activation / Deactivation depends on where and how much is methylated: Histone Code
        * Related Disease: Cancer
    * Ubiquitination ($\ce{-Ub}$; via Ubiquitin ligase)
      * Reversible (Deubiquitination via Deubiquitinating isopeptidase)
      * Ubiquitin as Donor
      * Mark proteins for degradation (must be tightly regulated)
        * E1: Ubiquitin-activating Enzyme (Ubiquitination of E1)
        * $\ce{Ub-COO- + ATP ->\[E1\] Ub-CO-AMP + 2 Pi}$
        * $\ce{Ub-CO-AMP + E1-SH -> E1-S-CO-Ub + AMP}$
        * E2: Ubiquitin-carrier Protein (Transfer Ub from E1 to E2)
        * $\ce{E1-S-CO-Ub + E2-SH -> E2-S-CO-Ub + S1-SH}$
        * E3: Ligase (Bind E2-Ub and Protein to E3; Transfer Ub from E2 to Protein)
        * $\ce{E3 + PP -> E3:PP}$ ($\ce{PP}$ = Target Protein)
        * $\ce{E3:PP + E2-S-CO-Ub -> PP-Ub + E3 + E2-SH}$
        * Can repeated to at least 4 Ub ($\ce{PP-Ub-Ub-Ub-Ub}$) for certain marking
  * Degradation
    * Dispose of aberrant protein / excessive protein (marked with Ubiquitin)
    * via Proteasome (26S in prokaryote)
    * Utilize ATP
    * Subunits
      * 2x 19S Cap (Head, Tail)
        * 2 x Ub-receptors
        * DUB (Deubiquitination)
        * ATPase
      * 20S Core
        * $\alpha$, $\beta$, $\beta$, $\alpha$; have inner chamber
        * Unfolding & Cleavage
    * Proteasome inhibitor as cancer chemotherapy

## Reference

* Handout RAID135
