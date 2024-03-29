import { httpClient } from "./httpClient";
const PATH = "/users"

export interface LoginResponse {
    access_token: string;
    token_type: string;
}
export interface IProfile {
    id: string
    username: string
    avatar: string
    profile_colour: string
    first_seen: string
}


export const login = async (username: string) => {
    return await httpClient.post<LoginResponse>(`${PATH}/login`, { username });
}

export const register = async (username: string, autoLogin = false) => {
    return await httpClient.post(`${PATH}`, { username, 'auto_login': autoLogin });
}

export const profile = async () => {
    return await httpClient.get<IProfile>(`${PATH}/profile`);
}








