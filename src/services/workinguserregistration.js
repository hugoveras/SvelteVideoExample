import { coreserviceurl } from "stores/store.js";

export default class{
    constructor(deps){
        this.id = deps.id,
        this.token = deps.token,
        this.proto = deps.proto;
        this.search = deps.search;
        this.reqUserRegistration = deps.reqUserRegistration;
        this.client = new deps.proto.ChatReqClient(coreserviceurl)
        
    }
    selectUserRegistration(){
        var auth = { Authorization: "Bearer " + this.token };
        console.log("search==> ", this.search);
        return this.client.selectUserRegistration(this.search, auth ).then(res=>{
            console.log("................respuesta con el token ",res)
            return res
        })
    } 

    userRegistration() {
      var auth = { Authorization: "Bearer " + this.token };
        console.log("antes del return ", this.reqUserRegistration);
        return this.client.userRegistration(this.reqUserRegistration, auth).then((res) => {
          console.log("................respuesta del udrt ", res);
          return res;
        });
      }

      updateUserRegistration() {
        var req = new this.proto.ReqUpdateUserRegistration();
        var filtro = "{"  + "\"_id\"" + ":" + "\"" + this.id + "\"}";
        req.setId(this.id);
        req.setFilter(filtro);
        req.setUserregistration(this.reqUserRegistration);
        var auth = { Authorization: "Bearer " + this.token };
        console.log("antes del return updateUserRegistration", req);
        return this.client.updateUserRegistration(req, auth).then((res) => {
          console.log("................respuesta del udrt ", res);
          return res;
        });
      }

}