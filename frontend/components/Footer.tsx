import { View, Text } from 'react-native';

interface FooterProps {
  quote: string;
  translation: string;
  reference: string;
}

const Footer = ({ quote, translation, reference }: FooterProps) => {
  return (
    <View className="mt-4 px-6 py-8">
      <View className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <Text className="mb-2 text-center text-base italic text-white/80">&quot;{quote}&quot;</Text>
        <Text className="text-center text-sm text-white/60">&quot;{translation}&quot;</Text>
        <Text className="mt-2 text-center text-xs text-white/40">{reference}</Text>
      </View>
    </View>
  );
};

export default Footer;
