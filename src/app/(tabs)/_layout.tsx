import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, Text, useColorScheme } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import Colors from 'constants/Colors';

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export const TabPlusIcon = ({ link }: {link: string}) => {
  return (
    <Link href={link} asChild>
      <Feather name="plus" size={28} style={{ marginRight: 15 }} />
    </Link>
  )
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const { t } = useTranslation('', { keyPrefix: 'tabs' })

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      }}>
      <Tabs.Screen
        name="products/index"
        options={{
          title: t('products'),
          tabBarIcon: ({ color }) => <TabBarIcon name="shopping-cart" color={color} />,
          headerRight: () => <TabPlusIcon link="/addProduct" />,
        }}
      />
      <Tabs.Screen
        name="productsLists/index"
        options={{
          title: t('list'),
          tabBarIcon: ({ color }) => <TabBarIcon name="list" color={color} />,
          headerRight: () => <TabPlusIcon link="/addProductsList" />
        }}
      />
    </Tabs>
  );
}
