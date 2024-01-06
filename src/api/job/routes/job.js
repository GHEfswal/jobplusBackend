// "use strict";

/**
 * job router
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
