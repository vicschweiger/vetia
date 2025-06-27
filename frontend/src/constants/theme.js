export const COLORS = {
  primary: '#007AFF',      // Azul principal
  secondary: '#4CD964',    // Verde secundário
  background: '#F2F2F7',   // Fundo claro
  text: '#1C1C1E',          // Texto principal
  textLight: '#8A8A8E',   // Texto mais claro
  white: '#FFFFFF',
  black: '#000000',
  red: '#FF3B30',
};

export const SIZES = {
  base: 8,
  small: 12,
  font: 14,
  medium: 16,
  large: 18,
  xlarge: 30,
  xxlarge: 50,
  padding: 10,
};

export const FONTS = {
  h1: { fontSize: SIZES.xxlarge, fontWeight: 'bold' },
  h2: { fontSize: SIZES.xlarge, fontWeight: 'bold' },
  body1: { fontSize: SIZES.large, lineHeight: 22 },
  body2: { fontSize: SIZES.medium, lineHeight: 20 },
};

const appTheme = { COLORS, SIZES, FONTS };
export default appTheme;