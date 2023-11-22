import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

function UseLocalStorage(key) {
    const [localData, setLocalData] = useState(localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : []);

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(localData));
    }, [localData]);

    function handleLocalStorage(data) {
        setLocalData([...localData, data]);
    }

    return [localData, handleLocalStorage];
}

export default UseLocalStorage;
