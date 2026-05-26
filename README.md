# Moonlit Eid Surprise

This project is a responsive romantic Eid website built with plain HTML, CSS, and JavaScript. It is designed as a four-stage mini love journey:

1. Mystery intro
2. Playful question page
3. Memory and photo placeholder page
4. Grand Eid reveal

## Files

- `index.html` - the full single-page structure
- `style.css` - animations, responsive layout, glassmorphism styling, and decorative effects
- `script.js` - stage transitions, typewriter message, music toggle, loading screen, particles, and easter egg
- `assets/audio/` - place your custom background music here
- `assets/images/` - place your photos here if you want to swap the placeholders later

## Folder structure

```text
.
|-- assets
|   |-- audio
|   `-- images
|-- index.html
|-- script.js
`-- style.css
```

## Run locally

Open `index.html` directly in your browser. No build step, package install, or framework is needed.

## Customize later

### Change the romantic text

Open `script.js` and edit the `journeyContent` object near the top:

- `finalMessage` controls the final typed Eid message
- `secretMessage` controls the hidden moon easter egg
- `memories` controls the memory cards on stage 3
- `photoSlots` controls the labels for the placeholder photo cards

### Add your music

1. Put your song file in `assets/audio/`
2. Rename it to `romantic-eid.mp3` or change the `<source>` path in `index.html`

### Add your photos

The current photo area uses elegant placeholders. To replace them with real images:

1. Put your image files in `assets/images/`
2. Open `script.js`
3. Replace each generated placeholder card in `populateMemoryCards()` with an `<img>` tag or a styled background image card

## Deploy to GitHub Pages

1. Push this folder to a GitHub repository
2. Make sure `index.html`, `style.css`, and `script.js` are in the repository root
3. Open the repository on GitHub
4. Go to `Settings` -> `Pages`
5. Under `Build and deployment`, choose `Deploy from a branch`
6. Select the `main` branch and the `/root` folder
7. Save and wait for GitHub to publish the site

## Deploy to Netlify

1. Create a new site in Netlify
2. Drag and drop the folder, or connect the GitHub repository
3. Use the default settings because this is a static site
4. Publish the site

## Deploy to Vercel

1. Import the GitHub repository into Vercel
2. Keep the project as a static site
3. No build command is required
4. Deploy
