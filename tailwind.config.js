module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', 
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        sans: ['Arial', 'sans'], 
      },
      colors: {
        'primary': '#FF5733',
        'blue': '#1fb6ff',
        'purple': '#7e5bef',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#13ce66',
        'yellow': '#ffc82c',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
      },
      fontSize: {
        'xs': '10px',
        's': '16px',
        'm': '20px',
        'l': '28px',
        'xl': '36px',
        'xxl':'48px',
        'xxxl': '60px',
        '100': '100px'
      },
      spacing: {
        '0': '4px',
        '1': '8px',
        '2': '12px',
        '3': '16px',
        '4': '24px',
        '5': '32px',
        '6': '48px',
      },
      skew: {
        '0': '0',
        '-20': '-20deg',
      }
    },
  },
  plugins: [],
}
