import Text from "./Text";
import Line from "./Line";

export default class CjsTextProxy extends Text {
	
	// cjs.Text METHODS
	
	// getMeasuredHeight()              : Done
	// getMeasuredLineHeight()          : TODO
	// getMeasuredWidth()               : TODO
	// getMetrics()                     : TODO
	
	// cjs.Text PROPERTIES
	
	// color                            : mapped to `fillColor`
	// font                             : watched, will layout
	// lineHeight                       : watched, will layout
	// lineWidth                        : mapped to `width`
	// maxWidth                         : TODO: Not supported?
	// outline                          : TODO: Not supported?
	// text                             : watched, will layout
	// textAlign                        : mapped to `align`
	// textBaseline                     : TODO: Not supported?
	
	constructor(text, font, color = null, moreProps: {}) {
		if (color === null) {
			color = "#000";
		}
		const fontProps = CjsTextProxy._processFontArgument(font);
		const props = {text, font: fontProps.font, size: fontProps.size, fillColor: color};
		Object.assign(props, moreProps);
		super(props);
		
		this.on('fontChanged', () => this.layout());
		this.on('lineHeightChanged', () => this.layout());
		this.on('textChanged', () => this.layout());
	}

	protected static _processFontArgument(s: string) {
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
		this.layout();
	}

	get color(): string {
		return this.fillColor;
	}

	set color(value: string) {
		this.fillColor = value;
		this.layout();
	}

	get textAlign(): number {
		return this.align;
	}

	set textAlign(value: number) {
		this.align = value;
		this.layout();
	}
	
	getMeasuredHeight() {
		let h = 0;
		this.lines.forEach((line: Line) => {
			h += line.measuredHeight;
		});
		return h;
	}

}