export const THEME_LIGHT = Symbol('light');
export const THEME_DARK = Symbol('dark');

export const THEMES = {
  [THEME_LIGHT]: {
    background: {
      default: '#FFFFFF',
      secondary: '#F2F3F5',
      onPrimary: '#323232',
      onSecondary: '#747474',
      onAccent: '#254FE1'
    },
    surface: {
      default: '#FFFFFF',
      secondary: '#F3F4F6',
      edging: '#FFFFFF',
      edging2: '#F5F5F5',
      alert: '#FDECEF',
      access: '#00A650',
      onPrimary: '#323232',
      onSecondary: '#747474',
      onTertiary: '#D0D0D0',
      onAccent: '#254FE1',
      onAlert: '#E73A5E',
      onSuccess: '#00A650',
      onRating: '#F1BF15',
      onInvert: '#FFFFFF'
    },
    input: {
      default: '#ECEDF1',
      placeholder: '#7C8289'
    },
    border: '#DADCE1',
    accent: '#254FE1',
    onAccent: '#FFFFFF'
  },
  [THEME_DARK]: {
    background: {
      default: '#191919',
      secondary: '#0A0A0A',
      onPrimary: '#FFFFFF',
      onSecondary: '#A1A4A9',
      onAccent: '#3D68FF'
    },
    surface: {
      default: '#2A2A2A',
      secondary: '#303030',
      edging: '#232323',
      edging2: '#000000',
      alert: '#362326',
      access: '#00A650',
      onPrimary: '#FFFFFF',
      onSecondary: '#A1A4A9',
      onTertiary: '#626770',
      onAccent: '#5E81F8',
      onAlert: '#E73A5E',
      onSuccess: '#00A650',
      onRating: '#F1BF15',
      onInvert: '#FFFFFF'
    },
    input: {
      default: '#303030',
      placeholder: '#8B8D92'
    },
    border: '#444649',
    accent: '#3D68FF',
    onAccent: '#FFFFFF'
  }
};