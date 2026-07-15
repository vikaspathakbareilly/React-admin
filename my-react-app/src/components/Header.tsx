import { Link } from "react-router-dom";
function Header() {
    return (
        <header className="header">
            <h2>React Admin</h2>

            <nav>
                <Link to="/">Login</Link>

                {" | "}
                <Link to="/home">Home</Link>

                {" | "}

                <Link to="/about">About</Link>

                {" | "}

                <Link to="/contact">Contact</Link>
            </nav>
        </header>
    );
}
export default Header;