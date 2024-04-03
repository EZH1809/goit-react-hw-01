import style from "./Profile.module.css"

export default function Profile({
    name,
    tag,
    location,
    image,
    stats }) {
  return (
      
     <div className={style.profileInfo}>
      <div className={style.profileInfoList}>
        <img
          src={image}
          alt={name}
          className={style.profileImage}
        />
            <p className={style.profileName}>{name}</p>
            <p className={style.profileTag}>@{tag}</p>
            <p className={style.profileLocation}>{location}</p>
       
      </div>

  <ul className={style.profileList}>
    <li className={style.profileListItem}>
      <span className={style.profileListItemDesctiption}>Followers</span>
      <span className={style.profileListItemStat}>{stats.followers}</span>
    </li>
    <li className={style.profileListItem}>
      <span className={style.profileListItemDesctiption}>Views</span>
      <span className={style.profileListItemStat}>{stats.views}</span>
    </li>
    <li className={style.profileListItem}>
      <span className={style.profileListItemDesctiption}>Likes</span>
      <span className={style.profileListItemStat}>{stats.likes}</span>
    </li>
  </ul>
</div>
    );
}

