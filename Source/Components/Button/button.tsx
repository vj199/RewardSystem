import * as React from 'react';
import {Button, Text, useTheme} from 'react-native-paper';
import makeStyles from './button.style';

interface TextProps {
  mode?: 'text' | 'outlined' | 'contained' | 'elevated' | 'contained-tonal';
  onPress?: (value: any) => void;
  placeholderTextColor?: string;
  textColor?: string;
  [key: string]: any;
}

const ButtonPaper: React.FC<TextProps> = ({
  icon,
  mode,
  onPress,
  style,
  textStyle,
  children,
  ...rest
}) => {
  const theme = useTheme();
  const styles = makeStyles(theme);
  return (
    <Button
      contentStyle={[styles.btn_radius, style]}
      style={styles.btn}
      textColor={theme.colors.onSecondary}
      icon={icon ? icon : ''}
      mode={mode ? mode : 'contained'}
      onPress={onPress}
      {...rest}>
      <Text
        variant="bodyMedium"
        style={[{color: theme.colors.tertiary}, textStyle]}>
        {children}
      </Text>
    </Button>
  );
};

export default ButtonPaper;
