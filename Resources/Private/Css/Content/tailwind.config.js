/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "../../../../../pagedoctor-*/Resources/Private/Templates/**/*.{html,js}",
    "../../../../../pagedoctor-*/Resources/Private/Layouts/**/*.{html,js}",
    "../../../../../pagedoctor-*/Resources/Private/Partials/**/*.{html,js}",
    "../../../../../pagedoctor-*/Resources/Public/**/*.{html,js}",
    "../../../../../pagedoctor-*/Configuration/TypoScript/**/*.typoscript"
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

