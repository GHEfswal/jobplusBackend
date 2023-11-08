// "use strict";

/**
 * job controller
 */

/*
const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::job.job');
*/

module.exports = ({ strapi }) => ({
  async find(ctx) {
    // console.log("ctx", ctx);
    try {
      // ctx.body = "Hello World!";
      ctx.body = await strapi.service("api::job.job").find(ctx.query);
    } catch (error) {
      strapi.log.error(error);
    }
  },
});
