// Color scheme
export const COLORS = {
  primary: '#3498db',
  secondary: '#2ecc71',
  accent: '#e74c3c',
  background: '#f8f9fa',
  surface: '#ffffff',
  text: {
    primary: '#2c3e50',
    secondary: '#7f8c8d',
    light: '#bdc3c7',
  },
  success: '#27ae60',
  warning: '#f39c12',
  error: '#e74c3c',
  info: '#3498db',
};

// Debt categories with display names and icons
export const DEBT_CATEGORIES = {
  credit_card: {
    name: 'Credit Card',
    icon: '💳',
    color: '#e74c3c',
  },
  student_loan: {
    name: 'Student Loan',
    icon: '🎓',
    color: '#3498db',
  },
  mortgage: {
    name: 'Mortgage',
    icon: '🏠',
    color: '#2ecc71',
  },
  car_loan: {
    name: 'Car Loan',
    icon: '🚗',
    color: '#f39c12',
  },
  personal_loan: {
    name: 'Personal Loan',
    icon: '💰',
    color: '#9b59b6',
  },
  medical: {
    name: 'Medical',
    icon: '🏥',
    color: '#e67e22',
  },
  other: {
    name: 'Other',
    icon: '📋',
    color: '#95a5a6',
  },
};

// Payment types with display names
export const PAYMENT_TYPES = {
  minimum: {
    name: 'Minimum Payment',
    icon: '📊',
  },
  extra: {
    name: 'Extra Payment',
    icon: '➕',
  },
  full: {
    name: 'Full Payment',
    icon: '✅',
  },
};

// Goal types with display names and icons
export const GOAL_TYPES = {
  debt_free: {
    name: 'Debt Free',
    icon: '🎯',
    color: '#27ae60',
  },
  emergency_fund: {
    name: 'Emergency Fund',
    icon: '🛡️',
    color: '#3498db',
  },
  savings: {
    name: 'Savings',
    icon: '💰',
    color: '#f39c12',
  },
  investment: {
    name: 'Investment',
    icon: '📈',
    color: '#9b59b6',
  },
};

// App configuration
export const APP_CONFIG = {
  name: 'Debtsy',
  version: '1.0.0',
  description: 'Your Personal Debt Manager',
  maxDebtAmount: 1000000, // $1M
  maxPaymentAmount: 100000, // $100K
  defaultCurrency: 'USD',
  dateFormat: 'MM/DD/YYYY',
  currencyFormat: '$#,##0.00',
};

// Navigation routes
export const ROUTES = {
  HOME: 'Home',
  DEBTS: 'Debts',
  ADD_DEBT: 'AddDebt',
  DEBT_DETAILS: 'DebtDetails',
  PAYMENTS: 'Payments',
  ADD_PAYMENT: 'AddPayment',
  GOALS: 'Goals',
  ADD_GOAL: 'AddGoal',
  PROFILE: 'Profile',
  SETTINGS: 'Settings',
}; 