export namespace ent {
	
	export class ImageEdges {
	    actor?: Actor;
	    mediaSource?: MediaSource;
	    media?: Media;
	    mediaas?: Media;
	
	    static createFrom(source: any = {}) {
	        return new ImageEdges(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.actor = this.convertValues(source["actor"], Actor);
	        this.mediaSource = this.convertValues(source["mediaSource"], MediaSource);
	        this.media = this.convertValues(source["media"], Media);
	        this.mediaas = this.convertValues(source["mediaas"], Media);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class Image {
	    id?: string;
	    path?: string;
	    checksum?: string;
	    fileSizeBytes?: number;
	    mimeType?: string;
	    widthPx?: number;
	    heightPx?: number;
	    altText?: string;
	    caption?: string;
	    // Go type: time
	    createdAt?: any;
	    // Go type: time
	    updatedAt?: any;
	    display_type?: string;
	    edges: ImageEdges;
	
	    static createFrom(source: any = {}) {
	        return new Image(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.id = source["id"];
	        this.path = source["path"];
	        this.checksum = source["checksum"];
	        this.fileSizeBytes = source["fileSizeBytes"];
	        this.mimeType = source["mimeType"];
	        this.widthPx = source["widthPx"];
	        this.heightPx = source["heightPx"];
	        this.altText = source["altText"];
	        this.caption = source["caption"];
	        this.createdAt = this.convertValues(source["createdAt"], null);
	        this.updatedAt = this.convertValues(source["updatedAt"], null);
	        this.display_type = source["display_type"];
	        this.edges = this.convertValues(source["edges"], ImageEdges);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class MediaSourceEdges {
	    thumbnail?: Image;
	    medias?: Media;
	
	    static createFrom(source: any = {}) {
	        return new MediaSourceEdges(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.thumbnail = this.convertValues(source["thumbnail"], Image);
	        this.medias = this.convertValues(source["medias"], Media);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class MediaSource {
	    id?: string;
	    name?: string;
	    url?: string;
	    edges: MediaSourceEdges;
	
	    static createFrom(source: any = {}) {
	        return new MediaSource(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.id = source["id"];
	        this.name = source["name"];
	        this.url = source["url"];
	        this.edges = this.convertValues(source["edges"], MediaSourceEdges);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class GenreEdges {
	    medias?: Media[];
	
	    static createFrom(source: any = {}) {
	        return new GenreEdges(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.medias = this.convertValues(source["medias"], Media);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class Genre {
	    id?: string;
	    name?: string;
	    edges: GenreEdges;
	
	    static createFrom(source: any = {}) {
	        return new Genre(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.id = source["id"];
	        this.name = source["name"];
	        this.edges = this.convertValues(source["edges"], GenreEdges);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class MediaEdges {
	    actors?: Actor[];
	    genres?: Genre[];
	    sources?: MediaSource[];
	    thumbnail?: Image;
	    previews?: Image[];
	
	    static createFrom(source: any = {}) {
	        return new MediaEdges(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.actors = this.convertValues(source["actors"], Actor);
	        this.genres = this.convertValues(source["genres"], Genre);
	        this.sources = this.convertValues(source["sources"], MediaSource);
	        this.thumbnail = this.convertValues(source["thumbnail"], Image);
	        this.previews = this.convertValues(source["previews"], Image);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class Media {
	    id?: string;
	    title?: string;
	    code?: string;
	    durationSeconds?: number;
	    // Go type: time
	    releaseDate?: any;
	    description?: string;
	    edges: MediaEdges;
	
	    static createFrom(source: any = {}) {
	        return new Media(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.id = source["id"];
	        this.title = source["title"];
	        this.code = source["code"];
	        this.durationSeconds = source["durationSeconds"];
	        this.releaseDate = this.convertValues(source["releaseDate"], null);
	        this.description = source["description"];
	        this.edges = this.convertValues(source["edges"], MediaEdges);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class ActorEdges {
	    medias?: Media[];
	    thumbnail?: Image;
	
	    static createFrom(source: any = {}) {
	        return new ActorEdges(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.medias = this.convertValues(source["medias"], Media);
	        this.thumbnail = this.convertValues(source["thumbnail"], Image);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class Actor {
	    id?: string;
	    name?: string;
	    // Go type: time
	    birthdate?: any;
	    heightCm?: number;
	    gender?: string;
	    edges: ActorEdges;
	
	    static createFrom(source: any = {}) {
	        return new Actor(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.id = source["id"];
	        this.name = source["name"];
	        this.birthdate = this.convertValues(source["birthdate"], null);
	        this.heightCm = source["heightCm"];
	        this.gender = source["gender"];
	        this.edges = this.convertValues(source["edges"], ActorEdges);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	
	
	
	
	
	
	
	

}

export namespace media {
	
	export class CreateInput {
	    Title: string;
	    Code: string;
	    DurationSeconds?: number;
	    // Go type: time
	    ReleaseDate?: any;
	    Description?: string;
	
	    static createFrom(source: any = {}) {
	        return new CreateInput(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Title = source["Title"];
	        this.Code = source["Code"];
	        this.DurationSeconds = source["DurationSeconds"];
	        this.ReleaseDate = this.convertValues(source["ReleaseDate"], null);
	        this.Description = source["Description"];
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}

}

