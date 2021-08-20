import Post from "../post/Post";

export default function Posts({posts}) {

  return (
    <div>
      {/*<div><h3>User post</h3></div>*/}
        {
            posts.map(postValue => <Post key={postValue.id} {...postValue} />)
        }

    </div>
  );
}