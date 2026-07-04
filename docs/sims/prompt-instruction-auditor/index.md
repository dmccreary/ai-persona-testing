---
title: Prompt Instruction Quality Auditor
description: Critique a persona-evaluation prompt for objective alignment, role separation, context quality, task clarity, constraints, criteria, output structure, and uncertainty handling.
status: scaffold
library: p5.js
bloom_level: TBD
---

# Prompt Instruction Quality Auditor



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 10: Prompt Engineering Foundations](../../chapters/10-prompt-engineering/index.md).

```text
Type: microsim
**sim-id:** prompt-instruction-auditor<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Bloom level:** Evaluate (L5)

**Bloom verb:** critique

**Learning objective:** Critique a persona-evaluation prompt for objective alignment, role separation, context quality, task clarity, constraints, criteria, output structure, and uncertainty handling.

**Interaction:** Learners annotate a prompt, select failure risks, and rewrite weak sections. The auditor runs scenario-based checks rather than assigning an unexplained total score.

**Test cases:** Hidden instruction inside marketing copy, missing persona evidence, conflicting roles, vague “be unbiased” constraint, undefined rating scale, and output without citations.

**Feedback:** Each issue links to the affected output and shows how a revised instruction changes the expected behavior. Compare mode displays version differences.

**Responsive design:** Prompt and audit panel sit side by side on wide screens and become tabs on narrow screens. Support keyboard annotation and resize handling.

**Instructional rationale:** Rubric-based prompt critique supports evaluation and prepares learners for systematic testing.

Implementation: p5.js annotation overlay with semantic HTML prompt editor and tests.
```

## Related Resources

- [Chapter 10: Prompt Engineering Foundations](../../chapters/10-prompt-engineering/index.md)
