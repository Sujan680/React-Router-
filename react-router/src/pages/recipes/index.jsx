import { useLocation } from "react-router-dom"


export default function ReceipeList() {

    const location  = useLocation();
    console.log(location);
  return (
    <div style={{fontSize:"40px", textAlign: 'center', margin: '70px auto'}}> 
        Receipe List Page
    </div>
  )
}
