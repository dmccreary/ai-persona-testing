---
title: Evidence-Preserving Synthesis Workbench
description: Synthesize multi-agent findings while preserving citations, minority opinions, conflicts, uncertainty, and distinct expert critique.
status: scaffold
library: p5.js
bloom_level: TBD
---

# Evidence-Preserving Synthesis Workbench



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 15: Moderation Risks and Brand Strategy](../../chapters/15-moderation-brand-strategy/index.md).

```text
Type: interactive infographic
**sim-id:** evidence-synthesis-workbench<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Bloom level:** Evaluate (L5)

**Bloom verb:** synthesize

**Learning objective:** Synthesize multi-agent findings while preserving citations, minority opinions, conflicts, uncertainty, and distinct expert critique.

**Interaction:** Learners group structured findings into themes, inspect source links, classify conflicts, and draft a synthesis. A devil's-advocate control introduces a supported counterargument.

**Feedback:** The workbench flags unsupported merging, vanished minority evidence, double-counted duplicate agents, and recommendations attributed to personas.

**Responsive design:** Evidence tray and synthesis canvas stack on narrow screens, with keyboard grouping, text export, and resize handling.

**Instructional rationale:** Evidence-based integration and conflict judgment support evaluation and synthesis.

Implementation: Responsive p5.js card workspace with provenance graph.
```

## Related Resources

- [Chapter 15: Moderation Risks and Brand Strategy](../../chapters/15-moderation-brand-strategy/index.md)
