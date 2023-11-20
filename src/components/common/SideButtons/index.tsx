import { StyleSheet, View, Touchable } from "react-native"
import { MaterialIcons } from '@expo/vector-icons';
import { Button } from "react-native-elements/dist/buttons/Button";

type SideButtonsProps = {
  editHandler: () => void,
  removeHandler: () => void,
}

const SideButtons= ({editHandler, removeHandler}: SideButtonsProps) => {
  return (
    <View style={styles.swipableButtonsContainer}>
      <Button icon={<MaterialIcons name="edit" size={24} color="black" />}
        type="clear"
        containerStyle={styles.buttonContainer}
        buttonStyle={styles.buttonEdit}
        onPress={editHandler}>
      </Button>
      <Button icon={<MaterialIcons name="delete" size={24} color="black" />}
        containerStyle={styles.buttonContainer}
        type="clear"
        buttonStyle={styles.buttonRemove}
        onPress={removeHandler}>
      </Button>
    </View>
  )
}

export default SideButtons;

const styles = StyleSheet.create({
  swipableButtonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '33%',
  },
  buttonContainer: {
    borderRadius: 0,
    height: '100%',
    width: '50%',
  },
  buttonEdit: {
    borderRadius: 0,
    height: '100%',
    backgroundColor: 'orange',
  },
  buttonRemove: {
    borderRadius: 0,
    height: '100%',
    backgroundColor: 'red',
  },
})