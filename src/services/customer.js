export default class {
    constructor(deps) {
      this.search = deps.search;
  
      this.token = deps.token;
  
      this.proto = deps.proto;
      this.url = deps.coreserviceurl;
  
      this.client = new deps.proto.ChatReqClient(deps.coreserviceurl);
    }
  
    selectCustomerFromMongo() {
      console.log("variable search ", this.search);
  
      console.log("antes del return ", this.token);
  
      console.log("este es el url  ", this.url);
  
      var auth = { Authorization: "Bearer " + this.token };
  
      return this.client
        .selectCustomerFromMongo(this.search, auth)
        .then((res) => {
          console.log("................respuesta del customer", res);
  
          console.log("=========> Total :", res.getTotal());
          console.log("=========> Customer Data :", res.getCustomerdataList());
  
          return res;
        });
    }
  }