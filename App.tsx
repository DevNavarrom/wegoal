import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { TamaguiProvider, Text, View } from 'tamagui';

export default function App() {
  return (
    <TamaguiProvider>
      <View style={styles.container}>
        <Text>WEGOAL app!</Text>
        <StatusBar style="auto" />
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
  },
});
