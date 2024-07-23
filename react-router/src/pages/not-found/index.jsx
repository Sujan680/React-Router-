import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div>
        <h3>Page Doesn&apos;t Exist</h3>
        <Link to={"/home/recipe-list"}>
            Go to Recipe Page
        </Link>
    </div>
  )
}
