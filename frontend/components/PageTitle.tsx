import { View, Text } from 'react-native';

interface PageTitleProps {
  title: string;
  subtitle: string | undefined;
  quote: string | undefined;
}

const PageTitle = ({ title, subtitle, quote }: PageTitleProps) => {
  return (
    <View className="px-6 pb-8 pt-16">
      <Text className="mb-2 text-center text-4xl font-bold text-white">{title}</Text>
      {subtitle && <Text className="text-center text-lg font-light text-white/80">{subtitle}</Text>}
      {quote && <Text className="mt-2 text-center text-sm text-white/60">{quote}</Text>}
    </View>
  );
};

export default PageTitle;

// الكريم القرآن
// The Holy Quran
// "And We have made the Quran easy for remembrance"
