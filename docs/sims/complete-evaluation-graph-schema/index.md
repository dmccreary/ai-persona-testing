---
title: Complete Evaluation Graph Schema
description: Construct a complete evaluation schema connecting persona, asset, goal, pain point, reaction, criterion, evidence, finding, risk, recommendation, decision, implementation, and outcome nodes.
status: scaffold
library: vis-network
bloom_level: TBD
---

# Complete Evaluation Graph Schema



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 20: Automation, Reporting, and Capstone Systems](../../chapters/20-automation-reporting-capstone/index.md).

```text
Type: graph-model
**sim-id:** complete-evaluation-graph-schema<br/>
**Library:** vis-network<br/>
**Status:** Specified

**Bloom level:** Create (L6)

**Bloom verb:** construct

**Learning objective:** Construct a complete evaluation schema connecting persona, asset, goal, pain point, reaction, criterion, evidence, finding, risk, recommendation, decision, implementation, and outcome nodes.

**Interaction:** Learners add node types, define relationship direction, inspect required properties, and validate sample paths from source evidence to outcome.

**Feedback:** The schema flags vague relationships, unsupported findings, recommendations without owners, and outcomes detached from decisions.

**Responsive design:** Zoomable graph with keyboard traversal, searchable side panel, text triple view, and resize handling.

**Instructional rationale:** Schema construction integrates the course's evidence and decision concepts at the Create level.

Implementation: vis-network model editor with JSON schema validation.
```

## Related Resources

- [Chapter 20: Automation, Reporting, and Capstone Systems](../../chapters/20-automation-reporting-capstone/index.md)
