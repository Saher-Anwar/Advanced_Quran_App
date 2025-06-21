import { Button, View, Text, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '../hooks/useNavigation';
import { LinearGradient } from 'expo-linear-gradient';
import PageTitle from 'components/PageTitle';
import PrayerTimesCard from 'components/PrayerTimesCard';
import prayerTimeInfo from 'mock_data/prayer_time_info';
import CustomListItem from 'components/CustomListItem';
import ProgressBar from 'components/ProgressBar';

const HomeScreen = () => {
  const navigation = useNavigation();

  const navigateToChapterList = () => {
    navigation.navigate('ChapterList');
  };

  return (
    <View className="flex-1">
      {/* Background with Islamic geometric pattern */}
      <LinearGradient
        colors={['#1F1F1F', '#0D0D0D']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        className="flex-1">
        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          {/* Header Section */}
          <PageTitle
            title={'الكريم القرآن'}
            subtitle={'The Holy Quran'}
            quote={'\"And We have made the Quran easy for remembrance\"'}
          />

          {/* Prayer Times Card */}
          <PrayerTimesCard
            cardTitle={prayerTimeInfo.cardTitle}
            fajr={prayerTimeInfo.fajr}
            sunrise={prayerTimeInfo.sunrise}
            dhuhr={prayerTimeInfo.dhuhr}
            asr={prayerTimeInfo.asr}
            maghreb={prayerTimeInfo.maghreb}
            isha={prayerTimeInfo.isha}
          />

          {/* Main Action Cards */}
          <View className="space-y-4 px-6">
            {/* Read Quran Card */}
            <CustomListItem title={"Read the Qur'an"} icon={'📖'} onPress={navigateToChapterList} />

            {/* Last Read Card */}
            <View className="rounded-2xl border border-white/20 bg-white/15 p-6 backdrop-blur-sm">
              <View className="mb-3 flex-row items-center">
                <View className="mr-3 rounded-full bg-white/20 p-2">
                  <Text className="text-lg text-white">📑</Text>
                </View>
                <Text className="text-lg font-semibold text-white">Last Read</Text>
              </View>
              <Text className="mb-2 text-base text-white/80">Surah Al-Fatiha</Text>
              <Text className="text-sm text-white/60">The Opening • Verse 7</Text>
              <ProgressBar progressAmount={33} />
            </View>

            {/* Quick Actions Grid */}
            <View className="flex-row space-x-4">
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

            {/* Settings Card */}
            <TouchableOpacity className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
              <View className="flex-row items-center justify-between">
                <View className="flex-row items-center">
                  <View className="mr-3 rounded-full bg-white/20 p-2">
                    <Text className="text-lg text-white">⚙️</Text>
                  </View>
                  <Text className="text-lg font-medium text-white">Settings</Text>
                </View>
                <Text className="text-white/60">›</Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* Bottom Quote */}
          <View className="mt-4 px-6 py-8">
            <View className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <Text className="mb-2 text-center text-base italic text-white/80">
                "وَنُنَزِّلُ مِنَ الْقُرْآنِ مَا هُوَ شِفَاءٌ وَرَحْمَةٌ لِّلْمُؤْمِنِينَ"
              </Text>
              <Text className="text-center text-sm text-white/60">
                "And We send down of the Quran that which is healing and mercy for the believers"
              </Text>
              <Text className="mt-2 text-center text-xs text-white/40">Surah Al-Isra 17:82</Text>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
};

export default HomeScreen;
