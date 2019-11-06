export const defaultConfig = {
    method: 'get',
    baseURL: '/api',
    withCredentials: true,
    timeout: 30000,
    responseType: 'json',
    maxContentLength: 1024 * 1024 * 1024,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/json;charset=utf-8',
        'Accept': 'application/json;version=3.0;compress=false;'
    },
    filter: false,
    cache: false
};