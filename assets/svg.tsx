import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

type IconProps = {
  color: string;
  style: {
    width: number;
    height: number;
  };
};

export const ArrowIcon: React.FC<IconProps> = props => {
  const { color, style } = props;

  return (
    <View style={style}>
      <Svg width={style?.width || 24} height={style?.height || 24} viewBox="0 0 24 24" fill="none">
        <Path d="M5 12H19.001" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M10.001 6.99902L5 12" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M10.001 17.001L5 12" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </Svg>
    </View>
  );
};

export const ProfileIcon: React.FC<IconProps> = props => {
  const { color, style } = props;

  return (
    <View style={style}>
      <Svg width={style?.width || 24} height={style?.height || 24} viewBox="0 0 24 24" fill="none">
        <Path d="M18.3639 5.63604C21.8787 9.15076 21.8787 14.8492 18.3639 18.3639C14.8492 21.8787 9.15074 21.8787 5.63604 18.3639C2.12132 14.8492 2.12132 9.15074 5.63604 5.63604C9.15076 2.12132 14.8492 2.12132 18.3639 5.63604" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M17.307 19.257C16.923 17.417 14.705 16 12 16C9.29499 16 7.07699 17.417 6.69299 19.257" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M14.1213 7.87868C15.2929 9.05025 15.2929 10.9497 14.1213 12.1213C12.9497 13.2929 11.0502 13.2929 9.87868 12.1213C8.70711 10.9497 8.70711 9.05025 9.87868 7.87868C11.0502 6.70711 12.9497 6.70711 14.1213 7.87868Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </Svg>
    </View>
  );
};

export const HomeIcon: React.FC<IconProps> = props => {
  const { color, style } = props;

  return (
    <View style={style}>
      <Svg width={style?.width || 24} height={style?.height || 24} viewBox="0 0 24 24" fill="none">
        <Path d="M19.842 8.29925L13.842 3.63225C12.759 2.78925 11.242 2.78925 10.158 3.63225L4.158 8.29925C3.427 8.86725 3 9.74125 3 10.6672V18.0002C3 19.6572 4.343 21.0002 6 21.0002H18C19.657 21.0002 21 19.6572 21 18.0002V10.6672C21 9.74125 20.573 8.86725 19.842 8.29925Z" stroke={color} strokeWidth="1.5" />
        <Path d="M9 17H15" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </Svg>
    </View>
  );
};