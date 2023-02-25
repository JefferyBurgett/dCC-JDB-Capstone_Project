import { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import TipTrickList from "./TipTrickList";
import TipTrickModal from "./TipTrickModal";


const TipTricks = (props) => {
    const [user, token] = useAuth();
    const [tip_tricks, setTip_Tricks] = useState();
    useEffect(() => {
      
      fetchTip_Tricks();
    }, [token]);
    const fetchTip_Tricks = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/tip_trick/all/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
            setTip_Tricks(response.data);
            console.log(response.data)
            } catch (error) {
            console.log(error.response.data);
      }
    };

    return (
            <TipTrickList fetchTip_Tricks={fetchTip_Tricks} tip_tricks={tip_tricks} setTip_Tricks={setTip_Tricks} />
      );
    };
    
    export default TipTricks;
