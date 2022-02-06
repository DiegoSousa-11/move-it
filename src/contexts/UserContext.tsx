import { ReactNode, useEffect, useState, createContext } from "react";
import { useRouter } from 'next/router';

interface UserContextData {
    name: string;
    profileImage: string;
}

interface UserContextProvider {
    children: ReactNode;
    name: string;
}

export const UserContext = createContext({} as UserContextData);

export function UserProvider({ children, ...rest } : UserContextProvider) {
    const [name, setName] = useState(rest.name ?? null);
    const [profileImage, setProfileImage] = useState("Profile.svg");

    const routes = useRouter();

    useEffect(() => {
        setProfileImage(localStorage.getItem("profileImage"));
        if(name && name !== "undefined") {
            console.log(name, routes.pathname)
            if(routes.pathname === "/")
                routes.replace("./Home");
        }
        else {
            if(routes.pathname !== "/")
                routes.replace("./");
        }
    }, [])

    return (
        <UserContext.Provider value={{
            name,
            profileImage
        }}>
            {children}
        </UserContext.Provider>
    )
}