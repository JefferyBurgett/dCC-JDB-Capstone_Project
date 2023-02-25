import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import TipTrick from "../../components/Tip_Tricks/TipTrick";

const TipTrickPage = () => {
    
  const [user, token] = useAuth();
  const [tiptricks, setTipTricks] = useState([]);
 
  return (
      <TipTrick setTipTricks={setTipTricks} />
  );
};

export default TipTrickPage;