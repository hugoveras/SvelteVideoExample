import { coreserviceurl } from "stores/store.js";

export default class {
  constructor(deps) {
    this.search = deps.search;
    this.token = deps.token;
    this.LabelsMetadata = deps.LabelsMetadata;
    this.proto = deps.proto;
    this.id = deps.id;
    this.client = new deps.proto.ChatReqClient(coreserviceurl);
  }

  insertLabelMetadatatoDatabase() {
    // console.log("antes del return ", this.ButtonToDisplay);
    var auth = { Authorization: "Bearer " + this.token };
    return this.client
      .insertLabelMetadatatoDatabase(this.LabelsMetadata, auth)
      .then((res) => {
        // console.log("................respuesta del send msg", res);
        return res;
      });
  }

  selectLabelMetadatafromDatabase() {
    // console.log("variable search ", this.search);

    // console.log("antes del return ", this.token);

    var auth = { Authorization: "Bearer " + this.token };

    return this.client
      .selectLabelMetadatafromDatabase(this.search, auth)
      .then((res) => {
        // console.log(
        //   "................respuesta del Document Button To Display",
        //   res
        // );

        // console.log("=========> Total :", res.getTotal());
        console.log(
          "=========> Labels Metadata Data :",
          res.getLabelmetadatadataList()
        );

        return res;
      });
  }

  updateLabelMetadatatoDatabase() {
    var req = new this.proto.UpdateLabelMetadata();
    var filtro = "{" + '"_id"' + ":" + '"' + this.id + '"}';
    req.setId(this.id);
    req.setFilter(filtro);
    console.log("before ", req.getFilter());
    req.setLabelmetadata(this.LabelsMetadata);
    // console.log("antes del return ", req);
    var auth = { Authorization: "Bearer " + this.token };
    return this.client
      .updateLabelMetadatatoDatabase(req, auth)
      .then((res) => {
        // console.log("................respuesta del update", res);
        return req;
      });
  }
}
