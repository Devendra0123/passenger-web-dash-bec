const apiUrl = import.meta.env.VITE_API_URL;
const appToken = import.meta.env.VITE_APP_TOKEN;

// Passenger login
export const loginPassenger = async (passengerInfo) => {
  const { uid } = passengerInfo;

  if (!uid) return;
  const data = await fetch(`${apiUrl}/passenger/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      AppToken: `${appToken}`,
    },
    body: JSON.stringify({
      ...passengerInfo,
    }),
  }).then((res) => res.json());

  return data;
};

// Passenger Register
export const registerPassenger = async (passengerInfo, authToken) => {
  const { first_name, last_name, email, mobile, profile_image } = passengerInfo;

  const formData = new FormData();
  formData.append("first_name", first_name);
  formData.append("last_name", last_name);
  if (email) {
    formData.append("email", email);
  }
  if (mobile) {
    formData.append("mobile", mobile);
  }
  formData.append("profile_image", profile_image);

  const data = await fetch(`${apiUrl}/passenger/register`, {
    method: "POST",
    headers: {
      AppToken: `${appToken}`,
      Authorization: `Bearer ${authToken}`,
    },
    body: formData,
  }).then((res) => res.json());

  return data;
};
