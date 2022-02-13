import { ReactNode } from "react";

interface IUser {
    name: string;
    profileImage: string;
    setProfileImage: (any) => void;
}

interface IUserProvider {
    children: ReactNode;
    name: string;
}

export type { IUser, IUserProvider };