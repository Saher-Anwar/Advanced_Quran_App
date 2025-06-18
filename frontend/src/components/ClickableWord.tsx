import { RefObject, useRef, useState } from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import { WordInfo } from "../types/Word";
import CustomPopover from "./CustomPopover";


const ClickableWord = (word: WordInfo) => {
    // display the word and make it clickable
    const [isVisible, setVisibility] = useState(false)
    const ref = useRef<View>(null)

    const handlePress = () => setVisibility(true)
    const handleClose = () => setVisibility(false)

    return (
        <View style={styles.container}>
            <TouchableOpacity 
                ref={ref}
                onPress={handlePress}
                style={styles.button}>
                <Text style={styles.buttonText}>{word.word}</Text>
            </TouchableOpacity>

            <CustomPopover 
                word={word} 
                anchorPoint={ref as RefObject<View>} 
                isVisible={isVisible}
                onClose={handleClose}/>
        </View>
    )
}

export default ClickableWord

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
});
