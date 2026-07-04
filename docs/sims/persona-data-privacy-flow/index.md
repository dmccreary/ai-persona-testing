---
title: Persona Data Privacy Flow
description: Examine how personal data and sensitive attributes move from customer research into persona profiles, prompts, model providers, reports, and archives.
status: scaffold
library: p5.js
bloom_level: TBD
---

# Persona Data Privacy Flow



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 4: Responsible AI, Privacy, and Governance](../../chapters/04-responsible-ai-governance/index.md).

```text
Type: workflow
**sim-id:** persona-data-privacy-flow<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Bloom level:** Analyze (L4)

**Bloom verb:** examine

**Learning objective:** Examine how personal data and sensitive attributes move from customer research into persona profiles, prompts, model providers, reports, and archives.

**Layout:** Responsive swimlanes for Customer, Research Team, Persona Repository, AI Tool, Report Consumer, and Archive. Data cards travel along labeled connectors.

**Interaction:** Clicking a data card reveals purpose, consent status, sensitivity, retention, and access. Learners toggle proposed controls—aggregation, deletion, access restriction, local processing, or exclusion—and observe which exposure paths remain.

**Decision points:** “Consent covers AI use?”, “Sensitive detail necessary?”, “External processor approved?”, and “Retention expired?” Each branch provides explanatory feedback.

**Accessibility:** Every connector and decision has hover and keyboard focus text. A tabular alternative lists flows and controls. The diagram stacks lanes and recalculates paths on resize.

**Instructional rationale:** Tracing information across an operational workflow supports analysis because privacy risk often emerges from movement and reuse rather than one isolated field.

Implementation: Responsive p5.js swimlane diagram with accessible DOM data cards and control toggles.
```

## Related Resources

- [Chapter 4: Responsible AI, Privacy, and Governance](../../chapters/04-responsible-ai-governance/index.md)
