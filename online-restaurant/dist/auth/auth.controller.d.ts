import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(req: any): Promise<{
        access_token: string;
    }>;
    register(email: string, password: string, firstName: string, lastName: string): Promise<import("../users/entities/user.entity").User>;
}
