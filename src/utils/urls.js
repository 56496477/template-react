const urls = {
    getCnode: '/api/v1/topics',
};

// 获取url参数
export const getQueryString = function(names, urls) {
 	let _urls = urls || window.location.href;
    _urls && _urls.indexOf('?') > -1 ? _urls = urls.substring(urls.indexOf('?') + 1) : '';
    const reg = new RegExp(`(^|&)${  names  }=([^&]*)(&|$)`, 'i');
    const r = _urls ? _urls.match(reg) : window.location.search.substr(1).match(reg);
    if (r !== null && r[2] !== '') return decodeURI(r[2]);

    return null;
};

// 解析url {} 值
export const parseApiUrl = function( str, data) {
    const tmpl = `${'var __p=[];' + 'with(obj||{}){__p.push(\''}${ 
            str.replace( /\\/g, '\\\\' )
                .replace( /'/g, '\\\'' )
                .replace( /{([\s\S]+?)}/g, function( match, code ) {
                    return `',${  code.replace( /\\'/, '\'' )  },'`;
                } )
                .replace( /\r/g, '\\r' )
                .replace( /\n/g, '\\n' )
                .replace( /\t/g, '\\t' ) 
        }');}return __p.join("");`,

        /* jsbint evil:true */
        func = new Function( 'obj', tmpl );
    return data ? func( data ) : func;
};

export default urls;