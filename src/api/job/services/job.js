// "use strict";

/**
 * job service
 */

/*
const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::job.job');
*/
module.exports = ({ strapi }) => ({
  async find(params) {
    try {
      // return "From Services.";
      const entries = await strapi.entityService.findMany("api::job.job", {
        // fields: ["title", "description"],
        // filters: { title: "Software Developer" },
        // sort: { createdAt: "DESC" },
        populate: { company: true },
      });
      return entries;
    } catch (error) {
      strapi.log.error(error);
      throw error;
    }
  },
});
