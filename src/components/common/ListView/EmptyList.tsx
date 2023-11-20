import { useTranslation } from 'react-i18next';
import { View, Text, StyleSheet } from 'react-native';

const EmptyList = () => {
  const { t } = useTranslation();
  return (
    <View style={styles.textContainer}>
      <Text style={styles.mainText}>{t('emptyListTitle')}</Text>
      <Text style={styles.bottomText}>{t('emptyListDescription')}</Text>
    </View>
  )
}

export default EmptyList;

const styles = StyleSheet.create({
  textContainer: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainText: {
    fontSize: 24
  },
  bottomText: {
    marginTop: 12,
    fontSize: 16
  }
});
