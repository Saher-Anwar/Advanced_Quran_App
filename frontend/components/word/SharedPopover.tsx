import Popover, { PopoverPlacement } from 'react-native-popover-view';
import { StyleSheet, TouchableHighlight, View, Text, TouchableOpacity } from 'react-native';
import { SharedPopoverProps } from '../../types/SharedPopover';
import { RefObject } from 'react';
import { Button, Card, Divider } from 'react-native-paper';
import { BookOpen, FileText, Type, X } from 'lucide-react-native';

const SharedPopover = ({ word, anchorRef, isVisible, onClose }: SharedPopoverProps) => {
  if (!word || !anchorRef) return null;

  return (
    <Popover
      isVisible={isVisible}
      from={anchorRef as RefObject<View>}
      onRequestClose={onClose}
      placement={PopoverPlacement.BOTTOM}
      displayArea={{ x: 10, y: 50, width: 350, height: 600 }}
      popoverStyle={{
        borderRadius: 16,
        elevation: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 12,
      }}>
      <Card className="max-w-[280px] bg-white">
        <Card.Content className="p-0">
          {/* Header with close button */}
          <View className="flex-row items-start justify-between p-4 pb-2">
            <View className="flex-1 pr-2">
              <Text className="text-left text-xl font-bold text-gray-800">{word.word}</Text>
            </View>
            <TouchableOpacity
              onPress={onClose}
              className="rounded-full bg-gray-100 p-1 active:bg-gray-200">
              <X size={18} color="#6B7280" />
            </TouchableOpacity>
          </View>

          <Divider className="mx-4 mb-3" />

          {/* Definition */}
          <View className="mb-3 px-4">
            <View className="mb-2 flex-row items-start">
              <BookOpen size={16} color="#4F46E5" className="mr-2 mt-0.5" />
              <Text className="text-sm font-medium uppercase tracking-wide text-indigo-600">
                Definition
              </Text>
            </View>
            <Text className="text-left text-base leading-6 text-gray-700">{word.definition}</Text>
          </View>

          {/* Type */}
          <View className="mb-3 px-4">
            <View className="mb-1 flex-row items-center">
              <Type size={14} color="#059669" className="mr-2" />
              <Text className="text-xs font-medium uppercase tracking-wide text-emerald-600">
                Type
              </Text>
            </View>
            <View className="self-start rounded-full bg-emerald-50 px-3 py-1">
              <Text className="text-sm font-medium text-emerald-700">{word.type}</Text>
            </View>
          </View>

          {/* Example (if exists) */}
          {word.example && (
            <View className="mb-4 px-4">
              <View className="mb-2 flex-row items-start">
                <FileText size={14} color="#DC2626" className="mr-2 mt-0.5" />
                <Text className="text-xs font-medium uppercase tracking-wide text-red-600">
                  Example
                </Text>
              </View>
              <View className="rounded-lg border-l-4 border-red-200 bg-red-50 p-3">
                <Text className="text-left text-sm italic leading-5 text-red-800">
                  &quot;{word.example}&quot;
                </Text>
              </View>
            </View>
          )}

          {/* Close button */}
          <View className="px-4 pb-4">
            <Button
              mode="contained"
              onPress={onClose}
              className="bg-indigo-600"
              labelStyle={{ color: 'white', fontWeight: '600' }}
              contentStyle={{ paddingVertical: 4 }}>
              Got it
            </Button>
          </View>
        </Card.Content>
      </Card>
    </Popover>
  );
};

export default SharedPopover;

const styles = StyleSheet.create({
  popoverContent: {
    padding: 16,
    maxWidth: 280,
    backgroundColor: 'white',
    direction: 'ltr',
  },
  popoverTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
    textAlign: 'left',
  },
  popoverDefinition: {
    fontSize: 14,
    marginBottom: 8,
    lineHeight: 20,
    color: '#666',
    textAlign: 'left',
  },
  popoverType: {
    fontSize: 12,
    fontStyle: 'italic',
    color: '#888',
    marginBottom: 4,
    textAlign: 'left',
  },
  popoverExample: {
    fontSize: 12,
    color: '#888',
    marginBottom: 12,
    fontStyle: 'italic',
    textAlign: 'left',
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
    fontWeight: '500',
  },
});
