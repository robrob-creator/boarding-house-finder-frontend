import React, { useEffect, useState } from "react";
import Navbar from "../../components/navigation/navbar";
import Headerbanner from "../../components/sections/headerbanner";
import Footer from "../../components/navigation/footer";
import { getProfile } from "../../services/user";
import { getBoardingHouses } from "../../services/boardingHouse";
import BoardingList from "../../components/sections/BoardingList";

function LandingPage() {
  const [user, setUser] = useState();
  const [boardingHouseList, setBoardingHouseList] = useState();

  const fetchProfile = async () => {
    let res = await getProfile();
    setUser(res?.data?.profile);
  };

  const fetchBoardingHouses = async () => {
    let res = await getBoardingHouses();
    setBoardingHouseList(res?.data?.boardingHouseList);
  };

  useEffect(() => {
    fetchProfile();
    fetchBoardingHouses();
  }, []);
  console.log(boardingHouseList);
  return (
    <div>
      <Navbar user={user} />

      {!user ?? <Headerbanner />}
      <BoardingList data={boardingHouseList} />
      <Footer />
    </div>
  );
}

export default LandingPage;
