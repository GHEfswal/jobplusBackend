"use strict";

/**
 * job service
 */

module.exports = ({ strapi }) => ({
  async find(params, userId) {
    // console.log("params", params);
    // set default records display in the absence of specified display limit
    const { start = 0, limit = 10, ...rest } = params;

    try {
      const [entries, totalCount] = await Promise.all([
        // const entries = await strapi.entityService.findMany("api::job.job", {
        strapi.entityService.findMany("api::job.job", {
          // start: 0,
          // limit: 3,
          // ...params,
          start,
          limit,
          ...rest,
          // });
        }),

        strapi.entityService.count("api::job.job", params),
      ]);

      //Fetch the list of jobs the user has applied for
      const appliedJobs = await strapi.entityService.findMany(
        "api::applied-job.applied-job",
        {
          filters: {
            user: userId,
          },
          populate: {
            job: true,
            user: true,
          },
        }
      );

      //
      console.log(appliedJobs);

      // Create a set of applied job IDs for efficient lookup
      const appliedJobIds = new Set(
        appliedJobs.map((appliedJob) => appliedJob.job.id)
      );
      console.log(appliedJobIds);

      // Add the 'hasApplied' field to each job entry
      const updatedEntries = entries.map((job) => ({
        ...job,
        hasApplied: appliedJobIds.has(job.id),
      }));

      // Calculate pagination metadata

      const totalPages = Math.ceil(totalCount / limit);
      const currentPage = Math.min(totalPages, Math.max(1, start));
      const hasPrevPage = currentPage > 1;
      const hasNextPage = currentPage < totalPages;

      return {
        // entries,
        entries: updatedEntries,
        meta: {
          paginate: {
            totalCount: totalCount,
            totalPages: totalPages,
            currentPage: currentPage,
            hasPrevPage: hasPrevPage,
            hasNextPage: hasNextPage,
          },
        },
      };
    } catch (error) {
      strapi.log.error(error);
      throw error;
    }
  },
});
