# Miamdown

[Try the Live Demo here](https://your-username.github.io/miamdown/)

A minimalist, distraction-free Markdown reader packed into a single, standalone HTML file. 

## Full Disclosure / The "Vibe"
Let's be completely honest about what this is:
* It is vibecoded, mostly built by talking back and forth with an AI (Gemini).
* Because it is vibecoded, it uses the "Do What The Fuck You Want To" license.
* It is literally just one file. It has very little intrinsic value beyond solving my own personal use-case.
* Why share it? I put it here simply so that someone else looking for a dead-simple Markdown reader won't have to vibe-code it from scratch themselves.
* Maintenance: There is no community behind this, and you should expect absolutely zero maintenance or updates from me. Fork it, break it, make it yours.

## Features
Despite being a single HTML file, it packs a punch for reading long-form Markdown:
* 100% Client-Side: No servers, no tracking, works completely offline once cached.
* Auto-Save & Scroll Memory: Saves your text and remembers exactly where you stopped reading (calculated via percentage, so it survives font-size changes).
* Distraction-Free: The UI completely fades away when you start scrolling. Tap the screen to bring it back.
* Customizable Reading: Adjustable font size, built-in Dark/Light theme (syncs with OS preferences), and a custom brightness slider for late-night reading.
* Fast Navigation: The bottom progress bar is interactive—drag it to scrub through the document like a video.
* Native App Feel (Optional): The repository includes an optional `manifest.json` file. If you include this alongside the `index.html` and "Add to Home screen" on Android or iOS, the manifest tells the phone to hide the browser UI and treat Miamdown as a standalone, fullscreen app.

## Credits & Dependencies
While the glue code was vibed out, the heavy lifting is done by excellent open-source libraries and formats created by actual humans. Massive thanks to:

* John Gruber and Aaron Swartz: For creating the Markdown language in the first place.
* Marked.js (by Christopher Jeffrey and contributors): Used for blazing fast Markdown parsing. Loaded via CDN: `https://cdn.jsdelivr.net/npm/marked/marked.min.js`.
* DOMPurify (by Mario Heiderich and the Cure53 team): Used for keeping the HTML rendering safe from XSS. Loaded via CDN: `https://cdn.jsdelivr.net/npm/dompurify@3.1.7/dist/purify.min.js`.

## License
WTFPL - Do What The Fuck You Want To Public License. See the LICENSE file.
