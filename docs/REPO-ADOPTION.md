# Repo adoption ledger

The goal is not to paste components. The build adopts specific mechanics from the repositories we collected.

| Repository | Concrete adoption in CN |
|---|---|
| `darkroomengineering/lenis` | Progressive desktop smooth-scroll enhancement with a deliberately crisp lerp; native fallback and reduced-motion opt-out. |
| `motiondivision/motion` | Progressive micro-motion for the hero device and service-row state transitions. |
| `lukePeavey/SplitType` | Word-level editorial hero reveal pattern; implemented with a dependency-free fallback to keep the concept resilient. |
| `brunosimon/folio-2025` | Principle: interaction is part of the idea. CN's recurring signature is HOME × 069, not a generic effect pack. |
| `rive-app/rive-react` | State-machine principle used in the care funnel / assistant; Rive runtime is intentionally not shipped without a bespoke CN animation asset. |
| `theatre-js/theatre` | Timeline discipline translated into short, controlled transition durations rather than adding a heavy timeline runtime. |
| `pmndrs/react-three-fiber` / `drei` | Explicitly not shipped: 3D would not improve trust or conversion for this ambulatory-care prospect and would hurt performance. |

This is intentional selective adoption: every dependency or interaction must improve comprehension, identity, trust, conversion, or perceived craft.
