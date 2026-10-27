import { refreshToken } from "./api.refreshtoken";

export const getMe = async () => {
  let response = await fetch(`${import.meta.env.VITE_API_URL}/auth/me`, {
    method: "GET",
    credentials: "include",
  });

  if (response.status === 401) {
    await refreshToken();

    response = await fetch(`${import.meta.env.VITE_API_URL}/auth/me`,
      {
        method: "GET",
        credentials:"include"
      }
    )
  }

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
};
