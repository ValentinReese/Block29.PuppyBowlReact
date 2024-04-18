import { useNavigate } from "react-router-dom";

export default function PuppyDiv({ puppy }) {

    const navigate = useNavigate()

    function handleClick() {
        navigate(`/single-player/${puppy.id}`);
    }

    return (
        <div>
            <img src={puppy.imageUrl} alt="Puppy" />
            <h1>{puppy.name}</h1>
            <h2>BREED:</h2>
            <p>{puppy.breed}</p>
            <h2>STATUS:</h2>
            <p>{puppy.status}</p>
            <h2>TEAM:</h2>
            <p>{puppy.teamId}</p>
            <div>
                <button onClick={handleClick}>DETAILS</button>
            </div>
        </div>
    );
}