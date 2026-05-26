import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function SEO({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage = "/favicon.png",
  ogType = "website",
  canonical,
}) {
  const location = useLocation();

  useEffect(() => {
    const siteName = "AH Career Academy";
    const fullTitle = title ? `${title} | ${siteName}` : `${siteName} – Top Software Training Institute`;
    document.title = fullTitle;

    const setMetaTag = (attrName, attrValue, content) => {
      if (!content) return;
      let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attrName, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    const setLinkTag = (rel, href) => {
      if (!href) return;
      let element = document.querySelector(`link[rel="${rel}"]`);
      if (!element) {
        element = document.createElement("link");
        element.setAttribute("rel", rel);
        document.head.appendChild(element);
      }
      element.setAttribute("href", href);
    };

    // Standard Meta Tags
    setMetaTag(
      "name",
      "description",
      description ||
        "AH Career Academy is a leading ISO 9001:2015 certified software training institute offering 100% practical training in Java, Python, UI/UX, Data Science, Excel, DevOps, and more."
    );
    setMetaTag(
      "name",
      "keywords",
      keywords ||
        "software training institute, coding academy, learn coding, job ready training, placement support, web design course, python training, data science, java full stack"
    );
    setMetaTag("name", "robots", "index, follow");

    // Open Graph / Facebook Meta Tags
    const url = canonical || window.location.href;
    setMetaTag("property", "og:url", url);
    setMetaTag("property", "og:title", ogTitle || title || siteName);
    setMetaTag("property", "og:description", ogDescription || description || "AH Career Academy offers certified programs with expert mentors.");
    setMetaTag("property", "og:image", ogImage.startsWith("http") ? ogImage : `${window.location.origin}${ogImage}`);
    setMetaTag("property", "og:type", ogType);
    setMetaTag("property", "og:site_name", siteName);

    // Twitter Card Meta Tags
    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:url", url);
    setMetaTag("name", "twitter:title", ogTitle || title || siteName);
    setMetaTag("name", "twitter:description", ogDescription || description);
    setMetaTag("name", "twitter:image", ogImage.startsWith("http") ? ogImage : `${window.location.origin}${ogImage}`);

    // Canonical link
    setLinkTag("canonical", url);
  }, [title, description, keywords, ogTitle, ogDescription, ogImage, ogType, canonical, location]);

  return null;
}
