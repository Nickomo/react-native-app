import { Stack, useGlobalSearchParams } from 'expo-router';
import { useTranslation } from 'react-i18next';

export default function ModalLayout() {
  const { t } = useTranslation('', { keyPrefix: 'modals' })
  const { edit } = useGlobalSearchParams();

  const prefix = edit ? 'edit' : 'add'

  return (
    <Stack>
      <Stack.Screen name="addProduct" options={{ title: t(`${prefix}Product`) }} />
      <Stack.Screen name="addProductsList" options={{ title: t(`${prefix}List`) }} />
      <Stack.Screen name="addProductsListProducts" options={{ title: t(`addProduct`) }} />
    </Stack>
  );
}