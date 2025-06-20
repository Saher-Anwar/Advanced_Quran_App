import Popover, { PopoverPlacement } from "react-native-popover-view";
import {
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import { SharedPopoverProps } from "../types/SharedPopover";
import { RefObject } from "react";

const SharedPopover = ({
  word,
  anchorRef,
  isVisible,
  onClose,
}: SharedPopoverProps) => {
  if (!word || !anchorRef) return null;

  return (
    <Popover
      isVisible={isVisible}
      from={anchorRef as RefObject<View>}
      onRequestClose={onClose}
      placement={PopoverPlacement.BOTTOM}
      displayArea={{ x: 10, y: 50, width: 350, height: 600 }}
    >
      <View style={styles.popoverContent}>
        <Text style={styles.popoverTitle}>{word.word}</Text>
        <Text style={styles.popoverDefinition}>{word.definition}</Text>
        <Text style={styles.popoverType}>Type: {word.type}</Text>
        {word.example && (
          <Text style={styles.popoverExample}>Example: {word.example}</Text>
        )}
        <TouchableHighlight onPress={onClose} style={styles.closeButton}>
          <Text style={styles.closeButtonText}>Close</Text>
        </TouchableHighlight>
      </View>
    </Popover>
  );
};

export default SharedPopover;

const styles = StyleSheet.create({
  popoverContent: {
    padding: 16,
    maxWidth: 280,
    backgroundColor: "white",
    direction: "ltr",
  },
  popoverTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
    textAlign: "left",
  },
  popoverDefinition: {
    fontSize: 14,
    marginBottom: 8,
    lineHeight: 20,
    color: "#666",
    textAlign: "left",
  },
  popoverType: {
    fontSize: 12,
    fontStyle: "italic",
    color: "#888",
    marginBottom: 4,
    textAlign: "left",
  },
  popoverExample: {
    fontSize: 12,
    color: "#888",
    marginBottom: 12,
    fontStyle: "italic",
    textAlign: "left",
  },
  closeButton: {
    backgroundColor: "#FF3B30",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    alignSelf: "flex-end",
  },
  closeButtonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "500",
  },
});
