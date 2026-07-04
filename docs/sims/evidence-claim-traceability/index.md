---
title: Evidence-to-Claim Traceability Map
description: Validate whether a marketing research claim is adequately supported by its source evidence, method, assumptions, and limitations.
status: scaffold
library: vis-network
bloom_level: TBD
---

# Evidence-to-Claim Traceability Map



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 2: Research Design and Evidence Quality](../../chapters/02-research-design-evidence/index.md).

```text
Type: graph-model
**sim-id:** evidence-claim-traceability<br/>
**Library:** vis-network<br/>
**Status:** Specified

**Bloom level:** Evaluate (L5)

**Bloom verb:** validate

**Learning objective:** Validate whether a marketing research claim is adequately supported by its source evidence, method, assumptions, and limitations.

**Node types:** Decision, Research Question, Method, Evidence Item, Interpretation, Claim, Assumption, Constraint, and Limitation. Nodes show a short label plus properties such as source, date, and evidence status.

**Edge types:** ANSWERS, PRODUCES, SUPPORTS, DEPENDS_ON, LIMITED_BY, and CONTRADICTS. Clicking an edge explains the relationship and displays the exact source passage or data field when available.

**Sample graph:** A pricing-page decision connected to interview quotes, a survey result, three synthetic persona findings, and two proposed claims. One claim is deliberately too broad and displays a broken support path.

**Interaction:** Hover shows properties; click highlights the evidence neighborhood; a “Trace claim” control reveals every supporting path; learners can attach or remove evidence and receive feedback about unsupported claims.

**Layout and accessibility:** Hierarchical flow from question to claim, with zoom, pan, drag, keyboard node navigation, text-based graph alternative, and responsive resizing.

**Instructional rationale:** Inspecting and repairing support paths requires evaluation against evidence-quality criteria.

Implementation: vis-network with an accessible side panel and JSON-based sample cases.
```

## Related Resources

- [Chapter 2: Research Design and Evidence Quality](../../chapters/02-research-design-evidence/index.md)
