import { Link } from "react-router-dom"

function NotFound() {
  return (
    <div>
        <h2>Sorry</h2>
        <p>The page can not be found</p>
        <Link to="/">Back to the Homepage....</Link>
    </div>
  )
}

export default NotFound