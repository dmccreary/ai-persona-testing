---
title: Structured Response Schema Lab
description: Design and validate an output schema containing observation, interpretation, rating, evidence, confidence, recommendation, rationale, citation, and missing-data fields.
status: scaffold
library: p5.js
bloom_level: TBD
---

# Structured Response Schema Lab



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 11: Structured Prompts and Reliable Outputs](../../chapters/11-structured-prompts/index.md).

```text
Type: microsim
**sim-id:** structured-response-schema<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Bloom level:** Create (L6)

**Bloom verb:** design

**Learning objective:** Design and validate an output schema containing observation, interpretation, rating, evidence, confidence, recommendation, rationale, citation, and missing-data fields.

**Interaction:** Learners assemble fields, define types and required status, set rating anchors, and validate sample persona responses. They repair missing citations, unsupported recommendations, and invalid confidence values.

**Visual elements:** A schema tree, sample response, and traceability path. Clicking a field highlights every dependent field.

**Feedback:** The tool explains why syntactic validity does not guarantee evidentiary validity and tests cross-field rules.

**Responsive design:** Tree becomes a collapsible list on narrow screens, with keyboard editing, text export, and resize handling.

**Instructional rationale:** Schema construction and sample validation support creating an analysis-ready response design.

Implementation: p5.js schema visualization with semantic form controls.
```

## Related Resources

- [Chapter 11: Structured Prompts and Reliable Outputs](../../chapters/11-structured-prompts/index.md)
