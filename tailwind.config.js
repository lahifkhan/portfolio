/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#5A5A5A",
                "background-light": "#F3F4F6",
                "background-dark": "#0B0C10",
                "card-dark": "rgba(255, 255, 255, 0.05)",
                "border-dark": "rgba(255, 255, 255, 0.1)",
            },
            fontFamily: {
                display: ["Poppins", "sans-serif"],
                sans: ["Poppins", "sans-serif"],
            },
            borderRadius: {
                DEFAULT: "0.5rem",
            },
            animation: {
                "delayed-pulse": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
            },
        },
    },
    plugins: [],
}
