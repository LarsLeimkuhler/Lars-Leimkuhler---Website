# Media drop-in

Drop your real assets here. Until then, the homepage hero shows tasteful
placeholders with the slot name printed on each scene.

## Files the site is looking for

| Path                          | Used by              | Spec                                                                                                      |
| ----------------------------- | -------------------- | --------------------------------------------------------------------------------------------------------- |
| `public/media/hero.mp4`       | ScrollHero · scene 1 | 3–5 s loopable clip, silent. 4:5 portrait. ~1280px short side. H.264, ~1–2 MB. Subtle motion (blink, breath). |
| `public/media/hero-poster.jpg`| ScrollHero · scene 1 | First frame of `hero.mp4`, JPG/AVIF. 1024×1280 or similar. ~80 KB.                                        |
| `public/media/teaching.jpg`   | ScrollHero · scene 2 | Still photograph of you teaching. 4:5 portrait. ~1280px short side. ~150 KB.                              |
| `public/media/research.jpg`   | ScrollHero · scene 3 | Still photograph of you at the desk / with a book. 4:5 portrait. Same spec as above.                      |

## Notes

- All three scenes share aspect ratio so the crossfade looks intentional. If
  you must use 1:1 instead of 4:5, change the `aspect-*` class on the
  `bezel-inner` in `src/components/scene-stage.tsx`.
- Same lighting / colour grade across the three clips makes the crossfades
  feel coordinated. Shoot them in one session if you can.
- `prefers-reduced-motion` users will see only the poster image, never the
  video, with no transition motion.
- Mobile users get the full hero — but consider that 3 stills loading on
  cellular is heavier than a static one. If you want to save the bandwidth,
  swap to a single hero image on `lg:hidden` later.
