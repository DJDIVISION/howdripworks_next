import React from 'react';

const initialState = {
    active: "menuOne",
    setActive: () => {}
}

export const MenuContext = React.createContext(initialState);