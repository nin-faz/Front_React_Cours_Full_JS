import { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { AuthContext } from '../context/AuthContext.jsx';

Bonjour.propTypes = {
    name: PropTypes.string.isRequired,
    setName: PropTypes.func.isRequired
};

function Bonjour({ name, setName }) {
    const { user } = useContext(AuthContext);
    // const [userBonjour, setUserBonjour] = useState(user);
    //
    // useEffect(() => {
    //     setUserBonjour(user);
    // }, [userBonjour]);

    return (
        <div className="card">
            <h1>
                Bonjour {user?.lastname} {user?.firstname}
            </h1>
            <input type="text" onChange={(event) => setName(event.target.value)} />
        </div>
    );
}

export default Bonjour;
