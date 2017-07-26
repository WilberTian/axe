(function(root){

	root.axe = {
		trim,

		deepClone,

		shuffleArr,
		maxArr,
		minArr,

		randomNumber,

		hasClass,
		addClass,
		removeClass,

		browserType

	};

	// string
	function trim(str, type) {
		switch (type) {
			case 1:
				return str.replace(/\s+/g, '');
			case 2:
				return str.replace(/(^\s*)|(\s*$)/g, '');
			case 3:
				return str.replace(/(^\s*)/g, '');
			case 4:
				return str.replace(/(\s*$)/g, '');
			default:
				return str;
		}
	}

	// object
	function deepClone(obj) {
		return JSON.parse(JSON.stringify(obj));
	}

	// array
	function shuffleArr(arr) {

	}

	function maxArr(arr) {
        return Math.max.apply(null, arr);
    }

    function minArr(arr) {
    	return Math.min.apply(null, arr);
    }

    // number
    function randomNumber(start, end) {
        //randomNumber(5,10)
        //返回5-10的随机整数，包括5，10
        if (arguments.length === 2) {
            return Math.round(start + Math.random() * (end - start));
        }
        //randomNumber(10)
        //返回0-10的随机整数，包括0，10
        else if (arguments.length === 1) {
            return Math.round(Math.random() * start)
        }
 		
 		return Math.random();
    }


    // dom
    function hasClass(domObj, className) {
        var classNames = domObj.className.split(/\s+/); 
        return (classNames.indexOf(className) == -1) ? false : true;
    }

    function addClass(domObj, className) {
    	if (!this.hasClass(domObj, className)) {
            domObj.className += " " + className;
        }
    }

    function removeClass(domObj, className) {
    	if (this.hasClass(domObj, className)) {
            var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
            domObj.className = domObj.className.replace(reg, '');
        }
    }

	// bom
	function browserType() {
        var ua = navigator.userAgent;

        return {
            trident: ua.indexOf('Trident') > -1, //IE内核
            presto: ua.indexOf('Presto') > -1, //opera内核
            webKit: ua.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
            gecko: ua.indexOf('Firefox') > -1, //火狐内核Gecko
            mobile: !!ua.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
            ios: !!ua.match(/\(i[^;]+;( U;)? CPua.+Mac OS X/), //ios
            android: ua.indexOf('Android') > -1 || ua.indexOf('Linux') > -1, //android
            iPhone: ua.indexOf('iPhone') > -1 , //iPhone
            iPad: ua.indexOf('iPad') > -1, //iPad
            webApp: ua.indexOf('Safari') > -1 //Safari
        };
    }

    // cookie
    function getCookie(name) {
        if(document.cookie.length > 0) {
            var start = document.cookie.indexOf(name+'=');

            if(start != -1) {
                start = start + name.length + 1;
                end = document.cookie.indexOf(';', start);

                if(end === -1) {
                    end = document.cookie.length;
                }

                return unescape(document.cookie.substring(start, end));
            }
        }

        return '';
    }

    function setCookie(name, value, expires, path, domain, secure) {
        document.cookie = name + "=" + escape(value) +
            // expires需要是GTM格式
            ((expires) ? "; expires=" + expires : "") +
            ((path) ? "; path=" + path : "") +
            ((domain) ? "; domain=" + domain : "") +
            ((secure) ? "; secure" : "");
    }

    function delCookie(name) {
        var date = new Date();
        date.setTime(date.getTime() - 1);
 
        var value = this.getCookie(name);
        if (value !== null) {
            document.cookie = name + "=" + value + "; expires=" + date.toGMTString();
        }
    }


    //
    function getUrlVariables(url) {
        url = url ? window.location.href : url;
        var search = url.substring(url.lastIndexOf("?") + 1),
            obj = {},
            reg = /([^?&=]+)=([^?&=]*)/g;
              
        search.replace(reg, function (rs, $1, $2) {
            var name = decodeURIComponent($1);
            var val = decodeURIComponent($2);                
            val = String(val);
            obj[name] = val;
            return rs;
        });
        
        return obj;
    }


    //
    function escapeHTML(str) {
        return str.replace(/[<>"&]/g, function(match) {
            switch(match) {
                case '<':
                    return '&lt;';
                case '>':
                    return '&gt;';
                case '&':
                    return '&amp;';
                case '\"':
                    return '&quot;';
            }
        })
    }


})(this);