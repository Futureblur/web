---
title: Futureblur unveils redesigned homepage with an improved UX
caption: Meet version 5, the newest generation of our site.
description: Starting today, the fifth generation of our site is live. And it's here to stay.
authors: rasul-adasov
cover: /src/assets/redesigned-homepage.jpg
alt: A screenshot of Safari, displaying Futureblur's redesigned homepage.
draft: false
author: rasul-adasov
date: 2024-09-23
tagline: Localized content, enhanced navigation and streamlined pages are now here.
type: Update
url: https://fut.red/26IwH
---

Futureblur today introduced its heavily redesigned homepage, offering a modern, intuitive user experience, and expanded resources. Built on the reliable [Astro framework](https://astro.build), the updated site incorporates sleek design elements, simplified navigation, and enhanced accessibility — all while maintaining the core identity of Futureblur. The homepage now includes localized content, a refined legal section, and several new pages designed to support both users and partners.

## Expanded localization and smart language detection  
The Futureblur homepage now features fully localized content for German-speaking users. An intelligent language detection system has been integrated to prompt a language switch based on browser preferences, ensuring a seamless experience for users around the world. While German is the first supported language, additional language support is under consideration for future updates.

When visiting a page in a language different from the browser's settings, a header appears above the navigation bar, suggesting a switch to the localized version of the site. This feature is designed with privacy in mind, as it does not track the user’s location or store cookies. It relies solely on the browser’s language preferences. If preferred, the banner can be dismissed by clicking the button on the right, and our site will remember this choice for future visits, preventing the suggestion from reappearing unless local browser cache has been cleared.

![The smart language detection feature showing a banner to prompt the user to switch to a localized version of the current page.](src/assets/smart-language-detection.jpg)
*With a single tap, users can switch to a page in their native language.*
## Reimagined from the ground up
In line with Futureblur's commitment to creating a welcoming user experience, the redesigned homepage introduces a light mode. Monospaced fonts for headers and footers on a soft off-white background help to achieve an industrial, yet warm feel. The use of subtle animations enhances the scrolling experience, adding a refined touch without detracting from usability. As part of this transition, dark mode is no longer available.

## Streamlined legal pages and new resources  
The new update simplifies Futureblur's legal and policy sections. The privacy policy has been revised, removing outdated references to cookie tracking services, such as [Posthog](https://posthog.com/), and improving clarity across all documents. Legal pages have been optimized for screen readers, ensuring accessibility for all users. Additionally, the redesigned site now includes an expanded set of pages, such as a sitemap, brand guidelines and press page, cookie policy, and a new contact page.

## Familiar, yet uniquely Futureblur

Despite the significant redesign, Futureblur remains powered by Astro, the static site generator we've trusted for its simplicity and flexibility. All existing links remain functional, ensuring a smooth transition for users. The site's branding remains consistent, keeping the same identity that users have come to know. Astro was chosen for several key reasons, mainly to ensure that both the development team and future contributors can work efficiently while keeping the site lightweight and performant.

Astro’s wide adoption and minimal learning curve make it an ideal choice for our platform. Its straightforward nature allows new developers to easily contribute and understand the source code, laying the groundwork for collaboration and faster updates. This accessibility is key to maintaining Futureblur’s pace to evolve without unnecessary complexity.

Moreover, Astro is [minimal and lightweight](https://docs.astro.build/en/basics/astro-components/), standing out from other more bloated JavaScript frameworks. By avoiding unnecessary overhead, we can ensure that our site remains fast and efficient, delivering a smoother experience for our users.

![A chart titled "Real-World Core Web Vitals" comparing Astro to other popular JS frameworks, where Astro achieves a top score.](src/assets/astro-performance-comparison.jpg)
*When compared to other popular frameworks, Astro achieves record-breaking results.*

At its core, Astro provides enough abstraction to stay as primitive as possible, through pure HTML, CSS, and JavaScript — enhanced by a modern flavor like TypeScript, Tailwind CSS, and components for reusability. This combination provides the perfect balance of traditional web technologies and cutting-edge features, allowing Futureblur to build on while maintaining simplicity in the codebase.

The redesigned homepage is now live, and automatically redirects to the newest version to ensure users experience the latest update. As part of this upgrade, the fourth generation will no longer be accessible. Interested users can check out the [source code](https://github.com/Futureblur/web) for all versions by switching branches on GitHub. Futureblur will continue to evolve, with plans to expand language support and introduce additional features in future updates.

