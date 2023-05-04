import { Link } from "react-router-dom"

const headerImage = "https://media.istockphoto.com/photos/group-portrait-of-a-creative-business-team-standing-outdoors-three-picture-id1146473249?b=1&k=20&m=1146473249&s=612x612&w=0&h=-q1guVCuei7X3BFKwWC2bLUOX8BeIaC04pG5s_xfn_c="

const navBrandImage = "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"


const Nav = (props) => {
    return (
        <nav className="nav-global">
            <Link to="/"><img src={navBrandImage}/></Link>
        </nav>
    )
}

const Header = ({ heroImage }) => {
    return (
        <header className="Header-container">
            <Nav />
            <img src={heroImage || headerImage} />

        </header>
    )
}

export default Header