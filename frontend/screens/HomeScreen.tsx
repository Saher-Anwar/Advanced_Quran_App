import { Button, View, Text, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '../hooks/useNavigation';
import { LinearGradient } from 'expo-linear-gradient';

const HomeScreen = () => {
  const navigation = useNavigation();

  const navigateToChapterList = () => {
    navigation.navigate('ChapterList');
  };

  return (
    <View className="flex-1">
      {/* Background with Islamic geometric pattern */}
      <LinearGradient
        colors={['#DC2626', '#7F1D1D', '#FFD700']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        className="flex-1">
        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          {/* Header Section */}
          <View className="px-6 pb-8 pt-16">
            <Text className="mb-2 text-center text-4xl font-bold text-white">القرآن الكريم</Text>
            <Text className="text-center text-lg font-light text-white/80">The Holy Quran</Text>
            <Text className="mt-2 text-center text-sm text-white/60">
              "And We have made the Quran easy for remembrance"
            </Text>
          </View>

          {/* Prayer Times Card */}
          <View className="mx-6 mb-6 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
            <Text className="mb-3 text-lg font-semibold text-white">Today's Prayer Times</Text>
            <View className="flex-row justify-between">
              <View className="items-center">
                <Text className="text-xs text-white/80">Fajr</Text>
                <Text className="font-bold text-white">5:30</Text>
              </View>
              <View className="items-center">
                <Text className="text-xs text-white/80">Dhuhr</Text>
                <Text className="font-bold text-white">12:45</Text>
              </View>
              <View className="items-center">
                <Text className="text-xs text-white/80">Asr</Text>
                <Text className="font-bold text-white">4:20</Text>
              </View>
              <View className="items-center">
                <Text className="text-xs text-white/80">Maghrib</Text>
                <Text className="font-bold text-white">7:15</Text>
              </View>
              <View className="items-center">
                <Text className="text-xs text-white/80">Isha</Text>
                <Text className="font-bold text-white">8:45</Text>
              </View>
            </View>
          </View>

          {/* Main Action Cards */}
          <View className="space-y-4 px-6">
            {/* Read Quran Card */}
            <TouchableOpacity
              onPress={navigateToChapterList}
              className="rounded-2xl border border-white/20 bg-white/15 p-6 backdrop-blur-sm active:bg-white/20">
              <View className="flex-row items-center">
                <View className="mr-4 rounded-full bg-white/20 p-3">
                  <Text className="text-2xl text-white">📖</Text>
                </View>
                <View className="flex-1">
                  <Text className="text-xl font-bold text-white">Read Quran</Text>
                  <Text className="text-sm text-white/70">Continue your recitation</Text>
                </View>
                <Text className="text-white/60">›</Text>
              </View>
            </TouchableOpacity>

            {/* Last Read Card */}
            <View className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
              <View className="mb-3 flex-row items-center">
                <View className="mr-3 rounded-full bg-white/20 p-2">
                  <Text className="text-lg text-white">📑</Text>
                </View>
                <Text className="text-lg font-semibold text-white">Last Read</Text>
              </View>
              <Text className="mb-2 text-base text-white/80">Surah Al-Fatiha</Text>
              <Text className="text-sm text-white/60">The Opening • Verse 7</Text>
              <View className="mt-3 h-2 rounded-full bg-white/10">
                <View className="h-2 w-1/4 rounded-full bg-white/60"></View>
              </View>
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
