import { useParams } from "react-router-dom"


function RecipeDetailsPage() {

    const params = useParams();
    console.log(params);
    const { id } = params;
    return (
        <div style={{ fontSize: "40px", textAlign: "center", marginTop: "30px" }}>
            Recipe Detalis Page of recipe item {id}
        </div>
    )
}

export default RecipeDetailsPage