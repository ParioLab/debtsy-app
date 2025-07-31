import React, { useState } from 'react';
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

interface ActivityScreenProps {
  onItemPress?: (item: ActivityItem) => void;
  onCancelledPress?: () => void;
}

const ActivityScreen: React.FC<ActivityScreenProps> = ({ onItemPress, onCancelledPress }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'success' | 'cancelled'>('success');

  // Mock data based on the Figma design
  const activityData: ActivityItem[] = [
    {
      id: '1',
      debtName: 'OSAP Student Loan',
      balance: 'Bal. $28,825.18',
      amount: '$45.09 CAD',
      date: 'March 19, 2025',
      status: 'success',
    },
    {
      id: '2',
      debtName: 'RBC Line of Credit',
      balance: 'Bal. $28,870.27',
      amount: '$84.64 CAD',
      date: 'March 19, 2025',
      status: 'success',
    },
    {
      id: '3',
      debtName: 'Mortgage',
      balance: 'Bal. $28,954.91',
      amount: '$54.15 CAD',
      date: 'March 19, 2025',
      status: 'success',
    },
    {
      id: '4',
      debtName: 'Fairstone Credit Card',
      balance: 'Bal. $28,825.18',
      amount: '$45.09 CAD',
      date: 'February 11, 2025',
      status: 'cancelled',
    },
  ];

  const filteredData = activityData.filter(item => {
    if (activeFilter === 'all') return true;
    return item.status === activeFilter;
  });

  const groupedData = filteredData.reduce((groups, item) => {
    const date = item.date;
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(item);
    return groups;
  }, {} as Record<string, ActivityItem[]>);

  const FilterTag = ({ 
    title, 
    isActive, 
    onPress 
  }: { 
    title: string; 
    isActive: boolean; 
    onPress: () => void; 
  }) => (
    <TouchableOpacity
      style={[
        styles.filterTag,
        isActive ? styles.filterTagActive : styles.filterTagInactive,
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.filterTagText,
          isActive ? styles.filterTagTextActive : styles.filterTagTextInactive,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );

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

  const handleCancelledPress = () => {
    onCancelledPress?.();
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Filter Tags */}
      <View style={styles.filterContainer}>
        <FilterTag
          title="Successful"
          isActive={activeFilter === 'success'}
          onPress={() => setActiveFilter('success')}
        />
        <FilterTag
          title="Cancelled"
          isActive={activeFilter === 'cancelled'}
          onPress={handleCancelledPress}
        />
      </View>

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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 32,
  },
  filterTag: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterTagActive: {
    backgroundColor: '#111111',
  },
  filterTagInactive: {
    backgroundColor: '#F7F7F7',
  },
  filterTagText: {
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 24,
    letterSpacing: 0.15,
  },
  filterTagTextActive: {
    color: '#FFFFFF',
  },
  filterTagTextInactive: {
    color: '#111111',
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

export default ActivityScreen; 