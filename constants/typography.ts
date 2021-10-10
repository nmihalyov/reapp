import { Platform } from 'react-native';

export const FONTS = {
  'Inter-Thin': require('../assets/fonts/Inter/Inter-Thin.ttf'),
  'Inter-ExtraLight': require('../assets/fonts/Inter/Inter-ExtraLight.ttf'),
  'Inter-Light': require('../assets/fonts/Inter/Inter-Light.ttf'),
  'Inter-Regular': require('../assets/fonts/Inter/Inter-Regular.ttf'),
  'Inter-Medium': require('../assets/fonts/Inter/Inter-Medium.ttf'),
  'Inter-SemiBold': require('../assets/fonts/Inter/Inter-SemiBold.ttf'),
  'Inter-Bold': require('../assets/fonts/Inter/Inter-Bold.ttf'),
  'Inter-ExtraBold': require('../assets/fonts/Inter/Inter-ExtraBold.ttf'),
  'Inter-Black': require('../assets/fonts/Inter/Inter-Black.ttf')
};

export const TYPOGRAPHY = {
  heading: {
    heading1: {
      lineHeight: 72,
      fontFamily: Platform.OS == 'ios' ? 'System' : 'Inter-Regular',
      fontSize: 72,
      fontWeight: '400'
    },
    heading2: {
      lineHeight: 40,
      fontFamily: Platform.OS == 'ios' ? 'System' : 'Inter-Regular',
      fontSize: 32,
      fontWeight: '400'
    },
    heading3: {
      lineHeight: 24,
      fontFamily: Platform.OS == 'ios' ? 'System' : 'Inter-Regular',
      fontSize: 24,
      fontWeight: '400'
    },
    heading4: {
      lineHeight: 24,
      fontFamily: Platform.OS == 'ios' ? 'System' : 'Inter-Medium',
      fontSize: 20,
      fontWeight: '500'
    },
    heading5: {
      lineHeight: 24,
      fontFamily: Platform.OS == 'ios' ? 'System' : 'Inter-SemiBold',
      fontSize: 18,
      fontWeight: '600'
    },
    heading6: {
      lineHeight: 16,
      fontFamily: Platform.OS == 'ios' ? 'System' : 'Inter-Bold',
      fontSize: 16,
      fontWeight: '700'
    }
  },
  accident: {
    accident1: {
      lineHeight: 24,
      fontFamily: Platform.OS == 'ios' ? 'System' : 'Inter-SemiBold',
      fontSize: 20,
      fontWeight: '600'
    },
    accident2: {
      lineHeight: 24,
      fontFamily: Platform.OS == 'ios' ? 'System' : 'Inter-Regular',
      fontSize: 16,
      fontWeight: '400'
    },
    accident3: {
      lineHeight: 16,
      fontFamily: Platform.OS == 'ios' ? 'System' : 'Inter-Medium',
      fontSize: 14,
      fontWeight: '600'
    },
    accident4: {
      lineHeight: 14,
      fontFamily: Platform.OS == 'ios' ? 'System' : 'Inter-SemiBold',
      fontSize: 12,
      fontWeight: '600'
    }
  },
  body: {
    body1: {
      lineHeight: 24,
      fontFamily: Platform.OS == 'ios' ? 'System' : 'Inter-Regular',
      fontSize: 16,
      fontWeight: '400'
    },
    body2: {
      lineHeight: 20,
      fontFamily: Platform.OS == 'ios' ? 'System' : 'Inter-Regular',
      fontSize: 14,
      fontWeight: '400'
    }
  },
  subtitle: {
    subtitle1: {
      lineHeight: 16,
      fontFamily: Platform.OS == 'ios' ? 'System' : 'Inter-Medium',
      fontSize: 16,
      fontWeight: '500'
    },
    subtitle2: {
      lineHeight: 17,
      fontFamily: Platform.OS == 'ios' ? 'System' : 'Inter-Regular',
      fontSize: 14,
      fontWeight: '400'
    },
    subtitle3: {
      lineHeight: 16,
      fontFamily: Platform.OS == 'ios' ? 'System' : 'Inter-Regular',
      fontSize: 12,
      fontWeight: '400'
    }
  },
  button: {
    default: {
      textTransform: 'uppercase',
      lineHeight: 16,
      fontFamily: Platform.OS == 'ios' ? 'System' : 'Inter-SemiBold',
      fontSize: 14,
      fontWeight: '600'
    },
    button2: {
      lineHeight: 16,
      fontFamily: Platform.OS == 'ios' ? 'System' : 'Inter-SemiBold',
      fontSize: 16,
      fontWeight: '600'
    },
    small: {
      lineHeight: 16,
      fontFamily: Platform.OS == 'ios' ? 'System' : 'Inter-SemiBold',
      fontSize: 16,
      fontWeight: '600'
    }
  },
  caption: {
    lineHeight: 16,
    fontFamily: Platform.OS == 'ios' ? 'System' : 'Inter-Regular',
    fontSize: 12,
    fontWeight: '400'
  }
};