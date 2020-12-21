import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  body: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  title: {
    color: 'black',
    fontSize: 20,
    paddingVertical: 10,
    fontFamily: 'open-sans-bold',
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },
  btnContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btn: {
    width: '40%',
  },
  input: {
    width: 50,
  },
  confirmedContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
});
