import React from 'react';
import { View, Text, Button } from 'react-native';

import { styles } from './styles';
import { Card, NumberContainer } from '../../components';

export default function GameOverScreen({ rounds, onNewGame }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Game Over</Text>
      <Card style={styles.card}>
        <Text>You guessed the number at rounds</Text>
        <NumberContainer>{rounds}</NumberContainer>
        <Button title="New Game" onPress={onNewGame} />
      </Card>
    </View>
  );
}
