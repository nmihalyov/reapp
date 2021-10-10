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

export const ShuttleIcon: React.FC<IconProps> = props => {
  const { color, style } = props;

  return (
    <View style={style}>
      <Svg width={style?.width || 24} height={style?.height || 24} viewBox="0 0 24 24" fill="none">
        <Path d="M12.9401 11.0596L5.87012 18.1296" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M6.63295 12.9996L3.16995 12.1816C2.78895 12.0916 2.65495 11.6186 2.93095 11.3416L5.68495 8.58758C5.86995 8.40258 6.12095 8.29658 6.38395 8.29458L9.48895 8.26758" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M19.8791 8.9756L20.6871 5.0876C20.9071 4.0296 19.9711 3.0936 18.9131 3.3136L15.0251 4.1216C13.8801 4.3596 12.8301 4.9266 12.0041 5.7536L8.81407 8.9426C7.59707 10.1596 6.80507 11.7376 6.55507 13.4406L6.54407 13.5136C6.38607 14.6006 6.75007 15.6976 7.52607 16.4746C8.30207 17.2506 9.40007 17.6146 10.4871 17.4556L10.5601 17.4446C12.2631 17.1956 13.8411 16.4026 15.0581 15.1856L18.2471 11.9966C19.0741 11.1706 19.6411 10.1206 19.8791 8.9756Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M13.3999 4.71387C15.7109 6.28987 17.7099 8.28887 19.2859 10.5999" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M11 17.3667L11.818 20.8297C11.908 21.2107 12.381 21.3447 12.658 21.0687L15.412 18.3147C15.597 18.1297 15.703 17.8787 15.705 17.6157L15.732 14.5107" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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

export const CityIcon: React.FC<IconProps> = props => {
  const { color, style } = props;

  return (
    <View style={style}>
      <Svg width={style?.width || 24} height={style?.height || 24} viewBox="0 0 24 24" fill="none">
        <Path d="M17 21V4C17 3.448 16.552 3 16 3H8C7.448 3 7 3.448 7 4V21" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M7 9H3C2.448 9 2 9.448 2 10V21" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M22 21V10C22 9.448 21.552 9 21 9H17" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M9.5 17H14.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M13.5 17V21" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M10.5 21V17" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M10 10.5H14" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M10 13.5H14" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M10 7.5H14" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M5 13.5H7" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M5 17H7" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M17 13.5H19" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M17 17H19" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M23 21H1" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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