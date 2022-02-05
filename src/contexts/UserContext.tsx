import { ReactNode, useEffect, useState, createContext } from "react";
import { useRouter } from 'next/router';

interface UserContextData {
    name: string;
    profileImage: File;
}

interface UserContextProvider {
    children: ReactNode;
    name: string;
    userImage: File;
}

export const UserContext = createContext({} as UserContextData);

export function UserProvider({ children, ...rest } : UserContextProvider) {
    const [name, setName] = useState(rest.name);
    const [profileImage, setProfileImage] = useState(rest.userImage ?? null);

    const routes = useRouter();

    useEffect(() => {
        console.log(name, routes.pathname)
        if(name !== undefined)
        {
            if(name && routes.pathname === "/")
                routes.replace("./Home");
            else
                if(routes.pathname !== "/")
                    routes.replace("./")
        }
        
    }, [name])

    return (
        <UserContext.Provider value={{
            name,
            profileImage
        }}>
            {children}
        </UserContext.Provider>
    )
}