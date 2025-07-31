import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

interface PaymentCancelledScreenProps {
  onClose: () => void;
  paymentData?: {
    amount: string;
    reference: string;
    date: string;
    timeLeft: string;
    debt: string;
    balance: string;
  };
}

const PaymentCancelledScreen: React.FC<PaymentCancelledScreenProps> = ({ 
  onClose,
  paymentData = {
    amount: '$27.15',
    reference: 'SKD5673P',
    date: 'Friday, February 11, 2025',
    timeLeft: '2 Yrs 7 Mon',
    debt: 'Fairstone Credit Card',
    balance: '$28,825.18',
  }
}) => {
  const DetailItem = ({ label, value }: { label: string; value: string }) => (
    <View style={styles.detailItem}>
      <Text style={styles.detailLabel}>{label}</Text>
      <Text style={styles.detailValue}>{value}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Text style={styles.closeIcon}>✕</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Payment Cancelled</Text>
        <View style={styles.headerRight} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Cancelled Icon and Amount */}
        <View style={styles.cancelledSection}>
          <View style={styles.cancelledIcon}>
            <Text style={styles.xMark}>✕</Text>
          </View>
          <View style={styles.amountContainer}>
            <Text style={styles.amountText}>-{paymentData.amount} CAD</Text>
          </View>
        </View>

        {/* Payment Details */}
        <View style={styles.detailsContainer}>
          <DetailItem label="Amount" value={paymentData.amount} />
          <View style={styles.divider} />
          <DetailItem label="Reference" value={paymentData.reference} />
          <View style={styles.divider} />
          <DetailItem label="Date" value={paymentData.date} />
          <View style={styles.divider} />
          <DetailItem label="Time Left" value={paymentData.timeLeft} />
          <View style={styles.divider} />
          <DetailItem label="Debt" value={paymentData.debt} />
          <View style={styles.divider} />
          <DetailItem label="Balance" value={paymentData.balance} />
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
  closeButton: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeIcon: {
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
  },
  cancelledSection: {
    alignItems: 'center',
    gap: 32,
    paddingTop: 48,
    paddingBottom: 48,
  },
  cancelledIcon: {
    width: 72,
    height: 72,
    backgroundColor: '#D12131',
    borderRadius: 64,
    justifyContent: 'center',
    alignItems: 'center',
  },
  xMark: {
    fontSize: 32,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  amountContainer: {
    alignItems: 'center',
  },
  amountText: {
    fontSize: 24,
    fontWeight: '500',
    color: '#111111',
    fontFamily: 'System',
    lineHeight: 45.6,
    letterSpacing: 0.24,
  },
  detailsContainer: {
    gap: 24,
  },
  detailItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detailLabel: {
    fontSize: 16,
    fontWeight: '400',
    color: '#666666',
    fontFamily: 'System',
    lineHeight: 30.4,
    letterSpacing: 0.16,
  },
  detailValue: {
    fontSize: 16,
    fontWeight: '500',
    color: '#111111',
    fontFamily: 'System',
    lineHeight: 30.4,
    letterSpacing: 0.16,
  },
  divider: {
    height: 1,
    backgroundColor: '#F3F3F3',
  },
});

export default PaymentCancelledScreen; 