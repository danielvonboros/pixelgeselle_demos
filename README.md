# Pixelgesellen Demos

Example websites for fictional businesses, built to show what a Pixelgesellen website delivers in each size. Every demo is a complete, independent site in its own design. They live apart from the Pixelgesellen sales page so they never add weight to it.

<p>Client side single page applications, no backend</p>

### Description

One yarn workspace with a shared core and one folder per demo site. Every site is built like a real client project: own fonts, own theme, own content. What proves itself here becomes the starting point for client work.

All demo businesses are fictional. Every site says so in a bar at the top and in its footer, carries `noindex, nofollow` and shows no phone numbers, e-mail addresses or street addresses. Buttons that would contact the business, and every form, open a dialog that explains the demo and links to the Pixelgesellen booking. The package scope `@pixelgeselle` is internal and kept from before the rename.

### Sites

| Folder       | Business                     | Trade      | City    | Size | Dev port | Reference              |
| ------------ | ---------------------------- | ---------- | ------- | ---- | -------- | ---------------------- |
| `raumton`    | Raumton Malerwerkstatt       | Painter    | Berlin  | S    | 5174     | praxis4.vercel.app     |
| `phase`      | Phase Elektrotechnik         | Electrician| Köln    | M    | 5175     | schyns.de              |
| `firstlinie` | Firstlinie Dach und Fassade  | Roofer     | Hamburg | M    | 5176     | ecolinearstudio.com    |
| `ahrens`     | Werkstatt Ahrens             | Joiner     | München | L    | 5177     | mersi-architecture.com |

What each site shows off:

- Raumton: colour tone picker that repaints the wall in the photo and the logo bar, numbered service list, prices, contact form.
- Phase: light simulator with scenes, colour temperature and brightness on a real room photo, service list, projects, contact form with photo upload.
- Firstlinie: clickable roof build-up, live cursor coordinates, four technical drawings as SVG components, staggered project grid, title block footer.
- Werkstatt Ahrens: monogram filled with the selected wood, material panel, filterable projects, process, careers teaser with quick application, contact form with photo upload.

### Structure

```
packages/
  core/            shared building blocks for every site
sites/
  <site>/
    src/
      content/     all visible copy, German
      components/  one folder per component
      sections/    page sections in order of appearance
      assets/      photos, downloaded by yarn photos
      demo.json    name, trade, city, size and catalog thumbnail
      photos.ts    photo library of the site
      theme.ts     colours and fonts of the site
scripts/           photo download and catalog export
deploy/            .htaccess for the demo subdomain
photos.json        photo manifest, see PHOTOS.md
```

### Conventions

- No comments in code files. Explanations live in this README. The only exception is code that is commented out on purpose and must be activated later.
- Reusable components first. Anything two sites need goes into `packages/core`.
- Content is never hardcoded in components. Strings live in `src/content` of each site, shared demo strings in `packages/core/src/content`.
- One folder per component, e.g. `components/tonePicker/TonePicker.tsx`.
- File names and identifiers are English, visible copy is German.

### Core

`@pixelgeselle/core` is consumed as TypeScript source through the workspace and has no build step. React, MUI and Emotion are peer dependencies, each site brings its own.

| Export                                     | Purpose                                                                 |
| ------------------------------------------ | ----------------------------------------------------------------------- |
| `createSiteTheme(tokens, overrides)`       | MUI theme from a site's colours, fonts and radius                       |
| `DemoProvider`, `useDemo`                  | demo info for the site and the dialog that explains the demo            |
| `DemoBar`                                  | bar at the top: example page, size and a link to the Pixelgesellen prices |
| `DemoNotice`, `DemoLegalLinks`             | footer notice and links to the Pixelgesellen imprint and privacy policy |
| `InquiryForm`                              | contact form, optional photo upload, opens the demo dialog on submit    |
| `Photo`, `createPhotoLibrary`              | responsive photo with `srcset`, labelled placeholder while missing      |
| `PageContainer`, `SkipLink`, `useSvgId`    | layout width, skip link and unique ids for SVG patterns                 |
| `brand`                                    | name, URLs and colours of the Pixelgesellen brand                       |

### Photos

See [PHOTOS.md](PHOTOS.md). `yarn photos` downloads every photo listed in `photos.json` into the sites. Missing photos render as placeholders, so everything builds without them.

### Catalog

The Pixelgesellen sales page links to the demos and can show them in a modal later. To keep the sales page fast, it does not bundle anything from this repository:

- `yarn build` writes `dist/catalog.json`: one entry per site with business, trade, city, size, URL and thumbnail.
- The thumbnail is the photo named in the site's `demo.json`, copied to `dist/catalog/<site>.jpg`.
- The sales page loads the thumbnails and, once there is a modal, `catalog.json` from the demo subdomain. New demos appear without a change to the sales page.

### Deployment

All sites are deployed together to `demos.pixelgesellen.de`, each in its own folder, e.g. `https://demos.pixelgesellen.de/raumton/`. The root redirects to the examples on pixelgesellen.de.

`.github/workflows/deploy.yml` builds on every push to `main` and uploads `dist/` via rsync, like the sales page. It needs these repository secrets:

| Secret            | Value                                                    |
| ----------------- | -------------------------------------------------------- |
| `SSH_PRIVATE_KEY` | deploy key, same as for the sales page                   |
| `SSH_KNOWN_HOSTS` | `ssh-keyscan` output of the all-inkl host                |
| `SSH_USER`        | SSH user of the all-inkl account                         |
| `SSH_HOST`        | SSH host of the all-inkl account                         |
| `SSH_TARGET`      | document root of the subdomain, e.g. `/www/htdocs/w0123456/demos.pixelgesellen.de/` |

`deploy/.htaccess` is copied to `dist/`. It forces HTTPS, sends `X-Robots-Tag: noindex, nofollow`, allows pixelgesellen.de to read `catalog.json` and caches hashed assets for a year.

### Tools used

| Property          | Tool                           |
| ----------------- | ------------------------------ |
| Language          | TypeScript                     |
| Library           | React 19                       |
| Build tool        | Vite 6                         |
| Component library | MUI v6                         |
| Styling           | Emotion, via the MUI `sx` prop |
| Fonts             | Fontsource, self-hosted        |
| Linting           | ESLint 9, typescript-eslint    |
| Package manager   | yarn workspaces                |
| Hosting           | all-inkl, static               |

### Scripts

```
yarn                  install all workspaces
yarn photos           download missing photos
yarn dev:<site>       start one site, e.g. yarn dev:raumton
yarn build:<site>     build one site into dist/<site>
yarn build            build every site and the catalog
yarn preview          serve dist/ on http://localhost:4173
yarn lint             lint the whole repository
```
