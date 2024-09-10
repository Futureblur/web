import type { NavigationLink } from "../types/config";

export function getUrl(link: NavigationLink) {
  return link.external ? link.url : "https://futureblur.com/" + link.url;
}
