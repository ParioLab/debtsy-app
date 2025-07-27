import { APP_CONFIG } from '../constants';

// Currency formatting
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: APP_CONFIG.defaultCurrency,
  }).format(amount);
};

// Date formatting
export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
  }).format(date);
};

// Date formatting for display
export const formatDateDisplay = (date: Date): string => {
  return new Intl.DateTimeFormat('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(date);
};

// Calculate total debt amount
export const calculateTotalDebt = (debts: Array<{ amount: number }>): number => {
  return debts.reduce((total, debt) => total + debt.amount, 0);
};

// Calculate total payments for a debt
export const calculateTotalPayments = (payments: Array<{ amount: number }>): number => {
  return payments.reduce((total, payment) => total + payment.amount, 0);
};

// Calculate remaining debt amount
export const calculateRemainingDebt = (debtAmount: number, totalPayments: number): number => {
  return Math.max(0, debtAmount - totalPayments);
};

// Calculate interest for a debt
export const calculateInterest = (principal: number, rate: number, timeInYears: number): number => {
  return principal * (rate / 100) * timeInYears;
};

// Calculate monthly payment using loan amortization formula
export const calculateMonthlyPayment = (
  principal: number,
  annualRate: number,
  years: number
): number => {
  const monthlyRate = annualRate / 100 / 12;
  const numberOfPayments = years * 12;
  
  if (monthlyRate === 0) return principal / numberOfPayments;
  
  return (
    (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
    (Math.pow(1 + monthlyRate, numberOfPayments) - 1)
  );
};

// Generate unique ID
export const generateId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

// Validate email format
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Validate amount (positive number)
export const isValidAmount = (amount: number): boolean => {
  return amount > 0 && amount <= APP_CONFIG.maxDebtAmount;
};

// Get days until due date
export const getDaysUntilDue = (dueDate: Date): number => {
  const today = new Date();
  const timeDiff = dueDate.getTime() - today.getTime();
  return Math.ceil(timeDiff / (1000 * 3600 * 24));
};

// Check if payment is overdue
export const isOverdue = (dueDate: Date): boolean => {
  return getDaysUntilDue(dueDate) < 0;
};

// Get progress percentage
export const getProgressPercentage = (current: number, total: number): number => {
  if (total === 0) return 0;
  return Math.min(100, Math.max(0, (current / total) * 100));
};

// Debounce function
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}; 