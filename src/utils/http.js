import request from '../http/index.js';

export const $http = request.create({
    timeout: 500000
});