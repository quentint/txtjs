import Formatter from "./Formatter";
import CjsTextProxy from "./CjsTextProxy";

export default class CjsRichText extends CjsTextProxy {

	_formatter: Formatter;
	_richText = '';

	constructor(text, font, color = null, moreProps = {}) {
		super(text, font, color, moreProps);
		this._formatter = new Formatter();
	}

	get formatter() {
		return this._formatter;
	}

	get richText() {
		return this._richText;
	}

	set richText(s) {
		if (s === this._richText) {
			return;
		}
		this._formatter.setRichText(this, s);
	}

}
