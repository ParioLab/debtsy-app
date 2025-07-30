import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface DebtActivity {
  id: string;
  title: string;
  balance: string;
  amount: string;
}

interface RepaymentStrategy {
  id: string;
  title: string;
  description: string;
  color: string;
}

const HomeScreen: React.FC = () => {
  const recentActivities: DebtActivity[] = [
    {
      id: '1',
      title: 'OSAP Student Loan Repayment',
      balance: 'Bal. $28,825.18',
      amount: '$45.09 CAD',
    },
    {
      id: '2',
      title: 'Fairstone Loan',
      balance: 'Bal. $15,593.00',
      amount: '$157.24 CAD',
    },
    {
      id: '3',
      title: 'RBC Line of Credit Repayment',
      balance: 'Bal. $28,870.27',
      amount: '$84.64 CAD',
    },
    {
      id: '4',
      title: 'Mortgage Repayment',
      balance: 'Bal. $28,954.91',
      amount: '$54.15 CAD',
    },
  ];

  const repaymentStrategies: RepaymentStrategy[] = [
    {
      id: '1',
      title: 'Avalanche',
      description: 'The avalanche repayment strategy is a debt payoff strategy that prioritizes paying off debts with the highest interest rates first, aiming to minimize overall interest paid and potentially save money in the long run',
      color: '#D9D9D9',
    },
    {
      id: '2',
      title: 'Snowball',
      description: 'The snowball debt method is a debt payoff strategy that prioritizes paying off debts with the highest interest rates first, aiming to minimize overall interest paid and potentially save money in the long run',
      color: '#D9D9D9',
    },
    {
      id: '3',
      title: 'Flexible',
      description: 'The flexible debt repayment method is a debt payoff strategy that prioritizes paying off debts with the highest interest rates first, aiming to minimize overall interest paid and potentially save money in the long run',
      color: '#D9D9D9',
    },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image
            source={require('../../assets/light-mode-icon.png')}
            style={styles.headerIcon}
          />
          <Text style={styles.greeting}>Good morning, Andrea</Text>
        </View>
      </View>

      {/* Debt-free Counter Card */}
      <View style={styles.counterCard}>
        <View style={styles.counterLeft}>
          <View style={styles.alarmContainer}>
            <Image
              source={require('../../assets/alarm-icon.png')}
              style={styles.alarmIcon}
            />
          </View>
          <View style={styles.counterContent}>
            <Text style={styles.counterTitle}>Debt-free countdown</Text>
            <View style={styles.counterValues}>
              <Text style={styles.counterValue}>4 Yrs</Text>
              <View style={styles.counterDivider} />
              <Text style={styles.counterValue}>6 Mon</Text>
              <View style={styles.counterDivider} />
              <Text style={styles.counterValue}>17 Days</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.closeButton}>
          <Image
            source={require('../../assets/close-icon.png')}
            style={styles.closeIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Progress Chart and Debt Summary */}
      <View style={styles.progressCard}>
        <View style={styles.progressLeft}>
          <Text style={styles.progressTitle}>Debt progress chart</Text>
          <View style={styles.chartContainer}>
            <View style={styles.progressCircle}>
              <View style={styles.progressRing}>
                <View style={styles.progressBackground} />
                <View style={styles.progressQuarter} />
              </View>
              <View style={styles.progressText}>
                <Text style={styles.progressPercentage}>25%</Text>
                <Text style={styles.progressLabel}>Completed</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.debtSummary}>
          <View style={styles.summaryItem}>
            <Text style={styles.summaryLabel}>Total debt</Text>
            <Text style={styles.summaryValue}>$100,000</Text>
          </View>
          <View style={styles.summaryItem}>
            <Text style={styles.summaryLabel}>Amt. Paid</Text>
            <Text style={styles.summaryValue}>$25,000</Text>
          </View>
          <View style={styles.summaryItem}>
            <Text style={styles.summaryLabel}>Balance</Text>
            <Text style={styles.summaryValue}>$75,000</Text>
          </View>
        </View>
      </View>

      {/* Recent Activity */}
      <View style={styles.activitySection}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recent activity</Text>
          <TouchableOpacity>
            <Text style={styles.viewAllText}>View all</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.activityList}>
          {recentActivities.map((activity, index) => (
            <View key={activity.id}>
              <View style={styles.activityItem}>
                <View style={styles.activityLeft}>
                  <View style={styles.activityIcon}>
                    <Image
                      source={require('../../assets/history-icon.png')}
                      style={styles.historyIcon}
                    />
                  </View>
                  <View style={styles.activityInfo}>
                    <Text style={styles.activityTitle}>{activity.title}</Text>
                    <Text style={styles.activityBalance}>{activity.balance}</Text>
                  </View>
                </View>
                <Text style={styles.activityAmount}>{activity.amount}</Text>
              </View>
              {index < recentActivities.length - 1 && (
                <View style={styles.activityDivider} />
              )}
            </View>
          ))}
        </View>
      </View>

      {/* Repayment Strategies */}
      <View style={styles.strategiesSection}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Repayment strategies for you</Text>
          <TouchableOpacity>
            <Text style={styles.viewAllText}>View all</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.strategiesList}>
          {repaymentStrategies.map((strategy) => (
            <View key={strategy.id} style={styles.strategyCard}>
              <View style={[styles.strategyImage, { backgroundColor: strategy.color }]} />
              <View style={styles.strategyContent}>
                <Text style={styles.strategyTitle}>{strategy.title}</Text>
                <Text style={styles.strategyDescription}>{strategy.description}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 16,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  headerIcon: {
    width: 24,
    height: 24,
  },
  greeting: {
    fontSize: 16,
    fontWeight: '500',
    color: '#111111',
    fontFamily: 'System',
    lineHeight: 30,
  },
  counterCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F7F7F7',
    borderWidth: 1,
    borderColor: '#F3F3F3',
    borderRadius: 8,
    padding: 16,
    marginHorizontal: 24,
    marginBottom: 32,
  },
  counterLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    flex: 1,
  },
  alarmContainer: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(236, 178, 5, 0.1)',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  alarmIcon: {
    width: 28,
    height: 26,
  },
  counterContent: {
    gap: 12,
  },
  counterTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#111111',
    fontFamily: 'System',
    lineHeight: 30,
  },
  counterValues: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  counterValue: {
    fontSize: 14,
    fontWeight: '400',
    color: '#666666',
    fontFamily: 'System',
    lineHeight: 27,
  },
  counterDivider: {
    width: 1,
    height: 16,
    backgroundColor: '#666666',
  },
  closeButton: {
    width: 32,
    height: 32,
    backgroundColor: '#FFFFFF',
    borderRadius: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeIcon: {
    width: 16,
    height: 16,
  },
  progressCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F7F7F7',
    borderRadius: 8,
    padding: 16,
    marginHorizontal: 24,
    marginBottom: 32,
  },
  progressLeft: {
    gap: 16,
  },
  progressTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#111111',
    fontFamily: 'System',
    lineHeight: 30,
  },
  chartContainer: {
    alignItems: 'center',
  },
  progressCircle: {
    width: 160,
    height: 160,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  progressRing: {
    width: 160,
    height: 160,
    borderRadius: 80,
    borderWidth: 8,
    borderColor: '#EBEBEB',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  progressBackground: {
    position: 'absolute',
    width: 160,
    height: 160,
    borderRadius: 80,
    borderWidth: 8,
    borderColor: '#EBEBEB',
    backgroundColor: 'transparent',
  },
  progressQuarter: {
    position: 'absolute',
    width: 160,
    height: 160,
    borderRadius: 80,
    borderWidth: 8,
    borderColor: 'transparent',
    borderTopColor: '#FF893B',
    borderRightColor: '#FF893B',
    transform: [{ rotate: '-90deg' }],
  },
  progressText: {
    position: 'absolute',
    alignItems: 'center',
    gap: 4,
  },
  progressPercentage: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111111',
    fontFamily: 'System',
    lineHeight: 24,
  },
  progressLabel: {
    fontSize: 12,
    fontWeight: '400',
    color: '#666666',
    fontFamily: 'System',
    lineHeight: 16,
  },
  debtSummary: {
    justifyContent: 'center',
    gap: 8,
  },
  summaryItem: {
    alignItems: 'flex-end',
    gap: 0,
  },
  summaryLabel: {
    fontSize: 14,
    fontWeight: '400',
    color: '#666666',
    fontFamily: 'System',
    lineHeight: 27,
  },
  summaryValue: {
    fontSize: 15,
    fontWeight: '500',
    color: '#111111',
    fontFamily: 'System',
    lineHeight: 29,
  },
  activitySection: {
    marginHorizontal: 24,
    marginBottom: 32,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#111111',
    fontFamily: 'System',
    lineHeight: 30,
  },
  viewAllText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#A43E90',
    fontFamily: 'System',
    lineHeight: 30,
  },
  activityList: {
    paddingVertical: 16,
  },
  activityItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
  },
  activityLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  activityIcon: {
    width: 40,
    height: 40,
    backgroundColor: '#F7F7F7',
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  historyIcon: {
    width: 20,
    height: 20,
  },
  activityInfo: {
    gap: 16,
  },
  activityTitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#111111',
    fontFamily: 'System',
    lineHeight: 29,
  },
  activityBalance: {
    fontSize: 14,
    fontWeight: '400',
    color: '#666666',
    fontFamily: 'System',
    lineHeight: 27,
  },
  activityAmount: {
    fontSize: 15,
    fontWeight: '500',
    color: '#111111',
    fontFamily: 'System',
    lineHeight: 29,
  },
  activityDivider: {
    height: 1,
    backgroundColor: '#F3F3F3',
    marginHorizontal: 0,
  },
  strategiesSection: {
    marginHorizontal: 24,
    marginBottom: 32,
  },
  strategiesList: {
    gap: 16,
  },
  strategyCard: {
    width: 220,
    gap: 16,
  },
  strategyImage: {
    width: 220,
    height: 162,
    borderRadius: 8,
  },
  strategyContent: {
    gap: 12,
  },
  strategyTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#111111',
    fontFamily: 'System',
    lineHeight: 30,
  },
  strategyDescription: {
    fontSize: 14,
    fontWeight: '400',
    color: '#666666',
    fontFamily: 'System',
    lineHeight: 22,
  },
});

export default HomeScreen; 