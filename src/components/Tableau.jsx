import React, { useState } from 'react';
//import PropTypes from 'prop-types';

/*
Bonjour.propTypes = {
    name: PropTypes.string.isRequired,
    setName: PropTypes.func.isRequired,
};
*/


function Tableau() {
    const [number, setNumber] = useState([]);

    function tableau100() {
        const numArray = [];
        for (let i = 1; i <= 100; i++) {
            numArray.push(i);
        }
        setNumber(numArray);
    }

    function afficherMultiple5() {
        tableau100();
        setNumber((prevNumber) => prevNumber.filter((num) => num % 5 === 0));
    }

    React.useEffect(() => {
        tableau100();
    }, []);

    return (
        <div className="container-fluid">
            <tab>
                <thead>
                    <tr>
                        <th>
                            <button onClick={() => afficherMultiple5()}>
                            Afficher les multiples de 5</button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {number.map((num) => (
                        <tr key={num}>
                            <td>{num}</td>
                        </tr>
                    ))}
                </tbody>
            </tab>
        </div>
    );
}

export default Tableau;
