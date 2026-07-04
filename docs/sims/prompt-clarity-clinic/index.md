---
title: Prompt Specificity and Clarity Clinic
description: Critique vague or conflicting prompt instructions and revise them into specific, clear, testable requirements.
status: scaffold
library: p5.js
bloom_level: TBD
---

# Prompt Specificity and Clarity Clinic



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 11: Structured Prompts and Reliable Outputs](../../chapters/11-structured-prompts/index.md).

```text
Type: microsim
**sim-id:** prompt-clarity-clinic<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Bloom level:** Evaluate (L5)

**Bloom verb:** critique

**Learning objective:** Critique vague or conflicting prompt instructions and revise them into specific, clear, testable requirements.

**Interaction:** Learners annotate ambiguity, missing evidence, undefined criteria, hidden sequence, and conflicting constraints in sample prompts. They rewrite each issue and compare expected outputs.

**Feedback:** The tool explains whether a revision increases useful specificity or merely adds length. A “different reasonable interpretation” button exposes remaining ambiguity.

**Responsive design:** Prompt and feedback panes become tabs on narrow screens; provide keyboard annotation and resize handling.

**Instructional rationale:** Rubric-guided revision supports evaluation of prompt quality.

Implementation: p5.js annotation layer with semantic HTML editor.
```

## Related Resources

- [Chapter 11: Structured Prompts and Reliable Outputs](../../chapters/11-structured-prompts/index.md)
