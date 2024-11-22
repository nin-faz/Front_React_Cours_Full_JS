import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";

function AlbumDetails() {
    const { id } = useParams()
    const [album, setAlbum] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setAlbum(data);
            } catch (error) {
                console.error('Failed to fetch books:', error);
            }
        };

        fetchData()
    }, [] )

    return (
        <div className="container-fluid">
            <p>Id du créateur de l'album : {album.userId}</p>
            <p>Titre de l'album : {album.title}</p>           
        </div>
    );
}

export default AlbumDetails;