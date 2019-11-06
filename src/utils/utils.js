//清除缓存
export function clearAllCache() {
    localStorage.clear();
    sessionStorage.clear();

    const keys = document.cookie.match(/[^ =;]+(?=\=)/g);
    const patt = /(\.[a-z0-9]+\.(cn|com))$/;
    let cookieVal2 = `=0;path=/;expires=${new Date(0).toUTCString()}`;

    if (patt.test(location.hostname)) cookieVal2 += `;domain=${RegExp.$1}`;

    if (keys) {
        for (let i = keys.length; i--; ) {
            document.cookie = `${keys[i]}=0;path=/scan;expires=${new Date(
                0
            ).toUTCString()}`;
            document.cookie = keys[i] + cookieVal2;
        }
    }
}

export function tmsEncodeURIComponent(obj) {
    return encodeURIComponent(JSON.stringify(obj));
}

export function tmsDecodeURIComponent(str) {
    return JSON.parse(decodeURIComponent(str));
}

export function setCookie(key, val, expiresDays) {
    let expiresStr = '';
    //判断是否设置expiresDays
    if (expiresDays){
        //说明要保存Cookie有效期
        const date = new Date();
        date.setTime(date.getTime()+expiresDays*24*3600*1000);//这里是微秒,格式化时间
        expiresStr = `expires=${  date.toGMTString()  };` ;
    } else {
        expiresStr = '';
    }
    //拼接Cookie,注意大小写
    document.cookie = `${key}=${escape(val)};${expiresStr}`;//escape()字符串进行编码
}

export function getCookie(key) {
    //Cookie存储格式："key1=val1; key2=val2; key3=val3"
    const getCookie = document.cookie.replace(/[ ]/g,'');//把[ ] 换成 '' 
    //通过';'分割成数组
    const resArr = getCookie.split(';');
    let res;
    for (let i = 0; i < resArr.length; i++) {
        const arr = resArr[i].split('=');
        //判断传入key是否找到存储对应的val
        if (arr[0] === key){
            res = arr[1];
            break;
        }
    }
    return unescape(res);//解码
}