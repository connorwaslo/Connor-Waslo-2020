import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.45,
  headerFontFamily: ['Tajawal', 'sans-serif'],
  bodyFontFamily: ['Tajawal', 'sans-serif']
});

typography.injectStyles();

export default typography;