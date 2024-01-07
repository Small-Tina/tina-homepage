/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: {
        '49/50': '98%',
        '300px': '300px',
        '680px': '680px',
      },
      height: {
        '200px': '200px',
        '60px': '60px',
      },
      bottom: {
        '5px': '5px',
      },
      boxShadow: {
        'headPortrait': 'rgba(50, 50, 93, 0.25) 0 50px 100px -20px, rgba(0, 0, 0, 0.3) 0 30px 60px -30px',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
