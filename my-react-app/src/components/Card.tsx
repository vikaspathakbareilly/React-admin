type Props = {
    name: string;
    price: number;
};

function Card({ name, price }: Props) {
    return (
        <div className="card">
            <h3>{name}</h3>

            <p>₹ {price}</p>

            <button>Buy Now</button>
        </div>
    );
}

export default Card;