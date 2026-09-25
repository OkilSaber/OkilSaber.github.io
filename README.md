# okilsaber.github.io

My portfolio: https://okilsaber.github.io

Plain HTML, CSS and JavaScript, with no build step: GitHub Pages serves the repository as is.

## Update the content

| File | What's in it |
| --- | --- |
| `data/projects.js` | The projects shown. `featured: true` gives a large card |
| `data/profile.js` | Name, GitHub and LinkedIn links (empty LinkedIn = hidden button). The avatar comes straight from GitHub |
| `data/i18n.js` | Interface text in French and English |

To add a project:

1. Copy its icon to `assets/projects/<repo>/icon.png` (square, 512 px is plenty).
2. Add a block in `data/projects.js` with `repo`, `name`, `category` (`desktop`, `mobile` or `tools`), `accent`, `icon`, `stack` and a `tagline` in both languages. Featured projects also need `description` and `highlights`.
3. Optional: `media` for a screenshot or a muted looping video, `download` for a release link.

## Preview locally

```
python3 -m http.server 8765
```

Then open http://localhost:8765 (`?lang=fr` or `?lang=en` to force a language).
