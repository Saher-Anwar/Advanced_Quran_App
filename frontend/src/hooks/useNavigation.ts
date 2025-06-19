import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation as useRNNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/navigation";

export type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export const useNavigation = () => useRNNavigation<NavigationProp>();