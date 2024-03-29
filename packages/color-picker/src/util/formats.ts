export class Cmyk {
    constructor(
        public c: number,
        public m: number,
        public y: number,
        public k: number,
        public a: number,
        /** Wheter values are normalized to [0..1] */
        readonly normalized = true
    ) { }
}

export class Hsla {
    constructor(
        public h: number,
        public s: number,
        public l: number,
        public a: number,
        /** Wheter values are normalized to [0..1] */
        readonly normalized = true
    ) { }
}

export class Hsva {
    constructor(
        public h: number,
        public s: number,
        public v: number,
        public a: number,
        /** Wheter values are normalized to [0..1] */
        readonly normalized = true
    ) { }
}

export class Rgba {
    constructor(
        public r: number,
        public g: number,
        public b: number,
        public a: number,
        /** Wheter values are normalized to [0..1] */
        readonly normalized = true
    ) { }
}
