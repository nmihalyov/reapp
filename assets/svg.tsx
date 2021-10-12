import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

type IconProps = {
  color: string;
  style?: {
    width?: number;
    height?: number;
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

export const InfoIcon: React.FC<IconProps> = props => {
  const { color, style } = props;

  return (
    <View style={style}>
      <Svg width={style?.width || 40} height={style?.height || 40} viewBox="0 0 40 40" fill="none">
        <Path d="M20 20V28.3333" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M19.9982 13.333C19.9159 13.3334 19.8355 13.3581 19.7672 13.4041C19.6989 13.4501 19.6457 13.5152 19.6145 13.5914C19.5832 13.6676 19.5752 13.7513 19.5915 13.832C19.6077 13.9127 19.6475 13.9868 19.7059 14.0449C19.7642 14.103 19.8385 14.1425 19.9192 14.1585C20 14.1744 20.0837 14.1661 20.1598 14.1345C20.2358 14.1029 20.3008 14.0495 20.3465 13.981C20.3922 13.9125 20.4166 13.832 20.4166 13.7497C20.4168 13.6948 20.4061 13.6404 20.3851 13.5896C20.3642 13.5389 20.3334 13.4927 20.2944 13.454C20.2555 13.4152 20.2093 13.3846 20.1585 13.3638C20.1076 13.3431 20.0531 13.3326 19.9982 13.333" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M31.6667 5H8.33333C6.49238 5 5 6.49238 5 8.33333V31.6667C5 33.5076 6.49238 35 8.33333 35H31.6667C33.5076 35 35 33.5076 35 31.6667V8.33333C35 6.49238 33.5076 5 31.6667 5Z" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </Svg>
    </View>
  );
};

export const AddressIcon: React.FC<IconProps> = props => {
  const { color, style } = props;

  return (
    <View style={style}>
      <Svg width={style?.width || 24} height={style?.height || 24} viewBox="0 0 24 24" fill="none">
        <Path d="M15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13C13.6569 13 15 11.6569 15 10Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M5 10.001C5 15.251 12 21.001 12 21.001C12 21.001 19 15.251 19 10.001C19 8.14446 18.2625 6.36354 16.9497 5.05078C15.637 3.73803 13.8565 3.00098 12 3.00098C10.1435 3.00098 8.36305 3.73803 7.05029 5.05078C5.73754 6.36354 5 8.14446 5 10.001Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </Svg>
    </View>
  );
};

export const LogoutIcon: React.FC<IconProps> = props => {
  const { color, style } = props;

  return (
    <View style={style}>
      <Svg width={style?.width || 24} height={style?.height || 24} viewBox="0 0 24 24" fill="none">
        <Path d="M9.86597 12H20.001" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M10.864 19.9811L6.69601 20C6.41344 20.0028 6.1331 19.9498 5.87109 19.8439C5.60908 19.738 5.37057 19.5815 5.16922 19.3832C4.96787 19.1849 4.80765 18.9489 4.69778 18.6885C4.58792 18.4282 4.53056 18.1487 4.52899 17.8661V6.13504C4.53043 5.85322 4.58738 5.57454 4.69656 5.31473C4.80574 5.05491 4.96502 4.81913 5.16531 4.62088C5.36561 4.42262 5.603 4.26572 5.86392 4.15921C6.12484 4.0527 6.40419 3.99858 6.686 4.00003H11" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M16 16L20 12L16 8" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </Svg>
    </View>
  );
};