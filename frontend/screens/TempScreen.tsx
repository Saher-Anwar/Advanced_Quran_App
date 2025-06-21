import { TouchableOpacity, Text, View } from 'react-native';

const TempScreen = () => {
  return (
    <View className="flex-row space-x-4 bg-gray-800">
      <TouchableOpacity className="flex-1 items-center rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
        <Text className="mb-2 text-2xl text-white">🕌</Text>
        <Text className="text-sm font-medium text-white">Qibla</Text>
      </TouchableOpacity>

      <TouchableOpacity className="flex-1 items-center rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
        <Text className="mb-2 text-2xl text-white">📿</Text>
        <Text className="text-sm font-medium text-white">Tasbih</Text>
      </TouchableOpacity>

      <TouchableOpacity className="flex-1 items-center rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
        <Text className="mb-2 text-2xl text-white">🤲</Text>
        <Text className="text-sm font-medium text-white">Duas</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TempScreen;
