import { useState } from "react";

function Counter () {
    const [count, setCount] = useState(0);
    return (
        <div className="card">
        
            <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
            </button>
            <br></br>
        </div>
    );
}

export default Counter;