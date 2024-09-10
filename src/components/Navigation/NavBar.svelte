<script>
  import NavBarLink from "./NavBarLink.svelte";
  import FutureblurLogo from "./FutureblurLogo.svelte";
  import MenuIcon from "./MenuIcon.svelte";
  import { navBarLinks, navBarDropdowns } from "../../config";
  import { writable } from "svelte/store";

  let currentNavItem = "";
  let isToggled = false;

  function animate() {
    const animateElements = document.querySelectorAll(".animate");

    animateElements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add("show");
      }, index * 20);
    });
  }

  function removeAnimate() {
    const animateElements = document.querySelectorAll(".animate");

    animateElements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.remove("show");
      }, index * 0);
    });
  }

  const curtain = document.querySelector("#curtain");
  const header = document.querySelector("header");
  let navBarContent;
  let navDropdown;

  function setHeaderHeight(value) {
    document.documentElement.style.setProperty("--header-height", value);
  }

  function blurBackground() {
    curtain?.classList.add("blur");
  }

  function unblurBackground() {
    curtain?.classList.remove("blur");
  }

  function toggleMenu() {
    navBarContent.classList.toggle("hide");
    document.querySelector("body").classList.toggle("noscroll");
    curtain?.classList.toggle("blur");
    header.classList.toggle("unblur");
    setHeaderHeight(isToggled ? "52px" : "100%");

    header.classList.toggle("mobileExpanded");
    isToggled = !isToggled;
  }

  function setHoverState(e) {
    if (isToggled) return;

    const id = e.target.getAttribute("data-navbar-item");
    currentNavItem = id;

    if (!navBarDropdowns.some((item) => item.id === id)) {
      mouseExit();
      return;
    }

    header.classList.add("unblur");
    setHeaderHeight("268px");

    blurBackground();
    navDropdown.classList.add("show");
    animate();
  }

  function mouseExit(e) {
    if (isToggled) return;

    header.classList.remove("unblur");
    unblurBackground();
    navDropdown.classList.remove("show");
    setHeaderHeight("52px");
    removeAnimate();
  }

  function windowListener() {
    const mediaQuery = window.matchMedia("(width > 640px)");
    mediaQuery.addEventListener("change", ({ matches }) => {
      if (!isToggled) return;

      navBarContent.classList.add("hide");
      header.classList.remove("unblur");
      setHeaderHeight("52px");
      document.querySelector("body").classList.remove("noscroll");
      isToggled = false;
      unblurBackground();
    });
  }
</script>

<svelte:window use:windowListener />

<nav
  on:mouseleave={mouseExit}
  class="mx-2 flex h-fit w-full flex-col rounded-lg bg-secondary/80 px-3 py-2 sm:mx-4 sm:w-full sm:max-w-5xl sm:py-0"
  aria-label="Global"
>
  <div
    class="flex flex-wrap items-center justify-between sm:flex-nowrap sm:gap-5"
  >
    <FutureblurLogo />
    <div class="flex items-center justify-between gap-3 sm:order-2">
      <div class="flex sm:flex-1 sm:justify-end">
        <a
          class="whitespace-nowrap rounded-md bg-primary px-4 py-2 text-secondary sm:px-4 sm:py-1.5"
          href="https://fut.red/d">Join waitlist</a
        >
      </div>
      <div class="flex items-center gap-4 sm:hidden">
        <button
          on:click={toggleMenu}
          type="button"
          class="inline-flex scale-125 items-center justify-center gap-x-2 rounded-md p-2 text-primary disabled:pointer-events-none disabled:opacity-50 dark:bg-transparent"
          data-hs-collapse="#navbar-image-1"
          aria-controls="navbar-image-1"
          aria-label="Toggle navigation"
        >
          <MenuIcon />
        </button>
      </div>
    </div>
    <div
      bind:this={navBarContent}
      id="navbar-items"
      tabindex="-1"
      class="hs-collapse hide max-h-screen w-full grow basis-full overflow-hidden text-lg font-medium transition-all duration-500 sm:max-h-fit sm:text-sm sm:font-normal"
    >
      <ul
        class="order-0 mt-5 flex h-screen flex-col gap-5 sm:mt-0 sm:h-fit sm:flex-row sm:items-center sm:gap-5"
      >
        {#each navBarLinks as link}
          <NavBarLink
            class="block px-2 sm:py-3"
            on:mouseenter={setHoverState}
            data-navbar-item={link.title}
            animate={false}
            {link}
          />
        {/each}
      </ul>
    </div>
  </div>
  <div bind:this={navDropdown} class="dropdown order-1">
    {#each navBarDropdowns as dropdown}
      {#if dropdown.id === currentNavItem}
        <div use:animate class="flex gap-20 text-lg font-bold">
          <div class="flex flex-col gap-3">
            <p class="animate text-xs font-normal opacity-60">
              {dropdown.primary.title}
            </p>
            <ul class="flex flex-col gap-1">
              {#each dropdown.primary.links as link}
                <NavBarLink animate="true" {link} />
              {/each}
            </ul>
          </div>
          {#each dropdown.secondary as secondary}
            <div class="mb-14 flex flex-col gap-3 text-sm font-medium">
              <p class="animate text-xs font-normal opacity-60">
                {secondary.title}
              </p>
              <ul class="flex flex-col gap-1">
                {#each secondary.links as link}
                  <NavBarLink animate={true} {link} />
                {/each}
              </ul>
            </div>
          {/each}
        </div>
      {/if}
    {/each}
  </div>
</nav>
