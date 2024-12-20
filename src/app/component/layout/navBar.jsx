import { NavLink } from "react-router"
export function NavBar() {
  return (
    <>
    <NavLink className="text-red-100" to="/">Accueil </NavLink>
    <NavLink className="text-red-100" to="/about"> A propos</NavLink>
    </>
  )
}