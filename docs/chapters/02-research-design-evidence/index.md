---
title: Research Design and Evidence Quality
description: Designing credible customer studies with clear questions, scope, evidence standards, validity, and reliability.
generated_by: claude skill chapter-content-generator
date: 2026-07-03 15:24:51
version: 0.09
---

# Research Design and Evidence Quality

## Summary

Examines focus groups, interviews, surveys, research objectives, validity, reliability, repeatability, and evidence so learners can frame credible, appropriately scoped persona-testing studies.

Learners will be able to define a research scope and distinguish strong evidence from weak or misleading findings.

## Concepts Covered

This chapter covers the following 20 concepts from the learning graph:

1. Traditional Focus Groups
2. Customer Interviews
3. Customer Surveys
4. Research Sample Size
5. Research Turnaround Time
6. Research Cost
7. Iterative Research
8. Exploratory Research
9. Evaluative Research
10. Research Questions
11. Research Objectives
12. Research Scope
13. Research Assumptions
14. Research Constraints
15. Research Validity
16. Research Reliability
17. Repeatable Evaluation
18. Reproducible Results
19. Directional Insight
20. Customer Evidence

## Prerequisites

This chapter builds on concepts from:

- [Chapter 1: AI-Powered Customer Research Foundations](../01-ai-customer-research/index.md)

---

## Research Design Begins With a Decision

A research activity is useful only when it informs a real decision. A team may need to choose between two headlines, understand why customers abandon checkout, or decide whether a new service deserves further investment. Research design connects that decision to a defensible way of gathering and interpreting evidence.

**Research Questions** state what the team wants to learn. A productive question is specific enough to investigate but open enough to reveal something new. “Do customers like our site?” is weak because “like” is vague and the answer does not identify an action. “Which parts of the pricing page make first-time buyers uncertain about total cost?” points toward observable evidence and a design decision.

**Research Objectives** describe what the study will accomplish. Questions ask; objectives commit. For the pricing example, objectives might include identifying the three most common sources of uncertainty, comparing reactions among two audience segments, and recommending copy changes for a later test. Objectives prevent an interesting conversation from drifting away from the business need.

**Research Scope** sets the boundaries of the study: audiences, assets, markets, time periods, channels, and decisions included or excluded. **Research Assumptions** are statements treated as true for planning, such as “participants understand the product category.” **Research Constraints** are limits the team cannot ignore, such as a one-week deadline, a small recruiting pool, incomplete analytics, or a fixed budget.

The following planning sequence turns those concepts into a usable brief.

1. Name the decision owner and the decision deadline.
2. Write the primary research question.
3. Translate the question into two or three observable objectives.
4. State what the study includes and excludes.
5. List assumptions that could distort interpretation if false.
6. Record constraints on time, cost, access, tools, and participants.
7. Define what evidence would be sufficient to change the decision.

#### Diagram: Research Brief Builder

<iframe src="../../sims/research-brief-builder/main.html" width="100%" height="520px" scrolling="no"></iframe>

<details markdown="1">
<summary>Research Brief Builder</summary>
Type: workflow
**sim-id:** research-brief-builder<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Bloom level:** Create (L6)

**Bloom verb:** formulate

**Learning objective:** Formulate a coherent research brief that connects a marketing decision to questions, objectives, scope, assumptions, constraints, and evidence criteria.

**Layout:** A responsive left-to-right workflow with cards for Decision, Question, Objectives, Scope, Assumptions, Constraints, Method, and Evidence Standard. On narrow screens, cards stack vertically.

**Interaction:** Learners choose one of three marketing scenarios or enter their own. They drag statement cards into the appropriate stage, edit weak statements, and click connectors to see why each output becomes the next stage's input. The tool flags objectives that cannot answer the question and scope statements that conflict with constraints.

**Feedback:** A completeness meter explains missing connections. “Stress-test brief” introduces a new constraint and asks the learner to revise the design. Export produces a plain-text brief.

**Accessibility:** All drag actions have keyboard alternatives; cards use text labels in addition to color. Layout and connectors respond to window resize events.

**Instructional rationale:** Building and revising a brief supports creating because learners combine design elements into an original research plan.

Implementation: p5.js workflow canvas with semantic HTML editors and rule-based feedback.
</details>

## Choosing a Human Research Method

**Traditional Focus Groups** bring a small group of recruited participants together for a moderated discussion. They help researchers hear shared language, disagreement, and reactions that emerge socially. They can also introduce group pressure: a confident participant may dominate, and people may change answers after hearing others. Skilled moderation and careful recruiting are therefore essential.

**Customer Interviews** are one-to-one conversations designed to explore a participant's experience, needs, decisions, and language. Interviews make it easier to probe an individual answer and discuss sensitive topics. Their depth is valuable, but interpretation requires discipline. A vivid story may be important without being typical.

**Customer Surveys** collect standardized responses from many people. Closed questions support counts and comparisons; open questions provide limited qualitative detail. Surveys scale more readily than interviews, but a poorly worded question can produce precise-looking nonsense. A survey works best after exploratory work has identified the language and answer options that matter.

The methods just defined are complementary. The table summarizes their trade-offs rather than declaring a universal winner.

| Method | Best Contribution | Important Risk | Typical AI Support |
|---|---|---|---|
| Traditional focus group | Social reactions and disagreement | Group influence and moderator effects | Rehearse prompts and anticipate conflict |
| Customer interview | Individual depth and follow-up | Small, nonrepresentative set of stories | Draft probes and organize themes |
| Customer survey | Standardized measurement at scale | Question wording and sampling error | Pretest items and flag ambiguity |
| Synthetic persona session | Rapid hypothesis exploration | No lived experience or representative sample | Generate candidate reactions and study improvements |

AI should usually appear around human research, not impersonate it. Before a focus group, personas can test whether discussion questions are understandable. Before interviews, they can expose leading probes. Before a survey, they can identify missing response choices. After human data collection, AI can assist with organization, provided a researcher verifies the interpretation.

## Sample Size Is About the Claim

**Research Sample Size** is the number of observations, participants, sessions, or cases included in a study. The right size depends on what the team plans to claim. A small set of interviews can reveal possible needs and language. It cannot estimate the percentage of all customers who share those needs. A larger probability-based sample may support population estimates, but only if recruiting and measurement are sound.

Qualitative sample planning often asks whether additional sessions still reveal meaningfully new themes. Quantitative planning considers expected effect size, uncertainty, confidence, and subgroup comparisons. Synthetic runs use a different logic: repeated runs can explore model variability and scenario coverage, but they do not increase the number of real customers observed.

Three practical resources shape sample decisions. **Research Turnaround Time** is the elapsed time from question to usable finding. **Research Cost** includes recruiting, incentives, researcher labor, tools, analysis, and the opportunity cost of delay. Access is equally important: a desired audience may be difficult to recruit even when money and time are available.

A sensible design balances these resources against decision risk. A reversible copy change may need quick directional research. A high-cost product launch, accessibility decision, or claim about a vulnerable audience deserves stronger human evidence.

#### Diagram: Sample, Time, Cost, and Claim Explorer

<iframe src="../../sims/research-tradeoff-explorer/main.html" width="100%" height="520px" scrolling="no"></iframe>

<details markdown="1">
<summary>Sample, Time, Cost, and Claim Explorer</summary>
Type: microsim
**sim-id:** research-tradeoff-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Bloom level:** Evaluate (L5)

**Bloom verb:** justify

**Learning objective:** Justify a research design by balancing sample size, turnaround time, cost, audience access, and the strength of the intended claim.

**Controls:** Sliders for participants, days, and budget; selectors for method, decision reversibility, audience accessibility, and intended claim. Defaults show eight interviews, ten days, and a moderate budget.

**Visual elements:** A four-axis trade-off display, a claim-strength meter, and a risk panel. Changing a control recalculates illustrative feasibility and highlights mismatches, such as choosing six interviews while claiming a population percentage.

**Interaction and feedback:** Learners configure a study for three scenarios. The tool never provides a single “optimal” number; it explains trade-offs and asks for a written justification. Clicking an axis reveals its definition and limitations.

**Accessibility and responsiveness:** Use labeled HTML controls, a tabular text alternative, high-contrast patterns, and a layout that stacks below 700 pixels. Re-render on resize.

**Instructional rationale:** Parameter exploration with scenario feedback supports evaluation because learners must defend a design against explicit criteria.

Implementation: p5.js visualization with HTML sliders and rule-based scenario feedback; all numbers labeled illustrative.
</details>

## Exploratory, Evaluative, and Iterative Research

**Exploratory Research** is used when the team needs to discover how people frame a problem, which needs matter, or what hypotheses deserve attention. Its questions tend to be open: What makes this task difficult? How do customers describe the trade-off? What assumptions are we missing? Interviews, observation, open-ended exercises, and early synthetic simulations can all support exploration.

**Evaluative Research** assesses an existing concept, asset, or experience against stated criteria. Its questions are more focused: Can participants find the cancellation policy? Does the headline communicate the intended benefit? Which version produces fewer comprehension errors? Evaluation requires a sufficiently developed object and a clear standard of success.

**Iterative Research** repeats learning and design in cycles. The team studies a problem, changes the asset, and studies it again. Iteration is more than rerunning the same prompt. Each cycle should record what changed, why it changed, what remained controlled, and what evidence would count as improvement.

A common progression is:

1. Explore the problem and customer language.
2. Form hypotheses and design candidate solutions.
3. Evaluate the candidates against clear criteria.
4. Revise the strongest candidate.
5. Repeat the evaluation under comparable conditions.
6. Escalate to stronger evidence as decision risk grows.

This progression explains a productive role for synthetic personas. They can accelerate early exploration and frequent low-cost checks. Human studies then validate the questions that survive those checks. The methods form a ladder, not a contest.

## Validity and Reliability

**Research Validity** concerns whether a study supports the interpretation being made. If a test claims to measure trust but asks only whether colors are attractive, the measure does not fit the claim. If a synthetic persona is prompted with the desired conclusion, the response cannot fairly evaluate the message. Validity asks, “Are we learning what we say we are learning?”

Several forms of validity matter in practical work. Construct validity concerns whether the measure represents the idea, such as trust or clarity. Internal validity concerns whether the design supports a causal explanation. External validity concerns whether findings transfer beyond the studied cases. Ecological validity concerns whether the task resembles the real situation in which customers act.

**Research Reliability** concerns consistency. Would the same procedure applied under comparable conditions produce a reasonably similar result? Reliability can be weakened by changing instructions, assets, scoring rules, or analysis methods between sessions. A result may be reliable but invalid: a miscalibrated scale can produce the same wrong weight every time. A result may also point toward a valid issue while being too unstable for confident use.

The following matrix reinforces the distinction.

| Pattern | Validity | Reliability | Interpretation |
|---|---|---|---|
| Measures the intended idea consistently | High | High | Strong basis for the stated use |
| Measures the wrong idea consistently | Low | High | Repeatable but misleading |
| Sometimes reflects the idea, sometimes not | Potentially high | Low | Promising signal requiring design control |
| Neither fits the idea nor repeats | Low | Low | Redesign before drawing conclusions |

#### Diagram: Validity and Reliability Diagnostic

<iframe src="../../sims/validity-reliability-diagnostic/main.html" width="100%" height="500px" scrolling="no"></iframe>

<details markdown="1">
<summary>Validity and Reliability Diagnostic</summary>
Type: interactive infographic
**sim-id:** validity-reliability-diagnostic<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Bloom level:** Analyze (L4)

**Bloom verb:** distinguish

**Learning objective:** Distinguish threats to research validity from threats to research reliability and recommend an appropriate design correction.

**Layout:** A two-by-two validity/reliability matrix beside a scenario panel. Scenarios include a leading persona prompt, changing rubrics between runs, surveying only loyal customers, and measuring visual appeal as a substitute for trust.

**Interaction:** Learners place each scenario in the matrix and select a correction. The system highlights the relevant words in the scenario, explains the threat, and shows how one problem can affect both dimensions.

**Feedback:** Corrective actions include neutralizing instructions, standardizing procedure, improving recruitment, aligning measures with constructs, or narrowing the claim. A confidence selector encourages learners to acknowledge ambiguous cases.

**Responsive behavior:** Matrix and scenario panel sit side by side on wide displays and stack on narrow displays. All regions are keyboard selectable and resize dynamically.

**Instructional rationale:** Sorting realistic design failures requires learners to analyze what each study actually measures and how consistently it does so.

Implementation: Responsive p5.js matrix with semantic HTML scenario and correction controls.
</details>

## Repeatability and Reproducibility

**Repeatable Evaluation** means the same team can apply the same procedure again under comparable conditions. A repeatable persona test preserves the model, persona version, instructions, asset, rubric, settings, and analysis steps. Exact wording may still vary because model output is probabilistic, so repeatability should specify which features must remain stable.

**Reproducible Results** means another qualified team has enough information to independently recreate the procedure and obtain findings that support a compatible interpretation. Reproducibility requires documentation, not merely a “rerun” button. The team needs inputs, versions, dates, prompts, exclusions, scoring logic, and a record of human judgment.

For AI persona research, create a study package containing:

- Decision, question, objectives, and scope
- Persona source evidence and version identifiers
- Full instructions and shared factual context
- Marketing asset version or immutable snapshot
- Model and tool identifiers with execution date
- Sampling logic for personas and repeated runs
- Raw responses and excluded responses
- Rubric, scoring rules, and confidence method
- Analysis notes, limitations, and validation plan

Repeatability supports internal learning across iterations. Reproducibility supports review, collaboration, and accountability. Neither guarantees validity; both make validity easier to inspect.

## Directional Insight and Customer Evidence

**Directional Insight** indicates where the evidence points without claiming a precise or universal result. A small interview study may suggest that pricing language creates anxiety. A persona simulation may suggest that an absolute promise invites skepticism. Directional findings are valuable when they help a team decide what to revise or investigate next.

**Customer Evidence** is information grounded in actual customers, their behavior, or their documented circumstances. It may come from interviews, observation, support records, behavioral analytics, experiments, surveys, or other ethically collected sources. Synthetic output can organize customer evidence or generate hypotheses about it; the synthetic output does not become customer evidence merely because it imitates a customer voice.

Use explicit labels in reports:

- **Observed customer evidence:** What real customers did or said
- **Measured market evidence:** What verified quantitative or market sources show
- **Synthetic finding:** What the model produced under documented conditions
- **Researcher interpretation:** What the team infers from available evidence
- **Open question:** What remains unknown and requires further study

These labels improve decision quality because they let a reader judge each statement on the right basis.

#### Diagram: Evidence-to-Claim Traceability Map

<iframe src="../../sims/evidence-claim-traceability/main.html" width="100%" height="520px" scrolling="no"></iframe>

<details markdown="1">
<summary>Evidence-to-Claim Traceability Map</summary>
Type: graph-model
**sim-id:** evidence-claim-traceability<br/>
**Library:** vis-network<br/>
**Status:** Specified

**Bloom level:** Evaluate (L5)

**Bloom verb:** validate

**Learning objective:** Validate whether a marketing research claim is adequately supported by its source evidence, method, assumptions, and limitations.

**Node types:** Decision, Research Question, Method, Evidence Item, Interpretation, Claim, Assumption, Constraint, and Limitation. Nodes show a short label plus properties such as source, date, and evidence status.

**Edge types:** ANSWERS, PRODUCES, SUPPORTS, DEPENDS_ON, LIMITED_BY, and CONTRADICTS. Clicking an edge explains the relationship and displays the exact source passage or data field when available.

**Sample graph:** A pricing-page decision connected to interview quotes, a survey result, three synthetic persona findings, and two proposed claims. One claim is deliberately too broad and displays a broken support path.

**Interaction:** Hover shows properties; click highlights the evidence neighborhood; a “Trace claim” control reveals every supporting path; learners can attach or remove evidence and receive feedback about unsupported claims.

**Layout and accessibility:** Hierarchical flow from question to claim, with zoom, pan, drag, keyboard node navigation, text-based graph alternative, and responsive resizing.

**Instructional rationale:** Inspecting and repairing support paths requires evaluation against evidence-quality criteria.

Implementation: vis-network with an accessible side panel and JSON-based sample cases.
</details>

## Worked Example: A Subscription Cancellation Page

A software company plans to redesign its cancellation page. Leaders believe customers leave because the product is expensive, while support staff believe the cancellation process itself causes distrust. The team needs evidence before deciding whether to change pricing, copy, or workflow.

The primary research question becomes: “Which parts of the cancellation experience contribute to distrust among customers who are actively considering leaving?” Objectives include identifying moments of confusion, distinguishing price objections from process objections, and producing two design changes for evaluation. Scope includes current subscribers in one country using the web flow; it excludes mobile-app cancellations and former customers.

The team records assumptions: participants remember why they considered leaving, and the prototype accurately represents the current flow. Constraints include two weeks, a limited recruiting list, and no ability to change pricing during the study. Those statements make interpretation more honest.

The design uses synthetic personas to rehearse interview prompts and stress-test the prototype, six customer interviews for exploratory depth, and a later survey only if the interviews reveal stable answer categories. The synthetic stage identifies a leading question—“How frustrating was cancellation?”—which is revised to “Tell me what you expected to happen on this screen.” AI improves the instrument without becoming a participant.

The report states that four interviewees interpreted a retention offer as an obstacle, but it does not claim that two-thirds of all customers share that view. It calls the pattern directional insight and recommends an evaluative prototype test. Raw evidence, prompt versions, interview notes, exclusions, and analysis decisions are saved so another researcher can review the chain of reasoning.

## Practice: Audit a Research Plan

Review a real or imagined marketing study and answer the following questions.

1. What decision will the study inform?
2. Is the primary research question specific and neutral?
3. Do the objectives describe observable outcomes?
4. What is inside and outside the research scope?
5. Which assumptions could change the interpretation?
6. Which constraints shape method, sample size, time, and cost?
7. Is the study exploratory, evaluative, iterative, or a combination?
8. What threatens validity? What threatens reliability?
9. Could the same team repeat the evaluation?
10. Could another team reproduce the reasoning from the documentation?
11. Which statements are directional insight?
12. Which statements qualify as customer evidence?

??? question "What makes an AI-assisted research plan defensible?"
    A defensible plan makes its decision, questions, objectives, scope, assumptions, constraints, procedures, and evidence status visible. It narrows claims when evidence is weak and names the next validation step instead of hiding uncertainty.

## Key Takeaways

- Questions define what the team wants to learn; objectives define what the study will deliver.
- Scope, assumptions, and constraints make the boundaries of interpretation visible.
- Focus groups, interviews, surveys, and synthetic sessions contribute different forms of evidence.
- Sample size must be judged against the intended claim, not by a universal target.
- Exploratory research discovers; evaluative research assesses; iterative research links repeated learning to design changes.
- Validity concerns whether the interpretation fits the study, while reliability concerns consistency.
- Repeatability and reproducibility require preserved procedures, inputs, versions, and reasoning.
- Directional insight can guide action without pretending to be population truth.
- Customer evidence comes from real customers or their documented behavior, not from simulated customer language alone.

## Review Questions

1. How does a research objective differ from a research question?
2. Why should assumptions and constraints be documented separately?
3. When is a customer interview more appropriate than a survey?
4. Why does sample size depend on the intended claim?
5. Can a study be reliable but invalid? Give an example.
6. What information must be preserved for a persona evaluation to be reproducible?
7. How should a report distinguish directional insight from customer evidence?
