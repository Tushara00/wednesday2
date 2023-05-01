const { DateTime } = require("luxon");


module.exports = function(eleventyConfig) {


  // ...
  eleventyConfig.addCollection("blogPosts", function (collection) {
    return collection.getFilteredByGlob("/path/to/blog/*.md");
  });

  eleventyConfig.addPassthroughCopy('./src/style.css');
  eleventyConfig.addCollection('tags', function(collectionApi) {
    const allPosts = collectionApi.getAll();
    const tags = new Set();
    allPosts.forEach(function(item) {
      if ('tags' in item.data) {
        item.data.tags.forEach(function(tag) {
          tags.add(tag);
        });
      }
    });
    return Array.from(tags).sort();
  });

  eleventyConfig.addPassthroughCopy('./src/assets');
  eleventyConfig.addPassthroughCopy('./src/admin');
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });
    // Return your Object options:
    return {
      dir: {
        input: "src",
        output: "public"
      }
    };
  };


 