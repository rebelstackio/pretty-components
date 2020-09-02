require('../handlers');
require('../css/general.css');
const { PrettyButton } = require('../components/Button');
require('../components/DropDown');
require('../components/Input');
require('../components/Spiner');
require('../components/Tag');
require('../components/Card');
require('../components/Collapse');
require('../components/Collapse/CollapseItem');
require('../components/InputNumber');
require('../components/Modal');
require('../components/Menu');
require('../components/Menu/MenuItem');
require('../components/Template');
require('@fortawesome/fontawesome-free/js/all');

HTMLElement.prototype._sel = function (query, isAll) {
	if (isAll) return this.querySelectorAll(query);
	return this.querySelector(query);
}

const _$D = document;

module.exports = { PrettyButton }