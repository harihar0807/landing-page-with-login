module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
          backgroundImage: theme => ({
              'hero-pattern' : "url('https://drive.google.com/drive/folders/11rKM5RTfVyOpz47vT_dJ0yg7fhBR8Xfv')"
          })
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }