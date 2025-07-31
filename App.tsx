import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import Header from './src/components/Header';
import HomeScreen from './src/components/HomeScreen';
import ActivityScreen from './src/components/ActivityScreen';
import DebtScreen from './src/components/DebtScreen';
import SettingsScreen from './src/components/SettingsScreen';
import PaymentSuccessScreen from './src/components/PaymentSuccessScreen';
import PaymentCancelledScreen from './src/components/PaymentCancelledScreen';
import CancelledTransactionsScreen from './src/components/CancelledTransactionsScreen';
import BottomNavigation from './src/components/BottomNavigation';

interface ActivityItem {
  id: string;
  debtName: string;
  balance: string;
  amount: string;
  date: string;
  status: 'success' | 'cancelled';
}

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [showPaymentSuccess, setShowPaymentSuccess] = useState(false);
  const [showPaymentCancelled, setShowPaymentCancelled] = useState(false);
  const [showCancelledTransactions, setShowCancelledTransactions] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState<ActivityItem | null>(null);

  const handleTabPress = (tabId: string) => {
    setActiveTab(tabId);
    setShowPaymentSuccess(false);
    setShowPaymentCancelled(false);
    setShowCancelledTransactions(false);
  };

  const handleActivityItemPress = (item: ActivityItem) => {
    setSelectedPayment(item);
    if (item.status === 'cancelled') {
      setShowPaymentCancelled(true);
    } else {
      setShowPaymentSuccess(true);
    }
  };

  const handleClosePaymentSuccess = () => {
    setShowPaymentSuccess(false);
    setSelectedPayment(null);
  };

  const handleClosePaymentCancelled = () => {
    setShowPaymentCancelled(false);
    setSelectedPayment(null);
  };

  const handleCancelledPress = () => {
    setShowCancelledTransactions(true);
  };

  const handleBackFromCancelled = () => {
    setShowCancelledTransactions(false);
  };

  const getScreenTitle = () => {
    if (showPaymentSuccess) return 'Payment Successful';
    if (showPaymentCancelled) return 'Payment Cancelled';
    if (showCancelledTransactions) return 'Cancelled Transactions';
    
    switch (activeTab) {
      case 'home':
        return 'Home';
      case 'debt':
        return 'Debt';
      case 'activity':
        return 'Activity';
      case 'settings':
        return 'Settings';
      default:
        return 'Home';
    }
  };

  const renderScreen = () => {
    if (showPaymentSuccess && selectedPayment) {
      return (
        <PaymentSuccessScreen
          onClose={handleClosePaymentSuccess}
          paymentData={{
            amount: selectedPayment.amount.replace(' CAD', ''),
            reference: 'SKD5673P',
            date: 'Friday, March 30, 2025',
            timeLeft: '2 Yrs 7 Mon',
            debt: selectedPayment.debtName,
            balance: selectedPayment.balance.replace('Bal. ', ''),
          }}
        />
      );
    }

    if (showPaymentCancelled && selectedPayment) {
      return (
        <PaymentCancelledScreen
          onClose={handleClosePaymentCancelled}
          paymentData={{
            amount: selectedPayment.amount.replace(' CAD', ''),
            reference: 'SKD5673P',
            date: 'Friday, February 11, 2025',
            timeLeft: '2 Yrs 7 Mon',
            debt: selectedPayment.debtName,
            balance: selectedPayment.balance.replace('Bal. ', ''),
          }}
        />
      );
    }

    if (showCancelledTransactions) {
      return (
        <CancelledTransactionsScreen
          onItemPress={handleActivityItemPress}
          onBack={handleBackFromCancelled}
        />
      );
    }

    switch (activeTab) {
      case 'home':
        return <HomeScreen />;
      case 'activity':
        return <ActivityScreen 
          onItemPress={handleActivityItemPress} 
          onCancelledPress={handleCancelledPress}
        />;
      case 'debt':
        return <DebtScreen />;
      case 'settings':
        return <SettingsScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {!showPaymentSuccess && !showPaymentCancelled && !showCancelledTransactions && <Header title={getScreenTitle()} />}
      {renderScreen()}
      {!showPaymentSuccess && !showPaymentCancelled && !showCancelledTransactions && <BottomNavigation activeTab={activeTab} onTabPress={handleTabPress} />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
