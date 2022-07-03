import { Response } from "express";

export const ok = (res: Response, data?: any, message?: string) => {
    return res.status(200).send({
        data,
        message,
    });
};

export const badRquest = (res: Response, message?: string, error?: any) => {
    return res.status(400).send({
        message,
        error,
    });
};

export const serverError = (res: Response, message?: string, error?: any) => {
    return res.status(500).send({
        message,
        error,
    });
};
