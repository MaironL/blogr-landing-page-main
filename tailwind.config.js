module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      backgroundImage: {
        bannerDesktop: "url('/images/bg-pattern-intro-desktop.svg')",
        bannerMobile: "url('/images/bg-pattern-intro-mobile.svg')",
        editorDesktop: "url('/images/illustration-editor-desktop.svg')",
        circlePatter: "url('/images/bg-pattern-circles.svg')",
        laptopDesktop: "url('/images/illustration-laptop-desktop.svg')",
      },
    },
    screens: {
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1440px',
      '2xl': '1800px',
    },
  },
  plugins: [],
};
