import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";

function Home() {
    const products = [
        {
            id: 1,
            name: "Laptop",
            price: 65000,
        },
        {
            id: 2,
            name: "Mobile",
            price: 25000,
        },
        {
            id: 3,
            name: "Headphone",
            price: 3000,
        },
    ];

    return (
        <>


            <div className="container">


                <div className="card-container">
                    {products.map((product) => (
                        <Card
                            key={product.id}
                            name={product.name}
                            price={product.price}
                        />
                    ))}
                </div>
            </div>

            {/* <Footer /> */}
        </>
    );
}

export default Home;