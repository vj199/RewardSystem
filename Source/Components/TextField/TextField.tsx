import Theme from '@themes/DefaultTheme';
import React, {useState} from 'react';
import {Text, TextInput} from 'react-native-paper';
import makeStyles from './TextField.style';

interface TextProps {
  label?: string;
  value: string;
  placeholder?: string;
  mode?: 'flat' | 'outlined' | undefined;
  onChangeText?: (value: any) => void;
  onBlur?: (e: any) => void;
  placeholderTextColor?: string;
  textColor?: string;
  secureText?: boolean;
  [key: string]: any;
  error_text?: string;
}

const TextField: React.FC<TextProps> = ({
  label,
  value,
  placeholder,
  mode,
  onChangeText,
  placeholderTextColor,
  textColor,
  onBlur,
  secureText,
  style,
  error_text,
  ...rest
}) => {
  const {colors} = Theme;
  const styles = makeStyles(Theme);
  const [secureTextEntry, setSecureTextEntry] = useState(secureText || false);

  return (
    <>
      <TextInput
        label={label}
        value={value}
        style={styles.fieldInputStyle}
        contentStyle={style}
        placeholder={placeholder}
        mode={mode || 'outlined'}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry || false}
        onBlur={onBlur}
        right={
          secureText ? (
            <TextInput.Icon
              icon={secureTextEntry ? 'eye-off' : 'eye'}
              onPress={() => {
                setSecureTextEntry(!secureTextEntry);
                return false;
              }}
            />
          ) : (
            ''
          )
        }
        placeholderTextColor={placeholderTextColor || colors.primary}
        textColor={textColor || colors.primary}
        {...rest}
      />
      <Text variant="labelSmall" style={styles.error_text}>
        {error_text}
      </Text>
    </>
  );
};

export default TextField;
