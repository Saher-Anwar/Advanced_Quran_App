import { View } from 'react-native';
import QuickActionsItem from './QuickActionsItem';

const QuickActionsGrid = () => {
  return (
    <View className="flex-row space-x-4">
      <QuickActionsItem title="Qibla" icon="🕌" />
      <QuickActionsItem title="Tasbih" icon="📿" />
      <QuickActionsItem title="Duas" icon="🤲" />
    </View>
  );
};

export default QuickActionsGrid;
