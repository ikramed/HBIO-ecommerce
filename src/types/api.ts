export type ProductCategory = 'cream' | 'oil' | 'serum' | 'extract' | 'mask';

export interface ProductRecord {
  id: string;
  name: string;
  description: string;
  price_cents: number;
  currency: string;
  image_url: string;
  category: ProductCategory;
  ingredients: string[];
  benefits: string[];
  in_stock: boolean;
  created_at: string;
  updated_at: string;
}

export interface ProductSummary {
  id: string;
  name: string;
  description: string;
  price_cents: number;
  image_url: string;
  category: ProductCategory;
  benefits: string[];
  currency?: string;
  ingredients?: string[];
  in_stock?: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  next_cursor?: string | null;
}

export interface ApiErrorPayload {
  message: string;
  status: number;
  details?: Record<string, unknown>;
}

export interface UserProfile {
  id: string;
  email: string;
  name: string | null;
  phone: string | null;
  role: 'customer' | 'admin';
  profile_image_url: string | null;
  email_verified: boolean;
  last_login: string | null;
  created_at: string;
  updated_at: string;
}

export interface AuthResponse {
  user: UserProfile;
  token: string;
  expires_at: string;
}

export interface AuthCredentials {
  email: string;
  password: string;
}

export interface SignupPayload extends AuthCredentials {
  name?: string;
  phone?: string;
}

export interface UpdateProfilePayload {
  name?: string | null;
  phone?: string | null;
  email?: string;
  password?: string;
  current_password?: string;
  profile_image_url?: string | null;
}

export interface OrderItemPayload {
  product_id: string;
  quantity: number;
}

export interface CheckoutPayload {
  items: OrderItemPayload[];
  currency: string;
  success_url: string;
  cancel_url: string;
}

export interface CheckoutSessionResponse {
  client_secret: string;
  payment_intent_id: string;
  amount_cents: number;
  currency: string;
}

export interface OrderPayload {
  payment_intent_id: string;
  contact_email: string;
  contact_phone?: string;
  shipping_address?: string;
  items: OrderItemPayload[];
}

export type OrderStatus = 'pending' | 'paid' | 'shipped' | 'delivered' | 'cancelled';

export interface OrderSummary {
  id: string;
  order_number: string;
  user_id: string;
  status: OrderStatus;
  total_cents: number;
  currency: string;
  contact_email: string;
  contact_phone: string | null;
  shipping_address: string | null;
  created_at: string;
  updated_at: string;
}

export interface OrderDetail extends OrderSummary {
  items: Array<{
    id: string;
    product_id: string;
    name: string;
    quantity: number;
    unit_price_cents: number;
    total_price_cents: number;
  }>;
}

export interface MessagePayload {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  body: string;
}

export interface SupportMessage {
  id: string;
  user_id: string | null;
  name: string;
  email: string;
  phone: string | null;
  subject: string;
  body: string;
  status: 'new' | 'in_progress' | 'resolved';
  created_at: string;
  updated_at: string;
}

export interface DashboardMetrics {
  total_orders: number;
  total_revenue_cents: number;
  new_messages: number;
  top_products: Array<{
    product_id: string;
    name: string;
    total_sold: number;
    revenue_cents: number;
  }>;
}
