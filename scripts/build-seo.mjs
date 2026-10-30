import { readFile, writeFile } from "node:fs/promises";

const metadata = JSON.parse(await readFile(new URL("../src/components/seo/metadata.json", import.meta.url), "utf8"));
const output = new URL("../dist/", import.meta.url);
const template = await readFile(new URL("index.html", output), "utf8");
const escape = (value) => value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");

function render(path, page) {
  const canonical = `${metadata.origin}${path}`;
  const graph = JSON.parse(template.match(/<script id="site-identity" type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);
  if (path === "/about") graph["@graph"].push({ "@type": "ProfilePage", "@id": `${canonical}#profile`, url: canonical, name: page.title, mainEntity: { "@id": `${metadata.origin}/#person` } });
  const tags = [
    `<meta name="description" content="${escape(page.description)}" />`,
    `<meta name="author" content="${escape(metadata.name)}" />`,
    `<meta name="robots" content="${page.index ? "index, follow" : "noindex, follow"}" />`,
    `<link rel="canonical" href="${canonical}" />`,
    ...Object.entries({ type: "website", site_name: metadata.siteName, title: page.title, description: page.description, url: canonical, image: `${metadata.origin}${metadata.image}`, "image:alt": "Arslan Tauseef, full stack developer" }).map(([key, value]) => `<meta property="og:${key}" content="${escape(value)}" />`),
    ...Object.entries({ card: "summary_large_image", title: page.title, description: page.description, image: `${metadata.origin}${metadata.image}`, "image:alt": "Arslan Tauseef, full stack developer" }).map(([key, value]) => `<meta name="twitter:${key}" content="${escape(value)}" />`),
    `<script id="site-identity" type="application/ld+json">${JSON.stringify(graph).replaceAll("<", "\\u003c")}</script>`,
  ].join("\n    ");
  return template.replace(/<title>[\s\S]*?<\/title>/, `<title>${escape(page.title)}</title>`).replace(/<!-- seo:start -->[\s\S]*?<!-- seo:end -->/, `<!-- seo:start -->\n    ${tags}\n    <!-- seo:end -->`);
}

for (const [path, page] of Object.entries(metadata.pages)) {
  await writeFile(new URL(`${path.slice(1)}.html`, output), render(path, page));
}
await writeFile(new URL("index.html", output), render("/home", metadata.pages["/home"]));
await writeFile(new URL("404.html", output), '<!doctype html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex, follow"><title>Page not found — Arslan Tauseef</title></head><body><main><h1>Page not found</h1><p>The page you requested does not exist.</p><a href="/home">Return to Arslan Tauseef’s homepage</a></main></body></html>');
console.log("Generated route-specific HTML metadata for public pages and the dashboard.");
