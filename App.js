/* eslint-disable global-require */
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import { Header } from './components';
import { StartGameScreen, GameScreen, GameOverScreen } from './screens';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  body: {
    flex: 1,
    backgroundColor: '#ccc',
  },
});

const fetchFonts = () => {
  Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
};

const generateRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;

export default function App() {
  const [isOnStartGameScreen, setIsOnStartGameScreen] = useState(true);
  const [choosenNumber, setChoosenNumber] = useState(0);
  const [rounds, setRounds] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.error(err)}
      />
    );
  }

  const onStartGame = () => {
    setIsOnStartGameScreen(false);
    setChoosenNumber(generateRandomNumber(1, 100));
    setRounds(0);
  };

  const onGameOver = (r) => {
    setRounds(r);
  };

  let content = <StartGameScreen onStartGame={onStartGame} />;

  if (!isOnStartGameScreen) {
    content =
      rounds === 0 ? (
        <GameScreen choosenNumber={choosenNumber} onGameOver={onGameOver} />
      ) : (
        <GameOverScreen rounds={rounds} onNewGame={onStartGame} />
      );
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a number" />
      {content}
    </View>
  );
}
