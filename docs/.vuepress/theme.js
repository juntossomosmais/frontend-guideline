import { hopeTheme } from "vuepress-theme-hope";

export default hopeTheme({
  navbarIcon: true,
  darkmode: "enable",
  iconAssets: "fontawesome",
  navbar: [
    {
      text: "Home",
      link: "/",
      icon: "home",
    },
    {
      text: "General Code Patterns",
      link: "/general-code-patterns/",
      icon: "code",
    },
    {
      text: "Architecture",
      link: "/architecture/",
      icon: "book",
    },
    {
      text: "Git",
      link: "/git/",
      icon: "code-branch",
    },
    {
      text: "Standard Web(HTML, CSS, JS)",
      link: "/standard-web/html/",
      icon: "globe",
    },
    {
      text: "TypeScript",
      link: "/type-script/",
      icon: "scroll",
    },
    {
      text: "Frameworks",
      link: "/frameworks/vue/",
      icon: "screwdriver-wrench",
    },
    {
      text: "Storybook",
      link: "/storybook/",
      icon: "book-open",
    },
    {
      text: "Testing",
      link: "/testing/",
      icon: "vial",
    },
  ],
})
