import { HttpHeaders } from "@angular/common/http";
import { config } from "../../environments/environment";
import { decrypt } from "./crypto-helper";

export function authHeader(): HttpHeaders {

    const data = localStorage.getItem(config.authToken) as string;

    const token = decrypt(data);

    const httpHeaders = new HttpHeaders({
        Authorization: 'Bearer ' + token
    });

    return httpHeaders;
}


