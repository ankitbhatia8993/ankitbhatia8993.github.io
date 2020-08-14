module.exports = {
  title: "Ankit Bhatia",
  description: "The description of the site.",
  head: [["link", { rel: "icon", href: `/logo.png` }]],
  base: "/",
  // dest: "./dist",

  themeConfig: {
    search: false,
    nav: [
      { text: "Home", link: "/" },
      { text: "About", link: "/about/" },
      { text: "Projects", link: "/projects/" },
      // { text: "Guide", link: "/guide/" },
      { text: "GitHub", link: "https://github.com/ankitbhatia8993" }
    ],
    // sidebar: {
    //   '/guide/': genSidebarConfig('Guide')
    // },
    // lastUpdated: 'Last Updated'
  },

  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: false },
    extendMarkdown: md => {
      md.use(require("markdown-it-katex"));
    }
  }
};

// function genSidebarConfig (title) {
//   return [
//     {
//       title,
//       collapsable: true,
//       children: [
//         '',
//         'getting-started',
//         'customize',
//         'advanced',
//       ]
//     }
//   ]
// }

