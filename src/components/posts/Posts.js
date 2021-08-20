import Post from "../post/Post";

export default function Posts({posts}) {

  return (
    <div>

        {
            posts.map(postValue => <Post key={postValue.id} {...postValue} />)
        }

    </div>
  );
}