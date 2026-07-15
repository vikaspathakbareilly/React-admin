import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({
        email: "",
        password: "",
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

        setErrors({
            ...errors,
            [e.target.name]: "",
        });
    };
    const handleSubmit = (e: React.FormEvent) => {

        e.preventDefault();
        let valid = true;
        const newErrors = {
            email: "",
            password: "",
        };

        if (!formData.email) {
            newErrors.email = "Email is required";
            valid = false;
        }

        if (!formData.password) {
            newErrors.password = "Password is required";
            valid = false;
        }

        setErrors(newErrors);

        if (!valid) return;

        console.log(formData);
        localStorage.setItem("token", "abc123");

        // API Call Here

        navigate("/home");
    };


    return (
        <>

            <div className="container">
                <div className="row justify-content-center mt-5">
                    <div className="col-md-5">

                        <div className="card shadow">

                            <div className="card-header bg-primary text-white">
                                <h3 className="text-center">Login</h3>
                            </div>

                            <div className="card-body">

                                <form onSubmit={handleSubmit}>

                                    <div className="mb-3">
                                        <label className="form-label">
                                            Email
                                        </label>

                                        <input
                                            type="email"
                                            className="form-control"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />

                                        <small className="text-danger">
                                            {errors.email}
                                        </small>
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">
                                            Password
                                        </label>

                                        <input
                                            type="password"
                                            className="form-control"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                        />

                                        <small className="text-danger">
                                            {errors.password}
                                        </small>
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn btn-primary w-100"
                                    >
                                        Login
                                    </button>

                                </form>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
export default Login