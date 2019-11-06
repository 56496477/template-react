import axios from 'axios';
import { defaultConfig } from './defaultConfig';
import {
    requestInterceptor,
    responseInterceptorOnError,
    responseInterceptorOnSuccess
} from './interceptor';

export const create = () => {

    const http = axios.create(defaultConfig);

    http.interceptors.request.use(requestInterceptor);
    http.interceptors.response.use(
        responseInterceptorOnSuccess,
        responseInterceptorOnError
    );

    http.get = (url, data = {}, config = {}) => {
        return http.request({
            url,
            params: data,
            ...config
        });
    };

    http.delete = (url, data = {}, config = {}) => {
        return http.request({
            url,
            method: 'delete',
            params: data,
            ...config
        });
    };

    return http;
};

const $http = create();

$http.create = create;

export default $http;