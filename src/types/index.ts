// User types
export interface User {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

// Debt types
export interface Debt {
  id: string;
  name: string;
  amount: number;
  interestRate: number;
  minimumPayment: number;
  dueDate: Date;
  category: DebtCategory;
  status: DebtStatus;
  createdAt: Date;
  updatedAt: Date;
}

export enum DebtCategory {
  CREDIT_CARD = 'credit_card',
  STUDENT_LOAN = 'student_loan',
  MORTGAGE = 'mortgage',
  CAR_LOAN = 'car_loan',
  PERSONAL_LOAN = 'personal_loan',
  MEDICAL = 'medical',
  OTHER = 'other',
}

export enum DebtStatus {
  ACTIVE = 'active',
  PAID_OFF = 'paid_off',
  DEFAULTED = 'defaulted',
  IN_COLLECTIONS = 'in_collections',
}

// Payment types
export interface Payment {
  id: string;
  debtId: string;
  amount: number;
  date: Date;
  type: PaymentType;
  notes?: string;
  createdAt: Date;
}

export enum PaymentType {
  MINIMUM = 'minimum',
  EXTRA = 'extra',
  FULL = 'full',
}

// Goal types
export interface FinancialGoal {
  id: string;
  name: string;
  targetAmount: number;
  currentAmount: number;
  targetDate: Date;
  type: GoalType;
  status: GoalStatus;
  createdAt: Date;
  updatedAt: Date;
}

export enum GoalType {
  DEBT_FREE = 'debt_free',
  EMERGENCY_FUND = 'emergency_fund',
  SAVINGS = 'savings',
  INVESTMENT = 'investment',
}

export enum GoalStatus {
  ACTIVE = 'active',
  COMPLETED = 'completed',
  PAUSED = 'paused',
}

// App state types
export interface AppState {
  user: User | null;
  debts: Debt[];
  payments: Payment[];
  goals: FinancialGoal[];
  isLoading: boolean;
  error: string | null;
} 