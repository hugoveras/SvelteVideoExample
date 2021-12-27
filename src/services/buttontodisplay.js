import { coreserviceurl } from "stores/store.js";

export default class {
  constructor(deps) {
    this.search = deps.search;
    this.token = deps.token;
    this.ButtonToDisplay = deps.ButtonToDisplay;
    this.proto = deps.proto;
    this.id = deps.id;
    this.client = new deps.proto.ChatReqClient(coreserviceurl);
  }

  insertButtonToDisplaytoDatabase() {
    // console.log("antes del return ", this.ButtonToDisplay);
    var auth = { Authorization: "Bearer " + this.token };
    return this.client
      .insertButtonToDisplaytoDatabase(this.ButtonToDisplay, auth)
      .then((res) => {
        // console.log("................respuesta del send msg", res);
        return res;
      });
  }

  selectButtonToDisplayfromDatabase() {
    // console.log("variable search ", this.search);

    // console.log("antes del return ", this.token);

    var auth = { Authorization: "Bearer " + this.token };

    return this.client
      .selectButtonToDisplayfromDatabase(this.search, auth)
      .then((res) => {
        // console.log(
        //   "................respuesta del Document Button To Display",
        //   res
        // );

        // console.log("=========> Total :", res.getTotal());
        console.log(
          "=========> Button To Display Data :",
          res.getButtontodisplaydataList()
        );

        return res;
      });
  }

  updateButtonToDisplaytoDatabase() {
    var req = new this.proto.UpdateButtonToDisplay();
    var filtro = "{" + '"_id"' + ":" + '"' + this.id + '"}';
    req.setId(this.id);
    req.setFilter(filtro);
    console.log("before ", req.getFilter());
    req.setButtontodisplay(this.ButtonToDisplay);
    // console.log("antes del return ", req);
    var auth = { Authorization: "Bearer " + this.token };
    return this.client
      .updateButtonToDisplaytoDatabase(req, auth)
      .then((res) => {
        // console.log("................respuesta del update", res);
        return req;
      });
  }
}
