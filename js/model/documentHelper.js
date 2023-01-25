export class documentHelper {
    constructor(obj){
        this._obj = obj;
    }
    getType = () =>{return typeof(this._obj);}
    setContent = (content) =>{alert({test:(<p>test</p>)});}
}

export class elementHelper {
    constructor(obj){
        this._obj = obj;
    }
    getType = () =>{return typeof(this._obj);}
    setContent = (content) =>{alert({test:(<p>test</p>)});}
}

