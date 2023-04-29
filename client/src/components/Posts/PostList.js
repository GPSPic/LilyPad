import PostElement from "./PostElement";
import styled from "styled-components";

const PostList = ({posts, frogs}) => {

  const allPosts = posts.map((post) => {
    return <PostElement
      post={post}
      key={post._id}
      frogs={frogs}
      />
  })

  return ( 
    <>
    <h2>Post List</h2>
    <ListContainer>
    {allPosts} 
    </ListContainer>
    </>
   );
}

const ListContainer = styled.section`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  color: red;
`;


export default PostList;