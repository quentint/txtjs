import Text from "./Text";

export default class CjsTextProxy extends Text {

	// font             >    Already mapped
	// lineHeight       >    Already mapped
	// text             >    Already mapped

	// color            >    fillColor
	// lineWidth        >    width
	// textAlign        >    align

	// maxWidth         >    Not supported
	// outline          >    Not supported
	// textBaseline     >    Not supported

	constructor(text, font, color = null, moreProps: {}) {

		super({text});

		const fontProps = this._processFont(font);
		this.font = fontProps.font;
		this.size = fontProps.size;
		if (color) {
			this.fillColor = color;
		}

		this.set(moreProps);
	}

	protected _processFont(s: string) {
		// 30px 'Arial'
		const parts = s.split('px ');
		return {
			size: parseInt(parts[0]),
			font: parts[1].substring(1, parts[1].length - 1)
		}
	}

	get lineWidth(): number {
		return this.width;
	}

	set lineWidth(value: number) {
		this.width = value;
	}

	get color(): string {
		return this.fillColor;
	}

	set color(value: string) {
		this.fillColor = value;
	}

	get textAlign(): number {
		return this.align;
	}

	set textAlign(value: number) {
		this.align = value;
	}

}
