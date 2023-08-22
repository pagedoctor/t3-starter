/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "../../../../../{pagedoctor-*-views,t3-starter}/Resources/Private/Templates/**/*.{html,js}",
    "../../../../../{pagedoctor-*-views,t3-starter}/Resources/Private/Layouts/**/*.{html,js}",
    "../../../../../{pagedoctor-*-views,t3-starter}/Resources/Private/Partials/**/*.{html,js}",
    "../../../../../{pagedoctor-*-views,t3-starter}/Resources/Public/**/*.{html,js}",
    "../../../../../{pagedoctor-*-views,t3-starter}/Configuration/TypoScript/**/*.typoscript"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio')
  ],
}

