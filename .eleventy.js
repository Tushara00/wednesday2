const { DateTime } = require("luxon");


module.exports = function(eleventyConfig) {

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
  


 