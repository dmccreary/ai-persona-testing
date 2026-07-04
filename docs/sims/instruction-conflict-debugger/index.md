---
title: Instruction Conflict Debugger
description: Deconstruct a prompt into instruction sources, identify ambiguity and conflict, apply hierarchy, and select refusal, clarification, or execution.
status: scaffold
library: p5.js
bloom_level: TBD
---

# Instruction Conflict Debugger



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 12: Prompt Testing and Research Dialogue](../../chapters/12-prompt-testing-dialogue/index.md).

```text
Type: microsim
**sim-id:** instruction-conflict-debugger<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Bloom level:** Analyze (L4)

**Bloom verb:** deconstruct

**Learning objective:** Deconstruct a prompt into instruction sources, identify ambiguity and conflict, apply hierarchy, and select refusal, clarification, or execution.

**Data visibility requirements:** Show system rules, template rules, user task, persona data, asset text, and prior-stage output in separate labeled layers. Imperative text inside data is highlighted.

**Interaction:** Learners connect conflicting statements, assign authority, and rewrite the lower-priority instruction. The tool simulates likely failure if the conflict remains.

**Feedback:** Cases cover missing data versus required completeness, role fidelity versus expert advice, concise output versus required evidence, and prompt injection inside an asset.

**Responsive design:** Layers stack as collapsible panels on narrow screens, with keyboard annotation and resize handling.

**Instructional rationale:** Layer-by-layer conflict analysis supports deconstruction and causal diagnosis.

Implementation: p5.js instruction map with semantic text panels.
```

## Related Resources

- [Chapter 12: Prompt Testing and Research Dialogue](../../chapters/12-prompt-testing-dialogue/index.md)
