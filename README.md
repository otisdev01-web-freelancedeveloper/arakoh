# Ara Koh — Official Website

Premium personal website for **Ara Koh**, concert pianist and piano professor in San Antonio, Texas.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- GSAP (cinematic / scroll choreography)
- Framer Motion (UI micro-interactions)
- Lucide icons

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Artist — biography, performances, media, gallery |
| `/studio` | Private piano studio — philosophy, tuition, FAQ, inquiry form |

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editable content

Replace client content in:

- `data/site.ts` — contact, SEO, social placeholders
- `data/artist.ts` — biography, media, gallery, hero copy
- `data/performances.ts` — upcoming concert schedule
- `data/studio.ts` — tuition, policies, studio copy
- `data/faq.ts` — studio FAQ

## Images

Drop real photography into `public/images/` using the existing filenames:

- `ara-koh-hero.jpg`
- `ara-koh-portrait.jpg`
- `ara-koh-performance-01.jpg`
- `ara-koh-performance-02.jpg`
- `ara-koh-studio.jpg`
- `ara-koh-gallery-01.jpg` … `03.jpg`

Current files are editorial placeholders only.

## Optional piano sound

The site includes an opt-in **♪ Sound On / Off** control in the navigation.

- Completely silent by default
- Soft piano cues play once per major section when enabled
- Footer includes a quiet piano-key discovery
- Audio files live in `public/audio/` and are configured in `data/audio.ts`

