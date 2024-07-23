import { Link, Route, Routes, useNavigate } from "react-router-dom"
import ReceipeList from "./pages/recipes"
import CommentList from "./pages/comments"
import RecipeDetailsPage from "./pages/recipe-details";

function App() {
  const navigate= useNavigate();

  return (
    <>
    <h2>Welcome to the React Router </h2>
    <div>
      <Link to={"/recipe-list"} >
        Alternate way of navigating to recipe list page...
      </Link>
    </div>
    <div style={{display: 'flex', backgroundColor: "black", padding:"10px", gap: '20px', justifyContent:'space-evenly'}}>
        <button 
        style={{
          border: 'none',
          outline: 'none',
          padding:"10px",
          borderRadius: '15px'
        }}
         onClick={() => navigate('/recipe-list')}>Navigate to Recipe List Page</button>
        <button
        style={{
          border: 'none',
          outline: 'none',
          padding:"10px",
          borderRadius: '15px'
        }}
         onClick={()=> navigate('/comment-list')}>Navigate to Comments List Page</button>
    </div>
      <Routes>
        <Route path="/recipe-list" element= {<ReceipeList/>}/>
        <Route path="/comment-list" element= {<CommentList/>}/>
        <Route path="/recipe-list/:id" element= {<RecipeDetailsPage/>}/>
      </Routes>
    </>
  )
}

export default App
