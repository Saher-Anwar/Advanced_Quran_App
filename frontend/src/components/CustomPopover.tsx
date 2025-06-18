import Popover, {PopoverPlacement} from "react-native-popover-view";
import { WordInfo } from "../types/Word";
import { useState, useRef } from "react";
import { PopoverData } from "../types/Popover";
import { Text, TouchableHighlight, StyleSheet, View } from "react-native";

const CustomPopover = ({word, anchorPoint, isVisible, onClose}:PopoverData) => {  
    return (
        <Popover
          isVisible={isVisible}
          from={anchorPoint}
          onRequestClose={onClose}
          placement={PopoverPlacement.BOTTOM}>
        
          <View style={styles.popoverContent}>
            <Text style={styles.popoverTitle}>{word.word}</Text>
            <TouchableHighlight onPress={onClose} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableHighlight>
          </View>
        </Popover>
    )
}

export default CustomPopover

const styles = StyleSheet.create({
  popoverContent: {
    padding: 16,
    maxWidth: 300,
  },
  popoverTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  popoverDefinition: {
    fontSize: 14,
    marginBottom: 8,
    lineHeight: 20,
  },
  popoverType: {
    fontSize: 12,
    fontStyle: 'italic',
    color: '#666',
    marginBottom: 4,
  },
  popoverExample: {
    fontSize: 12,
    color: '#666',
    marginBottom: 12,
  },
  closeButton: {
    backgroundColor: '#FF3B30',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    alignSelf: 'flex-end',
  },
  closeButtonText: {
    color: 'white',
    fontSize: 14,
  },
})