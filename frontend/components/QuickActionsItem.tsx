import { TouchableOpacity, Text } from 'react-native';

interface QuickActionsItemProp {
  title: string;
  icon: string;
}

const QuickActionsItem = ({ title, icon }: QuickActionsItemProp) => {
  return (
    <TouchableOpacity className="flex-1 items-center rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
      <Text className="mb-2 text-2xl text-white">{icon}</Text>
      <Text className="text-sm font-medium text-white">{title}</Text>
    </TouchableOpacity>
  );
};

export default QuickActionsItem;
