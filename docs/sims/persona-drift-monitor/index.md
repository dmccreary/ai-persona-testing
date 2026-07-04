---
title: Persona Drift Monitor
description: Examine persona behavior across versions and identify factual, goal, expertise, preference, and tone drift.
status: scaffold
library: Chart.js
bloom_level: TBD
---

# Persona Drift Monitor



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 9: Persona Consistency, Validation, and Reuse](../../chapters/09-persona-quality-reuse/index.md).

```text
Type: chart
**sim-id:** persona-drift-monitor<br/>
**Library:** Chart.js<br/>
**Status:** Specified

**Bloom level:** Analyze (L4)

**Bloom verb:** examine

**Learning objective:** Examine persona behavior across versions and identify factual, goal, expertise, preference, and tone drift.

**Chart:** Multi-series line and event chart. X-axis shows test date or version. Y-axis shows transparent rubric scores for five fidelity dimensions. Model, prompt, and evidence updates appear as selectable event markers.

**Interaction:** Hover reveals exact score, test case, evidence excerpt, and version. Learners toggle dimensions, select a suspicious change, and inspect before/after responses. A threshold control demonstrates sensitivity without declaring one universal cutoff.

**Feedback:** The tool asks whether the change is expected, harmful, or an intentional persona refinement, then compares the answer with documented change notes.

**Responsive design:** Chart legend collapses on small screens; provide a table alternative and keyboard data navigation.

**Instructional rationale:** Pattern finding across versions supports analysis and makes drift attributable to change events.

Implementation: Responsive Chart.js visualization linked to accessible response panels.
```

## Related Resources

- [Chapter 9: Persona Consistency, Validation, and Reuse](../../chapters/09-persona-quality-reuse/index.md)
