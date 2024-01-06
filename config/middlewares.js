module.exports = [
  "strapi::errors",
  "strapi::security",
  // 'strapi::cors',

  {
    // this block of code has replaced line 4

    name: "strapi::cors",
    config: {
      origin: "*", // or specify the allowed origins
      headers: [
        "Content-Type",
        "Authorization",
        "X-User-Id", // Add the custom X-User-Id header
      ],
    },
  },

  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
