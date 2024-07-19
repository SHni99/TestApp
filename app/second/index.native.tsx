import { Stack } from 'expo-router'
import ScreenLayout from 'src/components/ScreenLayout'
import { WebView } from 'react-native-webview'

export default function SecondScreen() {
  return (
    <ScreenLayout testID="second-screen-layout">
      <Stack.Screen options={{ title: 'Second Screen', headerShown: true }} />
      <WebView style={{flex: 1}} source={{uri: 'https://bloobin.netlify.app/' }} />
    </ScreenLayout>
  )
}
