import _ from './lib/util';
import config from './config/index';

const Copy = {
    copy(id = '') {
        let res = false;

        if(_.typeOf(id) !== 'string') {
            console.error('not a valid node selector!');
            return res;
        }

        const _con = _.$(id);
        const _conClone = _con.cloneNode(true);

        const newCopyRange = _.$cEleWithId('div', config.id);
        _.setStyles(newCopyRange, config.styles);
        _.$append(newCopyRange);
        _.$append(_conClone, newCopyRange);
        const _conCopy = _.$(config.id);

        if(document.body.createTextRange) {
            const range = document.body.createTextRange();
            range.moveToElementText(_conCopy);
            range.select();
        } else if(window.getSelection) {
            const selection = window.getSelection();
            const range = document.createRange();
            range.selectNodeContents(_conCopy);
            selection.removeAllRanges();
            selection.addRange(range);
        } else {
            console.error('Don\'t support copy!');
            return res;
        }

        try {
            res = document.execCommand('copy');
            _.$remove(newCopyRange);
            return res;
        } catch (err) {
            _.$remove(newCopyRange);
            console.error('copy fail!');
            return res;
        }
    },
    copyText(text = '') {
        let res = false;

        if(_.typeOf(text) !== 'string') {
            console.error('not a valid text!');
            return res;
        }

        let newTextRange = _.$cEleWithId('textarea');
        newTextRange.value = text;
        _.$append(newTextRange);

        newTextRange.select();

        try {
            res = document.execCommand('copy');
            _.$remove(newTextRange);
            return res;
        } catch (err) {
            _.$remove(newTextRange);
            console.error('copy text fail!');
            return res;
        }
    }
};

export default Copy;