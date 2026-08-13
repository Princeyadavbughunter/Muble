# Muble

A furniture & interior design studio site — React + Vite, animated with **Framer Motion**
and **Lenis** momentum scrolling.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # → dist/
npm run preview
```

## What's in it

| Section | The motion |
| --- | --- |
| Preloader | Counter 0→100, then a two-layer ink/clay curtain lifts off the page |
| Cursor | Hairline ring lagging a dot, `mix-blend-mode: difference` so it works on light *and* dark; grows into a filled "View" pill over `data-cursor="view"` targets |
| Nav | Hides on scroll-down / returns on scroll-up, blurs once past the fold, roll-up link hovers, full-screen `clip-path` menu |
| Hero | Word-by-word mask reveal, `clip-path` image reveal with a 1.35→1 scale, parallax + fade on scroll |
| Marquee | Continuous ticker that accelerates and **reverses** with scroll velocity |
| Collections | Pinned horizontal gallery — vertical scroll drives the track sideways, with a progress rail |
| Projects | Stacking deck — each card pins and is pressed down as the next slides over it |
| Process | Sticky aside with a rail that draws down as you read |
| Testimonials | Auto-rotating with a timed progress dot; pauses on hover |
| Contact | Floating-label form with a line that draws in on focus |

## Editing content

Almost everything lives in [`src/data/site.js`](src/data/site.js) — collections, projects,
process steps, testimonials, nav links and every image URL. Change copy there and the
sections follow.

The form in `Contact.jsx` has no backend; it fakes a success state. Point `onSubmit`
at your endpoint when you have one.

## Design tokens

All colour, type and motion values are CSS custom properties at the top of
[`src/styles/base.css`](src/styles/base.css):

```
--bone  #f6f2ec    --ink   #17130f    --clay  #a9714b
--serif Cormorant Garamond   --sans Inter
--ease-out cubic-bezier(.22, 1, .36, 1)
```

Change `--clay` and the accent shifts everywhere — links, rails, italics, cursor.

## Structure

```
src/
  data/site.js          all copy + imagery
  hooks/useLenis.js     smooth scroll, anchor links routed through it
  ui/                   SplitText · Reveal · Parallax · Magnetic
  components/           one .jsx + .css per section
  styles/               base.css (tokens) · app.css (grain, progress bar)
```

`base.css` is imported **before** `App.jsx` in `main.jsx` on purpose — the utility
layer has to sit underneath the component layer or `.btn` starts winning against the
rules meant to override it.

## Notes

- Images are hot-linked from Unsplash. Swap the `img()` URLs in `site.js` for your own
  assets before going live.
- Honours `prefers-reduced-motion`: the preloader is skipped, Lenis stays off, the
  pinned gallery falls back to a vertical stack.
- Below 900px the horizontal gallery stacks and the project deck un-pins.
