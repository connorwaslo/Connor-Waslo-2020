import Typography from 'typography';

const typography = new Typography({
  googleFonts: [
    {
      name: 'Tajawal',
      styles: [
        '200'
      ]
    }
  ],
  baseFontSize: '12px',
  baseLineHeight: 1.45,
  headerFontFamily: ['Tajawal', 'sans-serif'],
  bodyFontFamily: ['Tajawal', 'sans-serif']
});

typography.injectStyles();

export default typography;