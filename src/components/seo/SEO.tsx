import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import metadata from "./metadata.json";

type PagePath = keyof typeof metadata.pages;

function updateMeta(attribute: "name" | "property", name: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${name}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, name);
    document.head.append(element);
  }
  element.content = content;
}

export const SEO = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const path = pathname.replace(/\/+$/, "") || "/home";
    const page = Object.hasOwn(metadata.pages, path)
      ? metadata.pages[path as PagePath]
      : { title: "Page not found — Arslan Tauseef", description: "The requested page could not be found.", index: false };
    const canonical = `${metadata.origin}${path}`;
    document.title = page.title;
    updateMeta("name", "description", page.description);
    updateMeta("name", "robots", page.index ? "index, follow" : "noindex, follow");
    updateMeta("property", "og:title", page.title);
    updateMeta("property", "og:description", page.description);
    updateMeta("property", "og:url", canonical);
    updateMeta("name", "twitter:title", page.title);
    updateMeta("name", "twitter:description", page.description);

    let canonicalLink = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.rel = "canonical";
      document.head.append(canonicalLink);
    }
    canonicalLink.href = canonical;

    // The Person/WebSite identity stays the same on every route.
    const identity = document.getElementById("site-identity");
    if (identity?.textContent) {
      const graph = JSON.parse(identity.textContent);
      graph["@graph"] = graph["@graph"].filter((entity: { "@type": string }) => entity["@type"] !== "ProfilePage");
      if (path === "/about") {
        graph["@graph"].push({
          "@type": "ProfilePage",
          "@id": `${canonical}#profile`,
          url: canonical,
          name: page.title,
          mainEntity: { "@id": `${metadata.origin}/#person` },
        });
      }
      identity.textContent = JSON.stringify(graph);
    }
  }, [pathname]);

  return null;
};
