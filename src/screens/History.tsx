import { useRecoilValue } from "recoil";
import { userEmailState } from "../store/selectors/userEmail";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

export const History = () => {
  const userEmail = useRecoilValue(userEmailState);
  const [data, setData] = useState([]);

  // const fetchCategories = async () => {
  //   try {
  //     const response = await axios.get(
  //       `http://localhost:3001/data/${userEmail}`
  //     );
  //     setData(response.data);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  const fetchData = () => {
    axios
      .get(`http://localhost:3001/data/${userEmail}`)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="bg-black w-screen ">
        <div className="w-screen">
          <div className="w-screen h-80 bg-[#4936D8]">
            <h1 className="text-7xl font-semibold text-white text-center pt-48">
              Welcome back
            </h1>
          </div>
          <div className="bg-black w-screen h-screen">
            <h1 className="text-3xl p-28 font-semibold text-white">
              Recently Viewed
            </h1>
            {/* <div className="border border-gray-200 rounded-lg gap-2 px-52 pl-44 shadow-lg shadow-cyan "></div> */}
            {/* <div className="Bg-white text-black"></div> */}
            {data.map((item, index) => (
              <div
                key={index}
                className="text-black bg-white m-2 text-center border rounded-lg"
              >
                <div>First Device: {item.device1}</div>
                <div> Second Device: {item.device2} </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
