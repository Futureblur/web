<script>
  import FutureblurLogo from "./Navigation/FutureblurLogo.svelte";

  import { footerGroup } from "../config";
  import { getUrl } from "../utils/utils";
</script>

<footer
  class="flex justify-start bg-secondary/50 py-10 pb-28 text-sm text-primary/70 md:justify-center"
>
  <div
    class="flex w-full flex-col justify-center gap-6 px-3 md:flex-row md:gap-14"
  >
    <div class="flex flex-col justify-between gap-4 md:gap-0">
      <div class="flex flex-col gap-1">
        <div class="flex items-center gap-1">
          <FutureblurLogo />
          <div class="hidden space-x-2">
            <span>/</span>
            <a class="text-primary" href="/">News</a>
          </div>
        </div>
        <span class="pl-1.5">Germany</span>
      </div>
      <div class="flex">
        <span class="pl-1.5 text-primary/60">&copy; 2024 Futureblur</span>
      </div>
    </div>
    <div
      class="flex flex-wrap justify-between gap-y-8 pt-1.5 md:justify-start md:gap-28"
    >
      {#each footerGroup as group}
        <div class="flex w-1/2 flex-col gap-2 px-2 md:w-auto md:px-0">
          <h2 class="font-medium text-primary">{group.title}</h2>
          <ul class="flex flex-col gap-2">
            {#each group.links as link}
              <li>
                <a
                  href={getUrl(link)}
                  target={link.external ? "_blank" : "_self"}>{link.title}</a
                >
              </li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>
  </div>
</footer>
