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
      <form action="" onSubmit={submitCode} >
        <label htmlFor="">Enter The Room Code</label>
        <input
          type="text"
          required
          placeholder="Enter Room Code"
          value={RoomCode}
          onChange={(e) => setRoomCode(e.target.value)}
        />

        <button type="submit">Enter Room</button>
      </form>
    </div>
  );
};
export default Home;
