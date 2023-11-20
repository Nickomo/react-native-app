import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { ExpoRoot, SplashScreen, Stack, useGlobalSearchParams } from 'expo-router';
import { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { useTranslation } from 'react-i18next';

// export {
//   // Catch any errors thrown by the Layout component.
//   ErrorBoundary,
// } from 'expo-router';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  const { t } = useTranslation('', { keyPrefix: 'tabs' })
  const { edit } = useGlobalSearchParams();

  const prefix = edit ? 'edit' : 'add'

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="addProduct" options={{ title:  t(`${prefix}Product`), presentation: 'modal' }} />
        <Stack.Screen name="addProductsList" options={{ title: t(`${prefix}List`), presentation: 'modal' }} />
      </Stack>
    </ThemeProvider>
  );
}
