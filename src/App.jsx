import AddPostForm from "./feetures/posts/AddPostForm";
import PostsList from "./feetures/posts/PostsLists";
import SinglePostPage from "./feetures/posts/SinglePostPage"; 
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import EditPostForm from "./feetures/posts/EditPostForm";
function App() {
  return (
    <Routes>
    <Route path="/" element={<Layout />}>

      <Route index element={<PostsList />} />

      <Route path="post">
        <Route index element={<AddPostForm />} />
        <Route path=":postId" element={<SinglePostPage />} />
        <Route path="edit/:postId" element={<EditPostForm />} />
      </Route>

    </Route>
  </Routes>

  );
}

export default App;
