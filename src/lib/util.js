const _ = {
    typeOf(o) {
        return o === null
            ? String(o)
            : ({}).toString.call(o).slice(8, -1).toLowerCase();
    },
    $(x) {
        if(_.typeOf(x) !== 'string') {
            return x;
        }
        return document.getElementById(x);
    },
    $cEleWithId(tag, id = '') {
        const newEle = document.createElement(tag);

        if(id) {
            newEle.id = id;
        }

        return newEle;
    },
    $append(newEle, ele = '') {
        ele = ele || document.body;

        ele.appendChild(newEle);
    },
    $remove(rEle, ele = '') {
        ele = ele || document.body;

        ele.removeChild(rEle);
    },
    setStyles(ele, styles) {
        if(ele.setAttribute) {
            // not ie
            ele.setAttribute('style', styles);
        } else if(ele.style.cssText) {
            // ie
            ele.style.cssText = styles;
        } else {
            console.error('Don\'t support set style');
        }
    }
};

export default _;