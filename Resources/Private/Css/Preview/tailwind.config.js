/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "../../../../../pagedoctor-*-views/Resources/Private/Preview/**/*.html"
  ],
  corePlugins: {
    preflight: false,
  },
  prefix: 'tw-',
  theme: {
    extend: {},
  },
  plugins: [],
}

