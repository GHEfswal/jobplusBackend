// "use strict";

/**
 * job router
 */

/*
const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::job.job");
*/

module.exports = {
  routes: [
    {
      // Path defined with an URL parameter
      method: "GET",
      path: "/jobs",
      handler: "job.find",
    },
  ],
};
