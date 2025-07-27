import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Debtsy</Text>
        <Text style={styles.subtitle}>Your Personal Debt Manager</Text>
        <Text style={styles.description}>
          Take control of your finances with personalized debt management and repayment plans.
        </Text>
        <View style={styles.featureList}>
          <Text style={styles.feature}>📊 Track all your debts in one place</Text>
          <Text style={styles.feature}>📈 Create personalized repayment plans</Text>
          <Text style={styles.feature}>🎯 Set and achieve financial goals</Text>
          <Text style={styles.feature}>🔔 Get payment reminders</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: '#7f8c8d',
    marginBottom: 24,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#34495e',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 32,
  },
  featureList: {
    width: '100%',
    maxWidth: 300,
  },
  feature: {
    fontSize: 16,
    color: '#2c3e50',
    marginBottom: 12,
    paddingLeft: 8,
  },
});
