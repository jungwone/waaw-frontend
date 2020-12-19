import React from "react";
import { useHistory, useParams } from "react-router-dom";

const Room = () => {
  const params = useParams();
  const history = useHistory();
  const { page } = useParams();
  // console.log(params);
  // console.log(history);
  return (
    <div>
      <div>room page</div>
    </div>
  );
};

export default Room;
