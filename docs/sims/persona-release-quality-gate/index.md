---
title: Persona Release Quality Gate
description: Execute a persona release workflow using documentation review, test cases, acceptance tests, benchmark comparison, approval, versioning, and rollback.
status: scaffold
library: p5.js
bloom_level: TBD
---

# Persona Release Quality Gate



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 9: Persona Consistency, Validation, and Reuse](../../chapters/09-persona-quality-reuse/index.md).

```text
Type: workflow
**sim-id:** persona-release-quality-gate<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Bloom level:** Apply (L3)

**Bloom verb:** execute

**Learning objective:** Execute a persona release workflow using documentation review, test cases, acceptance tests, benchmark comparison, approval, versioning, and rollback.

**Workflow:** Change Request, Evidence Review, Profile Revision, Predicted Effects, Test Suite, Benchmark Comparison, Privacy/Fairness Review, Approval, Release, Monitoring, and Rollback.

**Interaction:** Learners inspect a proposed update, choose tests, interpret results, and decide Release, Revise, or Reject. Every workflow node and connector reveals responsibility and artifact.

**Feedback:** The simulator penalizes releases based only on average score, missing regression tests, outdated benchmarks, absent documentation, or unapproved purpose expansion.

**Responsive design:** Swimlanes stack on narrow screens, with keyboard navigation, audit-log text view, and resize handling.

**Instructional rationale:** Practicing a complete release decision supports applying governance and quality controls.

Implementation: Responsive p5.js workflow simulator with structured test results.
```

## Related Resources

- [Chapter 9: Persona Consistency, Validation, and Reuse](../../chapters/09-persona-quality-reuse/index.md)
