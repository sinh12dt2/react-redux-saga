import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPosts } from '../store/posts/actions';
const SinglePost = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.PostReducer);
  console.log('render SinglePost');
  useEffect(() => {
    console.log('useEffect SinglePost');
    // dispatch(getPosts());
  });
  return <div>
    Single Post { params.id }
    { JSON.stringify(posts) }
  </div>
};

export default SinglePost;
