import React from 'react';

export function useCounter(initialValue = 100) {
    const [count, setCount] = React.useState(initialValue);
    
    function inc() {
        setCount(count + 1);
    }

    function dec() {
        setCount(count - 1);
    }
    return [count, inc, dec];
}