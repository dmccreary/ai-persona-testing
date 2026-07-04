---
title: Prompt Architecture Builder
description: Construct a complete persona-evaluation prompt from objective, role, audience, context, task, constraints, criteria, and output components.
status: scaffold
library: p5.js
bloom_level: TBD
---

# Prompt Architecture Builder



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 10: Prompt Engineering Foundations](../../chapters/10-prompt-engineering/index.md).

```text
Type: interactive infographic
**sim-id:** prompt-architecture-builder<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Bloom level:** Create (L6)

**Bloom verb:** construct

**Learning objective:** Construct a complete persona-evaluation prompt from objective, role, audience, context, task, constraints, criteria, and output components.

**Layout:** A responsive stack of labeled prompt blocks beside a component tray. A live preview shows the assembled prompt and highlights boundaries.

**Interaction:** Learners select a marketing scenario, arrange blocks, edit content, and run a rule-based completeness check. The tool flags conflicting authority, missing evidence boundaries, vague tasks, and outputs that cannot be compared.

**Feedback:** Clicking a block shows its definition, purpose, and one weak and strong example. A “remove block” experiment shows the likely failure mode.

**Accessibility:** Keyboard ordering, text-only editor, visible focus, and vertical layout on narrow screens.

**Instructional rationale:** Building and debugging a prompt architecture supports creating and makes prompt quality inspectable.

Implementation: Responsive p5.js block workspace with semantic HTML editor and export.
```

## Related Resources

- [Chapter 10: Prompt Engineering Foundations](../../chapters/10-prompt-engineering/index.md)
