export interface StatementAccount {
  id: string;
  amount: string;
  description: string;
}
export interface RunningStatement {
  id: string;
  account_id: string;
  amount: string;
  date_created: string;
  description: string;
  entry_type: string;
  authorized_by: string;
}
export interface Payment_account {
  id: string;
  account_number: string;
  account_name: string;
  payment_channel: string;
}

export interface PaymentInterface {
  id: string;
  payment_account: Payment_account;
  bill_reference_number: string;
  transaction_number: string;
  channel_transaction_number: string;
  amount: string;
  amount_remaining: string;
  customer_name: string;
  customer_account_number: string;
  date_of_transaction: string;
  date_created: string;
  transaction_status: string;
}

export interface Invoice_fee_schedule {
  id: string;
  name: string;
  transaction_code: string;
}

export interface Invoice_item {
  id: string;
  invoice_item: string;
  narration: string;
  amount: string;
  invoice: string;
}

export interface BillInterface {
  id: string;
  reference_number: string;
  amount: string;
  outstanding_amount: string;
  status: string;
  account_type: string;
  account_number: string;
  invoice_fee_schedule: Invoice_fee_schedule;
  date_created: string;
  date_due: string;
  invoice_items: Invoice_item[];
}

export interface Account_statu {
  id: string;
  code: string;
  name: string;
}

export interface Tenant {
  id: string;
  names: string;
  identification_number: string;
  identification_type: string;
}

export interface Account_detail {
  id: string;
  account_number: string;
  old_account_number: string;
  estate_unit?: any;
  account_status: Account_statu;
  tenant: Tenant;
  date_opened: string;
  date_closed?: any;
}

export interface ArrearsInterface {
  id: string;
  current_balance: string;
  previous_balance: string;
  last_updated: string;
  account_id: string;
  account_details: Account_detail;
}
