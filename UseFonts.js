import * as Font from 'expo-font';

export default useFonts = async () =>
  await Font.loadAsync({
    "Amiri-Black": require('./assets/fonts/Amiri-Bold.ttf')
  });