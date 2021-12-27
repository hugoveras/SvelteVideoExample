import { coreserviceurl } from "stores/store.js";

export default class {
  constructor(deps) {
    this.search = deps.search;
    this.MenuRequest = deps.MenuRequest;
    this.token = deps.token;
    this.MenuOptionSave = deps.MenuOptionSave;
    this.proto = deps.proto;
    this.id = deps.id;
    this.client = new deps.proto.ChatReqClient(coreserviceurl);
  }

  insertMenuOptionuptoDatabase() {
    console.log("antes del return ", this.MenuOptionSave);
    var auth = { Authorization: "Bearer " + this.token };
    return this.client.insertMenuOptionuptoDatabase(this.MenuOptionSave, auth).then((res) => {
      console.log("................respuesta del send msg", res);
      return res;
    });
  }

  selectMenuOptionfromDatabase() {
    console.log("variable search ", this.search);

    console.log("antes del return ", this.token);

    var auth = { Authorization: "Bearer " + this.token };

    return this.client
      .selectMenuOptionfromDatabase(this.search, auth)
      .then((res) => {
        console.log("................respuesta del Document Menu Option", res);

        console.log("=========> Total :", res.getTotal());
        console.log("=========> Menu Option Data :", res.getMenuoptiondataList());

        return res;
      });
  }

  updateMenuOptiontoDatabase(){
        
    var req = new this.proto.UpdateMenuOption();
    var filtro = "{"  + "\"_id\"" + ":" + "\"" + this.id + "\"}";
    req.setId(this.id);
    req.setFilter(filtro);
    console.log("before ",req.getFilter());
    req.setMenuoption(this.MenuOptionSave);
    console.log("antes del return ", req);
    var auth={"Authorization" : "Bearer " + this.token};
    return this.client.updateMenuOptiontoDatabase(req, auth ).then(res=>{
            console.log("................respuesta del update",res)
            return req

    })
}


selectMenufromDatabase() {
  console.log("variable search menu list", this.MenuRequest);

  console.log("antes del return ", this.token);

  var auth = { Authorization: "Bearer " + this.token };

  return this.client
    .selectMenufromDatabase(this.MenuRequest, auth)
    .then((res) => {
      console.log("................respuesta del Document Menu Option", res);

     

      return res;
    });
}


}
