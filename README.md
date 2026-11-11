# Grapes Leaf Doctor

Offline grape leaf disease diagnosis (downy mildew, powdery mildew, bacterial leaf spot, healthy) with the GRACE model, automatic weather alerts and advice in English and Marathi. Research prototype, PhD work of Mrs. Madhuri Deepak Dharrao, Symbiosis International (Deemed University), Pune.

## Before uploading
Open `privacy.html` and replace `[your email address]` with your contact email.

## Publish on GitHub Pages

**Repository name.** Name the repository exactly `YOUR-GITHUB-USERNAME.github.io`. The app will then open at `https://YOUR-GITHUB-USERNAME.github.io/`. The Play Store packaging needs the app at the root of the address like this.

**Private or public repository.**
- *Public repository*: free.
- *Private repository*: needs a paid GitHub Pro account (or GitHub Team). Your files stay hidden, but the website itself is still open to anyone who has the link. That is required anyway for the Play Store.

**Steps**
1. Sign in to github.com → **+** → **New repository** → name `YOUR-GITHUB-USERNAME.github.io` → choose Public or Private → **Create repository**.
2. Click **uploading an existing file**. Drag in everything in this folder (the files `index.html`, `manifest.webmanifest`, `sw.js`, `privacy.html`, `README.md`, both icons, and the folders `models`, `samples`, `vendor`) → **Commit changes**.
3. Hidden files are often skipped by drag-and-drop. Create them by hand:
   - **Add file → Create new file** → name `.nojekyll` → leave empty → **Commit changes**.
   - **Add file → Create new file** → name `.well-known/assetlinks.json` → content `[]` → **Commit changes**. (Replace this content later with the file PWABuilder gives you.)
4. **Settings → Pages** → Source: **Deploy from a branch** → Branch: `main`, folder `/ (root)` → **Save**.
5. Wait 1–3 minutes, then open `https://YOUR-GITHUB-USERNAME.github.io/` on your phone. Weather now loads automatically. In Chrome, menu → **Add to Home screen** installs it.

## Next: Play Store
1. Go to pwabuilder.com, enter your site address, and choose **Package for stores → Android**. Download the package (`.aab` for Play, plus a signing key; keep the key and its passwords safe forever).
2. Copy the `assetlinks.json` from the package into `.well-known/assetlinks.json` in the repository.
3. Upload the `.aab` in Google Play Console. Use `https://YOUR-GITHUB-USERNAME.github.io/privacy.html` as the privacy policy link.

## Files
- `index.html` – the app (interface, English/Marathi text, logic)
- `models/` – GRACE classifier (ConvNeXt-T, 8-bit, 3 parts) and U²-Net-p leaf isolation
- `vendor/` – ONNX Runtime Web 1.27.0 (WebAssembly)
- `sw.js`, `manifest.webmanifest`, `icon-*.png` – offline use and home-screen install
- `privacy.html` – privacy policy (required by Google Play)
