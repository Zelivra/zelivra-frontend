

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  user: {
    id: string;
    email: string;
    name: string;
  };
}

// Dummy API call for login
export const login = async (credentials: LoginRequest): Promise<LoginResponse> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  // Dummy validation
  if (credentials.email === 'demo@zelivra.com' && credentials.password === 'demo123') {
    const response: LoginResponse = {
      accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiZW1haWwiOiJkZW1vQHplbGl2cmEuY29tIiwiaWF0IjoxNTE2MjM5MDIyfQ.dummy_token',
      user: {
        id: '1',
        email: credentials.email,
        name: 'Demo User',
      },
    };
    return response;
  }
  
  throw new Error('Invalid credentials');
};

// Dummy API call for logout
export const logout = async (): Promise<void> => {
  await new Promise(resolve => setTimeout(resolve, 300));
  // In real implementation, this would clear the refresh token cookie
};

// Dummy API call for token refresh
export const refreshToken = async (): Promise<{ accessToken: string }> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return {
    accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.refreshed_token',
  };
};
