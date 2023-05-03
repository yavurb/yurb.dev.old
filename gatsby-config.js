module.exports = {
  siteMetadata: {
    description: "Personal page of Royner Perez",
    title: "Royner Perez (Yurb)",
    formspreeEndpoint: "https://formspree.io/f/mzbqogde",
    lang: "en",
  },
  plugins: [
    {
      resolve: "@yurb/gatsby-theme-intro",
      options: {
        theme: "bright-green",
        darktheme: "bright-green",
      },
    },
  ],
}