// Credit: https://github.com/kitajs/html

/** Same as a string type but allows autocompletion of literal values */
type AnyString = string & {};

declare namespace JSX {
	type Child = string | boolean | number | undefined;
	type Children = Child | Array<Children>;
	type Props<T = {}> = T & { children?: Children };

	type Element = string;

	interface HtmlTag extends ElementChildrenAttribute, IntrinsicAttributes {
		accesskey?: undefined | string;
		class?: undefined | string;
		contenteditable?: undefined | string;
		dir?: undefined | string;
		hidden?: undefined | string | boolean;
		id?: undefined | string;
		role?: undefined | string;
		lang?: undefined | string;
		draggable?: undefined | string | boolean;
		spellcheck?: undefined | string | boolean;
		tabindex?: undefined | number | string;
		title?: undefined | string;
		translate?: undefined | string | boolean;
		style?: undefined | string;
	}

	interface HtmlAnchorTag extends HtmlTag {
		href?: undefined | string;
		hreflang?: undefined | string;
		target?: undefined | string;
		download?: undefined | string;
		referrerpolicy?: undefined | string;
		ping?: undefined | string;
		rel?: undefined | string;
		media?: undefined | string;
		type?: undefined | string;
	}

	interface HtmlAreaTag extends HtmlTag {
		alt?: undefined | string;
		coords?: undefined | string;
		shape?: undefined | string;
		href?: undefined | string;
		target?: undefined | string;
		ping?: undefined | string;
		rel?: undefined | string;
		media?: undefined | string;
		hreflang?: undefined | string;
		type?: undefined | string;
	}

	interface HtmlAudioTag extends HtmlTag {
		src?: undefined | string;
		autobuffer?: undefined | string;
		autoplay?: undefined | string | boolean;
		preload?: undefined | string;
		muted?: undefined | string | boolean;
		loop?: undefined | string | boolean;
		controls?: undefined | string;
	}

	interface BaseTag extends HtmlTag {
		href?: undefined | string;
		target?: undefined | string;
	}

	interface HtmlQuoteTag extends HtmlTag {
		cite?: undefined | string;
	}

	interface HtmlBodyTag extends HtmlTag {}

	interface HtmlButtonTag extends HtmlTag {
		action?: undefined | string;
		autofocus?: undefined | boolean;
		disabled?: undefined | boolean;
		enctype?: undefined | string;
		form?: undefined | string;
		method?: undefined | string;
		name?: undefined | string;
		novalidate?: undefined | string | boolean;
		target?: undefined | string;
		type?: undefined | string;
		value?: undefined | string;
	}

	interface HtmlDataListTag extends HtmlTag {}

	interface HtmlCanvasTag extends HtmlTag {
		width?: undefined | string;
		height?: undefined | string;
	}

	interface HtmlTableColTag extends HtmlTag {
		span?: undefined | string;
	}

	interface HtmlTableSectionTag extends HtmlTag {}

	interface HtmlTableRowTag extends HtmlTag {}

	interface DataTag extends HtmlTag {
		value?: undefined | string;
	}

	interface HtmlEmbedTag extends HtmlTag, Record<string, any> {
		src?: undefined | string;
		type?: undefined | string;
		width?: undefined | string;
		height?: undefined | string;
	}

	interface HtmlFieldSetTag extends HtmlTag {
		disabled?: undefined | boolean;
		form?: undefined | string;
		name?: undefined | string;
	}

	interface HtmlFormTag extends HtmlTag {
		["accept-charset"]?: undefined | string;
		action?: undefined | string;
		autocomplete?: undefined | string;
		enctype?: undefined | string;
		method?: undefined | string;
		name?: undefined | string;
		novalidate?: undefined | string | boolean;
		target?: undefined | string;
	}

	interface HtmlHtmlTag extends HtmlTag {
		manifest?: undefined | string;
	}

	interface HtmlIFrameTag extends HtmlTag {
		src?: undefined | string;
		srcdoc?: undefined | string;
		name?: undefined | string;
		sandbox?: undefined | string;
		seamless?: undefined | string;
		width?: undefined | string;
		height?: undefined | string;
	}

	interface HtmlImageTag extends HtmlTag {
		alt?: undefined | string;
		src?: undefined | string;
		crossorigin?: undefined | string | boolean;
		usemap?: undefined | string;
		ismap?: undefined | string;
		width?: undefined | number | string;
		height?: undefined | number | string;
		decoding?: "sync" | "async" | "auto" | AnyString;
		loading?: "eager" | "lazy" | AnyString;
		srcset?: string;
	}

	interface HtmlInputTag extends HtmlTag {
		accept?: undefined | string;
		action?: undefined | string;
		alt?: undefined | string;
		autocomplete?: undefined | string;
		autofocus?: undefined | boolean;
		checked?: undefined | string | boolean;
		disabled?: undefined | boolean;
		enctype?: undefined | string;
		form?: undefined | string;
		height?: undefined | string;
		list?: undefined | string;
		max?: undefined | string;
		minlength?: undefined | number | string;
		maxlength?: undefined | number | string;
		method?: undefined | string;
		min?: undefined | string;
		multiple?: undefined | string;
		name?: undefined | string;
		novalidate?: undefined | string | boolean;
		pattern?: undefined | string;
		placeholder?: undefined | string;
		readonly?: undefined | string;
		required?: undefined | string;
		size?: undefined | string;
		src?: undefined | string;
		step?: undefined | string;
		target?: undefined | string;
		type?: undefined | string;
		value?: undefined | string;
		width?: undefined | string;
	}

	interface HtmlModTag extends HtmlTag {
		cite?: undefined | string;
		datetime?: undefined | string | Date;
	}

	interface KeygenTag extends HtmlTag {
		autofocus?: undefined | boolean;
		challenge?: undefined | string;
		disabled?: undefined | boolean;
		form?: undefined | string;
		keytype?: undefined | string;
		name?: undefined | string;
	}

	interface HtmlLabelTag extends HtmlTag {
		form?: undefined | string;
		for?: undefined | string;
	}

	interface HtmlLITag extends HtmlTag {
		value?: undefined | string | number;
	}

	interface HtmlLinkTag extends HtmlTag {
		href?: undefined | string;
		crossorigin?: undefined | string | boolean;
		rel?: undefined | string;
		as?: undefined | string;
		media?: undefined | string;
		hreflang?: undefined | string;
		type?: undefined | string;
		sizes?: undefined | string;
		integrity?: undefined | string;
	}

	interface HtmlMapTag extends HtmlTag {
		name?: undefined | string;
	}

	interface HtmlMetaTag extends HtmlTag {
		name?: undefined | string;
		property?: undefined | string;
		["http-equiv"]?: undefined | string;
		content?: undefined | string;
		charset?: undefined | string;
	}

	interface HtmlMeterTag extends HtmlTag {
		value?: undefined | string | number;
		min?: undefined | string | number;
		max?: undefined | string | number;
		low?: undefined | string | number;
		high?: undefined | string | number;
		optimum?: undefined | string | number;
	}

	interface HtmlObjectTag extends HtmlTag {
		data?: undefined | string;
		type?: undefined | string;
		name?: undefined | string;
		usemap?: undefined | string;
		form?: undefined | string;
		width?: undefined | string;
		height?: undefined | string;
	}

	interface HtmlOListTag extends HtmlTag {
		reversed?: undefined | string;
		start?: undefined | string | number;
	}

	interface HtmlOptgroupTag extends HtmlTag {
		disabled?: undefined | boolean;
		label?: undefined | string;
	}

	interface HtmlOptionTag extends HtmlTag {
		disabled?: undefined | boolean;
		label?: undefined | string;
		selected?: undefined | boolean | string;
		value?: undefined | string;
	}

	interface HtmlOutputTag extends HtmlTag {
		for?: undefined | string;
		form?: undefined | string;
		name?: undefined | string;
	}

	interface HtmlParamTag extends HtmlTag {
		name?: undefined | string;
		value?: undefined | string;
	}

	interface HtmlProgressTag extends HtmlTag {
		value?: undefined | string | number;
		max?: undefined | string | number;
	}

	interface HtmlCommandTag extends HtmlTag {
		type?: undefined | string;
		label?: undefined | string;
		icon?: undefined | string;
		disabled?: undefined | boolean;
		checked?: undefined | string;
		radiogroup?: undefined | string;
		default?: undefined | string;
	}

	interface HtmlLegendTag extends HtmlTag {}

	interface HtmlBrowserButtonTag extends HtmlTag {
		type?: undefined | string;
	}

	interface HtmlMenuTag extends HtmlTag {
		type?: undefined | string;
		label?: undefined | string;
	}

	interface HtmlScriptTag extends HtmlTag {
		src?: undefined | string;
		type?: undefined | string;
		charset?: undefined | string;
		async?: undefined | string | boolean;
		defer?: undefined | string | boolean;
		crossorigin?: undefined | string | boolean;
		integrity?: undefined | string;
		text?: undefined | string;
	}

	interface HtmlDetailsTag extends HtmlTag {
		open?: undefined | string | boolean;
	}

	interface HtmlSelectTag extends HtmlTag {
		autofocus?: undefined | boolean;
		disabled?: undefined | boolean;
		form?: undefined | string;
		multiple?: undefined | string;
		name?: undefined | string;
		required?: undefined | string;
		size?: undefined | string;
	}

	interface HtmlSourceTag extends HtmlTag {
		src?: undefined | string;
		type?: undefined | string;
		media?: undefined | string;
	}

	interface HtmlStyleTag extends HtmlTag {
		media?: undefined | string;
		type?: undefined | string;
		disabled?: undefined | boolean;
		scoped?: undefined | string;
	}

	interface HtmlTableTag extends HtmlTag {}

	interface HtmlTableDataCellTag extends HtmlTag {
		colspan?: undefined | string | number;
		rowspan?: undefined | string | number;
		headers?: undefined | string;
	}

	interface HtmlTextAreaTag extends HtmlTag {
		autofocus?: undefined | boolean;
		cols?: undefined | string;
		dirname?: undefined | string;
		disabled?: undefined | boolean;
		form?: undefined | string;
		maxlength?: undefined | number | string;
		minlength?: undefined | number | string;
		name?: undefined | string;
		placeholder?: undefined | string;
		readonly?: undefined | string;
		required?: undefined | string;
		rows?: undefined | string;
		wrap?: undefined | string;
	}

	interface HtmlTableHeaderCellTag extends HtmlTag {
		colspan?: undefined | string | number;
		rowspan?: undefined | string | number;
		headers?: undefined | string;
		scope?: undefined | string;
	}

	interface HtmlTimeTag extends HtmlTag {
		datetime?: undefined | string | Date;
	}

	interface HtmlTrackTag extends HtmlTag {
		default?: undefined | string;
		kind?: undefined | string;
		label?: undefined | string;
		src?: undefined | string;
		srclang?: undefined | string;
	}

	interface HtmlVideoTag extends HtmlTag {
		src?: undefined | string;
		poster?: undefined | string;
		autobuffer?: undefined | string;
		autoplay?: undefined | string | boolean;
		loop?: undefined | string | boolean;
		controls?: undefined | string | boolean;
		muted?: undefined | string | boolean;
		playsinline?: undefined | string | boolean;
		width?: undefined | string;
		height?: undefined | string;
	}

	// We allow any attributes on svg because its hard to keep track of them all.
	interface HtmlSvgTag extends HtmlTag, Record<string, any> {}

	interface HtmlUnspecifiedTag extends HtmlTag, Record<string, any> {
		of: string;
	}

	interface HtmlBodyTag {
		onafterprint?: undefined | string;
		onbeforeprint?: undefined | string;
		onbeforeonload?: undefined | string;
		onblur?: undefined | string;
		onerror?: undefined | string;
		onfocus?: undefined | string;
		onhaschange?: undefined | string;
		onload?: undefined | string;
		onmessage?: undefined | string;
		onoffline?: undefined | string;
		ononline?: undefined | string;
		onpagehide?: undefined | string;
		onpageshow?: undefined | string;
		onpopstate?: undefined | string;
		onredo?: undefined | string;
		onresize?: undefined | string;
		onstorage?: undefined | string;
		onundo?: undefined | string;
		onunload?: undefined | string;
	}

	interface IntrinsicAttributes {}

	interface ElementChildrenAttribute {
		children?: undefined | any;
	}

	interface IntrinsicElements {
		a: HtmlAnchorTag;
		abbr: HtmlTag;
		address: HtmlTag;
		animate: HtmlSvgTag;
		animateMotion: HtmlSvgTag;
		animateTransform: HtmlSvgTag;
		area: HtmlAreaTag;
		article: HtmlTag;
		aside: HtmlTag;
		audio: HtmlAudioTag;
		b: HtmlTag;
		base: BaseTag;
		bb: HtmlBrowserButtonTag;
		bdi: HtmlTag;
		bdo: HtmlTag;
		blockquote: HtmlQuoteTag;
		body: HtmlBodyTag;
		br: HtmlTag;
		button: HtmlButtonTag;
		canvas: HtmlCanvasTag;
		caption: HtmlTag;
		circle: HtmlSvgTag;
		cite: HtmlTag;
		clipPath: HtmlSvgTag;
		code: HtmlTag;
		col: HtmlTableColTag;
		colgroup: HtmlTableColTag;
		commands: HtmlCommandTag;
		data: DataTag;
		datalist: HtmlDataListTag;
		dd: HtmlTag;
		defs: HtmlSvgTag;
		del: HtmlModTag;
		desc: HtmlSvgTag;
		details: HtmlDetailsTag;
		dfn: HtmlTag;
		div: HtmlTag;
		dl: HtmlTag;
		dt: HtmlTag;
		ellipse: HtmlSvgTag;
		em: HtmlTag;
		embed: HtmlEmbedTag;
		feBlend: HtmlSvgTag;
		feColorMatrix: HtmlSvgTag;
		feComponentTransfer: HtmlSvgTag;
		feComposite: HtmlSvgTag;
		feConvolveMatrix: HtmlSvgTag;
		feDiffuseLighting: HtmlSvgTag;
		feDisplacementMap: HtmlSvgTag;
		feDistantLight: HtmlSvgTag;
		feDropShadow: HtmlSvgTag;
		feFlood: HtmlSvgTag;
		feFuncA: HtmlSvgTag;
		feFuncB: HtmlSvgTag;
		feFuncG: HtmlSvgTag;
		feFuncR: HtmlSvgTag;
		feGaussianBlur: HtmlSvgTag;
		feImage: HtmlSvgTag;
		feMerge: HtmlSvgTag;
		feMergeNode: HtmlSvgTag;
		feMorphology: HtmlSvgTag;
		feOffset: HtmlSvgTag;
		fePointLight: HtmlSvgTag;
		feSpecularLighting: HtmlSvgTag;
		feSpotLight: HtmlSvgTag;
		feTile: HtmlSvgTag;
		feTurbulence: HtmlSvgTag;
		fieldset: HtmlFieldSetTag;
		figcaption: HtmlTag;
		figure: HtmlTag;
		filter: HtmlSvgTag;
		footer: HtmlTag;
		foreignObject: HtmlSvgTag;
		form: HtmlFormTag;
		g: HtmlSvgTag;
		h1: HtmlTag;
		h2: HtmlTag;
		h3: HtmlTag;
		h4: HtmlTag;
		h5: HtmlTag;
		h6: HtmlTag;
		head: HtmlTag;
		header: HtmlTag;
		hgroup: HtmlTag;
		hr: HtmlTag;
		html: HtmlHtmlTag;
		i: HtmlTag;
		iframe: HtmlIFrameTag;
		image: HtmlSvgTag;
		img: HtmlImageTag;
		input: HtmlInputTag;
		ins: HtmlModTag;
		kbd: HtmlTag;
		keygen: KeygenTag;
		label: HtmlLabelTag;
		legend: HtmlLegendTag;
		li: HtmlLITag;
		line: HtmlSvgTag;
		linearGradient: HtmlSvgTag;
		link: HtmlLinkTag;
		main: HtmlTag;
		map: HtmlMapTag;
		mark: HtmlTag;
		marker: HtmlSvgTag;
		mask: HtmlSvgTag;
		menu: HtmlMenuTag;
		meta: HtmlMetaTag;
		metadata: HtmlSvgTag;
		meter: HtmlMeterTag;
		mpath: HtmlSvgTag;
		nav: HtmlTag;
		noscript: HtmlTag;
		object: HtmlObjectTag;
		ol: HtmlOListTag;
		optgroup: HtmlOptgroupTag;
		option: HtmlOptionTag;
		output: HtmlOutputTag;
		p: HtmlTag;
		param: HtmlParamTag;
		path: HtmlSvgTag;
		pattern: HtmlSvgTag;
		polygon: HtmlSvgTag;
		polyline: HtmlSvgTag;
		pre: HtmlTag;
		progress: HtmlProgressTag;
		q: HtmlQuoteTag;
		radialGradient: HtmlSvgTag;
		rb: HtmlTag;
		rect: HtmlSvgTag;
		rp: HtmlTag;
		rt: HtmlTag;
		rtc: HtmlTag;
		ruby: HtmlTag;
		s: HtmlTag;
		samp: HtmlTag;
		script: HtmlScriptTag;
		section: HtmlTag;
		select: HtmlSelectTag;
		set: HtmlSvgTag;
		small: HtmlTag;
		source: HtmlSourceTag;
		span: HtmlTag;
		stop: HtmlSvgTag;
		strong: HtmlTag;
		style: HtmlStyleTag;
		sub: HtmlTag;
		summary: HtmlTag;
		sup: HtmlTag;
		svg: HtmlSvgTag;
		switch: HtmlSvgTag;
		symbol: HtmlSvgTag;
		table: HtmlTableTag;
		tag: HtmlUnspecifiedTag;
		tbody: HtmlTag;
		td: HtmlTableDataCellTag;
		template: HtmlTag;
		text: HtmlSvgTag;
		textarea: HtmlTextAreaTag;
		textPath: HtmlSvgTag;
		tfoot: HtmlTableSectionTag;
		th: HtmlTableHeaderCellTag;
		thead: HtmlTableSectionTag;
		time: HtmlTimeTag;
		title: HtmlTag;
		tr: HtmlTableRowTag;
		track: HtmlTrackTag;
		tspan: HtmlSvgTag;
		u: HtmlTag;
		ul: HtmlTag;
		use: HtmlSvgTag;
		var: HtmlTag;
		video: HtmlVideoTag;
		view: HtmlSvgTag;
		wbr: HtmlTag;
	}
}
