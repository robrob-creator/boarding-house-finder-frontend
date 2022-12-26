import store from "store";

export const getBoardingHouses = async () => {
  const accessToken = store.get("accessToken");
  console.log(accessToken);
  const rawResponse = await fetch(
    `${process.env.REACT_APP_API_URL}/boarding-house-list`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  const content = await rawResponse.json();
  return content;
};
