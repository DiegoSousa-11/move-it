import { useEffect, useState, createContext } from "react";
import { useRouter } from 'next/router';
import { IUser, IUserProvider } from "../models/IUser";

export const UserContext = createContext({} as IUser);

export function UserProvider({ children, ...rest } : IUserProvider) {
    const [name, setName] = useState(rest.name ?? null);
    const [profileImage, setProfileImage] = useState("Profile.svg");

    const routes = useRouter();

    useEffect(() => {
        setProfileImage(localStorage.getItem("profileImage"));
        if(name && name !== "undefined") {
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
            profileImage,
            setProfileImage
        }}>
            {children}
        </UserContext.Provider>
    )
}