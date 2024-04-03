import Profile from "../Profile/Profile"
import userData from "../Profile/userData.json";
import style from "./App.module.css";

export default function App() {
  return (

    <div className={style.container}>
       <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
    </div>

  );
}


