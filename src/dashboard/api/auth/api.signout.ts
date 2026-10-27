export const signOut = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/signout`, {
    method: "POST",
    credentials: "include",
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
};
