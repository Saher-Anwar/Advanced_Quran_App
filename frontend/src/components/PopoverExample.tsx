import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Popover, { PopoverPlacement } from 'react-native-popover-view';

const PopoverExample = () => {
  const [isVisible, setIsVisible] = useState(false);
  const buttonRef = useRef<View>(null); // ✅ Use View instead of TouchableOpacity

  return (
    <View style={styles.container}>
      <TouchableOpacity
        ref={buttonRef}
        style={styles.button}
        onPress={() => setIsVisible(true)}
      >
        <Text style={styles.buttonText}>Show Popover</Text>
      </TouchableOpacity>

      <Popover
        isVisible={isVisible}
        from={buttonRef}
        onRequestClose={() => setIsVisible(false)}
        placement={PopoverPlacement.BOTTOM}>
        <View style={styles.popoverContent}>
          <Text>This is a popover!</Text>
          <TouchableOpacity onPress={() => setIsVisible(false)}>
            <Text style={styles.closeText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Popover>
    </View>
  );
};

export default PopoverExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 12,
    backgroundColor: '#007AFF',
    borderRadius: 6,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  popoverContent: {
    padding: 16,
  },
  closeText: {
    marginTop: 8,
    color: '#007AFF',
    textAlign: 'center',
  },
});
