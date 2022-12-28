import { NextFunction } from "express";
export class HTTPErrors {
    static call_400() {
        throw new Error("HTTP ERRO 400 NOT IMPLEMENTED!")
    }
    static call_401() {
        throw new Error("HTTP ERRO 401 NOT IMPLEMENTED!")
    }
    static call_402() {
        throw new Error("HTTP ERRO 402 NOT IMPLEMENTED!")
    }
    static call_403() {
        throw new Error("HTTP ERRO 403 NOT IMPLEMENTED!")
    }
    static call_404(n:NextFunction, entity: any, message: string) {
        if(!entity) {
            return Promise.resolve(n({
                status: 404,
                message: message,
                data: {},
              }))
        }
        return Promise.resolve()
    }
    static call_405() {
        throw new Error("HTTP ERRO 405 NOT IMPLEMENTED!")
    }
    static call_406() {
        throw new Error("HTTP ERRO 406 NOT IMPLEMENTED!")
    }
    static call_407() {
        throw new Error("HTTP ERRO 407 NOT IMPLEMENTED!")
    }
    static call_408() {
        throw new Error("HTTP ERRO 408 NOT IMPLEMENTED!")
    }
    static call_409() {
        throw new Error("HTTP ERRO 409 NOT IMPLEMENTED!")
    }
    static call_410() {
        throw new Error("HTTP ERRO 410 NOT IMPLEMENTED!")
    }
    static call_411() {
        throw new Error("HTTP ERRO 411 NOT IMPLEMENTED!")
    }
    static call_412() {
        throw new Error("HTTP ERRO 412 NOT IMPLEMENTED!")
    }
    static call_413() {
        throw new Error("HTTP ERRO 413 NOT IMPLEMENTED!")
    }
    static call_414() {
        throw new Error("HTTP ERRO 414 NOT IMPLEMENTED!")
    }
    static call_415() {
        throw new Error("HTTP ERRO 415 NOT IMPLEMENTED!")
    }
    static call_416() {
        throw new Error("HTTP ERRO 416 NOT IMPLEMENTED!")
    }
    static call_417() {
        throw new Error("HTTP ERRO 417 NOT IMPLEMENTED!")
    }
    static call_418() {
        throw new Error("HTTP ERRO 418 NOT IMPLEMENTED!")
    }
}