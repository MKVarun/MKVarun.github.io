module.exports = function(eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy({ "pdfs/Varun_CV.pdf": "pdfs/Varun_CV.pdf" });

  // Add target="_blank" rel="noopener noreferrer" to external links
  eleventyConfig.addTransform("externalLinks", function(content, outputPath) {
    if (outputPath && outputPath.endsWith(".html")) {
      return content.replace(/<a href="(https?:\/\/[^"]+)"/g, '<a href="$1" target="_blank" rel="noopener noreferrer"');
    }
    return content;
  });

  return {
    dir: {
      input: "src",
      output: "_site"
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};