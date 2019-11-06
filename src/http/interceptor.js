export const requestInterceptor = (config) => {
    if (config.filter && config.method !== 'get') {
        const { data = {} } = config;
        //过滤假值
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                const item = data[key];
                if (item === null || item === undefined) {
                    delete data[key];
                }
            }
        }
    }
    if (config.method === 'get' && config.data) {
        config.params = config.data;
        delete config.data;
    }
    
    if (config.filter) {
        config.params = config.params || {};
        config.params['__cache__'] = Math.random();
    }
    return config;
};

export const responseInterceptorOnSuccess = (response = {}) => {
    const { data } = response;
    let message;
    let code;
    if (data) {
        if (data.success) {
            return data.data;
        }
        message = data.message || '请求数据失败';
        code = data.code;
    }
    return Promise.reject({
        message,
        code
    });
};

export const responseInterceptorOnError = (error) => {
    
    const defaultMessage = '网络错误 稍后再试';
    
    if (error) {
        return Promise.reject({
            message: error.message || defaultMessage,
            code: null
        });
    }
    
    return Promise.reject({
        message: defaultMessage,
        code: null
    });
    
};