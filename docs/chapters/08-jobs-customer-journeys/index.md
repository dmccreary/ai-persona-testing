---
title: Jobs-to-Be-Done and Customer Journeys
description: Modeling customer progress through Jobs-to-Be-Done, switching forces, circumstances, journey stages, touchpoints, friction, and opportunity.
generated_by: claude skill chapter-content-generator
date: 2026-07-03 15:36:33
version: 0.09
---

# Jobs-to-Be-Done and Customer Journeys

## Summary

Applies Jobs-to-Be-Done, switching forces, customer circumstances, journey stages, touchpoints, moments of truth, friction, and opportunity.

Learners will be able to situate persona decisions within authentic goals, circumstances, and customer journeys.

## Concepts Covered

This chapter covers the following 20 concepts from the learning graph:

1. Jobs-to-Be-Done
2. Customer Job
3. Functional Job
4. Emotional Job
5. Social Job
6. Desired Outcome
7. Customer Progress
8. Switching Forces
9. Push Forces
10. Pull Forces
11. Habit Forces
12. Anxiety Forces
13. Customer Circumstance
14. Use Context
15. Customer Journey
16. Journey Stage
17. Customer Touchpoint
18. Moment of Truth
19. Journey Friction
20. Journey Opportunity

## Prerequisites

This chapter builds on concepts from:

- [Chapter 1: AI-Powered Customer Research Foundations](../01-ai-customer-research/index.md)
- [Chapter 5: Building Complete Customer Personas](../05-customer-personas/index.md)
- [Chapter 6: Persona Motivations, Behaviors, and Evidence](../06-persona-behavior-evidence/index.md)
- [Chapter 7: Customer Segmentation and Persona Archetypes](../07-segmentation-archetypes/index.md)

---

## Customers Seek Progress

**Jobs-to-Be-Done** is a way of understanding why people choose or abandon a product, service, or behavior. The central idea is that customers “hire” a solution to make progress in a particular circumstance. The job is not the product category. A commuter does not merely hire a transit app; the commuter may hire it to arrive reliably while coordinating an unpredictable schedule.

A **Customer Job** is the progress a customer seeks. Good job statements avoid naming the company's solution and avoid describing a vague aspiration. “When monthly reporting approaches, help me reconcile scattered requests quickly so I can update clients with confidence” contains a circumstance, progress, and outcome.

Jobs have several dimensions. A **Functional Job** is the practical task to complete, such as comparing plans or submitting a claim. An **Emotional Job** concerns the feeling the customer seeks or avoids, such as feeling in control rather than exposed. A **Social Job** concerns how the customer wants to be perceived or fulfill responsibilities to others.

The dimensions coexist. A manager adopting a scheduling tool wants to publish shifts, reduce anxiety about errors, and appear dependable to employees. A persona simulation becomes stronger when it tests the asset against all relevant dimensions rather than reducing the decision to features.

| Job Dimension | Question | Example |
|---|---|---|
| Functional job | What task or outcome must be achieved? | Publish an accurate schedule before Friday |
| Emotional job | How does the customer want to feel? | Confident that no shift was missed |
| Social job | What responsibility or identity matters? | Be seen as fair and dependable by staff |

#### Diagram: Customer Job Statement Builder

<iframe src="../../sims/customer-job-statement-builder/main.html" width="100%" height="702" scrolling="no"></iframe>

<details markdown="1">
<summary>Customer Job Statement Builder</summary>
Type: interactive infographic
**sim-id:** customer-job-statement-builder<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Bloom level:** Create (L6)

**Bloom verb:** formulate

**Learning objective:** Formulate an evidence-grounded customer job statement containing circumstance, desired progress, functional outcome, emotional outcome, and social responsibility.

**Layout:** Five sentence-building zones with a research-note tray. A preview assembles the selected elements into a job statement.

**Interaction:** Learners sort notes, edit language, and remove solution-specific or demographic wording. Feedback flags statements that name a product, lack a circumstance, or confuse the company's objective with customer progress.

**Scenarios:** Scheduling, household energy, business banking, and healthcare appointments.

**Accessibility and responsiveness:** Keyboard card selection, text export, stacked zones on narrow screens, and resize handling.

**Instructional rationale:** Combining evidence into a new job statement directly supports creating.

Implementation: Responsive p5.js canvas with semantic HTML sentence fields.
</details>

## Outcomes and Progress

A **Desired Outcome** is a result the customer uses to judge progress. Outcomes should be observable or assessable. “Better experience” is too broad. “Reduce the time required to confirm every request has an owner” provides direction without prescribing a solution.

**Customer Progress** is movement from a current situation toward a desired one. Progress can include completing a task, reducing uncertainty, gaining capability, changing identity, or escaping an unacceptable condition. A purchase is one possible step, not the final definition.

Separate outcomes from features. A dashboard is a feature; seeing which accounts require attention is an outcome. Automated reminders are a feature; reducing missed appointments is an outcome. This distinction allows a persona to evaluate several solutions fairly.

Outcome statements often include direction and object:

- Minimize the time needed to compare total cost.
- Increase confidence that a message is compliant.
- Reduce the likelihood of missing a deadline.
- Improve the ability to explain a decision to stakeholders.
- Avoid exposing private information during a shared-device task.

Outcomes can conflict. Faster signup may reduce the evidence available for trust. More customization may increase setup effort. Persona testing should surface these tensions rather than force every criterion upward at once.

## Switching Forces

**Switching Forces** explain movement between a current approach and a new one. A decision is rarely driven by attraction alone. Pressure from the present, attraction to the new, comfort with the current habit, and anxiety about change all act together.

**Push Forces** are problems or changes making the current situation less acceptable: rising cost, repeated failure, a deadline, or a new requirement. **Pull Forces** are attractive qualities of a possible future: easier coordination, greater confidence, status, or lower risk.

**Habit Forces** hold the customer in the current behavior. Familiarity, sunk effort, established routines, and social coordination can make an imperfect option easier to keep. **Anxiety Forces** are fears and uncertainties about changing: migration failure, hidden cost, learning effort, loss of control, or regret.

Marketing often overemphasizes pull. A page lists benefits while ignoring habit and anxiety. A persona grounded in switching forces asks whether the push is strong enough, whether the pull is credible, and what evidence can reduce the cost of change.

#### Diagram: Switching Forces Balance Lab

<iframe src="../../sims/switching-forces-balance/main.html" width="100%" height="702" scrolling="no"></iframe>

<details markdown="1">
<summary>Switching Forces Balance Lab</summary>
Type: microsim
**sim-id:** switching-forces-balance<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Bloom level:** Analyze (L4)

**Bloom verb:** examine

**Learning objective:** Examine how push, pull, habit, and anxiety forces combine to produce switching, delay, or retention.

**Controls:** Sliders for each force, evidence toggles, deadline, reversibility, and stakeholder support. Defaults show moderate push and pull with strong habit.

**Visual elements:** A transparent force balance and decision path. Changing a control reveals which evidence or circumstance altered the balance; no conversion probability is claimed.

**Interaction:** Learners predict Switch, Delay, or Stay, adjust a marketing intervention, and receive feedback about whether it strengthens pull, reduces anxiety, or ignores the real barrier.

**Responsive design:** Scale horizontally on wide screens and stack controls below the balance on narrow screens. Include keyboard controls and text summary.

**Instructional rationale:** Manipulating forces and interpreting consequences supports analysis of a multi-causal decision.

Implementation: p5.js force visualization with accessible HTML sliders.
</details>

## Circumstances and Use Context

**Customer Circumstance** is the situation that makes a job active and shapes available choices. Circumstance includes events, resources, relationships, constraints, and timing. Two customers with similar goals may choose differently because one faces a contract deadline and the other is casually exploring.

**Use Context** is the immediate condition in which a product, message, or service is encountered. It includes device, location, channel, attention, privacy, connectivity, accessibility, and social setting. Customer circumstance can span weeks; use context can describe a particular moment.

For example, the circumstance is “a team must replace an expiring tool within one month.” One use context is “the manager compares pricing on a laptop at work.” Another is “the manager forwards a mobile screenshot to the owner during a commute.” The same message may succeed in one and fail in the other.

A useful scenario records both levels:

1. What changed to activate the job?
2. Which outcome matters and by when?
3. Which forces support or resist progress?
4. Who else affects the decision?
5. Where and how is the asset encountered now?
6. Which limitations affect attention, access, or interpretation?

## Mapping the Customer Journey

A **Customer Journey** is the sequence of experiences through which a customer pursues progress. The journey is organized from the customer's perspective, not merely the company's funnel. It may begin before brand awareness and continue through use, support, renewal, departure, or advocacy.

A **Journey Stage** is a meaningful phase with a distinct customer goal, context, and decision. Common labels such as awareness, consideration, purchase, onboarding, use, and renewal can help, but teams should adapt stages to actual evidence. A journey is not improved by forcing every customer into a standard funnel.

A **Customer Touchpoint** is an interaction with the brand, product, partner, environment, or other person that affects the journey. Touchpoints include advertisements, search results, reviews, forms, packaging, service calls, invoices, and word of mouth. Some crucial touchpoints are outside company control.

Map each stage using customer job, desired outcome, questions, emotions, actions, touchpoints, evidence, and barriers. Preserve branches: customers may loop, pause, skip stages, or leave.

#### Diagram: Evidence-Grounded Journey Mapper

<iframe src="../../sims/evidence-grounded-journey/main.html" width="100%" height="702" scrolling="no"></iframe>

<details markdown="1">
<summary>Evidence-Grounded Journey Mapper</summary>
Type: workflow
**sim-id:** evidence-grounded-journey<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Bloom level:** Create (L6)

**Bloom verb:** construct

**Learning objective:** Construct a customer journey connecting stages, jobs, outcomes, contexts, touchpoints, forces, evidence, and alternative paths.

**Layout:** Responsive journey lanes with stages as columns and rows for Job, Outcome, Context, Action, Touchpoint, Evidence, Emotion, and Barrier.

**Interaction:** Learners drag research notes into cells, create branches, and click a connector to explain why movement occurs. Unsupported cells remain visibly marked as assumptions.

**Feedback:** The mapper flags company-centered stages, missing customer outcomes, unsupported linearity, and touchpoints without evidence. Compare mode overlays two personas.

**Accessibility:** Keyboard editing, text export, collapsible rows, and vertical stage cards on narrow screens.

**Instructional rationale:** Building and revising a journey model supports creating by integrating many evidence types into a coherent path.

Implementation: Responsive p5.js journey canvas with semantic HTML editors.
</details>

## Moments of Truth, Friction, and Opportunity

A **Moment of Truth** is a journey interaction with disproportionate influence on trust, progress, or the relationship. It may be the first price reveal, a denied request, successful setup, or service recovery. Not every touchpoint is a moment of truth; importance depends on customer stakes.

**Journey Friction** is effort, confusion, delay, risk, or emotional strain that obstructs progress. Some friction is accidental, such as duplicate data entry. Some is necessary, such as identity verification. Necessary friction should be proportionate, understandable, and supported.

A **Journey Opportunity** is a point where changing information, process, channel, evidence, or support could improve progress. Opportunity is not automatically “remove every step.” The best response may explain a step, move it, provide choice, or prevent a later failure.

Analyze friction using five questions:

- What job or outcome is blocked?
- At which stage and touchpoint does it occur?
- Is the friction avoidable, necessary, or protective?
- Which customers carry more of its cost?
- What evidence shows that a proposed change helps?

#### Diagram: Moment and Friction Prioritizer

<iframe src="../../sims/moment-friction-prioritizer/main.html" width="100%" height="702" scrolling="no"></iframe>

<details markdown="1">
<summary>Moment and Friction Prioritizer</summary>
Type: interactive infographic
**sim-id:** moment-friction-prioritizer<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Bloom level:** Evaluate (L5)

**Bloom verb:** prioritize

**Learning objective:** Prioritize journey opportunities by customer impact, frequency, severity, equity, evidence strength, and implementation risk.

**Layout:** Touchpoint cards plot on an Impact versus Evidence matrix. Additional badges show frequency, affected persona, and whether friction is necessary.

**Interaction:** Learners inspect evidence, adjust criteria weights, compare two personas, and move proposed opportunities into Now, Investigate, or Later. Feedback warns when frequency hides severe accessibility harm.

**Responsive design:** Matrix becomes a ranked card list on narrow screens, with keyboard controls, patterns, and resize handling.

**Instructional rationale:** Ranking opportunities against explicit criteria supports evaluation and justified recommendation.

Implementation: Responsive p5.js matrix with accessible control panel.
</details>

## Gathering Evidence for Jobs and Journeys

Jobs and journeys should be reconstructed from specific events rather than invented from general opinions. Ask participants to describe a recent occasion when they began seeking progress, considered alternatives, chose an approach, and experienced the result. Concrete timelines reveal circumstances and forces that abstract preference questions miss.

Begin before the product entered the story. Ask what was happening, what changed, and why the previous approach became less acceptable. This reveals push forces. Ask which alternatives appeared attractive and what promised future they represented. This reveals pull. Ask what made the current approach familiar or easy to keep. This reveals habit. Ask what felt uncertain, risky, or difficult about changing. This reveals anxiety.

Useful prompts include:

- “Take me back to the first moment you thought something needed to change.”
- “What else was happening that made the issue matter then?”
- “Which options did you consider, including doing nothing?”
- “What attracted you to each option?”
- “What nearly stopped you from changing?”
- “Who else influenced or was affected by the decision?”
- “Which information did you seek, and where did you look?”
- “Describe the moment you committed, delayed, or abandoned the choice.”
- “What happened after the decision, and how did you judge the outcome?”

Build the journey from evidence fragments. A participant may remember touchpoints out of order, so use dates, messages, receipts, browser history, or other ethically available artifacts to support recall. Separate what the customer did from what the organization assumes happened. Mark missing stages rather than filling them with a standard funnel.

AI can help organize notes into candidate jobs, forces, stages, and friction points, but the researcher should compare every synthesis with the source material. A model may smooth contradictions into a tidy narrative. Preserve disagreement, abandoned paths, and changes of mind because they often contain the most useful design evidence.

When evidence comes from several participants, look for recurring progress patterns without erasing circumstance. Two customers can share a job while taking different journeys. Conversely, two customers can move through similar touchpoints while pursuing different jobs. Segmenting only by journey behavior may therefore hide the motivation; segmenting only by stated job may hide the practical barriers.

Before publishing a journey map, attach an evidence status to each element:

- **Observed:** Directly witnessed behavior or documented interaction
- **Reported:** Participant account of an event or reason
- **Inferred:** Researcher interpretation connecting evidence
- **Assumed:** Plausible but unverified content requiring research
- **Synthetic:** Generated hypothesis from a persona test

This labeling makes the map useful for future research. Teams can focus validation on high-impact assumptions rather than treating every box and arrow as equally established.

Review maps with frontline staff and customers separately before combining their views. Staff often see operational breakdowns across many cases, while customers see the effort, emotion, and consequences within one case. Differences between those perspectives are findings, not errors to average away. Record who contributed to each revision and preserve the earlier version so the team can see how evidence changed the model.

Treat each journey map as a versioned research artifact rather than a permanent portrait of customer behavior.

## Worked Example: Replacing a Team Scheduling Tool

A restaurant manager's customer job is to publish a fair, complete schedule before Friday while handling late availability changes. The functional job is assigning shifts. The emotional job is feeling confident that no commitment was missed. The social job is being seen as fair by staff.

The desired outcome is less time reconciling messages and fewer last-minute conflicts. A series of missed shifts creates push. A shared availability view creates pull. Familiar group chats and spreadsheets create habit. Migration effort and fear of staff resistance create anxiety.

The broader circumstance includes seasonal hiring and no dedicated administrator. Use context changes across the journey: desktop comparison after closing, mobile approvals during service, and employee updates on varied devices.

The journey includes problem recognition, peer research, comparison, trial, staff invitation, first schedule, routine use, and renewal. Touchpoints include a search result, review, pricing page, trial email, import screen, notification, and support response. The import screen is a moment of truth because failure would confirm migration anxiety.

Journey friction includes unclear pricing, unsupported spreadsheet formats, and employees who cannot use the notification channel. Opportunities include a sample bill, import preview, accessible alternatives, and a staged rollout checklist. Persona testing generates hypotheses at each point, while manager interviews and task testing validate the highest-risk findings.

## Practice: Build a Job and Journey

Choose one persona and marketing decision.

1. Write a customer job with circumstance and progress.
2. Identify functional, emotional, and social job dimensions.
3. Define desired outcomes without naming product features.
4. Map push, pull, habit, and anxiety forces.
5. Separate broader circumstance from immediate use context.
6. Create evidence-based journey stages and branches.
7. List touchpoints controlled and not controlled by the company.
8. Identify moments of truth and explain their stakes.
9. Classify friction as avoidable, necessary, or protective.
10. Prioritize opportunities and name required validation.

??? question "Is a customer journey the same as a marketing funnel?"
    No. A funnel organizes movement from the company's perspective and often emphasizes conversion. A journey organizes progress from the customer's perspective, including loops, pauses, use, support, departure, and experiences outside company control.

## Key Takeaways

- Jobs-to-Be-Done describes progress in a circumstance rather than attachment to a product.
- Customer jobs contain functional, emotional, and social dimensions.
- Desired outcomes define success; customer progress can extend beyond purchase.
- Push and pull encourage change, while habit and anxiety resist it.
- Circumstance activates the job; use context shapes a particular interaction.
- Journeys contain evidence-based stages, branches, and touchpoints.
- Moments of truth carry disproportionate stakes.
- Friction can be avoidable, necessary, or protective; opportunities should be prioritized using evidence and equity.

## Review Questions

1. Why should a customer job avoid naming the solution?
2. How do functional, emotional, and social jobs interact?
3. What is the difference between push and pull forces?
4. How do habit and anxiety keep customers with an unsatisfactory solution?
5. How does customer circumstance differ from use context?
6. What makes a touchpoint a moment of truth?
7. Why is removing every form of journey friction a poor goal?
