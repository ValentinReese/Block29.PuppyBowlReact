import { useParams } from "react-router-dom";


export default function SinglePlayer() {

    const {puppyId} = useParams();

    return (
        <>
            <div>
                <h1>PLAYER DETAILS</h1>
            </div>
        </>
    );
}