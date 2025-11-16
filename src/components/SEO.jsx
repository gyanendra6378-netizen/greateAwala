import { useEffect } from "react";

const SITE_NAME = "Greate Awala";
const DEFAULT_AUTHOR = "Greate Awala";

const ensureTag = ({ selector, create, attribute = "content", value }) => {
  if (typeof document === "undefined") return null;

  let element = document.head.querySelector(selector);
  let created = false;

  if (!element) {
    const tagName = create?.tagName ?? "meta";
    element = document.createElement(tagName);
    const attributes = { ...create };
    delete attributes.tagName;

    Object.entries(attributes).forEach(([attr, attrValue]) => {
      element.setAttribute(attr, attrValue);
    });

    document.head.appendChild(element);
    created = true;
  }

  const previous = element.getAttribute(attribute) ?? null;
  element.setAttribute(attribute, value);

  return {
    element,
    attribute,
    previous,
    created,
  };
};

const SEO = ({
  title = "Greate Awala - Pure Amla Products for Healthy Living",
  description = "Discover 100% natural Amla (Awala) products including fresh juice, candies, pickles, powder, and more. Boost immunity, improve health, and enjoy authentic taste with Greate Awala.",
  keywords = "amla products, awala juice, amla candy, amla powder, amla pickle, natural health products, immunity booster, vitamin c, ayurvedic products, healthy snacks",
  image = "/bg-1.png",
  url = "https://greateawala.com",
  type = "website",
  author = DEFAULT_AUTHOR,
}) => {
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;

  useEffect(() => {
    if (typeof document === "undefined") return undefined;

    const previousTitle = document.title;
    document.title = fullTitle;

    const managedTags = [
      {
        selector: 'meta[name="title"]',
        create: { name: "title" },
        value: fullTitle,
      },
      {
        selector: 'meta[name="description"]',
        create: { name: "description" },
        value: description,
      },
      {
        selector: 'meta[name="keywords"]',
        create: { name: "keywords" },
        value: keywords,
      },
      {
        selector: 'meta[name="author"]',
        create: { name: "author" },
        value: author,
      },
      {
        selector: 'meta[name="robots"]',
        create: { name: "robots" },
        value: "index, follow",
      },
      {
        selector: 'meta[name="language"]',
        create: { name: "language" },
        value: "English",
      },
      {
        selector: 'meta[name="revisit-after"]',
        create: { name: "revisit-after" },
        value: "7 days",
      },
      {
        selector: 'meta[name="theme-color"]',
        create: { name: "theme-color" },
        value: "#d89a7e",
      },
      {
        selector: 'meta[property="og:type"]',
        create: { property: "og:type" },
        value: type,
      },
      {
        selector: 'meta[property="og:url"]',
        create: { property: "og:url" },
        value: url,
      },
      {
        selector: 'meta[property="og:title"]',
        create: { property: "og:title" },
        value: fullTitle,
      },
      {
        selector: 'meta[property="og:description"]',
        create: { property: "og:description" },
        value: description,
      },
      {
        selector: 'meta[property="og:image"]',
        create: { property: "og:image" },
        value: image,
      },
      {
        selector: 'meta[property="og:site_name"]',
        create: { property: "og:site_name" },
        value: SITE_NAME,
      },
      {
        selector: 'meta[property="og:locale"]',
        create: { property: "og:locale" },
        value: "en_US",
      },
      {
        selector: 'meta[name="twitter:card"]',
        create: { name: "twitter:card" },
        value: "summary_large_image",
      },
      {
        selector: 'meta[name="twitter:url"]',
        create: { name: "twitter:url" },
        value: url,
      },
      {
        selector: 'meta[name="twitter:title"]',
        create: { name: "twitter:title" },
        value: fullTitle,
      },
      {
        selector: 'meta[name="twitter:description"]',
        create: { name: "twitter:description" },
        value: description,
      },
      {
        selector: 'meta[name="twitter:image"]',
        create: { name: "twitter:image" },
        value: image,
      },
    ]
      .map((config) => ensureTag(config))
      .filter(Boolean);

    const canonicalLink = ensureTag({
      selector: 'link[rel="canonical"]',
      create: { tagName: "link", rel: "canonical" },
      attribute: "href",
      value: url,
    });

    return () => {
      document.title = previousTitle;

      managedTags.forEach(({ element, attribute, previous, created }) => {
        if (!element) return;
        if (created) {
          element.remove();
        } else if (previous !== null) {
          element.setAttribute(attribute, previous);
        } else {
          element.removeAttribute(attribute);
        }
      });

      if (canonicalLink) {
        const { element, attribute, previous, created } = canonicalLink;
        if (created) {
          element.remove();
        } else if (previous !== null) {
          element.setAttribute(attribute, previous);
        } else {
          element.removeAttribute(attribute);
        }
      }
    };
  }, [author, description, fullTitle, image, keywords, type, url]);

  return null;
};

export default SEO;

