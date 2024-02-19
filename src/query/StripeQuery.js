const apiUrl = import.meta.env.VITE_API_URL;
const appToken = import.meta.env.VITE_APP_TOKEN;

export const getCardToken = async (authToken, cardToken) => {
  if (!authToken || !cardToken) return;

  const formData = new FormData();
  formData.append("card_token", cardToken);
  const data = await fetch(`${apiUrl}/passenger/add-card`, {
    method: "POST",
    headers: {
      AppToken: `${appToken}`,
      Authorization: `Bearer ${authToken}`,
    },
    body: formData,
  }).then((res) => res.json());

  return data;
};
