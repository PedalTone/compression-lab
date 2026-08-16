# Compression Lab

**Live app:** https://pedaltone.github.io/compression-lab/

An interactive, browser-based lesson for learning audio compression by ear. It combines a real Web Audio compressor, a public-domain performance of Beethoven’s Fifth Symphony, a live transfer curve, gain-reduction feedback, guided experiments, and a final knowledge check.

## What is included

- Three guided listening passages from Beethoven’s Symphony No. 5, movement I
- Threshold, ratio, attack, release, knee, and makeup gain controls
- Live input/output waveforms and gain-reduction meter
- Clearly marked unaffected and compression zones
- Four musical starting-point presets
- Bypass for fair A/B listening
- Responsive desktop, tablet, and phone layouts
- No backend, accounts, or API keys

## Recording

The app includes Beethoven’s *Symphony No. 5 in C minor, Op. 67 — I. Allegro con brio*, performed by the Skidmore College Orchestra. Wikimedia Commons identifies both the composition and recording as public domain. The recording measures 16.5 LU of loudness range, making its contrast especially useful here. [Source and rights details](https://commons.wikimedia.org/wiki/File:Ludwig_van_Beethoven_-_symphony_no._5_in_c_minor,_op._67_-_i._allegro_con_brio.ogg).

## Run locally

Requires Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

Open `http://localhost:3000` and press the orange play button. Browsers require a user gesture before audio can begin.

## Verify a production build

```bash
npm test
```

## Put it on GitHub

Create an empty GitHub repository, then run:

```bash
git add .
git commit -m "Build Compression Lab prototype"
git branch -M main
git remote add origin https://github.com/YOUR-NAME/compression-lab.git
git push -u origin main
```

The included GitHub Actions workflow checks every push and pull request. For hosting, connect the repository to a Node-compatible host (OpenAI Sites, Cloudflare Workers, or Vercel) and use `npm run build` as the build command. The app has no secrets or external services to configure.

## Good next additions

An uploaded-audio mode, sidechain filtering, parallel compression, and then matching interactive lessons for delay, reverb, saturation, and EQ.
