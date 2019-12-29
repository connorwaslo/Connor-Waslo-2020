import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '12px',
  baseLineHeight: 1.45,
  fontWeight: 200,
  headerFontFamily: ['Tajawal', 'sans-serif'],
  bodyFontFamily: ['Tajawal', 'sans-serif']
});

typography.injectStyles();

export default typography;
