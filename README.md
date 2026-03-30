# The Byzantine Legacy (Modern Mobile Version)

This repository contains a static, mobile-friendly redesign of
https://www.thebyzantinelegacy.com/.

## GitHub Pages deployment

A GitHub Actions workflow is included at:

- `.github/workflows/deploy-pages.yml`

### How to enable

1. Push this branch to GitHub.
2. In your repository, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Ensure your default branch is `main` (or update the workflow trigger branch).
5. Push to `main` (or run the workflow manually from the **Actions** tab).

After deployment, your site will be available at:

- `https://<your-github-username>.github.io/<repository-name>/`

This URL works well on mobile browsers, so you can open it directly on your phone.
