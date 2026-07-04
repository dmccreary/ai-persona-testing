---
title: Prompt Test Suite Builder
description: Design a balanced prompt test suite with routine, boundary, missing-data, adversarial, persona-fidelity, and schema cases.
status: scaffold
library: p5.js
bloom_level: TBD
---

# Prompt Test Suite Builder



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 12: Prompt Testing and Research Dialogue](../../chapters/12-prompt-testing-dialogue/index.md).

```text
Type: interactive infographic
**sim-id:** prompt-test-suite-builder<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Bloom level:** Create (L6)

**Bloom verb:** design

**Learning objective:** Design a balanced prompt test suite with routine, boundary, missing-data, adversarial, persona-fidelity, and schema cases.

**Interaction:** Learners choose a prompt objective, inspect candidate test cards, and build a suite within a limited execution budget. A coverage map shows untested requirements and overrepresented happy paths.

**Feedback:** Each case requires inputs, expected properties, acceptable variation, and failure signals. The tool flags exact-text expectations and cases that cannot diagnose a specific component.

**Responsive design:** Coverage matrix becomes stacked cards on narrow screens, with keyboard selection, text export, and resize handling.

**Instructional rationale:** Test-suite construction supports creating because learners combine risks and requirements into a new verification system.

Implementation: Responsive p5.js coverage canvas with semantic case editor.
```

## Related Resources

- [Chapter 12: Prompt Testing and Research Dialogue](../../chapters/12-prompt-testing-dialogue/index.md)
