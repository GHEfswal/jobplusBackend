"use strict";

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
      ctx.body = "Hello World!";
    } catch (error) {
      strapi.log.error(error);
    }
  },
});
