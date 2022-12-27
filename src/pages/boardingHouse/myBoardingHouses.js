import React, { useEffect, useState } from "react";
import Navbar from "../../components/navigation/navbar";
import Headerbanner from "../../components/sections/headerbanner";
import Footer from "../../components/navigation/footer";
import { getProfile } from "../../services/user";
import { getMyBoardingHouses } from "../../services/boardingHouse";
import BoardingList from "../../components/sections/MyBoarding";

function MyBoarding() {
  const [user, setUser] = useState();
  const [boardingHouseList, setBoardingHouseList] = useState();

  const fetchProfile = async () => {
    let res = await getProfile();
    setUser(res?.data?.profile);
  };

  const fetchBoardingHouses = async () => {
    let res = await getMyBoardingHouses(user._id);
    setBoardingHouseList(res?.data?.boardingHouseList);
  };

  useEffect(() => {
    if (!user) {
      fetchProfile();
    }
    fetchBoardingHouses();
  }, [user]);
  console.log(boardingHouseList);
  return (
    <div>
      <Navbar user={user} />

      {!user ?? <Headerbanner />}
      <BoardingList profile={user} data={boardingHouseList} />
      <Footer />
    </div>
  );
}

export default MyBoarding;
