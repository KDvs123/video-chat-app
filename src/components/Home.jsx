import React, {useState} from "react";
import { useNavigate } from "react-router";
const Home = () => {
  const [RoomCode, setRoomCode] = useState("");
  const navigate = useNavigate();
  const submitCode=(e)=>{
    e.preventDefault();
    navigate(`/room/${RoomCode}`);

  }
  return (
    <div>
      <form action="" onSubmit={submitCode} className="flex flex-col items-center justify-center" >
        <label htmlFor="" className="font-bold text-[32px] pt-12">Enter The Room Code</label> <br />

        <input
          type="text"
          required
          placeholder="Enter Room Code"
          value={RoomCode}
          onChange={(e) => setRoomCode(e.target.value)}
          className="bg-blue-500 placeholder:text-white py-2 w-[16rem] rounded-full pl-8 mt-4"
        />

        <button type="submit" className="bg-orange-500 rounded-[0.5rem] mt-4 py-1.5 px-4 font-bold">Enter Room</button>
      </form>
    </div>
  );
};
export default Home;
