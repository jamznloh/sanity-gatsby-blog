export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "62664f3f24f6125f6f98a888",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-senua1p1",
                  apiId: "88ffeaeb-abb4-4f26-9cea-d43cf1ac27bc",
                },
                {
                  buildHookId: "62664f40cbf68454c0aff91d",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-9bewu4rw",
                  apiId: "3397115c-5696-4758-92de-7fb0b7e99c57",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/jamznloh/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-9bewu4rw.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
