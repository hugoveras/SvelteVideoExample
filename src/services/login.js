import { coreserviceurl } from "stores/store.js";

export default class{
    constructor(deps){
        this.username=deps.username,
        this.password=deps.password,
        this.proto = deps.proto;
        //this.client = new deps.proto.ChatReqClient('http://0.0.0.0:50051')
       this.client = new deps.proto.ChatReqClient(coreserviceurl)
    }
    getlogin(){
                var req = new this.proto.Login();
                req.setUsername(this.username);
                req.setPassword(this.password);
                var pass=this.username + ":" + this.password;
                var auth={"authorization" : "Basic " + btoa(pass)};
                return this.client.getLoginToken(req, auth ).then(res=>{
                console.log("................respuesta con el token ",res)
                return res
        })
    } 
}