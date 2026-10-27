export const refreshToken = async () => {
  let response = await fetch(
    `${import.meta.env.VITE_API_URL}/auth/refreshtoken`,
    {
      method: "POST",
      credentials: "include",
    },
  );
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message);
  }
  return data;
};
