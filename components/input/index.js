import React from 'react';
import { TextInput } from 'react-native';

import { styles } from './styles';

export default function Input({ style = {}, ...restProps }) {
  return <TextInput style={{ ...styles.input, ...style }} {...restProps} />;
}
