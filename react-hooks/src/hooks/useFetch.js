import React from 'react';

export function useFetch(url, method = "get") {
    const [state, setState] = React.useState({
        data: null,
        loading: true
    });

    React.useEffect(function() {
        fetch(url, { method: method})
        .then(response => response.json())
        .then(json => setState({
            data: json, 
            loading: false
        }));
        
    }, [url, method]);

    return state;
}