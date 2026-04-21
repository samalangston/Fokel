```markdown
# Design System Strategy: The Academic Authority

## 1. Overview & Creative North Star
**Creative North Star: "The Digital Curator"**

In an era of cluttered data-entry tools and uninspired educational platforms, this design system establishes a high-end, editorial atmosphere that treats data with the reverence of a curated gallery. We are moving beyond the "utility-first" template look to create an experience that feels authoritative yet effortless. 

The system achieves this through **The Digital Curator** philosophy: 
- **Intentional Asymmetry:** Utilizing generous white space and off-center alignments to guide the eye, breaking the monotony of standard data tables.
- **Tonal Depth:** Replacing rigid lines with soft, overlapping planes of color.
- **Typographic Scale:** Using a dramatic contrast between large, editorial headlines and precise, functional data labels to establish a clear cognitive hierarchy.

The goal is to transform "data entry" from a chore into a focused, premium experience that fosters learning and accuracy.

---

## 2. Colors & Surface Philosophy

Our palette is anchored in deep, authoritative blues (`primary`) and sophisticated teals (`secondary`), balanced by a warm, paper-like neutral foundation.

### The "No-Line" Rule
Standard UI relies on 1px borders to separate ideas. This design system prohibits them. Layout boundaries must be defined solely through:
1.  **Background Shifts:** Transitioning from `surface` to `surface-container-low`.
2.  **Tonal Transitions:** Using the `surface-container` tiers to create logical groupings.

### Surface Hierarchy & Nesting
Treat the interface as a physical stack of fine paper. 
- **Base Layer:** Use `surface` (#f8f9fa) for the main canvas.
- **Sectioning:** Use `surface-container-low` (#f3f4f5) for large structural areas (like sidebars or background sections).
- **Interactive Planes:** Use `surface-container-lowest` (#ffffff) for the highest priority interactive elements, like data entry cards, to make them "pop" against the lower tiers.

### The "Glass & Gradient" Rule
To add a signature "soul" to the application:
- **Floating Navigation:** Use `surface` colors at 80% opacity with a `24px` backdrop-blur to create a "frosted glass" effect for headers or floating toolbars.
- **Signature Textures:** For primary Action Buttons or Hero Headers, use a subtle linear gradient from `primary` (#004590) to `primary_container` (#265dad) at a 135-degree angle. This prevents the "flat" look and adds a premium, tactile quality.

---

## 3. Typography: Editorial Precision

We utilize two distinct typefaces to balance character with utility: **Manrope** for display/headlines and **Inter** for functional data.

- **The Authority (Manrope):** Used for `display` and `headline` scales. This font brings a modern, geometric clarity that feels educational and trustworthy.
- **The Utility (Inter):** Used for `title`, `body`, and `label` scales. Inter is engineered for maximum readability in high-density data environments.

**Hierarchy Strategy:**
- Use `display-md` for landing moments to create an editorial impact.
- Use `label-md` in `on_surface_variant` (#424654) for form labels—never use pure black. This reduced contrast feels more sophisticated and reduces eye strain during long data-entry sessions.

---

## 4. Elevation & Depth

We eschew traditional "drop shadows" in favor of **Tonal Layering**.

- **The Layering Principle:** To create a card, do not draw a border. Instead, place a `surface-container-lowest` (#ffffff) shape on a `surface-container-low` (#f3f4f5) background. The shift in hex value provides enough contrast for the brain to perceive depth without visual noise.
- **Ambient Shadows:** If a floating element (like a Modal) is required, use a shadow with a blur of `40px`, a spread of `-10px`, and an opacity of 6%. The shadow color should be derived from `on_surface` (#191c1d) to ensure it looks like a natural occlusion of light.
- **The "Ghost Border" Fallback:** If accessibility requirements demand a container border, use `outline_variant` (#c3c6d6) at **15% opacity**. It should be felt, not seen.

---

## 5. Components

### Input Fields (The Core Utility)
- **Structure:** Use `surface_container_highest` (#e1e3e4) for the input background with a `md` (0.375rem) corner radius. 
- **States:** On focus, transition the background to `surface_container_lowest` (#ffffff) and apply a 2px "Ghost Border" using the `primary` (#004590) token.
- **Error States:** Use `error` (#ba1a1a) for the helper text and a subtle `error_container` (#ffdad6) wash for the input background. Avoid "shaking" animations; use a soft fade-in for error messages to maintain the professional tone.

### Buttons
- **Primary:** High-contrast `primary` background with `on_primary` text. Use the `lg` (0.5rem) roundedness for a modern, approachable feel.
- **Secondary:** Use `secondary_container` (#b3c5fd) with `on_secondary_container` (#3e5181) text. This provides a soft, accessible alternative for non-destructive actions.

### Cards & Lists
- **The "No Divider" Rule:** Never use a horizontal line to separate list items. Use 16px of vertical white space (Spacing Scale) or a alternating background shift between `surface` and `surface-container-low`.

### Data Chips
- Use `tertiary_fixed` (#ffdbcf) for highlights or "New" tags. The warm terracotta tone provides a sophisticated counterpoint to the cool blues of the system, drawing the eye without the "alarm" of a bright red.

---

## 6. Do's and Don'ts

### Do
- **Do** use `display-lg` typography to create an editorial "break" in long data forms.
- **Do** leverage "Nested Depth"—put a high-tier surface inside a low-tier surface.
- **Do** use `primary_fixed_dim` (#abc7ff) for subtle hover states on interactive surfaces.

### Don't
- **Don't** use 1px solid borders for layout containers. It breaks the "curated" feel.
- **Don't** use pure black (#000000) for text. Always use `on_surface` (#191c1d) to maintain a premium, soft-contrast look.
- **Don't** crowd the screen. If the data is complex, use more vertical scrolling and larger white space rather than shrinking the typography.

---

## Director's Note on Implementation
When building screens, ask yourself: *"Does this feel like a generic dashboard, or does it feel like a bespoke publication?"* If it feels generic, remove a border, increase your headline size, and add 24px of breathing room. Efficiency in data entry comes from clarity, and clarity comes from a lack of visual clutter.```