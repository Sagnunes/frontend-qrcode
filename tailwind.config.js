/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        screens: {
            sm: '375px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },
        colors: {
            white: 'hsl(0, 0%, 100%)',
            lightGray: 'hsl(212, 45%, 89%)',
            grayishBlue: 'hsl(220, 15%, 55%)',
            darkBlue: 'hsl(218, 44%, 22%)',
        },
        fontFamily: {
            outfit: ['Outfit', 'sans-Serif']
        },
        extend: {},
    },
    plugins: [],
}