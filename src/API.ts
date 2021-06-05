
import { AppData } from "./data/DataManager"

type APIResponse = {
    type: "error" | "success";
    message?: string;
    code?: string;
}

export type UserData = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    username: string;
    changePasswordOnLogin: boolean;
    isAdmin: boolean;
}

export type UserResponse = APIResponse & {
    user?: UserData;
}

export type DashboardResponse = APIResponse & {
    data?: AppData;
}

class API {
    private static baseUrl = "https://api.gsys.at";


    public static async getDashboardData(): Promise<DashboardResponse> {
        const res = await this.request("/user/dashboard");
        return this.prepareOutput(res);
    }

    public static async setDashboardData(data: AppData): Promise<APIResponse> {
        const res = await this.request("/user/dashboard", {
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
            method: "post",
        });
        return this.prepareOutput(res);
    }

    /**
     * Requests the user who's currently logged in.
     */
    public static async me(): Promise<UserResponse> {
        const res = await this.request("/user/me");
        return this.prepareOutput(res);
    }



    //#region Private Helper Functions

    private static async prepareOutput(res: Response): Promise<APIResponse> {
        if(res.status === 200 && res.body) {
            const json = await res.json();
            if(json.type === "error") {
                this.error(json.code, json.message);
            }

            return json;
        } else {
            this.error("UNKNOWN_ERROR", "Unbekannter Fehler.");
            return new Promise<APIResponse>(r => r({
                type: "error",
                code: "UNKNOWN_ERROR",
                message: "Unbekannter Fehler.",
            }));
        }
    }

    private static async error(code: string, message: string) {
        alert("Fehler bei der Serveranfrage (Code " + code + "):\n" + message);
    }

    private static async request(url: string, options: RequestInit = {}) {
        if(!this.baseUrl) {
            console.error("No baseUrl for API request set!");
        }

        return await fetch(this.baseUrl + url, {
            credentials: "include",
            ...options
        });
    }

    //#endregion

}

export default API;