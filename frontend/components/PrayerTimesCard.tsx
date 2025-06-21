import { View, Text } from 'react-native';
import { PrayerNames } from 'utils/constants';

export interface PrayerTimesProps {
  cardTitle: string;
  fajr: string;
  sunrise: string;
  dhuhr: string;
  asr: string;
  maghreb: string;
  isha: string;
}

const PrayerTimesCard = ({
  cardTitle,
  fajr,
  sunrise,
  dhuhr,
  asr,
  maghreb,
  isha,
}: PrayerTimesProps) => {
  return (
    <View className="mx-6 mb-6 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
      <Text className="mb-3 text-lg font-semibold text-white">{cardTitle}</Text>
      <View className="flex-row justify-between">
        <View className="items-center">
          <Text className="text-xs text-white/80">{PrayerNames.FAJR}</Text>
          <Text className="font-bold text-white">{fajr}</Text>
        </View>
        <View className="items-center">
          <Text className="text-xs text-white/80">{PrayerNames.SUNRISE}</Text>
          <Text className="font-bold text-white">{sunrise}</Text>
        </View>
        <View className="items-center">
          <Text className="text-xs text-white/80">{PrayerNames.DHUHR}</Text>
          <Text className="font-bold text-white">{dhuhr}</Text>
        </View>
        <View className="items-center">
          <Text className="text-xs text-white/80">{PrayerNames.ASR}</Text>
          <Text className="font-bold text-white">{asr}</Text>
        </View>
        <View className="items-center">
          <Text className="text-xs text-white/80">{PrayerNames.MAGHRIB}</Text>
          <Text className="font-bold text-white">{maghreb}</Text>
        </View>
        <View className="items-center">
          <Text className="text-xs text-white/80">{PrayerNames.ISHA}</Text>
          <Text className="font-bold text-white">{isha}</Text>
        </View>
      </View>
    </View>
  );
};

export default PrayerTimesCard;
