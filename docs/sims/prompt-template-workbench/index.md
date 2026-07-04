---
title: Prompt Template Variable Workbench
description: Implement a reusable prompt template by defining variables, validating inputs, locking stable instructions, and specifying missing-value behavior.
status: scaffold
library: p5.js
bloom_level: TBD
---

# Prompt Template Variable Workbench



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 11: Structured Prompts and Reliable Outputs](../../chapters/11-structured-prompts/index.md).

```text
Type: interactive infographic
**sim-id:** prompt-template-workbench<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Bloom level:** Apply (L3)

**Bloom verb:** implement

**Learning objective:** Implement a reusable prompt template by defining variables, validating inputs, locking stable instructions, and specifying missing-value behavior.

**Layout:** Fixed template blocks on the left, variable registry on the right, rendered preview below.

**Interaction:** Learners define source, type, required status, and validation for each variable, then populate three scenarios. The tool blocks unsafe overrides and shows unresolved placeholders.

**Feedback:** Missing or malformed values produce targeted messages. Compare mode reveals accidental changes to locked instructions.

**Responsive design:** Panels stack below 750 pixels, with keyboard editing, text export, and resize handling.

**Instructional rationale:** Configuring and running a template in varied scenarios supports applying reusable prompt design.

Implementation: Responsive p5.js block view with semantic HTML forms.
```

## Related Resources

- [Chapter 11: Structured Prompts and Reliable Outputs](../../chapters/11-structured-prompts/index.md)
