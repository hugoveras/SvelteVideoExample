import { coreserviceurl } from "stores/store.js";

export default class {
  constructor(deps) {
    this.search = deps.search;
    this.token = deps.token;
    this.inputWorkingWithDashboard = deps.inputWorkingWithDashboard;
    this.proto = deps.proto;
    this.id = deps.id;
    this.client = new deps.proto.ChatReqClient(coreserviceurl);
  }

  selectDashboardFromMongo() {
    console.log("variable search ", this.search);

    console.log("antes del return ", this.token);

    var auth = { Authorization: "Bearer " + this.token };

    return this.client
      .selectDashboardFromMongo(this.search, auth)
      .then((res) => {
        console.log("................respuesta del Document Key Observation", res);

        console.log("=========> Total :", res.getTotal());
        console.log("=========> Key Observation Data :", res.getDashboarddataList());

        return res;
      });
  }

  insertDashboardToMongo(){
    console.log("antes del return ", this.inputWorkingWithDashboard);
    var auth = { Authorization: "Bearer " + this.token };
    return this.client.insertDashboardToMongo(this.inputWorkingWithDashboard, auth).then((res) => {
      console.log("................respuesta del working with dashboard", res);
      return res;
    });
  }
  
  updateDashboardToMongo(){
        
    var req = new this.proto.UpdateDashboard();
    var filtro = "{"  + "\"_id\"" + ":" + "\"" + this.id + "\"}";
    req.setId(this.id);
    req.setFilter(filtro);
    console.log("before ",req.getFilter());
    req.setDashboard(this.inputWorkingWithDashboard);
    console.log("antes del return ", req);
    var auth={"Authorization" : "Bearer " + this.token};
    return this.client.updateDashboardToMongo(req, auth ).then(res=>{
            console.log("................respuesta del update",res)
            return req

    })
}
}
