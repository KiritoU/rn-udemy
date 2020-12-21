import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  Button,
  Keyboard,
  Alert,
  TouchableWithoutFeedback,
} from 'react-native';

import { styles } from './styles';
import { Card, Input, NumberContainer } from '../../components';
import Colors from '../../constants/colors';

export default function GameScreen({ choosenNumber, onGameOver }) {
  const [enteredNumber, setEnteredNumber] = useState('');
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState(0);
  const rounds = useRef(0);

  useEffect(() => {
    if (selectedNumber === choosenNumber) {
      onGameOver(rounds.current);
    }
  }, [selectedNumber, choosenNumber]);

  const onChangeTextHandler = (inputText) => {
    setEnteredNumber(inputText.replace(/[^0-9]/g, ''));
  };
  const resetButtonHandler = () => {
    setEnteredNumber('');
    setIsConfirmed(false);
    Keyboard.dismiss();
  };
  const guessButtonHandler = () => {
    const guessNumber = parseInt(enteredNumber);
    if (Number.isNaN(guessNumber) || guessNumber <= 0 || guessNumber > 99) {
      Alert.alert('Invalid number', 'Number must be between 1 and 99', [
        { text: 'OK', style: 'destructive', onPress: resetButtonHandler },
      ]);
      return;
    }
    setIsConfirmed(true);
    setSelectedNumber(guessNumber);
    setEnteredNumber('');
    // Keyboard.dismiss();
    rounds.current += 1;
  };

  const alertMessage = selectedNumber > choosenNumber ? 'Lower' : 'Higher';

  const confirmedOutput = isConfirmed ? (
    <Card style={styles.confirmedContainer}>
      <Text>You selected</Text>
      <NumberContainer>{selectedNumber}</NumberContainer>
      <Text>{alertMessage}</Text>
    </Card>
  ) : null;

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.body}>
        <Text style={styles.title}>Try to guess my number</Text>
        <Card style={styles.inputContainer}>
          <Text>Enter your Number</Text>
          <Input
            style={styles.input}
            maxLength={2}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            onChangeText={onChangeTextHandler}
            value={enteredNumber}
          />
          <View style={styles.btnContainer}>
            <View style={styles.btn}>
              <Button
                title="Reset"
                color={Colors.accent}
                onPress={resetButtonHandler}
              />
            </View>
            <View style={styles.btn}>
              <Button
                title="Guess"
                color={Colors.primary}
                onPress={guessButtonHandler}
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
}
