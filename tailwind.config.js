/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js}",
    './main.js'
  ],
  theme: {
    extend: {
      colors: {
        "azulTenueFuerte": "#84B6F4",
        "azulClaro": "#C4DAFA",
        "azulMasClaro": "#E0E9F4",
        "azulCielo": "#46A6FF",
        "blancoAzul": "#edf4fc",
        "white60opac": "rgb(255 255 255 / 60%)",
        "white40opac": "rgb(255 255 255 / 16%)",
        "moradoOscuro": "#271E4A",
        "gris": "#A1A1A1",
        "rosaGris": "#9b9bb2",
        "hoverBgEditar": "#878787",
        "hoverBgGuardar": "#408dd5"
      },
      screens: {
        'mq1185': { 'raw': '(min-width: 1185px)' },
        'mq1050': { 'raw': '(min-width: 1050px)' },
        'mq980': { 'raw': '(min-width: 980px)' },
        // => @media (min-height: 800px) { ... }
      }
    },
  },
  plugins: [],
}

