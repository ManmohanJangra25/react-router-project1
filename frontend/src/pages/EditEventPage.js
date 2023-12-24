import { useParams } from "react-router-dom";

export default function EditEventPage() {

    const params = useParams();

    return(
        <>
            <h1>EditEventPage</h1>
            <p>{params.id}</p>
        </>
    );
}