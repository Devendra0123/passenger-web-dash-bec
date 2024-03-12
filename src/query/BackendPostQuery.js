const apiUrl = import.meta.env.VITE_API_URL;
const appToken = import.meta.env.VITE_APP_TOKEN;

// Notification read
export const notificationRead = async (authToken,notificationId) => {

    const data = await fetch(`${apiUrl}/passenger/notification-read/${notificationId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        AppToken: `${appToken}`,
        Authorization: `Bearer ${authToken}`,
      },
    }).then((res) => res.json());
  
    return data;
  };

  // Add card
  export const addCard = async (authToken, cardToken) => {
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

 // Delete Card
export const deleteCard = async (authToken,cardId) => {

    const data = await fetch(`${apiUrl}/passenger/delete-card/${cardId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        AppToken: `${appToken}`,
        Authorization: `Bearer ${authToken}`,
      },
    }).then((res) => res.json());
  
    return data;
  };
 
