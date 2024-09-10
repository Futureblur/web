<script>
  import { getUrl } from "../../utils/utils";

  export let link;
  export let animate;
</script>

<li class={animate ? "animate" : "py-1"}>
  <a
    {...$$restProps}
    on:mouseenter
    href={getUrl(link)}
    target={link.external ? "_blank" : "_self"}
  >
    {link.title}
  </a>
</li>
