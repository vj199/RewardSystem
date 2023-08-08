import {View, Text} from 'react-native';
import React from 'react';
import makeStyles from '../commonStyle';
import {useTheme} from 'react-native-paper';

interface PropType {
  title: string;
  subTitle?: boolean;
  FieldTitle?: boolean;
}

const TitleOne = (props: PropType) => {
  const {title, subTitle, FieldTitle} = props;
  const theme = useTheme();
  const styles = makeStyles(theme);

  return (
    <View style={styles.mainctr1}>
      <Text
        style={[
          styles.textOne,
          subTitle && styles.subTitle,
          FieldTitle && styles.FieldTitle,
        ]}>
        {title}
      </Text>
    </View>
  );
};

export default TitleOne;
