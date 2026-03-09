# Motion System

Animations are implemented with Framer Motion and organized to keep transitions smooth without overwhelming the user.

## Principles

- Prefer purposeful motion over decorative-only effects.
- Keep timing and easing consistent across sections.
- Respect accessibility considerations (reduce motion where applicable).

## Recommended Pattern

- Define reusable animation variants in `lib/`.
- Trigger section-level transitions in `sections/`.
- Keep small interaction animations inside local `components/`.

## Performance Notes

- Animate transform/opacity-first properties when possible.
- Avoid unnecessary re-renders in animated trees.
- Keep entrance sequences short to preserve perceived performance.
