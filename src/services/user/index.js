import store from "store";

export const register = async (body) => {
  const rawResponse = await fetch(`${process.env.REACT_APP_API_URL}/user`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const content = await rawResponse.json();
  console.log(content);
};

export const login = async (body) => {
  const rawResponse = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const content = await rawResponse.json();
  store.set("accessToken", content.data.accessToken);
  return content;
};

export const getProfile = async () => {
  const accessToken = store.get("accessToken");
  console.log(accessToken);
  const rawResponse = await fetch(`${process.env.REACT_APP_API_URL}/profile`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const content = await rawResponse.json();
  return content;
};
