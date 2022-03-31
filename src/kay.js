import React, {useState} from 'react';

const Kay = () => {
    const [count, handleUpdate] = useState({number: 0});
    return (
        <div>
            <h1>Counter: {count.number}</h1>
            <hr></hr>
            <button onClick={() => handleUpdate({number: count.number +1})}>INCREASE</button>
            <button onClick={() => handleUpdate({number: count.number -1})}>DECREASE</button>
            
        </div>
    );
}

export default Kay;
