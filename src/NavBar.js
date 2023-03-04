import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" >
        Home
      </Link>
      <ul>
        <CustomLink to="/login">Login</CustomLink>
        <CustomLink to="/Signup">Signup</CustomLink>
        {/* <CustomLink to="/Payment">Payment</CustomLink>
        <CustomLink to="/RestaurantHome">Restaurants</CustomLink>
        <CustomLink to="/OrderStatus">OrderStatus</CustomLink> */}
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}