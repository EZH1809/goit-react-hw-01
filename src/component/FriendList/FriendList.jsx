
import FriendListItem from "../FriendListItem/FriendListItem"
import style from "./FriendList.module.css"

export default function FriendList({ friends }) {
    return (
    <ul className={style.container}>
      {friends.map(friend => (
        <li key={friend.id} className={style.listItem}>
          <FriendListItem {...friend} />
        </li>
      ))}
    </ul>
  );
}