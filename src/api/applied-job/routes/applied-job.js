/*
'use strict';

*/

/**
 * applied-job router
 */

/*
const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::applied-job.applied-job');
*/

module.exports = {
  routes: [
    {
      method: "POST",
      path: "/applied-jobs",
      handler: "applied-job.apply",
    },

    {
      method: "DELETE",
      path: "/applied-jobs/:jobId/:userId",
      handler: "applied-job.withdrawApplication",
    },
  ],
};
