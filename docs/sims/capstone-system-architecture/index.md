---
title: Capstone System Architecture
description: Design an end-to-end capstone architecture integrating research, personas, prompts, agents, rubrics, graph memory, automation, human governance, validation, and reporting.
status: scaffold
library: p5.js
bloom_level: TBD
---

# Capstone System Architecture



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 20: Automation, Reporting, and Capstone Systems](../../chapters/20-automation-reporting-capstone/index.md).

```text
Type: diagram
**sim-id:** capstone-system-architecture<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Bloom level:** Create (L6)

**Bloom verb:** design

**Learning objective:** Design an end-to-end capstone architecture integrating research, personas, prompts, agents, rubrics, graph memory, automation, human governance, validation, and reporting.

**Components:** Intake, Governance, Asset Registry, Persona Library, Prompt Registry, Agent Workflow, Evaluation Store, Knowledge Graph, Review Queue, Reporting, Decision Record, Validation Research, and Improvement Tracking.

**Interaction:** Clicking any component reveals inputs, outputs, owner, tests, risks, and dependencies. Learners can remove a component and observe which controls or evidence paths fail.

**Feedback:** Architecture checks flag missing ownership, circular approval, unvalidated external claims, sensitive data exposure, and reports without provenance.

**Responsive design:** Layered architecture becomes collapsible vertical sections on narrow screens, with keyboard navigation and resize handling.

**Instructional rationale:** Integrating all course systems into a governed architecture represents the Create-level capstone outcome.

Implementation: Responsive p5.js architecture explorer with accessible detail panel.
```

## Related Resources

- [Chapter 20: Automation, Reporting, and Capstone Systems](../../chapters/20-automation-reporting-capstone/index.md)
