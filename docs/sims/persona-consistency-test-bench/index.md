---
title: Persona Consistency Test Bench
description: Compare repeated persona responses and distinguish harmless variation, context-sensitive change, behavioral inconsistency, and loss of character fidelity.
status: scaffold
library: p5.js
bloom_level: TBD
---

# Persona Consistency Test Bench



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 9: Persona Consistency, Validation, and Reuse](../../chapters/09-persona-quality-reuse/index.md).

```text
Type: microsim
**sim-id:** persona-consistency-test-bench<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Bloom level:** Analyze (L4)

**Bloom verb:** compare

**Learning objective:** Compare repeated persona responses and distinguish harmless variation, context-sensitive change, behavioral inconsistency, and loss of character fidelity.

**Data visibility requirements:** Show the fixed profile, scenario conditions, three responses, extracted criteria, and changed variables. Learners reveal each layer step by step.

**Interaction:** Highlight passages supporting or contradicting profile fields, classify each difference, and propose a correction. A context toggle demonstrates when changed behavior is justified.

**Feedback:** The tool distinguishes exact-text matching from semantic stability and flags tests that reward robotic repetition.

**Responsive design:** Responses display in columns on wide screens and tabs on narrow screens, with keyboard annotation and resize handling.

**Instructional rationale:** Side-by-side evidence comparison supports analysis of subtle consistency failures.

Implementation: p5.js annotation layer with semantic HTML response panels.
```

## Related Resources

- [Chapter 9: Persona Consistency, Validation, and Reuse](../../chapters/09-persona-quality-reuse/index.md)
