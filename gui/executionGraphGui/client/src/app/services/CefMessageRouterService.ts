import { Injectable } from '@angular/core';
import * as msgpack from 'msgpack-lite';
import * as ab2s from 'arraybuffer-to-string';

type CefRequest = {
    request: string,
    persistent: boolean,
    onSuccess: (response: any) => any,
    onFailure: (errorCode: number, errorMessage: string) => void
};

type CefWindow = {
    cefQuery: (request: CefRequest) => void
};

@Injectable()
export class CefMessageRouterService {

    private readonly cef: CefWindow;

    constructor() {
        if(!window.hasOwnProperty("cefQuery")) {
            console.error(`[CefMessageRouterService] No CEF available`);
        }
        this.cef = window as any;
    }

    public execute<T>(requestId: string, payload: any) : Promise<T> {
        console.log(`[CefMessageRouterService] Executing '${requestId}'`);

        return new Promise((resolve, reject) => {
            var requestString = JSON.stringify({requestId: requestId, payload: payload});
            var requestBinary = ab2s(msgpack.encode(requestString)); // UInt8Array zu binary string

            this.cef.cefQuery({
                request: requestBinary,
                persistent: false,
                onSuccess: response => {
                    console.log(`[CefMessageRouterService] Response for '${requestId}': ${response}`);
                    resolve(response);
                },
                onFailure: (errorCode, errorMessage) => {
                    console.error(`[CefMessageRouterService] Request '${requestId}' failed (${errorCode}): ${errorMessage}`);
                    reject(errorMessage);
                }
            });
        });
    }
}