import React from "react";
import { useParams } from "react-router-dom";

import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const Room = () => {
  const { roomID } = useParams();
  const meeting = async (element) => {
    const appID = 1805851238;
    const serverSecret = "6ac47678137032b082a48e8ed4e1ca68";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      Date.now().toString(),
      "andrei"
    );
    const zp = ZegoUIKitPrebuilt.create(kitToken);

    zp.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.GroupCall,
      },
    });
  };

  return <div ref={meeting} style={{ width: "100vw", height: "100vh" }}></div>;
};

export default Room;
