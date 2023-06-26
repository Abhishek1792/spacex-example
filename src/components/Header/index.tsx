import { useAppTheme } from '@src/theme/theme';
import React from 'react';
import { Image, View } from 'react-native';

import makeStyles from './styles';
import images from '@src/config/image';

const Header = () => {
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  return (
    <View style={styles.container}>
      <Image style={styles.headerImage} source={images.logo} />
    </View>
  );
};

export default Header;
