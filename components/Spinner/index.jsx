import React from 'react';
import { ActivityIndicator, Colors } from 'react-native-paper';

export const Spinner = () => (
  <ActivityIndicator animating={true} color={Colors.red800} />
);