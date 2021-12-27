import { coreserviceurl } from "stores/store.js";

export default class {
  constructor(deps) {
    this.search = deps.search;
    this.token = deps.token;
    this.MenuGroupSave = deps.MenuGroupSave;
    this.proto = deps.proto;
    this.id = deps.id;
    this.client = new deps.proto.ChatReqClient(coreserviceurl);
  }

  insertMenuGrouptoDatabase() {
    console.log("antes del return ", this.MenuGroupSave);
    var auth = { Authorization: "Bearer " + this.token };
    return this.client.insertMenuGrouptoDatabase(this.MenuGroupSave, auth).then((res) => {
      console.log("................respuesta del send msg", res);
      return res;
    });
  }

  selectMenuGroupfromDatabase() {
    console.log("variable search ", this.search);

    console.log("antes del return ", this.token);

    var auth = { Authorization: "Bearer " + this.token };

    return this.client
      .selectMenuGroupfromDatabase(this.search, auth)
      .then((res) => {
        console.log("................respuesta del Document Menu Group", res);

        console.log("=========> Total :", res.getTotal());
        console.log("=========> Menu Group Data :", res.getMenugroupdataList());

        return res;
      });
  }

  updateMenuGrouptoDatabase(){
        
    var req = new this.proto.UpdateMenuGroup();
    var filtro = "{"  + "\"_id\"" + ":" + "\"" + this.id + "\"}";
    req.setId(this.id);
    req.setFilter(filtro);
    console.log("before ",req.getFilter());
    req.setMenugroup(this.MenuGroupSave);
    console.log("antes del return ", req);
    var auth={"Authorization" : "Bearer " + this.token};
    return this.client.updateMenuGrouptoDatabase(req, auth ).then(res=>{
            console.log("................respuesta del update",res)
            return req

    })
}
}
