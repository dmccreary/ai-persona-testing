---
title: Evidence Triangulation Studio
description: Validate a marketing claim by combining appropriately independent synthetic, behavioral, qualitative, quantitative, and expert evidence.
status: scaffold
library: vis-network
bloom_level: TBD
---

# Evidence Triangulation Studio



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 4: Responsible AI, Privacy, and Governance](../../chapters/04-responsible-ai-governance/index.md).

```text
Type: graph-model
**sim-id:** evidence-triangulation-studio<br/>
**Library:** vis-network<br/>
**Status:** Specified

**Bloom level:** Evaluate (L5)

**Bloom verb:** validate

**Learning objective:** Validate a marketing claim by combining appropriately independent synthetic, behavioral, qualitative, quantitative, and expert evidence.

**Node types:** Claim, Synthetic Finding, Interview Theme, Survey Result, Behavioral Metric, Market Source, Expert Review, Assumption, and Limitation. Node properties show owner, date, method, and independence group.

**Edges:** SUPPORTS, CONTRADICTS, SHARES_SOURCE_WITH, LIMITED_BY, and REQUIRES_VALIDATION. Clicking an edge explains its evidentiary meaning.

**Interaction:** Learners build a support network for one of four claims. The credibility meter rewards method diversity and source independence, flags duplicated evidence, and lowers confidence when contradictory evidence is ignored.

**Feedback:** Selecting “Ready to report” generates a claim audit explaining its supported scope, unresolved uncertainty, and next validation step.

**Responsive design:** Force-directed graph with zoom, pan, drag, keyboard traversal, accessible side panel, and resize handling.

**Instructional rationale:** Constructing and auditing a multi-source evidence network directly practices evaluation rather than simple recall.

Implementation: vis-network with rule-based independence scoring and JSON scenarios.
```

## Related Resources

- [Chapter 4: Responsible AI, Privacy, and Governance](../../chapters/04-responsible-ai-governance/index.md)
