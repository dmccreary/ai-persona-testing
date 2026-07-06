---
title: Designing AI Agents and Expert Roles
description: Defining bounded AI agents and separating persona, moderator, skeptic, strategy, competition, copy, design, behavioral, and research roles.
generated_by: claude skill chapter-content-generator
date: 2026-07-03 18:14:08
version: 0.09
---

# Designing AI Agents and Expert Roles

## Summary

Defines agent goals, instructions, context, memory, tools, autonomy, and boundaries before configuring persona, moderator, skeptic, analyst, and expert agents.

Learners will be able to specify focused agents whose roles and limits support credible evaluation workflows.

## Concepts Covered

This chapter covers the following 20 concepts from the learning graph:

1. AI Agent
2. Agent Role
3. Agent Goal
4. Agent Instructions
5. Agent Context
6. Agent Memory
7. Agent Tools
8. Agent Output
9. Agent Autonomy
10. Agent Boundaries
11. Persona Agent
12. Moderator Agent
13. Expert Reviewer Agent
14. Skeptic Agent
15. Brand Strategist Agent
16. Competitive Analyst Agent
17. Copywriting Expert Agent
18. Visual Design Critic
19. Behavioral Expert Agent
20. Consumer Research Agent

## Prerequisites

This chapter builds on concepts from:

- [Chapter 1: AI-Powered Customer Research Foundations](../01-ai-customer-research/index.md)
- [Chapter 5: Building Complete Customer Personas](../05-customer-personas/index.md)
- [Chapter 10: Prompt Engineering Foundations](../10-prompt-engineering/index.md)
- [Chapter 11: Structured Prompts and Reliable Outputs](../11-structured-prompts/index.md)

---

## An Agent Is a Bounded Worker

An **AI Agent** is a configured system that performs a role-directed task using instructions, context, possible memory, tools, and an output contract. In this course, an agent is not assumed to be independent or conscious. It is an operational unit whose behavior can be designed, tested, and governed.

An **Agent Role** defines the perspective and responsibility the agent occupies. An **Agent Goal** defines the outcome it should pursue. These must be separated. “Customer persona” is a role; “identify barriers this persona would encounter” is a goal. A role can serve several goals, and a goal may require several roles.

**Agent Instructions** state how the role should perform the task, which rules govern behavior, and what to do when evidence is missing. **Agent Context** is the approved information available during the task. Context should be no broader than necessary and must distinguish verified facts, persona evidence, assumptions, and untrusted content.

A strong agent specification answers:

1. What role does the agent occupy?
2. Which goal is it responsible for?
3. Which inputs and context may it use?
4. Which actions may it take?
5. Which decisions remain outside its authority?
6. What output must it return?
7. How is success tested and failure handled?

#### Diagram: Agent Specification Builder

<iframe src="../../sims/agent-specification-builder/main.html" width="100%" height="702" scrolling="no"></iframe>

<details markdown="1">
<summary>Agent Specification Builder</summary>
Type: interactive infographic
**sim-id:** agent-specification-builder<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Bloom level:** Create (L6)

**Bloom verb:** design

**Learning objective:** Design a bounded AI agent specification connecting role, goal, instructions, context, memory, tools, output, autonomy, and boundaries.

**Interaction:** Learners assemble specification cards for a marketing scenario. The tool flags goals outside the role, tools without purpose, memory without retention rules, outputs without consumers, and autonomy without escalation.

**Feedback:** Clicking a component reveals its contract and one failure caused by omission. Export produces a reviewable agent card.

**Responsive design:** Component canvas becomes a vertical form on narrow screens with keyboard control and resize handling.

**Instructional rationale:** Constructing a complete agent contract supports creating and systems thinking.

Implementation: Responsive p5.js block builder with semantic HTML fields.
</details>

## Memory, Tools, and Output

**Agent Memory** is information retained or retrieved across steps or sessions. Short-term memory may preserve discussion state. Long-term memory may store approved persona versions, prior findings, or workflow records. Memory requires purpose, source labels, access control, correction, retention, and deletion. More memory can preserve stale assumptions as easily as useful learning.

**Agent Tools** are external capabilities an agent can invoke, such as retrieving an approved document, searching a controlled repository, calculating a score, or writing a record. A tool expands what the agent can do and therefore expands risk. Define allowed operations, inputs, outputs, permissions, timeouts, and review.

**Agent Output** is the response or artifact produced for another agent or person. It needs a schema, evidence fields, uncertainty, destination, and sensitivity label. Output should not silently become a higher-priority instruction in a later stage.

The table summarizes the agent contract.

| Component | Control Question | Common Failure |
|---|---|---|
| Context | Which information is necessary now? | Excess, stale, or unauthorized data |
| Memory | What persists, why, and for how long? | Hidden retention and obsolete assumptions |
| Tools | Which external action is permitted? | Unbounded access or unsupported action |
| Output | Who consumes which structured artifact? | Untraceable free text |

Use minimum capability. A persona agent evaluating copy probably does not need internet search or permission to edit a report. A retrieval tool may be safer than placing an entire sensitive repository in context. A calculation tool may improve consistency while leaving judgment to a reviewer.

## Autonomy and Boundaries

**Agent Autonomy** is the degree to which an agent can select actions, tools, sequence, or next steps without immediate approval. Autonomy is not a yes-or-no property. One agent may freely choose follow-up questions, require approval before contacting a tool, and be prohibited from publishing a recommendation.

**Agent Boundaries** define what the agent must not do and when it must stop, ask, or escalate. Boundaries cover purpose, data, tools, roles, decisions, cost, time, and communication. “Be responsible” is not a boundary. “Do not infer sensitive attributes; if the task requires one, stop and request privacy review” is operational.

Calibrate autonomy using risk:

- Low risk and reversible: choose order or wording within an approved task.
- Moderate risk: use approved tools with logging and review.
- High risk or external effect: require human approval before action.
- Prohibited: block the action regardless of convenience.

#### Diagram: Agent Autonomy and Boundary Simulator

<iframe src="../../sims/agent-autonomy-boundary/main.html" width="100%" height="702" scrolling="no"></iframe>

<details markdown="1">
<summary>Agent Autonomy and Boundary Simulator</summary>
Type: microsim
**sim-id:** agent-autonomy-boundary<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Bloom level:** Evaluate (L5)

**Bloom verb:** assess

**Learning objective:** Assess an agent action by consequence, reversibility, data sensitivity, tool scope, and required human approval.

**Controls:** Action selector, consequence, reversibility, sensitivity, external communication, cost limit, and evidence quality. Learners assign Allow, Allow with Log, Require Approval, Escalate, or Prohibit.

**Feedback:** The simulator explains why a harmless drafting action differs from publishing, exporting data, or changing a decision record. It exposes boundaries missed by one-dimensional risk scores.

**Responsive design:** Controls and decision path stack on narrow screens, with keyboard access and text summary.

**Instructional rationale:** Scenario judgment against explicit criteria supports evaluation of autonomy.

Implementation: p5.js decision visualization with accessible controls.
</details>

## Persona and Moderator Agents

A **Persona Agent** represents one approved customer pattern in one defined scenario. Its job is to interpret, react, decide, and explain from that profile. It should cite profile fields and asset evidence, disclose uncertainty, and avoid becoming a consultant.

A **Moderator Agent** facilitates interaction among persona or reviewer agents. It manages turns, asks neutral follow-ups, surfaces disagreement, enforces the agenda, and requests clarification. It should not decide which persona is correct or quietly replace minority views with consensus.

Keep their contexts distinct. The persona needs its profile, scenario, shared asset, and evaluation rules. The moderator needs participant roles, agenda, timing, and discussion state. Giving the moderator every hidden persona instruction can encourage manipulation; giving personas the moderator's synthesis can contaminate independent reactions.

Use independent persona responses before group discussion. This preserves first impressions and lets the team measure how dialogue changes views. The moderator should label whether consensus is initial, evidence-driven, socially influenced, or merely summarized.

## Reviewer and Skeptic Agents

An **Expert Reviewer Agent** applies a defined professional standard. Expertise must be scoped: privacy, accessibility, brand, research, legal, or another field. The agent should cite the standard or criteria it uses and identify when qualified human review is required.

A **Skeptic Agent** challenges unsupported claims, weak evidence, hidden assumptions, and premature consensus. It should ask what would disconfirm a conclusion and what evidence would change its own judgment. A skeptic that rejects everything creates noise rather than quality.

Separate reviewer findings from customer reactions. An accessibility reviewer can identify a likely technical barrier; an accessibility persona explores a task perspective. Neither replaces testing with affected people.

#### Diagram: Agent Role and Responsibility Map

<iframe src="../../sims/agent-role-responsibility/main.html" width="100%" height="702" scrolling="no"></iframe>

<details markdown="1">
<summary>Agent Role and Responsibility Map</summary>
Type: graph-model
**sim-id:** agent-role-responsibility<br/>
**Library:** vis-network<br/>
**Status:** Specified

**Bloom level:** Analyze (L4)

**Bloom verb:** differentiate

**Learning objective:** Differentiate persona, moderator, skeptic, expert reviewer, and synthesis responsibilities and detect conflicting authority.

**Node types:** Agent Role, Goal, Input, Tool, Output, Decision, Human Owner, and Boundary. Edges show RECEIVES, PERFORMS, PRODUCES, REVIEWS, APPROVES, and ESCALATES_TO.

**Interaction:** Learners assign responsibilities in a workflow. The graph flags missing owners, two roles controlling one decision, persona-to-recommendation shortcuts, and outputs without reviewers.

**Responsive design:** Selectable graph with zoom, drag, keyboard traversal, side panel, text matrix, and resize handling.

**Instructional rationale:** Mapping authority relationships supports analysis of role separation.

Implementation: vis-network responsibility graph with rule-based conflict checks.
</details>

## Marketing Specialist Agents

A **Brand Strategist Agent** reviews alignment with positioning, promise, personality, audience strategy, and differentiation. It asks whether assets express the intended brand system. It should not override customer evidence simply because a message follows guidelines.

A **Competitive Analyst Agent** compares claims, positioning, offers, and category patterns using verified competitor information. It must record source dates and distinguish public fact from inference. It should not invent competitor behavior or treat similarity as copying without evidence.

A **Copywriting Expert Agent** evaluates clarity, hierarchy, voice, persuasion, calls to action, and language mechanics. It can propose alternatives, but those alternatives remain hypotheses until tested. It should preserve legal, factual, and persona constraints.

A **Visual Design Critic** evaluates hierarchy, composition, typography, color, imagery, consistency, and interaction cues from supplied visuals. It should describe observable elements before interpreting them and avoid claiming a visual caused emotion without customer evidence.

A **Behavioral Expert Agent** applies behavioral principles to choices, attention, friction, defaults, and decision environments. It must avoid manipulative design and distinguish a plausible mechanism from demonstrated causation.

A **Consumer Research Agent** protects research quality. It checks questions, sampling, evidence status, claims, bias, validity, and validation plans. It can organize findings but should not fabricate participant data or convert synthetic output into customer evidence.

| Specialist | Primary Lens | Required Boundary |
|---|---|---|
| Brand strategist | Positioning and brand coherence | Cannot erase contrary customer evidence |
| Competitive analyst | Verified market comparison | Must date and source competitor facts |
| Copywriting expert | Language and persuasion | Cannot repair an unsupported claim with style |
| Visual design critic | Observable visual communication | Cannot infer customer emotion as fact |
| Behavioral expert | Choice environment and mechanism | Cannot claim causation without evidence |
| Consumer research agent | Method and evidence quality | Cannot invent or overgeneralize participants |

#### Diagram: Specialist Review Panel

<iframe src="../../sims/specialist-review-panel/main.html" width="100%" height="702" scrolling="no"></iframe>

<details markdown="1">
<summary>Specialist Review Panel</summary>
Type: microsim
**sim-id:** specialist-review-panel<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Bloom level:** Apply (L3)

**Bloom verb:** use

**Learning objective:** Use distinct specialist lenses to review one marketing asset while preserving evidence, scope, disagreement, and human authority.

**Interaction:** Learners select specialists for a scenario, inspect each structured review, identify out-of-scope claims, and route findings to Accept, Verify, Revise, or Escalate.

**Asset scenarios:** Pricing page, sustainability advertisement, onboarding flow, and crisis email. Every specialist cites observable evidence and its rubric.

**Feedback:** The panel flags duplicated lenses, unsupported authority, false consensus, and missing consumer-research review. A synthesis view preserves disagreements.

**Responsive design:** Specialist cards form a grid on wide screens and tabs on narrow screens, with keyboard controls and resize handling.

**Instructional rationale:** Applying specialist roles to a shared asset teaches scoped expertise and integration.

Implementation: p5.js review workspace with semantic HTML cards and routing controls.
</details>

## Designing the Agent Card

Create a standard agent card so every role can be reviewed consistently:

1. Name and role
2. Purpose and goal
3. Approved tasks
4. Required and prohibited context
5. Memory and retention
6. Tools and permissions
7. Output schema and consumers
8. Autonomy levels by action
9. Boundaries and escalation triggers
10. Test cases, owner, version, and approval

The card should name a human owner. It should also state how the agent can fail. “May overgeneralize competitor claims” is more useful than claiming an agent is objective.

## Agent Lifecycle and Failure Containment

Agent design continues after the card is approved. Before deployment, run tests against the exact prompt, context assembly, memory rules, tools, and output schema used in the workflow. A safe prompt tested without its retrieval tool does not validate the deployed agent.

During operation, monitor events that reveal loss of control:

- Tool calls outside normal patterns
- Repeated attempts to access unavailable context
- Outputs rejected by schema validation
- Unsupported factual claims or missing citations
- Sudden changes after a model or source update
- Human overrides concentrated in one audience or scenario
- Agent-to-agent loops that consume time without improving evidence
- Escalations ignored or routed to no accountable owner

Contain failure at the smallest useful boundary. If the competitive analyst uses an outdated source, pause that agent or source rather than disabling unrelated persona reviews. If a shared context package is contaminated, stop every dependent stage. Design a manual fallback so the team can continue essential work while the issue is investigated.

An incident record should preserve the triggering input, agent and dependency versions, tool actions, output, downstream consumers, human decisions, and corrective action. Protect private information while retaining enough evidence for review. After correction, add the case to regression tests.

Suspend an agent when its owner is unavailable, evidence is stale, a critical test fails, or required oversight cannot occur. Retirement removes access and prevents new execution while preserving approved records. Notify dependent workflows and identify a replacement or manual process.

Agent performance should include abstention and escalation quality. An agent that always completes the task may look productive while inventing missing facts. Measure whether it stops at the right boundary, sends the concern to the right person, and provides enough context for that person to act.

Review the team as a system. Individually accurate agents can still create a poor outcome when handoffs lose evidence, incentives reward consensus, or the synthesis role has excessive authority. Periodic end-to-end exercises should test routine work, a missing source, a harmful request, a tool failure, conflicting specialist advice, and a human decision to reject the automated recommendation.

## Cost and Complexity Discipline

Each additional agent adds prompts, context, runs, review, latency, and failure paths. Add a role only when its distinct lens or control changes a decision. Estimate the cost of execution and the cost of human review together; a cheap model call can generate expensive verification work.

Begin with the smallest team that separates essential responsibilities. Expand after tests show a missing perspective, not because a multi-agent diagram appears sophisticated. Complexity is justified when it improves evidence, safety, or decision quality enough to outweigh operational burden.

Document why every active agent exists and review that reason on a schedule. If a role's output is routinely ignored, duplicated, or impossible to validate, revise or remove it. A smaller governed system is more valuable than a large collection of theatrical voices whose contributions cannot be traced to a better decision.

Purposeful simplicity also makes future failures easier to diagnose.

## Worked Example: Reviewing a Product Launch Page

A company wants one agent to represent customers, evaluate brand, compare competitors, rewrite copy, and decide which page to launch. The role is overloaded, its evidence sources conflict, and no person owns the decision.

The team separates responsibilities. Persona agents provide independent customer interpretations. A moderator facilitates discussion without scoring. The brand strategist checks positioning. The competitive analyst uses dated, verified sources. The copywriting expert proposes alternatives. The visual critic describes hierarchy and interaction cues. The behavioral expert identifies plausible mechanisms. The consumer research agent audits evidence and claims. A skeptic challenges premature agreement.

Each agent receives only necessary context and tools. Outputs share a traceable schema but retain role-specific fields. Autonomy permits internal drafting and analysis, while external publication and final selection require human approval. A synthesis stage organizes findings without pretending the specialists agree.

The result is more complex than one giant prompt but easier to test, govern, and correct. When a competitor fact is wrong, the team can repair the relevant source and agent rather than distrusting the entire system.

## Practice: Specify an Agent Team

1. Define the overall marketing decision and accountable owner.
2. Create an agent card for one persona agent.
3. Define a moderator's agenda and boundaries.
4. Add a skeptic and one scoped expert reviewer.
5. Select only relevant specialist agents.
6. Define context, memory, tools, and outputs for each.
7. Assign autonomy by action and consequence.
8. Map handoffs, review, approval, and escalation.
9. Write one routine and one failure test per agent.
10. Remove any role whose contribution duplicates another.

??? question "Why not use one highly capable agent for every role?"
    One agent can perform several tasks, but combining incompatible perspectives and authority makes evidence contamination and failure diagnosis harder. Separate roles when they require different goals, context, standards, or decision rights.

## Key Takeaways

- An AI agent is a bounded operational role, not an independent authority.
- Role and goal define responsibility; instructions and context constrain execution.
- Memory, tools, and output expand capability and require governance.
- Autonomy should match consequence, reversibility, evidence, and human approval.
- Persona, moderator, reviewer, and skeptic roles must remain distinct.
- Specialist agents contribute scoped lenses and cannot replace customer evidence or accountable professionals.
- Standard agent cards make purpose, capability, ownership, testing, and failure visible.

## Review Questions

1. How does an agent role differ from an agent goal?
2. Which controls should accompany long-term agent memory?
3. How should tool permissions be minimized?
4. What makes an agent boundary operational?
5. Why should a moderator not produce the final judgment?
6. How does a persona agent differ from an expert reviewer?
7. Which specialist roles would you select for a crisis communication test, and why?

[See Annotated References](./references.md)
