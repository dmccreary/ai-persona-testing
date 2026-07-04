---
title: Prompt Chain Trace Explorer
description: Examine how data, evidence, uncertainty, and errors move through a multi-stage prompt chain.
status: scaffold
library: p5.js
bloom_level: TBD
---

# Prompt Chain Trace Explorer



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 11: Structured Prompts and Reliable Outputs](../../chapters/11-structured-prompts/index.md).

```text
Type: workflow
**sim-id:** prompt-chain-trace<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Bloom level:** Analyze (L4)

**Bloom verb:** examine

**Learning objective:** Examine how data, evidence, uncertainty, and errors move through a multi-stage prompt chain.

**Workflow:** Input Validation, Claim Extraction, Persona Review, Expert Review, Evidence Check, Synthesis, and Report. Each node displays prompt version and schema.

**Interaction:** Learners click handoffs to inspect payloads, inject a missing field or unsupported claim, and choose Stop, Repair, Retry, or Continue. Downstream effects become visible.

**Feedback:** The simulator highlights lost citations, collapsed disagreement, instruction injection, and incompatible schema versions.

**Responsive design:** Horizontal flow becomes a vertical trace on narrow screens; every node and connector is keyboard accessible and responds to resize.

**Instructional rationale:** Tracing propagation and controls supports analysis of system behavior.

Implementation: Responsive p5.js workflow with structured sample payloads.
```

## Related Resources

- [Chapter 11: Structured Prompts and Reliable Outputs](../../chapters/11-structured-prompts/index.md)
