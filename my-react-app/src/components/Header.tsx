import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Header() {
    const navigate = useNavigate();

    const logout = (e: React.FormEvent) => {
        // Navigate("/login")
        localStorage.clear()
        navigate("/login", { replace: true });


    }
    return (
        <header className="header">
            <h2>React Admin</h2>
            <button onClick={logout}>Logout</button>

            <nav>
                <Link to="/">Login</Link>

                {" | "}
                <Link to="/home">Home</Link>

                {" | "}

                <Link to="/about">About</Link>

                {" | "}

                <Link to="/contact">Contact</Link>
                {" | "}
                <Link to="/product">Product</Link>
            </nav>
        </header>
    );
}
export default Header;