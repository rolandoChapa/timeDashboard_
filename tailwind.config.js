module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
        "./node_modules/flowbite/**/*.js",
    ],
    theme: {
        screens: {
            'sm': '576px',
            // => @media (min-width: 576px) { ... }

            'md': '960px',
            // => @media (min-width: 960px) { ... }

            'lg': '1440px',
            // => @media (min-width: 1440px) { ... }
        },
        container: {
            center: true,
        },
        extend: {
            colors: {

                'blue': '#5747EA',
                'lightRed-Work': '#ff8c66',
                'softBlue': '#56c2e6',
                'lightRed-Study': '#ff5c7c',
                'limeGreen-Exercise': '#4acf81',
                'violet-Social': '#7536d3',
                'softOrange-SelfCare': '#f1c65b',
                'superDarkBlue': '#0f1424',
                'darkBlue': '#1c1f4a',
                'deSatBlue': '#06f76c8',
                'paleBlue': '#BBC0FF',
            },
            fontFamily: {
                'rubik': ['Rubik', 'sans-serif']
            }
        },
    },
    plugins: [],
}
