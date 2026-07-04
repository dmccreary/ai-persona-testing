---
title: Portfolio Coverage and Overlap Explorer
description: Assess a persona portfolio for meaningful differentiation, redundant overlap, decision coverage, diversity, and influence balance.
status: scaffold
library: vis-network
bloom_level: TBD
---

# Portfolio Coverage and Overlap Explorer



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 9: Persona Consistency, Validation, and Reuse](../../chapters/09-persona-quality-reuse/index.md).

```text
Type: graph-model
**sim-id:** persona-coverage-overlap<br/>
**Library:** vis-network<br/>
**Status:** Specified

**Bloom level:** Evaluate (L5)

**Bloom verb:** assess

**Learning objective:** Assess a persona portfolio for meaningful differentiation, redundant overlap, decision coverage, diversity, and influence balance.

**Node types:** Persona, Need, Behavior, Context, Criterion, Risk, Journey State, and Evidence Source. Similarity edges show shared decision features, not demographic appearance.

**Interaction:** Select a persona to highlight its coverage neighborhood, adjust overlap threshold, remove a profile, and observe lost or preserved coverage. Weight controls reveal influence imbalance.

**Feedback:** The tool identifies near duplicates, uncovered high-priority risks, unsupported diversity claims, and unjustified weights. Learners must justify merge, retain, or add decisions.

**Responsive design:** Force graph with zoom, pan, keyboard traversal, side panel, text matrix alternative, and resize handling.

**Instructional rationale:** Evaluating network coverage and redundancy supports portfolio-level judgment.

Implementation: vis-network with a transparent similarity function and accessible matrix view.
```

## Related Resources

- [Chapter 9: Persona Consistency, Validation, and Reuse](../../chapters/09-persona-quality-reuse/index.md)
