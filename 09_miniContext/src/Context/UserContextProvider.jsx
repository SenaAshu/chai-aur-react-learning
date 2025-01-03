import React from "react";
import UserContexts from "./UserContexts.js";
import { useState } from "react";

const UserContextProvider = ({children}) => {

    const [user,setUser] = useState(null);
    return(
        <UserContexts.Provider value={{user,setUser}}>
            {children}
        </UserContexts.Provider>
    )
}

export default UserContextProvider