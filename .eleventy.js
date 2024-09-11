const {DateTime} = require("luxon")

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('./src/bundle.css');
    eleventyConfig.addPassthroughCopy('./src/styles/fonts/*.css');
    eleventyConfig.addPassthroughCopy('./src/assets');

    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED)
    })

    return {
        dir: {
            input: 'src',
            output: 'public',
        }
    }
}
