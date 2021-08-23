import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {

    const [count, setCount] = useState(0);
    const [error, setError] = useState(false);

    return (
        <div data-test="component-counter">
            <h1 data-test="counter-display">
                The counter is currently
                <span data-test="count">{count}</span>
            </h1>
            
            <br />
            {/* Notes:
            - using ternary on the error state to determine whether or not to hide
            - the 'error' and 'hidden' classes are defined in Counter.css
             */}
            <div
                data-test="error-message"
                className={`error ${error ? '' : 'hidden'}`}
            >
                The counter cannot go below 0
            </div>
            <br />
            <button
                data-test="increment-button"
                onClick={() => {
                    if (error) {
                        setError(false)
                    }
                    setCount(count + 1)
                }}
            >
                Increment counter
            </button>
            <button
                data-test="decrement-button"
                onClick={() => {
                    if (count > 0) {
                        setCount(count - 1)
                    } else {
                        setError(true)
                    }
                }}
            >
                Decrement counter
            </button>
        </div>
    )
}

export default Counter;
