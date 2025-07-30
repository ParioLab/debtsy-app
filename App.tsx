import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import Header from './src/components/Header';
import HomeScreen from './src/components/HomeScreen';
import BottomNavigation from './src/components/BottomNavigation';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  const handleTabPress = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <HomeScreen />
      <BottomNavigation activeTab={activeTab} onTabPress={handleTabPress} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
