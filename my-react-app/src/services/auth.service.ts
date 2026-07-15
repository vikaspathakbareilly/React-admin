import api from "../api/api";

import type { LoginRequest, LoginResponse } from "../interfaces/auth";
class AuthService {

    async login(data: LoginRequest): Promise<LoginResponse> {
        const response = await api.post<LoginResponse>(
            "/auth/login",
            data
        );

        return response.data;
    }

    async logout() {
        return api.post("/auth/logout");
    }
}

export default new AuthService();