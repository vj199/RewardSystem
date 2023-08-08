import {DefaultTheme, MD3LightTheme, configureFonts} from 'react-native-paper';

const fontConfig = {
  headlineLarge: {
    letterSpacing: 0,
    lineHeight: 42,
    fontSize: 28,
    fontFamily: 'Montserrat-Bold',
  },
  headlineSmall: {
    letterSpacing: 0,
    lineHeight: 32,
    fontSize: 24,
    fontFamily: 'Montserrat-Bold',
  },
  bodyLarge: {
    letterSpacing: 0.5,
    lineHeight: 22,
    fontSize: 18,
    fontFamily: 'Montserrat-Regular',
  },
  bodyMedium: {
    letterSpacing: 0.5,
    lineHeight: 22,
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
  },
  bodySmall: {
    letterSpacing: 0.5,
    lineHeight: 22,
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
  },
  titleSmall: {
    letterSpacing: 0.3,
    lineHeight: 22,
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
  },
  titleMedium: {
    letterSpacing: 0.3,
    lineHeight: 22,
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
  },
  labelSmall: {
    letterSpacing: 0.5,
    lineHeight: 22,
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
  },
};

const Theme = {
  ...DefaultTheme,
  ...MD3LightTheme,
  myOwnProperty: true,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: '#030303',
    secondary: '#030303',
    onSecondary: '#8A8F99',
    tertiary: '#ffffff',
    placeholder: '#8A8F99',
    backdrop: '#1B1D21',
    accent: '#262A33',
    background: '#f5f5f9',
    surface: '#f5f5f9',
    text: '#FFFFFF',
    disabled: 'rgba(0, 52, 46, 0.32)',
    error: '#FF0000',
    warning: '#E8A831',
    success: '#06E702',
    muted: '#515866',
    transparent: 'transparent',
    black: '#000000',
    topTabOptionText: '#535353',
    lightAsh: '#8A8F99',
    destruction: '#FF0707',
    separator: '#8A8F99',
  },
  customColors: {
    disabledBorder: '#DADADA',
    disabledText: '#797979',
  },
  gradient: {
    glass: ['rgba(255, 255, 255, 0.22)', 'rgba(255, 255, 255, 0.05)'],
  },
  fonts: configureFonts({config: fontConfig}),
  // fonts: {
  //   black: {
  //     fontFamily: 'Montserrat-Black',
  //   },
  //   blackItalic: {
  //     fontFamily: 'Montserrat-BlackItalic',
  //   },
  //   bold: {
  //     fontFamily: 'Montserrat-Bold',
  //   },
  //   boldItalic: {
  //     fontFamily: 'Montserrat-BoldItalic',
  //   },
  //   extraBold: {
  //     fontFamily: 'Montserrat-ExtraBold',
  //   },
  //   extraBoldItalic: {
  //     fontFamily: 'Montserrat-ExtraBoldItalic',
  //   },
  //   extraLight: {
  //     fontFamily: 'Montserrat-ExtraLight',
  //   },
  //   extraLightItalic: {
  //     fontFamily: 'Montserrat-ExtraLightItalic',
  //   },
  //   italic: {
  //     fontFamily: 'Montserrat-Italic',
  //   },
  //   light: {
  //     fontFamily: 'Montserrat-Light',
  //   },
  //   lightItalic: {
  //     fontFamily: 'Montserrat-LightItalic',
  //   },
  //   medium: {
  //     fontFamily: 'Montserrat-Medium',
  //   },
  //   mediumItalic: {
  //     fontFamily: 'Montserrat-MediumItalic',
  //   },
  //   regular: {
  //     fontFamily: 'Montserrat-Regular',
  //   },
  //   semiBold: {
  //     fontFamily: 'Montserrat-SemiBold',
  //   },
  //   semiBoldItalic: {
  //     fontFamily: 'Montserrat-SemiBoldItalic',
  //   },
  //   thin: {
  //     fontFamily: 'Montserrat-Thin',
  //   },
  //   thinItalic: {
  //     fontFamily: 'Montserrat-ThinItalic',
  //   },
  //   bodySmall: {
  //     fontFamily: 'Montserrat-Light',
  //   },
  //   bodyMedium: {
  //     fontFamily: 'Montserrat-Regular',
  //   },
  //   bodyLarge: {
  //     fontFamily: 'Montserrat-Regular',
  //   },
  // },
  fontStyle: {
    subtitle1: {
      fontSize: 16,
      lineHeight: 20,
    },
    subtitle2: {
      fontSize: 14,
      lineHeight: 18,
    },
    body1: {
      fontSize: 18,
      lineHeight: 24,
    },
    body2: {
      fontSize: 16,
      lineHeight: 20,
    },
    body3: {
      fontSize: 14,
      lineHeight: 18,
    },
    caption: {
      fontSize: 12,
      lineHeight: 16,
    },
    button: {
      fontSize: 16,
      lineHeight: 20,
    },
    miniButton: {
      fontSize: 12,
      lineHeight: 16,
    },
    label: {
      fontSize: 12,
      lineHeight: 16,
    },
    error: {
      fontSize: 10,
      lineHeight: 16,
    },
  },
};

export default Theme;
