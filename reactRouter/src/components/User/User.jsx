import { useParams } from "react-router-dom"

const User = () => {
    // In React Router, the useParams hook is used to access the dynamic parameters from the URL in a component. This is particularly useful when you need to retrieve specific data based on the URL structure, such as user IDs, product IDs, or other dynamic segments in the URL.
    const {userid} = useParams();
  return (
    <div>
        User: {userid} 
    </div>
  )
}

export default User