# Photos

Every photo comes from Unsplash and is used under the [Unsplash License](https://unsplash.com/license): free for commercial use, no attribution required. No Unsplash+ photos are used.

`photos.json` is the single source of truth: site, file name, Unsplash photo, crop ratio and an optional focal point.

### Download

```
yarn photos            download every missing photo
yarn photos raumton    only one site
yarn photos --force    download again and overwrite
```

Each photo is saved in two widths, `sites/<site>/src/assets/photos/<name>-800.jpg` and `-1600.jpg`, already cropped to the ratio below. The sites pick them up automatically. A missing photo renders as a labelled placeholder, so a build never breaks.

Commit the downloaded files. The deploy workflow also runs `yarn photos`, but it only fills gaps.

### Replacing a photo

- Another Unsplash photo: change `id` and `page` in `photos.json`, delete the two files and run `yarn photos <site>`.
- An own or generated image: save it as `<name>-800.jpg` and `<name>-1600.jpg` in the site's photo folder, in the ratio listed below. The prompts are written for image generation in ChatGPT.

### Raumton · painter, Berlin

The tone picker colours only the wall. `sites/raumton/src/assets/room-wall-mask.png` is a transparent mask of the wall in `room`, without chair, skirting and floor. It fits only this photo: when `room` changes, run `python3 scripts/wallMask.py sites/raumton/src/assets/photos/room-1600.jpg sites/raumton/src/assets/room-wall-mask.png` with Pillow, NumPy and SciPy installed, and adjust the skirting line and the chair area in the script to the new photo.

| File | Ratio | Used for | Source |
| --- | --- | --- | --- |
| `room` | 16:9 | Colour tone visual next to the hero. The wall is tinted live with the selected tone, so it has to be light and plain. | [Unsplash](https://unsplash.com/photos/wicker-chair-with-metal-legs-on-a-wooden-floor-DJ3dx5MoUIw) |
| `work` | 4:5 | Gallery, interior painting | [Unsplash](https://unsplash.com/photos/a-person-using-a-paint-roller-to-paint-a-wall-rMVjOX8nm2U) |
| `stairs` | 4:5 | Gallery, lime plaster in a stairwell | [Unsplash](https://unsplash.com/photos/minimalist-concrete-staircase-with-vase-0B7ijYKaKcE) |
| `facade` | 4:5 | Gallery, facade after painting | [Unsplash](https://unsplash.com/photos/a-row-of-yellow-buildings-on-a-city-street-gB0jyHDRfU4) |

Prompts:

- **room**: Photorealistic interior photo of a bright Berlin Altbau room: a large, empty, freshly painted matte wall in a very light warm off-white fills two thirds of the frame, one rattan armchair in front of it, a strip of light oak floor at the bottom. Soft diffuse daylight from the left, no hard shadows, calm editorial style. Landscape 16:9. No people, no text, no logos.
- **work**: Photorealistic close-up of a hand rolling fresh matte white paint onto a wall with a paint roller, a crisp edge between painted and unpainted surface, soft daylight, tidy and minimal. Portrait 4:5. No face, no text, no logos.
- **stairs**: Photorealistic photo of a quiet Berlin Altbau stairwell with smooth lime plaster walls in warm white, a few light stone steps, soft daylight from a tall window, mineral texture visible, calm minimal composition. Portrait 4:5. No people, no text.
- **facade**: Photorealistic street photo of freshly painted Gründerzeit facades in Berlin-Friedenau, warm ochre and cream tones, stucco ornaments and balconies, blue sky, morning light, slightly from below. Portrait 4:5. No people, no readable signs, no text.

### Phase · electrician, Köln

The light simulator leaves the garden behind the window unchanged. The two window panes of `living-room` are traced as polygons in `sites/phase/src/components/lightPreview/windowMask.ts`, in pixels of the 1600 × 1200 photo. When `living-room` changes, trace the panes of the new photo.

| File | Ratio | Used for | Source |
| --- | --- | --- | --- |
| `evening` | 3:4 | Large hero image | [Unsplash](https://unsplash.com/photos/gray-padded-chaise-couch-beside-window-rEJxpBskj3Q) |
| `electrician` | 4:3 | Small hero tile | [Unsplash](https://unsplash.com/photos/electrician-testing-electrical-panel-with-multimeter-PkHf7BUWbtk) |
| `living-room` | 4:3 | Light simulator. Brightness and colour temperature are applied live, so the photo has to be neutral and evenly lit. | [Unsplash](https://unsplash.com/photos/a-modern-living-room-with-a-large-window-6ybDmGNE2Yg) |
| `cove-light` | 4:3 | Project: Altbau flat in Ehrenfeld | [Unsplash](https://unsplash.com/photos/a-living-room-filled-with-furniture-and-a-flat-screen-tv-nAFuA8t5K9Y) |
| `wallbox` | 4:3 | Project: wallbox in Rodenkirchen | [Unsplash](https://unsplash.com/photos/a-close-up-of-a-wall-mounted-device-11GQmIp-fV0) |
| `reception` | 4:3 | Project: medical practice in Sülz | [Unsplash](https://unsplash.com/photos/minimalist-interior-featuring-a-wooden-desk-plant-and-window-VRoK8MxTlHY) |

Prompts:

- **evening**: Photorealistic interior photo of a modern living room in the evening, double-height windows with a dusk sky, warm indirect LED light in a ceiling cove, a glowing floor lamp, light grey sofa, dark calm mood with warm highlights. Portrait 3:4. No people, no text, no logos.
- **electrician**: Photorealistic close-up of an electrician's gloved hands wiring circuit breakers in a new, tidy distribution board, neatly bundled cables, shallow depth of field. Landscape 4:3. No face, no brand names, no text.
- **living-room**: Photorealistic photo of a calm modern living room with light grey walls, a low grey sofa, a coffee table and a large window, neutral and evenly lit, minimal decor, slightly wide angle. Landscape 4:3. No people, no text.
- **cove-light**: Photorealistic photo of an Altbau living room in Cologne with indirect LED light in a ceiling cove, warm white glow, cosy sofa, plants, early evening. Landscape 4:3. No people, no text.
- **wallbox**: Photorealistic photo of a modern wall-mounted EV charging station on a garage wall with wood cladding, cable neatly coiled, soft daylight, product-like composition. Landscape 4:3. No brand logos, no text, no people.
- **reception**: Photorealistic photo of the reception of a modern medical practice, wooden reception desk, a large plant, a linear pendant light above the desk, light walls, calm and bright. Landscape 4:3. No people, no text, no logos.

### Firstlinie · roofer, Hamburg

| File | Ratio | Used for | Source |
| --- | --- | --- | --- |
| `steep-roof` | 3:4 | Project: Gründerzeit house in Eimsbüttel | [Unsplash](https://unsplash.com/photos/red-clay-roof-tiles-rPF67L5lGPI) |
| `flat-roof` | 4:3 | Project: commercial hall in Billbrook | [Unsplash](https://unsplash.com/photos/a-tall-building-with-a-sky-in-the-background-angdO_EXcbU) |
| `dormer` | 1:1 | Project: eyebrow dormer in Winterhude | [Unsplash](https://unsplash.com/photos/dormer-window-on-a-shingled-roof-q9qF7YT0-F4) |
| `gutter` | 3:4 | Project: copper gutter in Othmarschen | [Unsplash](https://unsplash.com/photos/brown-wooden-frame-during-daytime-l3VKAyNc6T0) |

Prompts:

- **steep-roof**: Photorealistic photo of a newly laid red clay tile roof, close-up of the tile rows running diagonally, clear blue sky above, crisp morning light. Portrait 3:4. No people, no text.
- **flat-roof**: Photorealistic architectural photo of a flat roof edge with a clean metal parapet coping on a white building, seen from below against a blue sky, minimal and graphic. Landscape 4:3. No people, no text.
- **dormer**: Photorealistic photo of an eyebrow dormer in a newly tiled roof of a northern German house, a small arched window, the tiles flowing over the dormer, soft daylight. Square 1:1. No people, no text.
- **gutter**: Photorealistic close-up of a new copper rain gutter with brackets at the eaves of a villa, shiny copper, blue sky, sharp details. Portrait 3:4. No people, no text.

### Werkstatt Ahrens · joiner, München

| File | Ratio | Used for | Source |
| --- | --- | --- | --- |
| `oak` | 4:3 | Wood picker and monogram fill | [Unsplash](https://unsplash.com/photos/a-close-up-view-of-a-wooden-surface-AE84zZ5C1Ws) |
| `walnut` | 4:3 | Wood picker and monogram fill | [Unsplash](https://unsplash.com/photos/close-up-of-dark-wood-grain-texture-KKKHaEA4coc) |
| `ash` | 4:3 | Wood picker and monogram fill | [Unsplash](https://unsplash.com/photos/light-oak-wood-plank-texture-background-JH_R66BihvA) |
| `smoked-oak` | 4:3 | Wood picker and monogram fill | [Unsplash](https://unsplash.com/photos/a-close-up-of-a-wood-grain-texture-k3CDaaQ_Qas) |
| `detail` | 3:2 | Material banner below the intro | [Unsplash](https://unsplash.com/photos/black-metal-bar-on-brown-wooden-table-jQ0kZbSnoQw) |
| `kitchen` | 4:5 | Project: kitchen in Isarvorstadt | [Unsplash](https://unsplash.com/photos/modern-dark-kitchen-with-wood-accents-UBoDgr8Y0YA) |
| `library` | 4:5 | Project: library in Gern | [Unsplash](https://unsplash.com/photos/a-modern-light-wood-wall-unit-with-shelves-and-cabinets-gNB_zp_NdDE) |
| `counter` | 4:5 | Project: wine shop in Haidhausen | [Unsplash](https://unsplash.com/photos/modern-counter-with-illuminated-wooden-shelves-and-small-bottles-KrhNtB8ANe8) |
| `wardrobe` | 1:1 | Project: built-in wardrobe in Schwabing | [Unsplash](https://unsplash.com/photos/modern-bedroom-with-minimalist-wooden-shelving-unit-and-closet-uaXXfDk_UCs) |
| `staircase` | 1:1 | Project: staircase in Bogenhausen | [Unsplash](https://unsplash.com/photos/modern-wooden-staircase-illuminated-by-warm-lighting-M4dpV6STEDM) |
| `table` | 1:1 | Project: dining table in Giesing | [Unsplash](https://unsplash.com/photos/brown-wooden-table-with-chairs-JggpIf_rt4E) |
| `workshop` | 16:9 | Careers teaser | [Unsplash](https://unsplash.com/photos/brown-wooden-table-with-white-printer-papers-v13x0qU4afA) |

Prompts:

- **oak**: Seamless photorealistic texture of oiled European oak, straight grain, warm honey tone, evenly lit, no knots, no shadows. Landscape 4:3.
- **walnut**: Seamless photorealistic texture of oiled European walnut, dark chocolate brown with fine flowing grain, evenly lit, no shadows. Landscape 4:3.
- **ash**: Seamless photorealistic texture of light ash wood, creamy white with a pronounced straight grain, evenly lit, no shadows. Landscape 4:3.
- **smoked-oak**: Seamless photorealistic texture of smoked oak, deep grey-brown with visible oak grain, evenly lit, no shadows. Landscape 4:3.
- **detail**: Photorealistic macro photo of a solid wood sideboard front with a horizontal recessed grip groove between two drawers, oiled cherry wood, fine grain, soft side light, quiet luxury mood. Landscape 3:2. No handles, no text.
- **kitchen**: Photorealistic interior photo of a handleless kitchen with dark smoked oak fronts, a dark stone worktop and warm light under the wall cabinets, calm and elegant. Portrait 4:5. No people, no text, no brand logos.
- **library**: Photorealistic interior photo of a built-in wall unit in light ash, open shelves above low cabinets, soft daylight, a terracotta curtain at the side. Portrait 4:5. No people, no text.
- **counter**: Photorealistic interior photo of a wine shop counter in walnut with illuminated wooden shelves full of bottles behind it, warm LED strips, elegant. Portrait 4:5. No people, no readable labels, no text.
- **wardrobe**: Photorealistic interior photo of a built-in wardrobe with handleless doors and open oak shelving in a bright Altbau bedroom. Square 1:1. No people, no text.
- **staircase**: Photorealistic photo of an oak staircase with vertical oak balusters and a handrail in a white stairwell, a warm wall light. Square 1:1. No people, no text.
- **table**: Photorealistic interior photo of a solid oak dining table with a matching bench in a Munich Altbau dining room, herringbone parquet, black pendant lamps, daylight. Square 1:1. No people, no text.
- **workshop**: Photorealistic photo of a tidy joinery workshop with workbenches, clamps on the wall and wood shavings, daylight through large old windows. Landscape 16:9. No people, no text.
