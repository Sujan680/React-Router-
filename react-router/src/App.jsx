import { Link, useNavigate, useRoutes } from "react-router-dom"
import ReceipeList from "./pages/recipes"
import CommentList from "./pages/comments"
import RecipeDetailsPage from "./pages/recipe-details";
import NotFoundPage from "./pages/not-found";
import Layout from "./components/header/layout/Layout";


function CustomRoutes() {
  const element = useRoutes([
    {
      path: '/home', 
      element: <Layout />,

      children: [
        {
          path: 'recipe-list',
          element: <ReceipeList />
        },
        {
          path: 'comment-list',
          element: <CommentList />
        },
        {
          path: 'recipe-list/:id',
          element: <RecipeDetailsPage />
        }
      ],
    },
    {
      path: '*',
      element: <NotFoundPage />,
    }

  ])
  return element;
}

function App() {
  const navigate = useNavigate();

  return (
    <>
      <h2>Welcome to the React Router </h2>
      <div>
        <Link to={"/home/recipe-list"} >
          Alternate way of navigating to recipe list page...
        </Link>
      </div>
      <div style={{ display: 'flex', backgroundColor: "black", padding: "10px", gap: '20px', justifyContent: 'space-evenly' }}>
        <button
          style={{
            border: 'none',
            outline: 'none',
            padding: "10px",
            borderRadius: '15px'
          }}
          onClick={() => navigate('/home/recipe-list')}>Navigate to Recipe List Page</button>
        <button
          style={{
            border: 'none',
            outline: 'none',
            padding: "10px",
            borderRadius: '15px'
          }}
          onClick={() => navigate('/home/comment-list')}>Navigate to Comments List Page</button>
      </div>
      {/* <Routes>
        <Route path="/home" element={<Layout />}>
          <Route path="recipe-list" element={<ReceipeList />} />
          <Route path="comment-list" element={<CommentList />} />
          <Route path="recipe-list/:id" element={<RecipeDetailsPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes> */}
      <CustomRoutes />
    </>
  )
}

export default App
