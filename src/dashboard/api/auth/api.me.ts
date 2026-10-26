
export const getMe = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/me`, {
    method: "GET",
    credentials: "include",
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data
};
