import {  coreserviceregisterurl } from "stores/store.js";

export default class{
    constructor(deps){
        this.id = deps.id,
        this.token = deps.token,
        this.proto = deps.proto;
        this.search = deps.search;
        this.reqUserRegistration = deps.reqUserRegistration;
        this.clientOutToken = new deps.proto.UserRegistrationReqClient(coreserviceregisterurl)
    }

    userRegistration() {
        console.log("antes del return ", this.reqUserRegistration);
        return this.clientOutToken.userRegistration(this.reqUserRegistration).then((res) => {
          console.log("................respuesta del udrt ", res);
          return res;
        });
      }


}