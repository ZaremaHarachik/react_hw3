import "./Users.css"
import {useEffect, useState} from "react";
import {getUsers} from "../../services/user.service";
import User from "../user/User";
import {getPostsOfUser} from "../../services/post.service";
import Posts from "../posts/Posts";

export default function Users() {

  let[users,setUsers] = useState([]);
  let[user,setUser] = useState(null);
  let[posts,setPosts] = useState([]);

  useEffect(() => {
    getUsers().then(value => setUsers([...value]));
  },[]);

  const choseUser=(user) => {
    console.log(user);
    setUser({...user});
    getPostsOfUser(user.id).then(value => setPosts([...value]));
  }

  return (
    <div className={"wrap"}>
    <div className={"users-box"}>
      {
        users.map(value => <User key={value.id} item={value} choseUser={choseUser}/>)
      }
    </div>
      {
        user && <div className={"chosen-one"}>{JSON.stringify(user)}</div>
      }
      <Posts posts={posts}/>
    </div>
  );
}