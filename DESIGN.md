---
name: Forge Industrial
colors:
  surface: '#0c141f'
  surface-dim: '#0c141f'
  surface-bright: '#323946'
  surface-container-lowest: '#070e19'
  surface-container-low: '#151c27'
  surface-container: '#19202b'
  surface-container-high: '#232a36'
  surface-container-highest: '#2e3541'
  on-surface: '#dce2f3'
  on-surface-variant: '#e3beb9'
  inverse-surface: '#dce2f3'
  inverse-on-surface: '#2a313d'
  outline: '#aa8985'
  outline-variant: '#5b403d'
  surface-tint: '#ffb4aa'
  primary: '#ffb4aa'
  on-primary: '#690004'
  primary-container: '#b11e1a'
  on-primary-container: '#ffc5bd'
  inverse-primary: '#b6221d'
  secondary: '#c6c6c9'
  on-secondary: '#2f3133'
  secondary-container: '#454749'
  on-secondary-container: '#b4b5b7'
  tertiary: '#c5c7c8'
  on-tertiary: '#2e3132'
  tertiary-container: '#595b5c'
  on-tertiary-container: '#d2d3d4'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdad5'
  primary-fixed-dim: '#ffb4aa'
  on-primary-fixed: '#410001'
  on-primary-fixed-variant: '#930008'
  secondary-fixed: '#e2e2e5'
  secondary-fixed-dim: '#c6c6c9'
  on-secondary-fixed: '#1a1c1e'
  on-secondary-fixed-variant: '#454749'
  tertiary-fixed: '#e1e3e4'
  tertiary-fixed-dim: '#c5c7c8'
  on-tertiary-fixed: '#191c1d'
  on-tertiary-fixed-variant: '#454748'
  background: '#0c141f'
  on-background: '#dce2f3'
  surface-variant: '#2e3541'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '800'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-sm:
    fontFamily: Hanken Grotesk
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 28px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin: 32px
---

## Brand & Style

The design system is engineered for the industrial and manufacturing sectors, evoking a sense of reliability, precision, and heavy-duty performance. The brand personality is "The Dependable Specialist"—utilitarian, efficient, and authoritative.

The visual style is **High-Contrast Modern Industrial**. It draws from the aesthetics of machine plates, architectural blueprints, and control rooms. It utilizes a deep dark theme to minimize eye strain in factory or office environments, punctuated by a high-visibility brand red to denote action and critical information. The interface prioritizes clarity and functional density over decorative flourishes.

## Colors

The palette is anchored by the core brand red, extracted for high-impact visibility against a technical dark background.

*   **Primary (Brand Red):** Use primarily for CTAs, critical status indicators, and key brand accents.
*   **Secondary (Industrial Ink):** The deep foundation for surfaces and containers.
*   **Tertiary (Machine White):** Pure or near-white for maximum legibility of text and data.
*   **Neutral (Steel Gray):** Used for borders, icons, and secondary metadata to maintain a clean, organized hierarchy.

The color system maintains a strict dark-mode-first approach to reinforce the industrial aesthetic.

## Typography

This design system uses a dual-font strategy to balance professional corporate communication with technical precision. 

**Hanken Grotesk** serves as the primary typeface. Its sharp terminals and clean, geometric construction provide the "strong sans-serif" look required for industrial headers and body copy. 

**JetBrains Mono** is introduced for labels, data points, and part numbers. This monospaced font mimics the look of technical readouts and serial tags, providing a functional "tooling" feel to the interface. All labels should be set in Uppercase to enhance the industrial character.

## Layout & Spacing

The layout philosophy follows a **Fixed-Fluid Hybrid Grid**. Content resides within a maximum width of 1280px for desktop to ensure comfortable scan lines for technical data, while the background and secondary containers extend fluidly.

*   **Desktop:** 12-column grid with 24px gutters. Use large 80px vertical spacing to separate major sections.
*   **Tablet:** 8-column grid with 24px gutters.
*   **Mobile:** 4-column grid with 16px margins.

The spacing rhythm is based on a 4px baseline, ensuring that all components align to a mathematical grid, reinforcing the sense of precision engineering.

## Elevation & Depth

Hierarchy is established through **Tonal Layers** rather than soft shadows, maintaining a "flat but layered" industrial look.

1.  **Level 0 (Background):** The darkest shade (#0D0E10), used for the main application canvas.
2.  **Level 1 (Surface):** A slightly lighter gray-black (#1A1C1E) for cards, sidebars, and main content areas.
3.  **Level 2 (Inlay):** Use dark, low-contrast outlines (1px solid #2D3135) to define internal component boundaries.

Instead of ambient shadows, use 1px solid borders in neutral steel tones to separate elements. This mimics the construction of physical machinery panels. For active states, a subtle "inner glow" or "rim light" can be achieved with the brand red color to indicate focus.

## Shapes

The shape language is strictly **Soft (Level 1)**. 

Total sharpness (0px) can feel overly aggressive, while high roundedness feels too consumer-focused. A 4px (0.25rem) radius provides a precise, machined quality that feels modern and professional. Larger containers like cards may use the `rounded-lg` (8px) setting to create a clear structural distinction. 

Buttons and input fields must strictly adhere to the 4px radius to maintain the "panel-mounted" aesthetic.

## Components

### Buttons
*   **Primary:** Solid Brand Red background with Machine White text. Rectangular with 4px radius. 
*   **Secondary:** Ghost style. Transparent background with 1px Steel Gray border. Text in Machine White.
*   **States:** On hover, primary buttons shift to a darker red; secondary buttons fill with a subtle gray tint.

### Input Fields
*   **Style:** Dark background (#121416) with a 1px Steel Gray border. 
*   **Focus:** Border shifts to Brand Red with a 1px solid stroke. Use JetBrains Mono for placeholder text to emphasize the technical nature.

### Cards
*   **Style:** Surface-level background (#1A1C1E) with no shadows. Use a subtle top-border in Brand Red (2px) to denote "Active" or "Featured" items.

### Lists & Data Tables
*   **Style:** Alternating row highlights using subtle shifts in dark grays. Use 1px horizontal dividers only. JetBrains Mono should be used for all numeric values and part IDs.

### Chips & Badges
*   **Style:** Rectangular with 2px radius. Use low-saturation backgrounds for status (e.g., dark amber for "Pending", dark green for "In Stock") to prevent clashing with the high-intensity Brand Red action items.