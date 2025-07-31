import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';

interface ActivityItem {
  id: string;
  debtName: string;
  balance: string;
  amount: string;
  date: string;
  status: 'success' | 'cancelled';
}

interface CancelledTransactionsScreenProps {
  onItemPress?: (item: ActivityItem) => void;
  onBack: () => void;
}

const CancelledTransactionsScreen: React.FC<CancelledTransactionsScreenProps> = ({ 
  onItemPress,
  onBack 
}) => {
  // Mock data for cancelled transactions
  const cancelledData: ActivityItem[] = [
    {
      id: '1',
      debtName: 'Fairstone Credit Card',
      balance: 'Bal. $28,825.18',
      amount: '$27.15 CAD',
      date: 'February 11, 2025',
      status: 'cancelled',
    },
    {
      id: '2',
      debtName: 'RBC Credit Card',
      balance: 'Bal. $15,420.50',
      amount: '$45.30 CAD',
      date: 'February 11, 2025',
      status: 'cancelled',
    },
  ];

  const groupedData = cancelledData.reduce((groups, item) => {
    const date = item.date;
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(item);
    return groups;
  }, {} as Record<string, ActivityItem[]>);

  const ActivityItem = ({ item }: { item: ActivityItem }) => (
    <TouchableOpacity 
      style={styles.activityItem}
      onPress={() => onItemPress?.(item)}
      activeOpacity={0.7}
    >
      <View style={styles.activityItemLeft}>
        <View style={styles.activityIcon}>
          <Image
            source={require('../../assets/history-icon.png')}
            style={styles.historyIcon}
          />
        </View>
        <View style={styles.activityDetails}>
          <Text style={styles.debtName}>{item.debtName}</Text>
          <Text style={styles.balanceText}>{item.balance}</Text>
        </View>
      </View>
      <Text style={styles.amountText}>{item.amount}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={onBack}>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Cancelled Transactions</Text>
        <View style={styles.headerRight} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Activity List */}
        <View style={styles.activityList}>
          {Object.entries(groupedData).map(([date, items]) => (
            <View key={date} style={styles.dateGroup}>
              <Text style={styles.dateText}>{date}</Text>
              <View style={styles.dateItems}>
                {items.map((item, index) => (
                  <View key={item.id}>
                    <ActivityItem item={item} />
                    {index < items.length - 1 && <View style={styles.divider} />}
                  </View>
                ))}
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F3F3',
  },
  backButton: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    fontSize: 18,
    color: '#1C1B1F',
    fontWeight: '400',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '500',
    color: '#111111',
    fontFamily: 'System',
    lineHeight: 38,
  },
  headerRight: {
    width: 24,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  activityList: {
    gap: 32,
  },
  dateGroup: {
    gap: 16,
  },
  dateText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#757575',
    lineHeight: 30.4,
    letterSpacing: 0.16,
  },
  dateItems: {
    gap: 16,
  },
  activityItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  activityItemLeft: {
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
    tintColor: '#666666',
  },
  activityDetails: {
    gap: 4,
  },
  debtName: {
    fontSize: 15,
    fontWeight: '500',
    color: '#111111',
    lineHeight: 28.5,
    letterSpacing: 0.15,
  },
  balanceText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#666666',
    lineHeight: 26.6,
    letterSpacing: 0.14,
  },
  amountText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#111111',
    lineHeight: 28.5,
    letterSpacing: 0.15,
    textAlign: 'right',
  },
  divider: {
    height: 1,
    backgroundColor: '#F3F3F3',
    marginVertical: 8,
  },
});

export default CancelledTransactionsScreen; 