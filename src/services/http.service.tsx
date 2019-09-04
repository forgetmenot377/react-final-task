import axios from 'axios';
import { BASE_URL } from '../constants/common';

const successHandler = (response: any) => response;
const errorHandler = (error: any) => {
    throw error;
};

export const generateHttpHandler = (handler: any, onSuccess = successHandler, onError = errorHandler) => {
    return handler.then(onSuccess).catch(onError)};

export const HttpService = {
    get(url: string, config: any) {
        return generateHttpHandler(axios.get(url, config));
    },
    post(url: string, data: any, config: any = null) {
        return generateHttpHandler(axios.post(url, data, config));
    },
    put(url: string, data: any, config: any) {
        return generateHttpHandler(axios.put(url, data, config));
    },
    delete(url: string, config: any) {
        return generateHttpHandler(axios.delete(url, config));
    }
};

export default {
    logIn: (data: any) => HttpService.post(`${BASE_URL}/login`, data),
    logOut: (data: any, config: any) => HttpService.post(`${BASE_URL}/logout`, data, config),
}
