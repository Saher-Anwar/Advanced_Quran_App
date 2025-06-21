import { View, ScrollView } from 'react-native';
import { useNavigation } from '../hooks/useNavigation';
import { LinearGradient } from 'expo-linear-gradient';
import PageTitle from 'components/PageTitle';
import PrayerTimesCard from 'components/PrayerTimesCard';
import prayerTimeInfo from 'mock_data/prayer_time_info';
import CustomListItem from 'components/CustomListItem';
import Footer from 'components/Footer';

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
            {/* Settings Card */}
            <CustomListItem title={'Settings'} icon="⚙️" onPress={() => {}} />
          </View>

          {/* Bottom Quote */}
          <Footer
            quote={'وَنُنَزِّلُ مِنَ الْقُرْآنِ مَا هُوَ شِفَاءٌ وَرَحْمَةٌ لِّلْمُؤْمِنِين'}
            translation={
              'And We send down of the Quran that which is healing and mercy for the believers'
            }
            reference={'Surah Al-Isra 17:82'}
          />
        </ScrollView>
      </LinearGradient>
    </View>
  );
};

export default HomeScreen;
