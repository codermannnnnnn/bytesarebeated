/* eslint indent: ["error", "tab", { "outerIIFEBody": 0 }] */

(function() {
class audioProcessor extends AudioWorkletProcessor {
	constructor(...args) {
		super(...args);
		this.audioSample = 0;
		this.byteSample = 0;
		this.func = () => 0;
		this.isPlaying = false;
		this.sampleRatio = 1;
		this.lastByteValue = NaN;
		this.lastFlooredTime = -1;
		this.lastFuncValue = NaN;
		this.lastValue = 0;
		this.mode = 'Bytebeat';
		this.port.onmessage = ({ data }) => this.receiveData(data);
	}
	static getErrorMessage(err, time) {
		const when = time === null ? 'compilation' : 't=' + time;
		if(err instanceof Error) {
			return `${ when } error: ${ err.message } (at line ${
				err.lineNumber - 3 }, character ${ err.columnNumber })`;
		} else {
			return `${ when } thrown: ${ JSON.stringify(err) }`;
		}
	}
	process(inputs, outputs, parameters) {
		const chData = outputs[0][0];
		const chDataLen = chData.length;
		if(!chDataLen) {
			return true;
		}
		if(!this.isPlaying) {
			chData.fill(0);
			return true;
		}
		let time = this.sampleRatio * this.audioSample;
		let { byteSample } = this;
		const drawBuffer = [];
		const isBytebeat = this.mode === 'Bytebeat';
		const isFloatbeat = this.mode === 'Floatbeat';
		for(let i = 0; i < chDataLen; ++i) {
			time += this.sampleRatio;
			const flooredTime = Math.floor(time);
			if(this.lastFlooredTime !== flooredTime) {
				let funcValue;
				const flooredSample = Math.floor(byteSample);
				try {
					funcValue = +this.func(flooredSample);
				} catch(err) {
					this.sendData({ error: { message: audioProcessor.getErrorMessage(err, flooredSample) } });
					funcValue = NaN;
				}
				if(funcValue !== this.lastFuncValue) {
					if(isNaN(funcValue)) {
						this.lastByteValue = NaN;
					} else if(isBytebeat) {
						this.lastByteValue = funcValue & 255;
						this.lastValue = this.lastByteValue / 127.5 - 1;
					} else if(isFloatbeat) {
						this.lastValue = funcValue = Math.max(Math.min(funcValue, 1), -1);
						this.lastByteValue = Math.round((funcValue + 1) * 127.5);
					} else { // "Signed Byteveat"
						this.lastByteValue = (funcValue + 128) & 255;
						this.lastValue = this.lastByteValue / 127.5 - 1;
					}
					drawBuffer.push({ t: flooredSample, value: this.lastByteValue });
				}
				byteSample += flooredTime - this.lastFlooredTime;
				this.lastFuncValue = funcValue;
				this.lastFlooredTime = flooredTime;
			}
			chData[i] = this.lastValue;
		}
		if(Math.abs(byteSample) > Number.MAX_SAFE_INTEGER) {
			this.resetTime();
			return true;
		}
		this.audioSample += chDataLen;
		this.byteSample = byteSample;
		this.sendData({ drawBuffer, byteSample });
		return true;
	}
	receiveData(data) {
		if(data.byteSample !== undefined) {
			this.byteSample = +data.byteSample || 0;
			this.resetValues();
		}
		if(data.isPlaying !== undefined) {
			this.isPlaying = data.isPlaying;
		}
		if(data.mode !== undefined) {
			this.mode = data.mode;
		}
		if(data.setFunction !== undefined) {
			this.setFunction(data.setFunction);
		}
		if(data.resetTime === true) {
			this.resetTime();
		}
		if(data.sampleRatio !== undefined) {
			this.setSampleRatio(data.sampleRatio);
		}
	}
	sendData(data) {
		this.port.postMessage(data);
	}
	resetTime() {
		this.byteSample = 0;
		this.resetValues();
		this.sendData({ byteSample: 0 });
	}
	resetValues() {
		this.audioSample = this.lastValue = 0;
		this.lastByteValue = this.lastFuncValue = NaN;
		this.lastFlooredTime = -1;
	}
	setFunction(codeText) {
		const oldFunc = this.func;
		// Create shortened Math functions
		const params = Object.getOwnPropertyNames(Math);
		const values = params.map(k => Math[k]);
		params.push('int', 'window');
		values.push(Math.floor, globalThis);
		// Delete single letter variables to prevent persistent variable errors (covers a good enough range)
		for(let i = 0; i < 26; ++i) {
			delete globalThis[String.fromCharCode(65 + i)];
			delete globalThis[String.fromCharCode(97 + i)];
		}
		// Delete global variables
		for(const i in globalThis) {
			delete globalThis[i];
		}
		// Test bytebeat code
		let isCompiled = false;
		try {
			this.func = new Function(...params, 't', `return 0,\n${ codeText.trim() || 0 };`)
				.bind(globalThis, ...values);
			isCompiled = true;
			this.func(0);
		} catch(err) {
			if(!isCompiled) {
				this.func = oldFunc;
			}
			this.sendData({
				error: {
					message: audioProcessor.getErrorMessage(err, isCompiled ? 0 : null),
					isCompiled
				},
				updateUrl: isCompiled
			});
			return;
		}
		this.sendData({ error: { message: '', isCompiled }, updateUrl: true });
	}
	setSampleRatio(sampleRatio) {
		const flooredTimeOffset = Math.floor(this.sampleRatio * this.audioSample) - this.lastFlooredTime;
		this.sampleRatio = sampleRatio;
		this.lastFlooredTime = Math.floor(sampleRatio * this.audioSample) - flooredTimeOffset;
	}
}

registerProcessor('audioProcessor', audioProcessor);
})();
