const withMT = require("@material-tailwind/html/utils/withMT");
/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: ["./public/index.html"],
  theme: {
    extend: {},
  },
  plugins: [],
});
