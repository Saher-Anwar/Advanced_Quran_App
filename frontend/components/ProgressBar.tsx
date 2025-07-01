import { View } from 'react-native';

interface ProgressBarProps {
  progressAmount?: number;
}

const ProgressBar = ({ progressAmount = 0 }: ProgressBarProps) => {
  const clampedProgress = Math.max(0, Math.min(100, progressAmount));

  return (
    <View className="mt-3 h-2 rounded-full bg-black/10">
      <View
        className={`h-2 rounded-full bg-white/60`}
        style={{ width: `${clampedProgress}%` }}></View>
    </View>
  );
};

export default ProgressBar;
