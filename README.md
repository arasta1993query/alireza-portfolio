# Alireza Asghari Tabrizi

A static English-language portfolio and résumé site. The complete site lives in `dist/`.

Run a local preview from this directory with Python 3:

```sh
python3 -m http.server 4173 --bind 127.0.0.1 --directory dist
```

Open `http://127.0.0.1:4173`. To deploy to a static host, use `dist/` as the publish directory. Page content is in `dist/index.html`, with styles in `dist/styles.css` and the two PDFs in `dist/resumes/`.
