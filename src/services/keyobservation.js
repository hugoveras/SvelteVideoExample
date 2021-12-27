import { coreserviceurl } from "stores/store.js";

export default class {
  constructor(deps) {
    this.search = deps.search;
    this.token = deps.token;
    this.msg = deps.keyObservations;
    this.proto = deps.proto;
    this.id = deps.id;
    this.client = new deps.proto.ChatReqClient(coreserviceurl);
  }

  sendMsg() {
    console.log("antes del return ", this.msg);
    var auth = { Authorization: "Bearer " + this.token };
    return this.client.sendMsg(this.msg, auth).then((res) => {
      console.log("................respuesta del send msg", res);
      return res;
    });
  }

  selectDocumentFromMongo() {
    console.log("variable search ", this.search);

    console.log("antes del return ", this.token);

    var auth = { Authorization: "Bearer " + this.token };

    return this.client
      .selectDocumentFromMongo(this.search, auth)
      .then((res) => {
        console.log("................respuesta del Document Key Observation", res);

        console.log("=========> Total :", res.getTotal());
        console.log("=========> Key Observation Data :", res.getDataList());

        return res;
      });
  }

  updateDocumentToMongo(){
        
    var req = new this.proto.UpdateRequest();
    var filtro = "{"  + "\"_id\"" + ":" + "\"" + this.id + "\"}";
    req.setId(this.id);
    req.setFilter(filtro);
    console.log("before ",req.getFilter());
    req.setMsg(this.msg);
    console.log("antes del return ", req);
    var auth={"Authorization" : "Bearer " + this.token};
    return this.client.updateDocumentToMongo(req, auth ).then(res=>{
            console.log("................respuesta del update",res)
            return req

    })
}
}
