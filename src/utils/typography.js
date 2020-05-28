import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.50,
  fontWeight: 400,
  headerFontFamily: ['Poppins', 'sans-serif'],
  bodyFontFamily: ['Poppins', 'sans-serif']
});

typography.injectStyles();

export default typography;
