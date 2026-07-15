export interface LoginRequest {
    email: string;
    password: string;
}

export interface LoginResponse {
    success: boolean;
    message: string;
    data: {
        accessToken: string;
        refreshToken?: string;
        user: {
            _id: string;
            firstName: string;
            lastName: string;
            email: string;
        };
    }
}