import { config } from '@tamagui/config/v3';
import { TamaguiProvider, View, createTamagui } from '@tamagui/core';
import { StyleSheet } from 'react-native';

import HomeScreen from './app/(home)/Home';


const tamaguiConfig = createTamagui(config)

// make TypeScript type everything based on your config
type Conf = typeof tamaguiConfig
declare module '@tamagui/core' {
  interface TamaguiCustomConfig extends Conf {}
}

export default function App() {
  return (
    <TamaguiProvider config={tamaguiConfig}>
      <View
        style={styles.container}
      >
        <HomeScreen />
      </View>
    </TamaguiProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
});
