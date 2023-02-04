/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./Pages/**/*.{html,js}','./index.html'],
    theme: {
        extend: {
            fontFamily: {
                'roboto': ['Roboto Condensed', 'sans-serif'],
            },
        },
},
plugins: [],
}