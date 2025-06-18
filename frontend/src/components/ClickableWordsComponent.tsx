import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Dimensions,
} from 'react-native';

interface WordInfo {
  [key: string]: {
    definition: string;
    type: string;
    example?: string;
  };
}

interface TooltipData {
  word: string;
  info: WordInfo[string];
  position: { x: number; y: number };
}

const ClickableWordsComponent: React.FC = () => {
  const [tooltip, setTooltip] = useState<TooltipData | null>(null);
  
  const sentence = "The quick brown fox jumps over the lazy dog";
  
  // Mock word information - replace with your actual data source
  const wordInfo: WordInfo = {
    'The': { definition: 'Definite article', type: 'Article' },
    'quick': { definition: 'Moving fast or doing something in a short time', type: 'Adjective' },
    'brown': { definition: 'A color between red and yellow', type: 'Adjective' },
    'fox': { definition: 'A carnivorous mammal with a pointed snout', type: 'Noun' },
    'jumps': { definition: 'To push oneself off a surface', type: 'Verb' },
    'over': { definition: 'Extending directly upward from', type: 'Preposition' },
    'the': { definition: 'Definite article', type: 'Article' },
    'lazy': { definition: 'Unwilling to work or use energy', type: 'Adjective' },
    'dog': { definition: 'A domesticated carnivorous mammal', type: 'Noun' },
  };

  const handleWordPress = (word: string, event: any) => {
    const info = wordInfo[word];
    if (info) {
      // Get touch coordinates for tooltip positioning
      event.target.measure((x: number, y: number, width: number, height: number, pageX: number, pageY: number) => {
        setTooltip({
          word,
          info,
          position: { x: pageX, y: pageY + height + 10 }
        });
      });
    }
  };

  const closeTooltip = () => {
    setTooltip(null);
  };

  const renderClickableWords = () => {
    const words = sentence.split(' ');
    
    return (
      <View style={styles.sentenceContainer}>
        {words.map((word, index) => (
          <React.Fragment key={index}>
            <TouchableOpacity
              onPress={(event) => handleWordPress(word, event)}
              style={styles.wordButton}
            >
              <Text style={styles.wordText}>{word}</Text>
            </TouchableOpacity>
            {index < words.length - 1 && <Text style={styles.space}> </Text>}
          </React.Fragment>
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tap any word to see its information:</Text>
      {renderClickableWords()}
      
      {/* Tooltip Modal */}
      <Modal
        visible={!!tooltip}
        transparent={true}
        animationType="fade"
        onRequestClose={closeTooltip}
      >
        <TouchableOpacity 
          style={styles.modalOverlay} 
          activeOpacity={1} 
          onPress={closeTooltip}
        >
          {tooltip && (
            <View 
              style={[
                styles.tooltip,
                {
                  left: Math.min(tooltip.position.x, Dimensions.get('window').width - 200),
                  top: tooltip.position.y
                }
              ]}
            >
              <Text style={styles.tooltipWord}>{tooltip.word}</Text>
              <Text style={styles.tooltipType}>{tooltip.info.type}</Text>
              <Text style={styles.tooltipDefinition}>{tooltip.info.definition}</Text>
              {tooltip.info.example && (
                <Text style={styles.tooltipExample}>Example: {tooltip.info.example}</Text>
              )}
            </View>
          )}
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  sentenceContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wordButton: {
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 4,
    backgroundColor: 'rgba(0, 123, 255, 0.1)',
    borderBottomWidth: 1,
    borderBottomColor: '#007bff',
  },
  wordText: {
    fontSize: 16,
    color: '#007bff',
    fontWeight: '500',
  },
  space: {
    fontSize: 16,
    color: '#333',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  tooltip: {
    position: 'absolute',
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    maxWidth: 200,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  tooltipWord: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  tooltipType: {
    fontSize: 12,
    color: '#666',
    fontStyle: 'italic',
    marginBottom: 6,
  },
  tooltipDefinition: {
    fontSize: 14,
    color: '#333',
    lineHeight: 18,
  },
  tooltipExample: {
    fontSize: 12,
    color: '#666',
    marginTop: 6,
    fontStyle: 'italic',
  },
});

export default ClickableWordsComponent;