# Content Generation Guide

## Learning Mascot: Lens the Evidence Explorer

### Mascot File Index

The canonical files for this mascot. When editing any of these, update the
others in the same turn so they stay in sync.

| File | Purpose |
|------|---------|
| [`docs/img/mascot/character-sheet.md`](docs/img/mascot/character-sheet.md) | Canonical identity document and source of truth |
| [`docs/img/mascot/image-prompts.md`](docs/img/mascot/image-prompts.md) | Self-contained prompts for regenerating each pose |
| [`docs/img/mascot/neutral.png`](docs/img/mascot/neutral.png) | Default and general-purpose pose |
| [`docs/img/mascot/welcome.png`](docs/img/mascot/welcome.png) | Chapter-opening pose |
| [`docs/img/mascot/thinking.png`](docs/img/mascot/thinking.png) | Key-concept pose |
| [`docs/img/mascot/tip.png`](docs/img/mascot/tip.png) | Helpful-guidance pose |
| [`docs/img/mascot/warning.png`](docs/img/mascot/warning.png) | Common-mistake and pitfall pose |
| [`docs/img/mascot/encouraging.png`](docs/img/mascot/encouraging.png) | Difficult-content pose |
| [`docs/img/mascot/celebration.png`](docs/img/mascot/celebration.png) | Achievement pose |
| [`docs/css/mascot.css`](docs/css/mascot.css) | Custom admonition styles |
| [`docs/learning-graph/mascot-test.md`](docs/learning-graph/mascot-test.md) | Rendering test for every pose and style |

### Character Overview

- **Name:** Lens
- **Type:** Anthropomorphic magnifying glass
- **Role:** Evidence-focused research guide
- **Pronouns:** They/them
- **Personality:** Analytical, calm, curious, supportive, appropriately skeptical
- **Catchphrase:** "Let's look closer."
- **Visual:** Blue-grey circular rim and arms, pale-blue face, deep-orange handle-body, simple expressive hands, and no accessories

### Voice Characteristics

- Uses brief, plain-language questions
- Separates observation, evidence, inference, hypothesis, and conclusion
- Challenges unsupported confidence without scolding
- Never speaks as a customer, customer-evidence source, or all-knowing AI
- Signature phrases: "Let's look closer.", "What supports that?", "Is that evidence or inference?", "What might we be missing?"

### Mascot Admonition Format

Always place mascot images in the admonition body, never in the title bar:

```markdown
!!! mascot-thinking "Key Insight"
    ![Lens thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    A brief, content-specific question or observation from Lens.
```

Image paths are relative to the rendered page URL. Chapter pages at
`chapters/<chapter>/index.md` and the mascot test page at
`learning-graph/mascot-test.md` both use `../../img/mascot/`.

### Placement Rules

| Context | Admonition type | Frequency |
|---------|-----------------|-----------|
| General note or sidebar | `mascot-neutral` | As needed |
| Chapter opening | `mascot-welcome` | At most once per chapter |
| Key concept or reflective question | `mascot-thinking` | 1–2 per chapter |
| Practical research guidance | `mascot-tip` | As needed |
| Bias, overclaiming, privacy, or other pitfall | `mascot-warning` | As needed |
| Difficult content or iterative work | `mascot-encourage` | Where readers may struggle |
| Meaningful completion | `mascot-celebration` | At most once per chapter |

### Do

- Keep Lens's dialogue to 1–3 useful, content-specific sentences
- Match the pose to the instructional purpose
- Use Lens to reinforce evidence discipline, uncertainty, and reflective practice
- Keep both hands free in every illustration
- Use gender-neutral language and they/them pronouns
- Limit Lens to no more than 5–6 appearances per chapter

### Don't

- Put mascot admonitions back-to-back
- Use Lens decoratively or repeat surrounding prose
- Give Lens a notebook, clipboard, pointer, or other handheld object
- Present Lens as a synthetic customer, customer-evidence source, or AI authority
- Put mascot artwork in an admonition title bar
- Change Lens's palette, geometry, personality, or speech patterns between poses
