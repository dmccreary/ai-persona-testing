---
title: Persona Completeness Auditor
description: Assess a persona for evidence quality, causal coherence, relevant specificity, privacy, and completeness for a stated use.
status: scaffold
library: p5.js
bloom_level: TBD
---

# Persona Completeness Auditor



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 6: Persona Motivations, Behaviors, and Evidence](../../chapters/06-persona-behavior-evidence/index.md).

```text
Type: microsim
**sim-id:** persona-completeness-auditor<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Bloom level:** Evaluate (L5)

**Bloom verb:** assess

**Learning objective:** Assess a persona for evidence quality, causal coherence, relevant specificity, privacy, and completeness for a stated use.

**Controls:** Purpose selector, profile-field checklist, source-status toggles, contradiction flag, sensitivity flag, and scenario completeness controls.

**Visual elements:** A transparent radar-style quality view with axes for Purpose Fit, Evidence, Decision Logic, Scenario, Safety, and Uncertainty. Scores reveal criteria and never hide missing information behind one total.

**Interaction:** Learners audit two profiles, revise weak fields, and compare improvements. The tool rewards removal of irrelevant fictional detail as well as addition of necessary evidence.

**Feedback:** Every warning links to the exact field and explains whether to source, revise, remove, narrow, or mark unknown.

**Responsive and accessible design:** Use labeled HTML controls, a table alternative, patterns, keyboard access, and resize events.

**Instructional rationale:** Rubric-based revision supports evaluation by requiring judgments about fitness for purpose rather than profile length.

Implementation: p5.js quality visualization with semantic form controls and exportable audit report.
```

## Related Resources

- [Chapter 6: Persona Motivations, Behaviors, and Evidence](../../chapters/06-persona-behavior-evidence/index.md)
