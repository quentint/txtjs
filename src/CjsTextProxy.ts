import Text from "./Text";
import Line from "./Line";
import Align from "./Align";

export default class CjsTextProxy extends Text {
	
	static defaultFont = "12px 'belinda'";
	static defaultColor = "#000";
	
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
	
	constructor(text = '', font = null, color = null, moreProps: {}) {
		if (font === null) {
			font = CjsTextProxy.defaultFont;
		}
		if (color === null) {
			color = CjsTextProxy.defaultColor;
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
	
	// TODO: "start" and "end"

	get textAlign(): string {
		if (this.align === Align.TOP_LEFT) {
			return 'left';
		} else if (this.align === Align.TOP_CENTER) {
			return 'center';
		} else if (this.align === Align.TOP_RIGHT) {
			return 'right';
		}
		return '?';
	}

	set textAlign(value: string) {
		if (value === 'left') {
			this.align = Align.TOP_LEFT;
		} else if (value === 'center') {
			this.align = Align.TOP_CENTER;
		} else if (value === 'right') {
			this.align = Align.TOP_RIGHT;
		} else {
			return;
		}
		this.layout();
	}
	
	getMeasuredHeight() {
		let h = 0;
		this.lines.forEach((line: Line) => {
			h += line.measuredHeight;
		});
		return h;
	}
	
	setTransform(x?: number, y?: number, scaleX?: number, scaleY?: number, rotation?: number, skewX?: number, skewY?: number, regX?: number, regY?: number): createjs.DisplayObject {
		if (this.textAlign === 'center') {
			x -= this.width / 2;
		} else if (this.textAlign === 'right') {
			x -= this.width;
		}
		return super.setTransform(x, y, scaleX, scaleY, rotation, skewX, skewY, regX, regY);
	}

}