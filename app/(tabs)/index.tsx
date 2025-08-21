import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
// We are only importing Feather now, which we know exists.
import { Feather } from '@expo/vector-icons'; 

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="flex-1 justify-between p-6">

        {/* --- Header --- */}
        <View className="items-center">
          <Text className="text-2xl font-bold text-primary">
            Mission Hub
          </Text>
          <Text className="text-base text-text-muted">
            The Lab for Your Life
          </Text>
        </View>

        {/* --- Central "Mission" Card --- */}
        <View className="bg-card border border-border p-8 rounded-3xl shadow-lg shadow-primary/50">
          
          <View className="flex-row items-center">
            {/* This is the corrected icon section */}
            <View className="p-3 bg-primary/20 rounded-full">
              <Feather name="activity" size={24} color="#9370DB" />
            </View>
            <Text className="text-xl font-semibold text-text ml-4">
              Your First Mission
            </Text>
          </View>

          <Text className="text-3xl font-bold text-white mt-6">
            The 7-Day Energy Boost
          </Text>
          
          <Text className="text-base text-text-muted mt-2">
            Run a simple experiment to find out what truly boosts your afternoon energy.
          </Text>
        </View>

        {/* --- CTA Button --- */}
        <TouchableOpacity className="bg-primary w-full p-5 rounded-full active:scale-95">
          <Text className="text-center text-lg font-bold text-white">
            Begin Mission
          </Text>
        </TouchableOpacity>

      </View>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}