const API_BASE = (import.meta as unknown as { env?: { VITE_MAXY_API_URL?: string } }).env?.VITE_MAXY_API_URL || 'https://api.maxy.academy/api/v1';

export async function registerUser(name: string, email: string, password: string) {
  try {
    const res = await fetch(`${API_BASE}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password, client_app: 'navigator' }),
    });
    return await res.json();
  } catch (err) {
    console.error('API register failed:', err);
    return { success: false, message: 'Gagal terhubung ke API Gateway api.maxy.academy' };
  }
}

export async function loginWithEmail(email: string, password: string) {
  try {
    const res = await fetch(`${API_BASE}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, client_app: 'navigator' }),
    });
    return await res.json();
  } catch (err) {
    console.error('API login failed:', err);
    return { success: false, message: 'Gagal terhubung ke API Gateway api.maxy.academy' };
  }
}

export async function loginWithGoogle(email: string, name: string, profilePicture?: string) {
  try {
    const res = await fetch(`${API_BASE}/auth/google`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, name, profile_picture: profilePicture, client_app: 'navigator' }),
    });
    return await res.json();
  } catch (err) {
    console.error('API google login failed:', err);
    return { success: false, message: 'Gagal terhubung ke API Gateway api.maxy.academy' };
  }
}

export async function verifyVoucher(code: string, amount?: number, packageId?: number) {
  try {
    const res = await fetch(`${API_BASE}/payments/verify-voucher`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code, amount, package_id: packageId }),
    });
    return await res.json();
  } catch (err) {
    console.error('API verify voucher failed:', err);
    return { success: false, message: 'Gagal verifikasi voucher' };
  }
}

export async function checkoutPayment(paymentData: {
  user_id?: number;
  amount?: number;
  package_id?: number;
  voucher_code?: string;
  description?: string;
  redirect_url?: string;
}) {
  try {
    const token = localStorage.getItem('maxy_access_token');
    const headers: Record<string, string> = { 'Content-Type': 'application/json' };
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
    const res = await fetch(`${API_BASE}/payments/checkout`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        description: 'Pembelian Paket Navigator Maxy Academy',
        redirect_url: typeof window !== 'undefined' ? `${window.location.origin}/app` : 'https://ainavigator.maxy.academy/app',
        ...paymentData,
      }),
    });
    return await res.json();
  } catch (err) {
    console.error('API checkout failed:', err);
    return { success: false, message: 'Gagal membuat invoice checkout' };
  }
}

export async function fetchAiNavigatorPackages() {
  try {
    const res = await fetch(`${API_BASE}/packages/ai-navigator`);
    return await res.json();
  } catch (err) {
    console.error('API fetchAiNavigatorPackages failed:', err);
    return { success: false };
  }
}

