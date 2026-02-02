
balajuluri.com (apex domain) ->  https://plasmon360.github.io/ (need a A record and AAAA records, see GitHub.io docs)
Help available: https://rsip22.github.io/blog/create-a-blog-with-pelican-and-github-pages.html

Overview
--------
This repository for my Pelican based static blog. Source content lives under `content/` (Markdown and Jupyter notebooks); generated HTML goes to `output/`. Use the included `Makefile` or `tasks.py` to build, preview, and publish the site.

Quick checklist (what I will usually do)
- Edit or add Markdown in `content/articles/` (or `content/`)
- Build locally with `make html`, preview with `make serve` or `make devserver`
- Commit changes on a feature branch and merge into `source`
- Build and publish with `make github` (this uses `ghp-import` and pushes generated HTML to the branch configured for GitHub Pages)

Prerequisites / special installs
-------------------------------
- Python 3.9+ (see `pyproject.toml`).
- Install Python dependencies using Poetry:

```bash
poetry install --no-root
```

Themes & plugins
- The active theme is configured in `pelicanconf.py` (see `THEME`). If you use the Flex theme locally, install it via `pelican-themes`: `poetry run pelican-themes -i ../Flex` (or follow theme instructions). Clone Flex from its [repo](https://github.com/alexandrevicenzi/Flex) 

- Jupyter notebooks: this repo uses `pelican-ipynb` (mode A, option 1). Notebooks are supported if `MARKUP` includes `ipynb` in `pelicanconf.py`.

Writing posts (short how-to)
---------------------------
1. Create a Markdown file under `content/articles/` (or `content/`):

`content/articles/YYYY-MM-DD-slug.md`

Start the file with Pelican metadata (Pelican reads `markdown.extensions.meta`):

```markdown
Title: My New Post Title
Date: 2026-02-01 10:00
Tags: pelican, python
Category: Tutorials
Slug: my-new-post
Authors: Bala Juluri
Summary: One-line summary.

Write your article here in Markdown.
```

Notes: store images in `content/images/` and reference them from Markdown.

Build & preview locally
-----------------------
Build the site (development settings):


```bash
poetry run make html
```

Serve the `output/` directory at `http://localhost:8000`:

```bash
poetry run make serve PORT=8000
```

Auto-rebuild while editing:

```bash
poetry run make devserver
```

About `pelican --write-selected`
--------------------------------
The `--write-selected` option takes a generated HTML path and asks Pelican to re-render only the related article(s), e.g.:

```bash
poetry run pelican --write-selected output/posts/my-post-title.html
```

This is a build-time helper — you still edit the Markdown source, not the HTML.

Branch & commit workflow
------------------------
- Create a feature branch, add your Markdown and images, commit and push:

```bash
git checkout -b post/my-new-post
git add content/articles/2026-02-01-my-new-post.md content/images/...
git commit -m "Add: My New Post Title"
git push -u origin post/my-new-post
```

- Merge the branch into `source` (via PR or locally) — `source` is where you author content. `master` (or the branch configured in `GITHUB_PAGES_BRANCH`) is used for published HTML.

Publishing (GitHub Pages)
-------------------------
Build into `output/` and publish with the Makefile helper. Two common targets:

```bash
# build production-like output
make publish

# build and import output into the GitHub Pages branch (sets CNAME)
make github
```

`make github` runs `ghp-import -c balajuluri.com ...` and pushes the generated HTML to the branch configured in the Makefile (`GITHUB_PAGES_BRANCH`, currently `master`).

Domain notes (preserved)
------------------------
### juluribk.com

On Sept 9 2023:

Domain owned by webhostingpad.com. Webhostingpad was unable to add records if I didn't have a hosting service. I couldn't resolve it with customer service, so I'm letting this domain lapse.

### balajuluri.com

On Sept 9 2023:

Started `balajuluri.com` (Squarespace registrar). DNS mapping expected:

- `balajuluri.com` (apex) -> `https://plasmon360.github.io/` (requires A and AAAA records per GitHub Pages docs)
- `www.balajuluri.com` -> `https://plasmon360.github.io/` (CNAME)

Verify DNS with:

```bash
whois balajuluri.com
dig balajuluri.com +noall +answer -t A
dig balajuluri.com +noall +answer -t AAAA
dig www.balajuluri.com +nostats +nocomments +nocmd
```

If you run `make github`, the Makefile will include a CNAME (`-c balajuluri.com`) so GitHub Pages serves the custom domain; ensure the DNS records are correct at your registrar.

Further references
------------------
- Pelican docs: https://docs.getpelican.com/
- Pelican-ipynb plugin: https://github.com/danielfrg/pelican-ipynb
- Guide used when setting this up: https://rsip22.github.io/blog/create-a-blog-with-pelican-and-github-pages.html

---

If you'd like, I can now create a draft post file for you in `content/articles/` or run a local build and serve so you can preview changes.

Updating an existing article
----------------------------
When you update a post, edit the original Markdown source in `content/articles/` (do not edit `output/`). Recommended workflow:

- Open the existing Markdown file (keep the same filename/slug so URLs remain stable).
- `Status` is a manual metadata field (not auto-filled). If the post is live, leave `Status: published`. If you want to temporarily remove a post from public builds, move the file to the top-level `drafts/` folder (this repo includes a `drafts/` directory) or change workflow to keep unpublished files outside `content/`.
- Do not change the `Slug` unless you intend to change the article URL. If you must change the URL, plan redirects or accept the new path.
- Keep the original `Date` to preserve the published date. If you want the article to show a new publish date, update `Date:` to the new timestamp.
- To indicate an edit/update, either add a metadata line like `Updated: 2026-02-01` (some themes will not display this automatically) or add a small note at the top of the article body such as "Updated: 2026-02-01".

Example metadata for an update:

```markdown
Title: My New Post Title
Date: 2024-12-10 09:00
Updated: 2026-02-01
Status: published
```

- Build and preview locally (`make devserver`) to confirm formatting and assets.
- Commit changes on a feature branch, open a PR to `source` (or merge locally), then build + publish as usual (`make github`).

Notes about `Status`:
- `Status` is not auto-populated by Pelican — it's part of the Markdown metadata and you set it yourself.
- If you want a clear draft workflow, keep in-progress articles in the repository `drafts/` directory until ready to move to `content/articles/` and set `Status: published`.

If you want, I can add an optional small script or GitHub Action to block publishing when files in `drafts/` still exist, or to automatically stamp `Updated:` metadata from the last Git commit date — tell me if you'd like either.

The domain management notes below are preserved for your reference.



