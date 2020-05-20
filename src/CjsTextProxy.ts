import Text from "./Text";
import Line from "./Line";

export default class CjsTextProxy extends Text {
	
	// TODO: maxWidth         >    Not supported?
	// TODO: outline          >    Not supported?
	// TODO: textBaseline     >    Not supported?
	
	// TODO: getMeasuredLineHeight()
	// TODO: getMeasuredWidth()
	// TODO: getMetrics()

	constructor(text, font, color = null, moreProps: {}) {
		if (color === null) {
			color = "#000";
		}
		const fontProps = CjsTextProxy._processFontArgument(font);
		const props = {text, font: fontProps.font, size: fontProps.size, fillColor: color};
		Object.assign(props, moreProps);
		super(props);
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
	
	setText(s: string) {
		this.text = s;
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
