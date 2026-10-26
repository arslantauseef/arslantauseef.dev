type LoginFields = {
  email: string;
  password: string;
};

type AuthUser = {
  id: number;
  name: string;
  email: string;
  role: UserRole;
};

type SignInResponse = {
  message: string;
  data: AuthUser;
};

export async function signIn(credentials: LoginFields) {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(credentials),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
}
