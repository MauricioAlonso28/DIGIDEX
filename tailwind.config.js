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
        'digimon': ['Pixel Digivolve', 'sans-serif'] 
      },
      colors: {
        'primaryBg': '--color-primary',
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
        '12': '12px',
        '14': '14px',
        's': '16px',
        'm': '20px',
        'ml': '22px',
        'l': '28px',
        'xl': '36px',
        'xxl':'48px',
        'xxxl': '60px',
        '100': '100px'
      },
      spacing: {
        'none': '0',
        '0': '4px',
        '1': '8px',
        '1.2': '10px',
        '1.3': '12px',
        '2': '12px',
        '3': '16px',
        '4': '24px',
        '5': '32px',
        '6': '48px',
        'Card': '73px',
        'ss': '20.5%',
        'sb': '22.5%',
        'sx': '24.5%',
        'sl': '27.3%',
        'xxxl': '800px',
        'xxl': '750px',
        'xl-1/5': '700px',
        'xl-2/5': '650px',
        'xl-3/5': '600px',
        'xl-4/5': '550px',
        'xl-5/5': '500px',
        '05': '05%',
        '10': '10%',
        '15': '15%',
        '25': '25%',
        '30': '30%',
        '35': '35%',
        '40': '40%',
        '45': '45%',
        '55': '55%',
        '65': '65%',
        '70': '70%',
        '75': '75%',
        '85': '85%',
        '90': '90%',
        '95': '95',
      },
      skew: {
        '0': '0',
        '-5deg': '-5deg',
        '-20': '-20deg',
      },
      height: {
        'ml': '22px',
      },
      width: {
        '38': '156px',
        'card': '200px'
      },
      borderRadius: {
        'small': '5px',
        'xss': '3.5px'
      },
      boxShadow: {
        'simple': '1px 1px 1px 3px rgba(0, 0, 0, 0.2)'
      },
      borderWidth: {
        '1': '1px'
      }
    },
  },
  plugins: [],
}
