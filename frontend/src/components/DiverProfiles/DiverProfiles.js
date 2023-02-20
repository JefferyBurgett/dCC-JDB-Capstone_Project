import ProfileForm from "./ProfileForm/ProfileForm";
import DiverProfilesList from "./DiverProfilesList/DiverProfilesList";
// import DiverSearch from "./DiverSearch/DiverSearch";
import { useState } from "react";

const DiverProfiles = (props) => {
    const [diver, setDiver] = useState();

    return (
        <div>
          {/* <DiverSearch setDiver={setDiver} /> */}
          <ProfileForm setDiver={setDiver} />
          <DiverProfilesList diver={diver} setDiver={setDiver} />
        </div>
      );
    };
    
    export default DiverProfiles;