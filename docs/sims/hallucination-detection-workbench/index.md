---
title: Hallucination Detection Workbench
description: Validate model statements by tracing each factual claim to supplied context, external evidence, or an explicit persona interpretation.
status: scaffold
library: p5.js
bloom_level: TBD
---

# Hallucination Detection Workbench



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 3: AI Capabilities, Limitations, and Bias](../../chapters/03-ai-limits-bias/index.md).

```text
Type: microsim
**sim-id:** hallucination-detection-workbench<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Bloom level:** Apply (L3)

**Bloom verb:** validate

**Learning objective:** Validate model statements by tracing each factual claim to supplied context, external evidence, or an explicit persona interpretation.

**Data visibility requirements:** The left pane shows a product brief with numbered evidence sentences. The center pane shows a persona response with selectable claims. The right pane displays claim status: Supported, Interpretation, Contradicted, or Unsupported.

**Interaction:** Learners highlight a claim and attach an evidence sentence or classification. Immediate feedback explains whether the evidence actually supports the claim. A second round introduces a plausible but nonexistent competitor statistic.

**Controls:** Scenario selector, Show Sources, Verify Claim, Reveal Hint, and Reset. A final report counts unsupported claims and shows corrected wording.

**Responsive behavior and accessibility:** Stack panes on small screens, maintain numbered cross-links, support keyboard highlights, and resize dynamically.

**Instructional rationale:** A worked evidence-tracing task supports applying because learners practice the same verification procedure required in a real study.

Implementation: p5.js highlighting layer with semantic HTML source and response panes.
```

## Related Resources

- [Chapter 3: AI Capabilities, Limitations, and Bias](../../chapters/03-ai-limits-bias/index.md)
