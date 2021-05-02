
module.exports = {
  plugins: {
     tailwindcss: {},
     autoprefixer: {},
     ...(process.env.NODE_ENV === 'production'
        ? {
             '@fullhuman/postcss-purgecss': {
                // added sections folder and changed extension to jsx
                content: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './sections/**/**/*.{js,ts,jsx,tsx}'],
                defaultExtractor: content =>
                   content.match(/[\w-/:]+(?<!:)/g) || [],
             },
          }
        : {}),
  },
}