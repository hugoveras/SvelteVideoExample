export default class {
    constructor(deps) {
      this.reqDashboardStatistics = deps.reqDashboardStatistics;
      this.ReqStatisticsByUserYearMonth = deps.ReqStatisticsByUserYearMonth;
      this.token = deps.token;
  
      this.proto = deps.proto;
      this.url = deps.coreserviceurl;
  
      this.client = new deps.proto.ChatReqClient(deps.coreserviceurl);
    }
  
    getDashboardStatistics() {
      console.log("variable search ", this.reqDashboardStatistics);
  
      console.log("antes del return ", this.token);
  
      console.log("este es el url  ", this.url);
  
      var auth = { Authorization: "Bearer " + this.token };
  
      return this.client
        .getDashboardStatistics(this.reqDashboardStatistics, auth)
        .then((res) => {
          console.log("................respuesta del dashboard", res);
  
        //   console.log("=========> Total :", res.getTotal());
        //   console.log("=========> Customer Data :", res.getCustomerdataList());
  
          return res;
        });
    }

    getStatisticsByUserYearMonth() {
      console.log("variable search ", this.ReqStatisticsByUserYearMonth);
  
      console.log("antes del return ", this.token);
  
      console.log("este es el url  ", this.url);
  
      var auth = { Authorization: "Bearer " + this.token };
  
      return this.client
        .getStatisticsByUserYearMonth(this.ReqStatisticsByUserYearMonth, auth)
        .then((res) => {
          console.log("................respuesta del dashboard", res);  
          return res;
        });
    }
  }