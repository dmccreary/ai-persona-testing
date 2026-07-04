---
title: Validity and Reliability Diagnostic
description: Distinguish threats to research validity from threats to research reliability and recommend an appropriate design correction.
status: scaffold
library: p5.js
bloom_level: TBD
---

# Validity and Reliability Diagnostic



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 2: Research Design and Evidence Quality](../../chapters/02-research-design-evidence/index.md).

```text
Type: interactive infographic
**sim-id:** validity-reliability-diagnostic<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Bloom level:** Analyze (L4)

**Bloom verb:** distinguish

**Learning objective:** Distinguish threats to research validity from threats to research reliability and recommend an appropriate design correction.

**Layout:** A two-by-two validity/reliability matrix beside a scenario panel. Scenarios include a leading persona prompt, changing rubrics between runs, surveying only loyal customers, and measuring visual appeal as a substitute for trust.

**Interaction:** Learners place each scenario in the matrix and select a correction. The system highlights the relevant words in the scenario, explains the threat, and shows how one problem can affect both dimensions.

**Feedback:** Corrective actions include neutralizing instructions, standardizing procedure, improving recruitment, aligning measures with constructs, or narrowing the claim. A confidence selector encourages learners to acknowledge ambiguous cases.

**Responsive behavior:** Matrix and scenario panel sit side by side on wide displays and stack on narrow displays. All regions are keyboard selectable and resize dynamically.

**Instructional rationale:** Sorting realistic design failures requires learners to analyze what each study actually measures and how consistently it does so.

Implementation: Responsive p5.js matrix with semantic HTML scenario and correction controls.
```

## Related Resources

- [Chapter 2: Research Design and Evidence Quality](../../chapters/02-research-design-evidence/index.md)
