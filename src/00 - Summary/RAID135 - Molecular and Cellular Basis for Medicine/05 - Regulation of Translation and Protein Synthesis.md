# Regulation of Translation and Protein Synthesis

* Transcription: DNA → mRNA
* Translation: mRNA → Polypeptides → Proteins
  * 3 Nucleotides = 1 Codon → 1 Amino Acid
    * $\ce{4^{3}}$ codons → $20+1$ Amino Acid
      * Degeneracy: 1 Amino Acid ← Multiple Codons (Synonymous Codons)
    * Sense Codon: on mRNA (Mostly universal)
      * Start Codon: AUG: Methionine
      * Stop Codon: UAA, UAG, UGA: Nonsense
      * Exceptions: Uncommon Amino Acids / Different association
        * UGA: Not stop codon in MT
    * Anticodon: on tRNA (pairs with sense codon)
  * 5'-to-3' of mRNA → Amine-terminus–to–Carboxyl-Terminus
    * $\ce{H2-\[N^{(+)}H-CRH-CO\]*{n}O- ->\[H3N+-CRH-COO-\] H2-\[N^{(+)}H-CRH-CO\]*{n+1}O-}$
  * Protein Folding
    * Folding begins as soon as section of polypeptides forms
    * Side-chains dictates folding
    * Chaperone (Assist)
    * Secondary Structure: $\alpha$-helix & $\beta$-sheet
      * $\ce{H}$-bond
      * Unfolded structure are free to move (irregular)
    * Tertiary Structure
      * Irregular section aligns to maximize stability
      * Hydrophobic Interaction
      * Ionic Interaction
      * Van der Waals Interaction
    * Quaternary Structure (Optional)
      * Binds with another folded polypeptide
  * Protein Functions
    * Cell shape & Organization
    * Transport
    * Movement
    * Cell Signaling
    * Cell surface recognition
    * Enzyme

## Translation

* tRNA
  * Adapter
  * Recognize codons (via anticodon) & specific amino acids
  * ![The\_tRNA\_cloverleaf\_general.svg|250](https://upload.wikimedia.org/wikipedia/commons/a/ae/The_tRNA_cloverleaf_general.svg)
  * tRNA Nucleotidyltransferase: add 3'-terminal CCA sequence
  * Aminoacyl-tRNA Synthetase (aaRS): add amino acid to CCA-3' terminal
    * Binds with Amino Acids & ATP
    * ATP → AMP + P-P (Release P-P)
    * AMP + Amino Acids
    * Binds with tRNA
    * tRNA + Amino Acids (Release AMP)
    * Release tRNA + Amino Acids (Charged tRNA; Aminoacyl-tRNA)
    * Note: Error rate $\le\frac{1}{10000}$ + Proofreading
  * Have modified nucleic bases
    * Translation Rate
    * Recognition by aaRS
    * 57th base: most variety
    * 34th base: first anticodon
* Ribosome
  * Eukaryotic Ribosome ~ Cytoplasmic
  * Subunits
    * Vague; Each can comprised of multiple proteins and rRNA
    * Prokaryotic (70S)
      * Small: 30S; 21 Proteins + 16S rRNA
      * Large: 50S; 34 Proteins + 5S rRNA + 23S rRNA
      * Components are synthesized and binds in cytoplasm
    * Eukaryote (80S)
      * Small: 40S; 33 Proteins + 18S rRNA
      * Large: 60S; 49 Proteins + 5S rRNA + 5.8S rRNA + 28S rRNA
      * Small & Large subunits are synthesized in nucleolus
      * Assemble and functions in cytoplasm
    * Small Subunit
      * Binds with mRNA (space between subunits)
    * Large Subunit
      * Have space for polypeptide chain exit
  * Regions (Model)
    * Aminoacyl Site (A)
    * Peptidyl Site (P)
    * Exit Site (E)
      * Uncharged tRNA
* Initiation (Initiation Factor; IF)
  * IF1, IF3 binds with 30S Rb Subunit at A,E site resp.
    * Block 50S Subunit
  * mRNA binds with 30S Rb subunit
    * mRNA - rRNA (9 base sequence)
      * Shine-Dalgano sequence on mRNA (before start codon)
      * 16S rRNA
  * Initiator tRNA binds with Start Codon (mRNA)
    * Assist by IF2 + GTP
  * IF1, IF3 unbinds with 30S Rb Subunit
  * IF2 breakdown GTP and unbinds
    * Trigger assembly (50S Rb + 30S Rb → 70S Rb)
  * Components
    * Initial tRNA
      * tRNA<sup>fmet</sup> in bacteria; N-formylmethionine
        * Formyl group can later be eliminated
      * tRNA<sup>met</sup> in Eukaryote; Methionine
    * Initiation Factors (IF)
      * eIFs in Eukaryote
      * eIF2 binds with tRNA<sup>met</sup>
      * eIF4: multicomplex protein
        * Recognize 7-methylguanosine cap at 5' of mRNA
        * Function similar to 16S rRNA in prokaryote
    * mRNA
      * Shine-Dalgano Sequence: Locate Start codon in prokaryote
        * Start codon: AUG, GUG, or UUG
      * 7-methylguanosine cap: Locate Start codon in Eukaryote
        * Kozak's Rule (Eukaryote)
        * A/G at -3; G at +4 → eIF5 release eIFs → 60S + 40S
        * Start codon: AUG
* Elongation (Elongation Factor; EF)
  * 15-20 AA per sec (Prokaryote); 2-6 AA per sec (Eukaryote)
  * Aminoacyl-tRNA binds with A site
    * Hydrolysis of GTP (EF-Tu / eEF1$\alpha$) → Strengthen the binding
    * 16S rRNA (30S Rb Subunit) → Unbinds incorrect tRNA
      * Decoding Function of Ribosome (Validation)
  * Peptidyl Transfer
    * Formation of Peptide bond between peptide at P site and amino acid at A site
    * Peptidyl transferase (50S Rb Subunit; 23S rRNA)
    * tRNA at P site become uncharged
    * tRNA at A site bound with polypeptide chain
  * Translocation ← EF-G / eEF2
    * Rb move along mRNA to next codon
    * move uncharged tRNA to E site
    * move peptidyl tRNA to P site
    * leave A site empty
  * Uncharged tRNA leaves E site
* Termination (Releasing Factor; RF)
  * Stop codon binds with Release Factor (tRNA-like protein)
    * Prokaryote
      * RF1 → UAA & UAG
      * RF2 → UAA & UGA
      * RF3 → Assistance (different site)
    * Eukaryote
      * eRF1 → UAA & UAG & UGA
      * eRF2 → Assistance (different site)
  * Peptidyl-tRNA hydrolyzed to uncharged tRNA and Polypeptide
  * Rb subunits and Release factor disassemble
* Note: In Prokaryote, Translation can begins before Transcription is terminated (Coupling)
* Antibiotics can target Bacterial Translation
  * Usually organic molecule w/ MW $\<\\pu{2000 amu}$
  * Will not affect Eukaryote (different factors)
  * Examples
    * Chloraphenical: Competitive Inhibitor of Peptidyl transferase (50S Rb Subunit)

## Reference

* Handout RAID135
