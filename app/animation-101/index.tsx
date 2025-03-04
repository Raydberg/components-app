import ThemedButton from '@/presentation/shared/ThemedButton';
import { View, Text } from 'react-native';

const Animation101Screen = () => {
  return (
    <View>
      <Text>Animation101Screen</Text>
      <ThemedButton
        onPress={() => console.log("fadeIn")}
      >
        FadeIn
      </ThemedButton>
      <ThemedButton
        onPress={() => console.log("fadeOut")}>
        FadeOut
      </ThemedButton>
    </View>
  );
};
export default Animation101Screen;
