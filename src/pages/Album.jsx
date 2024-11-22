import {useState, useEffect} from "react";
import {Link} from "react-router-dom";

function Album() {
    const [albums, setAlbums] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/albums');
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setAlbums(data);
            } catch (error) {
                console.error('Failed to fetch books:', error);
            }
        };

        fetchData()
    }, [] )

    fetch('https://jsonplaceholder.typicode.com/albums/5')
      .then(response => response.json())
      .then(json => console.log(json))

    return (
        <div>
            <h1>Accueil</h1>
            <p>test</p>
            <ul>
                {albums.map(album => (
                    <li key={album.id}>
                        <Link to={`/albums/${album.id}`}> {album.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Album;