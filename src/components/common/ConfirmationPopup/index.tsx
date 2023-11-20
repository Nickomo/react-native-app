import { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Overlay, Text } from "react-native-elements";

type ConfirmationPopupProps = {
  onConfirm?: () => void,
  onCancel?: () => void,
  closeOverlay: () => void,
  isVisible: boolean
}

const ConfirmationPopup: React.FC<ConfirmationPopupProps> = ({ onConfirm, onCancel, closeOverlay, isVisible }) => {
  const handleCloseOverlay = (func?: () => void) => () => {
    closeOverlay();
    func?.();
  }

  return (
    <Overlay overlayStyle={styles.overlay} isVisible={isVisible}>
      <Text style={styles.overlayText}>Are you sure?</Text>
      <View style={styles.buttonsContainer}>
        <Button title='Cancel' onPress={handleCloseOverlay(onCancel)} type="outline" containerStyle={styles.cancelButton} />
        <Button title='Confirm' onPress={handleCloseOverlay(onConfirm)} containerStyle={styles.confirmButton} />
      </View>
    </Overlay>
  )
}

export default ConfirmationPopup;

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingBottom: 36
  },
  overlayText: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center'
  },
  buttonsContainer: {
    width: '100%',
    marginTop: 24,
    display: 'flex',
    flexDirection: 'row',
    gap: 24,
    paddingHorizontal: 24
  },
  confirmButton: {
    flex: 1,
  },
  cancelButton: {
    flex: 1,
  }
});