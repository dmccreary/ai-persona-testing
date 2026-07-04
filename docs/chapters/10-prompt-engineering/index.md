---
title: Prompt Engineering Foundations
description: Designing clear, bounded prompts with objectives, roles, context, tasks, constraints, evaluation instructions, and output requirements.
generated_by: claude skill chapter-content-generator
date: 2026-07-03 15:40:59
version: 0.09
---

# Prompt Engineering Foundations

## Summary

Introduces prompt objectives, structures, roles, persona and reviewer instructions, context management, task definitions, constraints, and output requirements.

Learners will be able to construct clear prompts that reliably establish role, context, task, and boundaries.

## Concepts Covered

This chapter covers the following 20 concepts from the learning graph:

1. Prompt Engineering
2. Prompt Objective
3. Prompt Structure
4. System Prompt
5. User Prompt
6. Persona Prompt
7. Moderator Prompt
8. Reviewer Prompt
9. Skeptic Prompt
10. Evaluation Prompt
11. Prompt Context
12. Context Management
13. Context Prioritization
14. Context Compression
15. Role Definition
16. Task Definition
17. Audience Definition
18. Constraint Definition
19. Evaluation Instructions
20. Output Instructions

## Prerequisites

This chapter builds on concepts from:

- [Chapter 1: AI-Powered Customer Research Foundations](../01-ai-customer-research/index.md)
- [Chapter 5: Building Complete Customer Personas](../05-customer-personas/index.md)
- [Chapter 9: Persona Consistency, Validation, and Reuse](../09-persona-quality-reuse/index.md)

---

## Prompt Engineering Is Instruction Design

**Prompt Engineering** is the disciplined design, testing, and maintenance of instructions and context for an AI system. It is not a collection of magic phrases. A reliable prompt makes the task, role, evidence, boundaries, and expected output clear enough to inspect and improve.

A **Prompt Objective** states the outcome the prompt should produce and the decision that output will support. “Analyze this ad” is vague. “Identify claims that a cautious first-time buyer may find unclear, cite the exact text, and suggest questions for customer validation” defines a useful outcome without pretending the model can predict all buyers.

**Prompt Structure** is the organized arrangement of prompt components. A stable structure makes omissions visible and supports versioning. A practical structure is:

1. Purpose and objective
2. Role and authority
3. Audience or represented persona
4. Factual context and asset
5. Task and sequence
6. Constraints and prohibited behavior
7. Evaluation instructions and criteria
8. Output instructions and schema
9. Uncertainty and missing-information rules

Structure does not require a long prompt. It requires clear separation. Headings, labeled fields, and concise rules often outperform an unbroken paragraph containing the same words.

| Component | Question It Answers | Failure When Missing |
|---|---|---|
| Objective | What useful outcome is required? | Fluent but irrelevant output |
| Role | From which perspective and authority? | Generic assistant behavior |
| Context | Which facts may be used? | Hallucinated or uninformed claims |
| Task | What actions should occur? | Incomplete or unordered reasoning |
| Constraints | What must not happen? | Scope, safety, or fidelity failure |
| Evaluation | Which criteria govern judgment? | Arbitrary opinions |
| Output | How must results be represented? | Inconsistent, hard-to-compare responses |

#### Diagram: Prompt Architecture Builder

<iframe src="../../sims/prompt-architecture-builder/main.html" width="100%" height="520px" scrolling="no"></iframe>

<details markdown="1">
<summary>Prompt Architecture Builder</summary>
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
</details>

## System and User Prompts

A **System Prompt** defines persistent high-level behavior, role boundaries, safety rules, and operating principles. In a persona workflow, it might state that the model must remain within supplied evidence, disclose uncertainty, and never represent synthetic output as customer testimony. System-level instructions should be stable and controlled by the workflow owner.

A **User Prompt** supplies the immediate request, scenario, asset, or question. It changes from task to task. A user prompt might ask the approved persona to evaluate a new headline using a specified rubric.

The distinction supports governance. Stable rules belong at the system level; task-specific content belongs at the user level. However, interfaces differ, and some no-code tools expose only one instruction field. In that case, preserve the conceptual layers using headings and locked templates.

Instruction priority matters. User content should not be allowed to redefine the persona, reveal restricted information, or override safety boundaries. Treat marketing assets and quoted customer text as data to analyze, not instructions to follow.

Before displaying a prompt template, define its labeled fields. `OBJECTIVE` states the outcome, `ROLE` defines perspective, `CONTEXT` supplies verified material, `TASK` lists actions, `CONSTRAINTS` set boundaries, and `OUTPUT` defines the response. The following no-code template uses those fields:

```text
OBJECTIVE
Identify clarity and trust concerns that should be validated with customers.

ROLE
Represent the approved persona profile. Do not act as a marketing advisor.

CONTEXT
Use only the persona profile, verified product brief, and marketing asset below.

TASK
1. State your first interpretation.
2. Identify confusing or unsupported claims.
3. Explain concerns using persona goals and criteria.

CONSTRAINTS
Do not invent product facts, personal history, or population statistics.

OUTPUT
Return interpretation, evidence, concern, confidence, and validation question.
```

The template is intentionally plain. Its value comes from testable boundaries, not special syntax.

## Role-Specific Prompts

A **Persona Prompt** defines the represented customer pattern, purpose, evidence, context, and behavioral boundaries. It should preserve the customer's perspective and avoid asking the persona to synthesize the final business recommendation.

A **Moderator Prompt** defines how a discussion is facilitated. It should give participants comparable opportunities, probe disagreement, prevent one agent from dominating, and distinguish consensus from unresolved difference. The moderator organizes conversation but should not rewrite every voice into one answer.

A **Reviewer Prompt** assigns an expert evaluation role, such as accessibility, brand strategy, research quality, or privacy. It states the review standard and authority. A reviewer is not a customer persona and should not pretend to express customer feeling.

A **Skeptic Prompt** deliberately challenges claims and assumptions. It asks what would make the asset fail, what evidence is missing, and which alternative explanation fits. The skeptic must remain fair: it should revise its judgment when evidence addresses the concern.

An **Evaluation Prompt** applies criteria to an asset or response. It defines what is being evaluated, which rubric to use, what evidence to cite, and how uncertainty is reported. Evaluation prompts support comparison only when conditions remain controlled.

| Prompt Type | Primary Role | Must Not Become |
|---|---|---|
| Persona prompt | Represent a customer decision pattern | Generic consultant or stereotype |
| Moderator prompt | Facilitate fair discussion | Hidden decision-maker |
| Reviewer prompt | Apply expert standards | Customer voice without evidence |
| Skeptic prompt | Challenge claims and assumptions | Automatic rejection engine |
| Evaluation prompt | Apply consistent criteria | Unstructured opinion request |

#### Diagram: Prompt Role Routing Lab

<iframe src="../../sims/prompt-role-routing/main.html" width="100%" height="510px" scrolling="no"></iframe>

<details markdown="1">
<summary>Prompt Role Routing Lab</summary>
Type: interactive infographic
**sim-id:** prompt-role-routing<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Bloom level:** Apply (L3)

**Bloom verb:** classify

**Learning objective:** Classify instructions by persona, moderator, reviewer, skeptic, or evaluation role and repair conflicting authority.

**Interaction:** Learners route instruction cards to role panels, inspect conflicts, and rewrite misplaced instructions. Scenarios include a moderator scoring participants, a persona writing executive recommendations, and a skeptic refusing valid evidence.

**Feedback:** Every card explains why it belongs to a role and what failure occurs when roles are blended. A combined workflow view shows message handoffs.

**Responsive design:** Role panels become tabs on narrow screens, with keyboard routing and resize handling.

**Instructional rationale:** Sorting and repairing role instructions supports applying a separation-of-responsibilities model.

Implementation: Responsive p5.js card lab with semantic HTML editors.
</details>

## Context and Context Management

**Prompt Context** is the information available to the model for the current task. It may include the persona profile, product brief, marketing asset, research question, rubric, examples, prior messages, and operational rules. Context is not automatically true; every item needs a source and status.

**Context Management** is the process of selecting, organizing, updating, and protecting that information. Good management keeps relevant evidence visible, separates instructions from data, removes stale material, and controls sensitive content.

**Context Prioritization** ranks information by importance to the task. Highest priority usually includes safety and role boundaries, verified asset facts, persona invariants, task criteria, and current scenario. Background detail should not crowd out those elements.

**Context Compression** reduces length while preserving necessary meaning and traceability. Compression may summarize prior turns, extract approved facts, replace repeated instructions with a referenced template, or retain only the evidence needed for the next stage. Poor compression erases minority findings, uncertainty, sources, or constraints.

Use a context inventory:

- Item and source
- Evidence status and date
- Purpose in the task
- Priority level
- Sensitivity and access rule
- Full, summarized, referenced, or excluded form
- Expiration or refresh condition

#### Diagram: Context Budget Laboratory

<iframe src="../../sims/context-budget-lab/main.html" width="100%" height="530px" scrolling="no"></iframe>

<details markdown="1">
<summary>Context Budget Laboratory</summary>
Type: microsim
**sim-id:** context-budget-lab<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Bloom level:** Analyze (L4)

**Bloom verb:** prioritize

**Learning objective:** Prioritize and compress prompt context while preserving instructions, verified facts, persona fidelity, criteria, uncertainty, and source traceability.

**Controls:** Context-window budget, item cards with token costs, priority, sensitivity, age, and source status; Compress, Reference, Exclude, and Restore actions.

**Visual elements:** A context meter and quality indicators for Role Fidelity, Evidence, Criteria, Safety, and Traceability. Learners must fit a scenario within the budget.

**Feedback:** Removing essential context triggers a specific predicted failure. Compression choices reveal what was preserved or lost. Decorative persona detail competes with decision-relevant evidence.

**Responsive design:** Cards wrap, meter remains visible, keyboard actions are supported, and layout updates on resize.

**Instructional rationale:** Resource-constrained prioritization supports analysis of information value and loss.

Implementation: p5.js budget visualization with accessible context cards.
</details>

## Definitions That Prevent Ambiguity

**Role Definition** states who the model represents, what perspective it should use, and what authority it does not have. “Act as a customer” is weak. A role definition should reference an approved profile and state whether the model may evaluate, discuss, score, or recommend.

**Task Definition** specifies the actions to perform and their order. Verbs matter: identify, compare, cite, classify, score, explain, or propose. Separate observation from interpretation and recommendation so the output can be audited.

**Audience Definition** states who will use the output. A response for a research analyst can include methodological detail; an executive summary needs concise decisions and limitations; a workshop artifact may require discussion prompts. Audience affects format, not truthfulness.

**Constraint Definition** states boundaries and prohibited actions. Useful constraints address sources, scope, privacy, safety, role, length, and uncertainty. Constraints should be actionable. “Do not be biased” is vague; “Do not infer sensitive attributes or use age as a proxy for technical ability” is testable.

Strong definitions work together:

> Role: approved first-time-buyer persona. Task: identify and explain trust barriers in the pricing page. Audience: customer-research team. Constraints: use supplied facts, do not invent history, do not estimate prevalence, and label uncertainty.

## Evaluation and Output Instructions

**Evaluation Instructions** tell the model how to judge the asset. They define criteria, evidence requirements, sequence, scales, and handling of missing information. Ask the model to cite the exact asset element supporting each judgment and tie the judgment to persona goals or criteria.

**Output Instructions** define how results are represented. Structured outputs improve comparison and automation. They can require fields such as observation, persona interpretation, evidence, criterion, score, confidence, uncertainty, and validation question.

Do not confuse structure with validity. A JSON object or polished table can contain unsupported content. Output design should expose evidence and uncertainty rather than hide them behind a score.

A practical evaluation sequence is:

1. Describe the asset element without judging it.
2. State the persona's interpretation.
3. Connect the interpretation to a profile field or scenario condition.
4. Apply one named criterion.
5. Cite evidence from the asset and context.
6. Assign a rating only if anchors are defined.
7. State uncertainty and missing information.
8. Write a question for real-customer validation.

#### Diagram: Prompt Instruction Quality Auditor

<iframe src="../../sims/prompt-instruction-auditor/main.html" width="100%" height="530px" scrolling="no"></iframe>

<details markdown="1">
<summary>Prompt Instruction Quality Auditor</summary>
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
</details>

## Managing Prompt Changes

A production prompt should be treated as a versioned research instrument. Small wording edits can change role fidelity, evidence use, or score distribution. Copying the latest prompt into an undocumented workspace makes later comparison and reproduction difficult.

Store the prompt objective, components, owner, version, approved use, test results, and dependencies. Record which persona versions, rubrics, assets, models, and output schemas the prompt expects. When one dependency changes, rerun the relevant tests rather than assuming the package still works.

Use a change review:

1. State the observed problem with evidence from a test case.
2. Identify the component most likely responsible.
3. Make the smallest defensible change.
4. Predict which outputs should change and which should remain stable.
5. Run routine, edge, and adversarial tests.
6. Compare evidence grounding, role fidelity, variability, and format.
7. Obtain approval and record limitations before release.

Avoid “prompt thrashing,” in which a team reacts to each disappointing answer by adding another rule. Accumulated rules can conflict, hide priorities, and overfit one example. When a prompt grows difficult to explain, separate responsibilities across workflow stages or revise the underlying persona, context, rubric, or asset.

Review prompts with the people who will use their outputs. Researchers can assess evidence and bias, marketers can assess decision relevance, privacy reviewers can assess data exposure, and operational users can assess whether output fields support the workflow. A prompt is successful when the complete system produces dependable, inspectable work—not when one demonstration sounds impressive.

Finally, archive failed prompt versions with their test evidence. A failure library prevents teams from repeating old mistakes and supplies realistic cases for future acceptance tests. It also demonstrates why a current constraint exists, which makes maintainers less likely to remove an apparently unnecessary rule without understanding its history.

This history turns prompt maintenance into organizational learning.

## Worked Example: Evaluating a Pricing Page

A team wants five personas to evaluate a pricing page. The original prompt says, “You are a customer. Review this page and tell us what you think.” Responses are generic, mix customer reaction with consulting advice, invent product details, and use incompatible formats.

The revised prompt begins with an objective: identify clarity and trust concerns for later customer validation. The system layer preserves evidence boundaries and disclosure. Each persona prompt references an approved profile and scenario. The user prompt contains the same verified page and product brief for every persona.

Role definition prevents personas from producing the final business recommendation. A separate reviewer applies the clarity rubric. A skeptic checks unsupported claims. Context prioritization keeps price, terms, persona criteria, and evaluation rules while compressing irrelevant biography.

The task separates observation, interpretation, criterion, and validation question. Constraints prohibit invented features, prevalence claims, and sensitive inferences. Evaluation instructions require exact page evidence. Output instructions produce comparable fields while preserving each persona's words.

The team can now test the prompt. If results fail, it can identify whether the problem arose from role, context, task, constraint, evaluation, or output rather than adding random persuasive language.

## Practice: Build a Prompt Package

Choose a persona and marketing asset.

1. Write the prompt objective and decision supported.
2. Create a stable structure with labeled components.
3. Separate system-level rules from the user request.
4. Write the persona prompt and one moderator, reviewer, or skeptic prompt.
5. Inventory, prioritize, and compress context.
6. Define role, task, audience, and constraints.
7. Write evaluation instructions with criteria and evidence rules.
8. Write output instructions that expose uncertainty.
9. Identify three likely failure modes.
10. Save the package as a versioned artifact for testing.

??? question "Does a longer prompt produce a better result?"
    No. A better prompt contains the minimum clear instructions and relevant context needed for the objective. Extra detail can introduce conflicts, bury priorities, consume context, and make failures harder to diagnose.

## Key Takeaways

- Prompt engineering is testable instruction design, not magic wording.
- Objective and structure make prompt purpose and omissions visible.
- System prompts preserve stable rules; user prompts carry immediate tasks and assets.
- Persona, moderator, reviewer, skeptic, and evaluation prompts need separate authority.
- Context management includes sourcing, prioritization, compression, sensitivity, and refresh.
- Role, task, audience, and constraint definitions prevent ambiguity.
- Evaluation instructions govern judgment; output instructions make evidence, confidence, and uncertainty inspectable.

## Review Questions

1. What makes a prompt objective testable?
2. Which rules belong in a system prompt rather than a user prompt?
3. Why should persona and reviewer roles remain separate?
4. What can be lost through poor context compression?
5. How do role, task, audience, and constraint definitions work together?
6. Why can structured output still be invalid?
7. Which prompt component would you inspect first when personas invent product facts?
