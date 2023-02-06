import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/frontend-guideline/",
  lang: "pt-BR",
  title: "FrontEnd Guideline",
  description: "Front-end Guideline by Juntos Somos Mais",
  head: [
    ["link", { rel: "icon", href: "favicon.png" }],
    [
      "meta",
      {
        name: "google-site-verification",
        content: "bmr3QFy052qbYVYRSuLrZrIpJPgIoLv2kIOXfdkwtkk",
      },
    ],
  ],
  theme,
});
