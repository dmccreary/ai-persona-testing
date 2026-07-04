---
title: Controlled Prompt Comparison Lab
description: Compare two prompt versions across quality dimensions, repeated runs, and failure severity, then justify a release decision.
status: scaffold
library: Chart.js
bloom_level: TBD
---

# Controlled Prompt Comparison Lab



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 12: Prompt Testing and Research Dialogue](../../chapters/12-prompt-testing-dialogue/index.md).

```text
Type: chart
**sim-id:** prompt-comparison-lab<br/>
**Library:** Chart.js<br/>
**Status:** Specified

**Bloom level:** Evaluate (L5)

**Bloom verb:** compare

**Learning objective:** Compare two prompt versions across quality dimensions, repeated runs, and failure severity, then justify a release decision.

**Chart:** Interactive small multiples for grounding, completeness, fidelity, consistency, and review effort, plus a failure-event strip. Hover shows exact case, run, reviewer note, and prompt version.

**Controls:** Prompt version, test category, persona, model, run count, and metric. A blind-review mode hides version labels until judgment is recorded.

**Feedback:** The tool prevents declaring a winner when cases or settings differ and highlights severe regressions hidden by averages.

**Responsive design:** Charts stack on narrow screens, with keyboard data navigation and table alternative.

**Instructional rationale:** Multi-criteria comparison and release justification support evaluation.

Implementation: Responsive Chart.js dashboard with accessible test-result table.
```

## Related Resources

- [Chapter 12: Prompt Testing and Research Dialogue](../../chapters/12-prompt-testing-dialogue/index.md)
