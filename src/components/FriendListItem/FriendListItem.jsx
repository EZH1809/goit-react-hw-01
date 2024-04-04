
import style from "./FriendListItem.module.css"

export default function FriendListItem({ avatar, name, isOnline }) {
    return (
        <div className={style.container}>
            <img className={style.avatar} src={avatar} alt="Avatar" width="48" />
            <p className={style.name}>{name}</p>
            <p className={isOnline ? style.online : style.offline}>
                {isOnline ? 'Online' : 'Offline'}
            </p>
        </div>
    );
}