class formatUri {
    constructor(uri) {
        this.uri = uri
    }
    addParams(params) {
        let str = ""
        Object.keys(params).forEach(item => {
            str += `${item}=${params[item]}&`
        })
        this.uri = this.uri.indexOf("=") ? `${this.uri}&${str}` : `${this.uri}?${str}`
	return this
    }
    getUri() {
        return this.uri.substr(0,this.uri.length - 1)
    } 
}

export default formatUri
