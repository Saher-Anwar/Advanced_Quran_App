import { TouchableOpacity, View, Text } from 'react-native';

interface CustomListItemProps {
  title: string;
  subtitle?: string;
  icon: string;
  onPress: () => void;
  verticalSize?: number;
}

const CustomListItem = ({ title, subtitle, icon, onPress, verticalSize }: CustomListItemProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`rounded-2xl border border-white/20 bg-white/15 p-${verticalSize || 4} backdrop-blur-sm active:bg-white/20`}>
      <View className="flex-row items-center">
        <View className="mr-4 rounded-full bg-white/20 p-3">
          <Text className="text-2xl text-white">{icon}</Text>
        </View>
        <View className="flex-1">
          <Text className="text-xl font-bold text-white">{title}</Text>
          {subtitle && <Text className="text-sm text-white/70">{subtitle}</Text>}
        </View>
        <Text className="text-white/60">›</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomListItem;
