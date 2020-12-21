import React from 'react';
import { View, Text, Button } from 'react-native';

import { styles } from './styles';
import { Card } from '../../components';

export default function StartGameScreen({ onStartGame }) {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Start a New Game</Text>
      <Card style={styles.card}>
        <Text>Can you guess my number?</Text>
        <View style={styles.btnContainer}>
          <Button title="Start Game" onPress={onStartGame} />
        </View>
      </Card>
    </View>
  );
}
