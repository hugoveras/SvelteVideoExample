// source: chat.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

goog.exportSymbol('proto.chat.ButtonToDisplay', null, global);
goog.exportSymbol('proto.chat.ButtonToDisplayData', null, global);
goog.exportSymbol('proto.chat.ButtonToDisplayList', null, global);
goog.exportSymbol('proto.chat.ButtonToDisplayRequest', null, global);
goog.exportSymbol('proto.chat.Customer', null, global);
goog.exportSymbol('proto.chat.CustomerAddressType', null, global);
goog.exportSymbol('proto.chat.CustomerContactType', null, global);
goog.exportSymbol('proto.chat.CustomerList', null, global);
goog.exportSymbol('proto.chat.Dashboard', null, global);
goog.exportSymbol('proto.chat.DashboardContent', null, global);
goog.exportSymbol('proto.chat.DashboardContentReq', null, global);
goog.exportSymbol('proto.chat.DashboardData', null, global);
goog.exportSymbol('proto.chat.DashboardList', null, global);
goog.exportSymbol('proto.chat.DataList', null, global);
goog.exportSymbol('proto.chat.Empty', null, global);
goog.exportSymbol('proto.chat.File', null, global);
goog.exportSymbol('proto.chat.FileDownloadRequest', null, global);
goog.exportSymbol('proto.chat.FileUploadRequest', null, global);
goog.exportSymbol('proto.chat.InsertButtonToDisplay', null, global);
goog.exportSymbol('proto.chat.InsertDashboard', null, global);
goog.exportSymbol('proto.chat.InsertLabelMetadata', null, global);
goog.exportSymbol('proto.chat.InsertMenuGroup', null, global);
goog.exportSymbol('proto.chat.InsertMenuOption', null, global);
goog.exportSymbol('proto.chat.InsertMsg', null, global);
goog.exportSymbol('proto.chat.InsertUserRegistration', null, global);
goog.exportSymbol('proto.chat.LabelMetadata', null, global);
goog.exportSymbol('proto.chat.LabelMetadataData', null, global);
goog.exportSymbol('proto.chat.LabelMetadataList', null, global);
goog.exportSymbol('proto.chat.LabelMetadataRequest', null, global);
goog.exportSymbol('proto.chat.LabelsElements', null, global);
goog.exportSymbol('proto.chat.Login', null, global);
goog.exportSymbol('proto.chat.LoginToken', null, global);
goog.exportSymbol('proto.chat.Menu', null, global);
goog.exportSymbol('proto.chat.MenuGroup', null, global);
goog.exportSymbol('proto.chat.MenuGroupData', null, global);
goog.exportSymbol('proto.chat.MenuGroupList', null, global);
goog.exportSymbol('proto.chat.MenuList', null, global);
goog.exportSymbol('proto.chat.MenuOption', null, global);
goog.exportSymbol('proto.chat.MenuOptionData', null, global);
goog.exportSymbol('proto.chat.MenuOptionList', null, global);
goog.exportSymbol('proto.chat.MenuRequest', null, global);
goog.exportSymbol('proto.chat.MetaData', null, global);
goog.exportSymbol('proto.chat.Msg', null, global);
goog.exportSymbol('proto.chat.RecommendationsCountByMonthYear', null, global);
goog.exportSymbol('proto.chat.RecommendationsCountByUserMonthYear', null, global);
goog.exportSymbol('proto.chat.RecommendationsCountByUserMonthYearList', null, global);
goog.exportSymbol('proto.chat.Req', null, global);
goog.exportSymbol('proto.chat.ReqDashboardStatistics', null, global);
goog.exportSymbol('proto.chat.ReqStatisticsByUserYearMonth', null, global);
goog.exportSymbol('proto.chat.ReqUpdateUserRegistration', null, global);
goog.exportSymbol('proto.chat.ReqUserRegistration', null, global);
goog.exportSymbol('proto.chat.Search', null, global);
goog.exportSymbol('proto.chat.Statistic', null, global);
goog.exportSymbol('proto.chat.StatisticsList', null, global);
goog.exportSymbol('proto.chat.StatusData', null, global);
goog.exportSymbol('proto.chat.Supplier', null, global);
goog.exportSymbol('proto.chat.SupplierAddressType', null, global);
goog.exportSymbol('proto.chat.SupplierContactType', null, global);
goog.exportSymbol('proto.chat.SupplierList', null, global);
goog.exportSymbol('proto.chat.UpdateButtonToDisplay', null, global);
goog.exportSymbol('proto.chat.UpdateDashboard', null, global);
goog.exportSymbol('proto.chat.UpdateLabelMetadata', null, global);
goog.exportSymbol('proto.chat.UpdateMenuGroup', null, global);
goog.exportSymbol('proto.chat.UpdateMenuOption', null, global);
goog.exportSymbol('proto.chat.UpdateRequest', null, global);
goog.exportSymbol('proto.chat.UploadFile', null, global);
goog.exportSymbol('proto.chat.UserRegistration', null, global);
goog.exportSymbol('proto.chat.UserRegistrationList', null, global);
goog.exportSymbol('proto.chat.UserRegistrationProfile', null, global);
goog.exportSymbol('proto.chat.UserType', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.chat.DataList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.chat.DataList.repeatedFields_, null);
};
goog.inherits(proto.chat.DataList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.chat.DataList.displayName = 'proto.chat.DataList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.chat.InsertMsg = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.chat.InsertMsg, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.chat.InsertMsg.displayName = 'proto.chat.InsertMsg';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.chat.Msg = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.chat.Msg, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.chat.Msg.displayName = 'proto.chat.Msg';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.chat.SupplierAddressType = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.chat.SupplierAddressType, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.chat.SupplierAddressType.displayName = 'proto.chat.SupplierAddressType';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.chat.SupplierContactType = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.chat.SupplierContactType, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.chat.SupplierContactType.displayName = 'proto.chat.SupplierContactType';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.chat.Supplier = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.chat.Supplier, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.chat.Supplier.displayName = 'proto.chat.Supplier';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.chat.SupplierList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.chat.SupplierList.repeatedFields_, null);
};
goog.inherits(proto.chat.SupplierList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.chat.SupplierList.displayName = 'proto.chat.SupplierList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.chat.CustomerAddressType = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.chat.CustomerAddressType, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.chat.CustomerAddressType.displayName = 'proto.chat.CustomerAddressType';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.chat.CustomerContactType = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.chat.CustomerContactType, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.chat.CustomerContactType.displayName = 'proto.chat.CustomerContactType';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.chat.Customer = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.chat.Customer, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.chat.Customer.displayName = 'proto.chat.Customer';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.chat.CustomerList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.chat.CustomerList.repeatedFields_, null);
};
goog.inherits(proto.chat.CustomerList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.chat.CustomerList.displayName = 'proto.chat.CustomerList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.chat.Req = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.chat.Req, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.chat.Req.displayName = 'proto.chat.Req';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.chat.Search = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.chat.Search, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.chat.Search.displayName = 'proto.chat.Search';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.chat.UpdateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.chat.UpdateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.chat.UpdateRequest.displayName = 'proto.chat.UpdateRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.chat.Login = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.chat.Login, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.chat.Login.displayName = 'proto.chat.Login';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.chat.LoginToken = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.chat.LoginToken, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.chat.LoginToken.displayName = 'proto.chat.LoginToken';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.chat.Empty = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.chat.Empty, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.chat.Empty.displayName = 'proto.chat.Empty';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.chat.Dashboard = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.chat.Dashboard, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.chat.Dashboard.displayName = 'proto.chat.Dashboard';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.chat.DashboardData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.chat.DashboardData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.chat.DashboardData.displayName = 'proto.chat.DashboardData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.chat.DashboardList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.chat.DashboardList.repeatedFields_, null);
};
goog.inherits(proto.chat.DashboardList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.chat.DashboardList.displayName = 'proto.chat.DashboardList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.chat.InsertDashboard = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.chat.InsertDashboard, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.chat.InsertDashboard.displayName = 'proto.chat.InsertDashboard';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.chat.UpdateDashboard = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.chat.UpdateDashboard, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.chat.UpdateDashboard.displayName = 'proto.chat.UpdateDashboard';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.chat.DashboardContentReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.chat.DashboardContentReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.chat.DashboardContentReq.displayName = 'proto.chat.DashboardContentReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.chat.DashboardContent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.chat.DashboardContent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.chat.DashboardContent.displayName = 'proto.chat.DashboardContent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.chat.UploadFile = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.chat.UploadFile, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.chat.UploadFile.displayName = 'proto.chat.UploadFile';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.chat.MetaData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.chat.MetaData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.chat.MetaData.displayName = 'proto.chat.MetaData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.chat.File = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.chat.File, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.chat.File.displayName = 'proto.chat.File';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.chat.FileUploadRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.chat.FileUploadRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.chat.FileUploadRequest.displayName = 'proto.chat.FileUploadRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.chat.FileDownloadRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.chat.FileDownloadRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.chat.FileDownloadRequest.displayName = 'proto.chat.FileDownloadRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.chat.ReqDashboardStatistics = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.chat.ReqDashboardStatistics, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.chat.ReqDashboardStatistics.displayName = 'proto.chat.ReqDashboardStatistics';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.chat.ReqStatisticsByUserYearMonth = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.chat.ReqStatisticsByUserYearMonth, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.chat.ReqStatisticsByUserYearMonth.displayName = 'proto.chat.ReqStatisticsByUserYearMonth';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.chat.Statistic = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.chat.Statistic, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.chat.Statistic.displayName = 'proto.chat.Statistic';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.chat.ReqUserRegistration = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.chat.ReqUserRegistration.repeatedFields_, null);
};
goog.inherits(proto.chat.ReqUserRegistration, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.chat.ReqUserRegistration.displayName = 'proto.chat.ReqUserRegistration';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.chat.InsertUserRegistration = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.chat.InsertUserRegistration, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.chat.InsertUserRegistration.displayName = 'proto.chat.InsertUserRegistration';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.chat.UserRegistration = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.chat.UserRegistration.repeatedFields_, null);
};
goog.inherits(proto.chat.UserRegistration, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.chat.UserRegistration.displayName = 'proto.chat.UserRegistration';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.chat.UserRegistrationProfile = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.chat.UserRegistrationProfile.repeatedFields_, null);
};
goog.inherits(proto.chat.UserRegistrationProfile, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.chat.UserRegistrationProfile.displayName = 'proto.chat.UserRegistrationProfile';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.chat.UserRegistrationList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.chat.UserRegistrationList.repeatedFields_, null);
};
goog.inherits(proto.chat.UserRegistrationList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.chat.UserRegistrationList.displayName = 'proto.chat.UserRegistrationList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.chat.ReqUpdateUserRegistration = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.chat.ReqUpdateUserRegistration, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.chat.ReqUpdateUserRegistration.displayName = 'proto.chat.ReqUpdateUserRegistration';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.chat.StatusData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.chat.StatusData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.chat.StatusData.displayName = 'proto.chat.StatusData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.chat.RecommendationsCountByMonthYear = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.chat.RecommendationsCountByMonthYear, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.chat.RecommendationsCountByMonthYear.displayName = 'proto.chat.RecommendationsCountByMonthYear';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.chat.StatisticsList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.chat.StatisticsList.repeatedFields_, null);
};
goog.inherits(proto.chat.StatisticsList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.chat.StatisticsList.displayName = 'proto.chat.StatisticsList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.chat.RecommendationsCountByUserMonthYearList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.chat.RecommendationsCountByUserMonthYearList.repeatedFields_, null);
};
goog.inherits(proto.chat.RecommendationsCountByUserMonthYearList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.chat.RecommendationsCountByUserMonthYearList.displayName = 'proto.chat.RecommendationsCountByUserMonthYearList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.chat.RecommendationsCountByUserMonthYear = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.chat.RecommendationsCountByUserMonthYear, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.chat.RecommendationsCountByUserMonthYear.displayName = 'proto.chat.RecommendationsCountByUserMonthYear';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.chat.MenuGroup = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.chat.MenuGroup, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.chat.MenuGroup.displayName = 'proto.chat.MenuGroup';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.chat.MenuGroupData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.chat.MenuGroupData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.chat.MenuGroupData.displayName = 'proto.chat.MenuGroupData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.chat.MenuGroupList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.chat.MenuGroupList.repeatedFields_, null);
};
goog.inherits(proto.chat.MenuGroupList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.chat.MenuGroupList.displayName = 'proto.chat.MenuGroupList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.chat.InsertMenuGroup = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.chat.InsertMenuGroup, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.chat.InsertMenuGroup.displayName = 'proto.chat.InsertMenuGroup';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.chat.UpdateMenuGroup = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.chat.UpdateMenuGroup, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.chat.UpdateMenuGroup.displayName = 'proto.chat.UpdateMenuGroup';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.chat.MenuOption = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.chat.MenuOption, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.chat.MenuOption.displayName = 'proto.chat.MenuOption';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.chat.MenuOptionData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.chat.MenuOptionData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.chat.MenuOptionData.displayName = 'proto.chat.MenuOptionData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.chat.MenuOptionList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.chat.MenuOptionList.repeatedFields_, null);
};
goog.inherits(proto.chat.MenuOptionList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.chat.MenuOptionList.displayName = 'proto.chat.MenuOptionList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.chat.InsertMenuOption = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.chat.InsertMenuOption, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.chat.InsertMenuOption.displayName = 'proto.chat.InsertMenuOption';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.chat.UpdateMenuOption = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.chat.UpdateMenuOption, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.chat.UpdateMenuOption.displayName = 'proto.chat.UpdateMenuOption';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.chat.Menu = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.chat.Menu.repeatedFields_, null);
};
goog.inherits(proto.chat.Menu, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.chat.Menu.displayName = 'proto.chat.Menu';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.chat.MenuList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.chat.MenuList.repeatedFields_, null);
};
goog.inherits(proto.chat.MenuList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.chat.MenuList.displayName = 'proto.chat.MenuList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.chat.MenuRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.chat.MenuRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.chat.MenuRequest.displayName = 'proto.chat.MenuRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.chat.ButtonToDisplay = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.chat.ButtonToDisplay, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.chat.ButtonToDisplay.displayName = 'proto.chat.ButtonToDisplay';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.chat.ButtonToDisplayData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.chat.ButtonToDisplayData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.chat.ButtonToDisplayData.displayName = 'proto.chat.ButtonToDisplayData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.chat.ButtonToDisplayRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.chat.ButtonToDisplayRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.chat.ButtonToDisplayRequest.displayName = 'proto.chat.ButtonToDisplayRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.chat.ButtonToDisplayList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.chat.ButtonToDisplayList.repeatedFields_, null);
};
goog.inherits(proto.chat.ButtonToDisplayList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.chat.ButtonToDisplayList.displayName = 'proto.chat.ButtonToDisplayList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.chat.InsertButtonToDisplay = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.chat.InsertButtonToDisplay, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.chat.InsertButtonToDisplay.displayName = 'proto.chat.InsertButtonToDisplay';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.chat.UpdateButtonToDisplay = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.chat.UpdateButtonToDisplay, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.chat.UpdateButtonToDisplay.displayName = 'proto.chat.UpdateButtonToDisplay';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.chat.LabelMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.chat.LabelMetadata.repeatedFields_, null);
};
goog.inherits(proto.chat.LabelMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.chat.LabelMetadata.displayName = 'proto.chat.LabelMetadata';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.chat.LabelMetadataData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.chat.LabelMetadataData.repeatedFields_, null);
};
goog.inherits(proto.chat.LabelMetadataData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.chat.LabelMetadataData.displayName = 'proto.chat.LabelMetadataData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.chat.LabelsElements = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.chat.LabelsElements, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.chat.LabelsElements.displayName = 'proto.chat.LabelsElements';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.chat.InsertLabelMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.chat.InsertLabelMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.chat.InsertLabelMetadata.displayName = 'proto.chat.InsertLabelMetadata';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.chat.UpdateLabelMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.chat.UpdateLabelMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.chat.UpdateLabelMetadata.displayName = 'proto.chat.UpdateLabelMetadata';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.chat.LabelMetadataList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.chat.LabelMetadataList.repeatedFields_, null);
};
goog.inherits(proto.chat.LabelMetadataList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.chat.LabelMetadataList.displayName = 'proto.chat.LabelMetadataList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.chat.LabelMetadataRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.chat.LabelMetadataRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.chat.LabelMetadataRequest.displayName = 'proto.chat.LabelMetadataRequest';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.chat.DataList.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.chat.DataList.prototype.toObject = function(opt_includeInstance) {
  return proto.chat.DataList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.chat.DataList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.DataList.toObject = function(includeInstance, msg) {
  var f, obj = {
    total: jspb.Message.getFieldWithDefault(msg, 1, 0),
    dataList: jspb.Message.toObjectList(msg.getDataList(),
    proto.chat.InsertMsg.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.chat.DataList}
 */
proto.chat.DataList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.chat.DataList;
  return proto.chat.DataList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.chat.DataList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.chat.DataList}
 */
proto.chat.DataList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotal(value);
      break;
    case 2:
      var value = new proto.chat.InsertMsg;
      reader.readMessage(value,proto.chat.InsertMsg.deserializeBinaryFromReader);
      msg.addData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.chat.DataList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.chat.DataList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.chat.DataList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.DataList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTotal();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getDataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.chat.InsertMsg.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 total = 1;
 * @return {number}
 */
proto.chat.DataList.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.chat.DataList} returns this
 */
proto.chat.DataList.prototype.setTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated InsertMsg data = 2;
 * @return {!Array<!proto.chat.InsertMsg>}
 */
proto.chat.DataList.prototype.getDataList = function() {
  return /** @type{!Array<!proto.chat.InsertMsg>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.chat.InsertMsg, 2));
};


/**
 * @param {!Array<!proto.chat.InsertMsg>} value
 * @return {!proto.chat.DataList} returns this
*/
proto.chat.DataList.prototype.setDataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.chat.InsertMsg=} opt_value
 * @param {number=} opt_index
 * @return {!proto.chat.InsertMsg}
 */
proto.chat.DataList.prototype.addData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.chat.InsertMsg, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.chat.DataList} returns this
 */
proto.chat.DataList.prototype.clearDataList = function() {
  return this.setDataList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.chat.InsertMsg.prototype.toObject = function(opt_includeInstance) {
  return proto.chat.InsertMsg.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.chat.InsertMsg} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.InsertMsg.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    msg: (f = msg.getMsg()) && proto.chat.Msg.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.chat.InsertMsg}
 */
proto.chat.InsertMsg.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.chat.InsertMsg;
  return proto.chat.InsertMsg.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.chat.InsertMsg} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.chat.InsertMsg}
 */
proto.chat.InsertMsg.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new proto.chat.Msg;
      reader.readMessage(value,proto.chat.Msg.deserializeBinaryFromReader);
      msg.setMsg(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.chat.InsertMsg.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.chat.InsertMsg.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.chat.InsertMsg} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.InsertMsg.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMsg();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.chat.Msg.serializeBinaryToWriter
    );
  }
};


/**
 * optional string Id = 1;
 * @return {string}
 */
proto.chat.InsertMsg.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.InsertMsg} returns this
 */
proto.chat.InsertMsg.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Msg msg = 2;
 * @return {?proto.chat.Msg}
 */
proto.chat.InsertMsg.prototype.getMsg = function() {
  return /** @type{?proto.chat.Msg} */ (
    jspb.Message.getWrapperField(this, proto.chat.Msg, 2));
};


/**
 * @param {?proto.chat.Msg|undefined} value
 * @return {!proto.chat.InsertMsg} returns this
*/
proto.chat.InsertMsg.prototype.setMsg = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.chat.InsertMsg} returns this
 */
proto.chat.InsertMsg.prototype.clearMsg = function() {
  return this.setMsg(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.chat.InsertMsg.prototype.hasMsg = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.chat.Msg.prototype.toObject = function(opt_includeInstance) {
  return proto.chat.Msg.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.chat.Msg} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.Msg.toObject = function(includeInstance, msg) {
  var f, obj = {
    customerid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    supplierid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    datecreated: jspb.Message.getFieldWithDefault(msg, 4, ""),
    dateupdated: jspb.Message.getFieldWithDefault(msg, 6, ""),
    status: jspb.Message.getFieldWithDefault(msg, 8, ""),
    observationid: jspb.Message.getFieldWithDefault(msg, 9, 0),
    dashboardid: jspb.Message.getFieldWithDefault(msg, 10, ""),
    observationbody: jspb.Message.getFieldWithDefault(msg, 11, ""),
    observationfeedback: jspb.Message.getFieldWithDefault(msg, 12, ""),
    type: jspb.Message.getFieldWithDefault(msg, 13, ""),
    analystid: jspb.Message.getFieldWithDefault(msg, 14, ""),
    analystname: jspb.Message.getFieldWithDefault(msg, 15, ""),
    title: jspb.Message.getFieldWithDefault(msg, 16, ""),
    createdby: jspb.Message.getFieldWithDefault(msg, 17, ""),
    updatedby: jspb.Message.getFieldWithDefault(msg, 18, ""),
    touseremail: jspb.Message.getFieldWithDefault(msg, 19, ""),
    tousername: jspb.Message.getFieldWithDefault(msg, 20, ""),
    statusdate: jspb.Message.getFieldWithDefault(msg, 21, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.chat.Msg}
 */
proto.chat.Msg.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.chat.Msg;
  return proto.chat.Msg.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.chat.Msg} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.chat.Msg}
 */
proto.chat.Msg.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSupplierid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatecreated(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setDateupdated(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setObservationid(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setDashboardid(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setObservationbody(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setObservationfeedback(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setAnalystid(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setAnalystname(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedby(value);
      break;
    case 18:
      var value = /** @type {string} */ (reader.readString());
      msg.setUpdatedby(value);
      break;
    case 19:
      var value = /** @type {string} */ (reader.readString());
      msg.setTouseremail(value);
      break;
    case 20:
      var value = /** @type {string} */ (reader.readString());
      msg.setTousername(value);
      break;
    case 21:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatusdate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.chat.Msg.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.chat.Msg.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.chat.Msg} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.Msg.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCustomerid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSupplierid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDatecreated();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getDateupdated();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getObservationid();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
  f = message.getDashboardid();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getObservationbody();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getObservationfeedback();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getAnalystid();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getAnalystname();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getCreatedby();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
  f = message.getUpdatedby();
  if (f.length > 0) {
    writer.writeString(
      18,
      f
    );
  }
  f = message.getTouseremail();
  if (f.length > 0) {
    writer.writeString(
      19,
      f
    );
  }
  f = message.getTousername();
  if (f.length > 0) {
    writer.writeString(
      20,
      f
    );
  }
  f = message.getStatusdate();
  if (f.length > 0) {
    writer.writeString(
      21,
      f
    );
  }
};


/**
 * optional string CustomerID = 2;
 * @return {string}
 */
proto.chat.Msg.prototype.getCustomerid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.Msg} returns this
 */
proto.chat.Msg.prototype.setCustomerid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string SupplierID = 3;
 * @return {string}
 */
proto.chat.Msg.prototype.getSupplierid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.Msg} returns this
 */
proto.chat.Msg.prototype.setSupplierid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string DateCreated = 4;
 * @return {string}
 */
proto.chat.Msg.prototype.getDatecreated = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.Msg} returns this
 */
proto.chat.Msg.prototype.setDatecreated = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string DateUpdated = 6;
 * @return {string}
 */
proto.chat.Msg.prototype.getDateupdated = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.Msg} returns this
 */
proto.chat.Msg.prototype.setDateupdated = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string Status = 8;
 * @return {string}
 */
proto.chat.Msg.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.Msg} returns this
 */
proto.chat.Msg.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional int64 ObservationID = 9;
 * @return {number}
 */
proto.chat.Msg.prototype.getObservationid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.chat.Msg} returns this
 */
proto.chat.Msg.prototype.setObservationid = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional string DashboardID = 10;
 * @return {string}
 */
proto.chat.Msg.prototype.getDashboardid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.Msg} returns this
 */
proto.chat.Msg.prototype.setDashboardid = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string ObservationBody = 11;
 * @return {string}
 */
proto.chat.Msg.prototype.getObservationbody = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.Msg} returns this
 */
proto.chat.Msg.prototype.setObservationbody = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string ObservationFeedback = 12;
 * @return {string}
 */
proto.chat.Msg.prototype.getObservationfeedback = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.Msg} returns this
 */
proto.chat.Msg.prototype.setObservationfeedback = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string Type = 13;
 * @return {string}
 */
proto.chat.Msg.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.Msg} returns this
 */
proto.chat.Msg.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string AnalystID = 14;
 * @return {string}
 */
proto.chat.Msg.prototype.getAnalystid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.Msg} returns this
 */
proto.chat.Msg.prototype.setAnalystid = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional string AnalystName = 15;
 * @return {string}
 */
proto.chat.Msg.prototype.getAnalystname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.Msg} returns this
 */
proto.chat.Msg.prototype.setAnalystname = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional string Title = 16;
 * @return {string}
 */
proto.chat.Msg.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.Msg} returns this
 */
proto.chat.Msg.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional string CreatedBy = 17;
 * @return {string}
 */
proto.chat.Msg.prototype.getCreatedby = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.Msg} returns this
 */
proto.chat.Msg.prototype.setCreatedby = function(value) {
  return jspb.Message.setProto3StringField(this, 17, value);
};


/**
 * optional string UpdatedBy = 18;
 * @return {string}
 */
proto.chat.Msg.prototype.getUpdatedby = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.Msg} returns this
 */
proto.chat.Msg.prototype.setUpdatedby = function(value) {
  return jspb.Message.setProto3StringField(this, 18, value);
};


/**
 * optional string ToUserEmail = 19;
 * @return {string}
 */
proto.chat.Msg.prototype.getTouseremail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 19, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.Msg} returns this
 */
proto.chat.Msg.prototype.setTouseremail = function(value) {
  return jspb.Message.setProto3StringField(this, 19, value);
};


/**
 * optional string ToUserName = 20;
 * @return {string}
 */
proto.chat.Msg.prototype.getTousername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 20, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.Msg} returns this
 */
proto.chat.Msg.prototype.setTousername = function(value) {
  return jspb.Message.setProto3StringField(this, 20, value);
};


/**
 * optional string StatusDate = 21;
 * @return {string}
 */
proto.chat.Msg.prototype.getStatusdate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 21, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.Msg} returns this
 */
proto.chat.Msg.prototype.setStatusdate = function(value) {
  return jspb.Message.setProto3StringField(this, 21, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.chat.SupplierAddressType.prototype.toObject = function(opt_includeInstance) {
  return proto.chat.SupplierAddressType.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.chat.SupplierAddressType} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.SupplierAddressType.toObject = function(includeInstance, msg) {
  var f, obj = {
    addressline1: jspb.Message.getFieldWithDefault(msg, 1, ""),
    postalcode: jspb.Message.getFieldWithDefault(msg, 2, ""),
    phone: jspb.Message.getFieldWithDefault(msg, 3, ""),
    contactemail: jspb.Message.getFieldWithDefault(msg, 4, ""),
    provincecode: jspb.Message.getFieldWithDefault(msg, 5, ""),
    addressline2: jspb.Message.getFieldWithDefault(msg, 6, ""),
    shortname: jspb.Message.getFieldWithDefault(msg, 7, ""),
    fax: jspb.Message.getFieldWithDefault(msg, 8, ""),
    city: jspb.Message.getFieldWithDefault(msg, 9, ""),
    state: jspb.Message.getFieldWithDefault(msg, 10, ""),
    country: jspb.Message.getFieldWithDefault(msg, 11, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.chat.SupplierAddressType}
 */
proto.chat.SupplierAddressType.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.chat.SupplierAddressType;
  return proto.chat.SupplierAddressType.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.chat.SupplierAddressType} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.chat.SupplierAddressType}
 */
proto.chat.SupplierAddressType.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddressline1(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPostalcode(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhone(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setContactemail(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setProvincecode(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddressline2(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setShortname(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setFax(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setCity(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setState(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setCountry(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.chat.SupplierAddressType.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.chat.SupplierAddressType.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.chat.SupplierAddressType} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.SupplierAddressType.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddressline1();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPostalcode();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPhone();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getContactemail();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getProvincecode();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getAddressline2();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getShortname();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getFax();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getCity();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getState();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getCountry();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
};


/**
 * optional string AddressLine1 = 1;
 * @return {string}
 */
proto.chat.SupplierAddressType.prototype.getAddressline1 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.SupplierAddressType} returns this
 */
proto.chat.SupplierAddressType.prototype.setAddressline1 = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string PostalCode = 2;
 * @return {string}
 */
proto.chat.SupplierAddressType.prototype.getPostalcode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.SupplierAddressType} returns this
 */
proto.chat.SupplierAddressType.prototype.setPostalcode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string Phone = 3;
 * @return {string}
 */
proto.chat.SupplierAddressType.prototype.getPhone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.SupplierAddressType} returns this
 */
proto.chat.SupplierAddressType.prototype.setPhone = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string ContactEmail = 4;
 * @return {string}
 */
proto.chat.SupplierAddressType.prototype.getContactemail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.SupplierAddressType} returns this
 */
proto.chat.SupplierAddressType.prototype.setContactemail = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string ProvinceCode = 5;
 * @return {string}
 */
proto.chat.SupplierAddressType.prototype.getProvincecode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.SupplierAddressType} returns this
 */
proto.chat.SupplierAddressType.prototype.setProvincecode = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string AddressLine2 = 6;
 * @return {string}
 */
proto.chat.SupplierAddressType.prototype.getAddressline2 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.SupplierAddressType} returns this
 */
proto.chat.SupplierAddressType.prototype.setAddressline2 = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string ShortName = 7;
 * @return {string}
 */
proto.chat.SupplierAddressType.prototype.getShortname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.SupplierAddressType} returns this
 */
proto.chat.SupplierAddressType.prototype.setShortname = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string Fax = 8;
 * @return {string}
 */
proto.chat.SupplierAddressType.prototype.getFax = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.SupplierAddressType} returns this
 */
proto.chat.SupplierAddressType.prototype.setFax = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string City = 9;
 * @return {string}
 */
proto.chat.SupplierAddressType.prototype.getCity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.SupplierAddressType} returns this
 */
proto.chat.SupplierAddressType.prototype.setCity = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string State = 10;
 * @return {string}
 */
proto.chat.SupplierAddressType.prototype.getState = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.SupplierAddressType} returns this
 */
proto.chat.SupplierAddressType.prototype.setState = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string Country = 11;
 * @return {string}
 */
proto.chat.SupplierAddressType.prototype.getCountry = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.SupplierAddressType} returns this
 */
proto.chat.SupplierAddressType.prototype.setCountry = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.chat.SupplierContactType.prototype.toObject = function(opt_includeInstance) {
  return proto.chat.SupplierContactType.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.chat.SupplierContactType} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.SupplierContactType.toObject = function(includeInstance, msg) {
  var f, obj = {
    contactfirstname: jspb.Message.getFieldWithDefault(msg, 1, ""),
    contactmiddlename: jspb.Message.getFieldWithDefault(msg, 2, ""),
    contactlastname: jspb.Message.getFieldWithDefault(msg, 3, ""),
    contactemail: jspb.Message.getFieldWithDefault(msg, 4, ""),
    contactphone: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.chat.SupplierContactType}
 */
proto.chat.SupplierContactType.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.chat.SupplierContactType;
  return proto.chat.SupplierContactType.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.chat.SupplierContactType} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.chat.SupplierContactType}
 */
proto.chat.SupplierContactType.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setContactfirstname(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setContactmiddlename(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setContactlastname(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setContactemail(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setContactphone(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.chat.SupplierContactType.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.chat.SupplierContactType.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.chat.SupplierContactType} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.SupplierContactType.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContactfirstname();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getContactmiddlename();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getContactlastname();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getContactemail();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getContactphone();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string ContactFirstName = 1;
 * @return {string}
 */
proto.chat.SupplierContactType.prototype.getContactfirstname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.SupplierContactType} returns this
 */
proto.chat.SupplierContactType.prototype.setContactfirstname = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string ContactMiddleName = 2;
 * @return {string}
 */
proto.chat.SupplierContactType.prototype.getContactmiddlename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.SupplierContactType} returns this
 */
proto.chat.SupplierContactType.prototype.setContactmiddlename = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string ContactLastName = 3;
 * @return {string}
 */
proto.chat.SupplierContactType.prototype.getContactlastname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.SupplierContactType} returns this
 */
proto.chat.SupplierContactType.prototype.setContactlastname = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string ContactEmail = 4;
 * @return {string}
 */
proto.chat.SupplierContactType.prototype.getContactemail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.SupplierContactType} returns this
 */
proto.chat.SupplierContactType.prototype.setContactemail = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string ContactPhone = 5;
 * @return {string}
 */
proto.chat.SupplierContactType.prototype.getContactphone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.SupplierContactType} returns this
 */
proto.chat.SupplierContactType.prototype.setContactphone = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.chat.Supplier.prototype.toObject = function(opt_includeInstance) {
  return proto.chat.Supplier.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.chat.Supplier} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.Supplier.toObject = function(includeInstance, msg) {
  var f, obj = {
    supplierid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    suppliername: jspb.Message.getFieldWithDefault(msg, 2, ""),
    supplieraddress: (f = msg.getSupplieraddress()) && proto.chat.SupplierAddressType.toObject(includeInstance, f),
    customerid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    suppliercontact: (f = msg.getSuppliercontact()) && proto.chat.SupplierContactType.toObject(includeInstance, f),
    customercorporatedivision: jspb.Message.getFieldWithDefault(msg, 6, ""),
    supplierclassification: jspb.Message.getFieldWithDefault(msg, 7, ""),
    suppliercurrency: jspb.Message.getFieldWithDefault(msg, 8, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.chat.Supplier}
 */
proto.chat.Supplier.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.chat.Supplier;
  return proto.chat.Supplier.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.chat.Supplier} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.chat.Supplier}
 */
proto.chat.Supplier.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSupplierid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSuppliername(value);
      break;
    case 3:
      var value = new proto.chat.SupplierAddressType;
      reader.readMessage(value,proto.chat.SupplierAddressType.deserializeBinaryFromReader);
      msg.setSupplieraddress(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerid(value);
      break;
    case 5:
      var value = new proto.chat.SupplierContactType;
      reader.readMessage(value,proto.chat.SupplierContactType.deserializeBinaryFromReader);
      msg.setSuppliercontact(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomercorporatedivision(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setSupplierclassification(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setSuppliercurrency(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.chat.Supplier.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.chat.Supplier.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.chat.Supplier} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.Supplier.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSupplierid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSuppliername();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSupplieraddress();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.chat.SupplierAddressType.serializeBinaryToWriter
    );
  }
  f = message.getCustomerid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getSuppliercontact();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.chat.SupplierContactType.serializeBinaryToWriter
    );
  }
  f = message.getCustomercorporatedivision();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getSupplierclassification();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getSuppliercurrency();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional string SupplierID = 1;
 * @return {string}
 */
proto.chat.Supplier.prototype.getSupplierid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.Supplier} returns this
 */
proto.chat.Supplier.prototype.setSupplierid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string SupplierName = 2;
 * @return {string}
 */
proto.chat.Supplier.prototype.getSuppliername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.Supplier} returns this
 */
proto.chat.Supplier.prototype.setSuppliername = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional SupplierAddressType SupplierAddress = 3;
 * @return {?proto.chat.SupplierAddressType}
 */
proto.chat.Supplier.prototype.getSupplieraddress = function() {
  return /** @type{?proto.chat.SupplierAddressType} */ (
    jspb.Message.getWrapperField(this, proto.chat.SupplierAddressType, 3));
};


/**
 * @param {?proto.chat.SupplierAddressType|undefined} value
 * @return {!proto.chat.Supplier} returns this
*/
proto.chat.Supplier.prototype.setSupplieraddress = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.chat.Supplier} returns this
 */
proto.chat.Supplier.prototype.clearSupplieraddress = function() {
  return this.setSupplieraddress(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.chat.Supplier.prototype.hasSupplieraddress = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string CustomerID = 4;
 * @return {string}
 */
proto.chat.Supplier.prototype.getCustomerid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.Supplier} returns this
 */
proto.chat.Supplier.prototype.setCustomerid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional SupplierContactType SupplierContact = 5;
 * @return {?proto.chat.SupplierContactType}
 */
proto.chat.Supplier.prototype.getSuppliercontact = function() {
  return /** @type{?proto.chat.SupplierContactType} */ (
    jspb.Message.getWrapperField(this, proto.chat.SupplierContactType, 5));
};


/**
 * @param {?proto.chat.SupplierContactType|undefined} value
 * @return {!proto.chat.Supplier} returns this
*/
proto.chat.Supplier.prototype.setSuppliercontact = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.chat.Supplier} returns this
 */
proto.chat.Supplier.prototype.clearSuppliercontact = function() {
  return this.setSuppliercontact(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.chat.Supplier.prototype.hasSuppliercontact = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string CustomerCorporateDivision = 6;
 * @return {string}
 */
proto.chat.Supplier.prototype.getCustomercorporatedivision = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.Supplier} returns this
 */
proto.chat.Supplier.prototype.setCustomercorporatedivision = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string SupplierClassification = 7;
 * @return {string}
 */
proto.chat.Supplier.prototype.getSupplierclassification = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.Supplier} returns this
 */
proto.chat.Supplier.prototype.setSupplierclassification = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string SupplierCurrency = 8;
 * @return {string}
 */
proto.chat.Supplier.prototype.getSuppliercurrency = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.Supplier} returns this
 */
proto.chat.Supplier.prototype.setSuppliercurrency = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.chat.SupplierList.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.chat.SupplierList.prototype.toObject = function(opt_includeInstance) {
  return proto.chat.SupplierList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.chat.SupplierList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.SupplierList.toObject = function(includeInstance, msg) {
  var f, obj = {
    total: jspb.Message.getFieldWithDefault(msg, 1, 0),
    supplierdataList: jspb.Message.toObjectList(msg.getSupplierdataList(),
    proto.chat.Supplier.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.chat.SupplierList}
 */
proto.chat.SupplierList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.chat.SupplierList;
  return proto.chat.SupplierList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.chat.SupplierList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.chat.SupplierList}
 */
proto.chat.SupplierList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotal(value);
      break;
    case 2:
      var value = new proto.chat.Supplier;
      reader.readMessage(value,proto.chat.Supplier.deserializeBinaryFromReader);
      msg.addSupplierdata(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.chat.SupplierList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.chat.SupplierList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.chat.SupplierList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.SupplierList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTotal();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getSupplierdataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.chat.Supplier.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 total = 1;
 * @return {number}
 */
proto.chat.SupplierList.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.chat.SupplierList} returns this
 */
proto.chat.SupplierList.prototype.setTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated Supplier SupplierData = 2;
 * @return {!Array<!proto.chat.Supplier>}
 */
proto.chat.SupplierList.prototype.getSupplierdataList = function() {
  return /** @type{!Array<!proto.chat.Supplier>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.chat.Supplier, 2));
};


/**
 * @param {!Array<!proto.chat.Supplier>} value
 * @return {!proto.chat.SupplierList} returns this
*/
proto.chat.SupplierList.prototype.setSupplierdataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.chat.Supplier=} opt_value
 * @param {number=} opt_index
 * @return {!proto.chat.Supplier}
 */
proto.chat.SupplierList.prototype.addSupplierdata = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.chat.Supplier, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.chat.SupplierList} returns this
 */
proto.chat.SupplierList.prototype.clearSupplierdataList = function() {
  return this.setSupplierdataList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.chat.CustomerAddressType.prototype.toObject = function(opt_includeInstance) {
  return proto.chat.CustomerAddressType.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.chat.CustomerAddressType} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.CustomerAddressType.toObject = function(includeInstance, msg) {
  var f, obj = {
    addressline1: jspb.Message.getFieldWithDefault(msg, 1, ""),
    postalcode: jspb.Message.getFieldWithDefault(msg, 2, ""),
    phone: jspb.Message.getFieldWithDefault(msg, 3, ""),
    contactemail: jspb.Message.getFieldWithDefault(msg, 4, ""),
    provincecode: jspb.Message.getFieldWithDefault(msg, 5, ""),
    addressline2: jspb.Message.getFieldWithDefault(msg, 6, ""),
    shortname: jspb.Message.getFieldWithDefault(msg, 7, ""),
    fax: jspb.Message.getFieldWithDefault(msg, 8, ""),
    city: jspb.Message.getFieldWithDefault(msg, 9, ""),
    state: jspb.Message.getFieldWithDefault(msg, 10, ""),
    country: jspb.Message.getFieldWithDefault(msg, 11, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.chat.CustomerAddressType}
 */
proto.chat.CustomerAddressType.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.chat.CustomerAddressType;
  return proto.chat.CustomerAddressType.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.chat.CustomerAddressType} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.chat.CustomerAddressType}
 */
proto.chat.CustomerAddressType.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddressline1(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPostalcode(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhone(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setContactemail(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setProvincecode(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddressline2(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setShortname(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setFax(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setCity(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setState(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setCountry(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.chat.CustomerAddressType.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.chat.CustomerAddressType.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.chat.CustomerAddressType} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.CustomerAddressType.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddressline1();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPostalcode();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPhone();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getContactemail();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getProvincecode();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getAddressline2();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getShortname();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getFax();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getCity();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getState();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getCountry();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
};


/**
 * optional string AddressLine1 = 1;
 * @return {string}
 */
proto.chat.CustomerAddressType.prototype.getAddressline1 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.CustomerAddressType} returns this
 */
proto.chat.CustomerAddressType.prototype.setAddressline1 = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string PostalCode = 2;
 * @return {string}
 */
proto.chat.CustomerAddressType.prototype.getPostalcode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.CustomerAddressType} returns this
 */
proto.chat.CustomerAddressType.prototype.setPostalcode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string Phone = 3;
 * @return {string}
 */
proto.chat.CustomerAddressType.prototype.getPhone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.CustomerAddressType} returns this
 */
proto.chat.CustomerAddressType.prototype.setPhone = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string ContactEmail = 4;
 * @return {string}
 */
proto.chat.CustomerAddressType.prototype.getContactemail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.CustomerAddressType} returns this
 */
proto.chat.CustomerAddressType.prototype.setContactemail = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string ProvinceCode = 5;
 * @return {string}
 */
proto.chat.CustomerAddressType.prototype.getProvincecode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.CustomerAddressType} returns this
 */
proto.chat.CustomerAddressType.prototype.setProvincecode = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string AddressLine2 = 6;
 * @return {string}
 */
proto.chat.CustomerAddressType.prototype.getAddressline2 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.CustomerAddressType} returns this
 */
proto.chat.CustomerAddressType.prototype.setAddressline2 = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string ShortName = 7;
 * @return {string}
 */
proto.chat.CustomerAddressType.prototype.getShortname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.CustomerAddressType} returns this
 */
proto.chat.CustomerAddressType.prototype.setShortname = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string Fax = 8;
 * @return {string}
 */
proto.chat.CustomerAddressType.prototype.getFax = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.CustomerAddressType} returns this
 */
proto.chat.CustomerAddressType.prototype.setFax = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string City = 9;
 * @return {string}
 */
proto.chat.CustomerAddressType.prototype.getCity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.CustomerAddressType} returns this
 */
proto.chat.CustomerAddressType.prototype.setCity = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string State = 10;
 * @return {string}
 */
proto.chat.CustomerAddressType.prototype.getState = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.CustomerAddressType} returns this
 */
proto.chat.CustomerAddressType.prototype.setState = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string Country = 11;
 * @return {string}
 */
proto.chat.CustomerAddressType.prototype.getCountry = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.CustomerAddressType} returns this
 */
proto.chat.CustomerAddressType.prototype.setCountry = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.chat.CustomerContactType.prototype.toObject = function(opt_includeInstance) {
  return proto.chat.CustomerContactType.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.chat.CustomerContactType} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.CustomerContactType.toObject = function(includeInstance, msg) {
  var f, obj = {
    contactfirstname: jspb.Message.getFieldWithDefault(msg, 1, ""),
    contactmiddlename: jspb.Message.getFieldWithDefault(msg, 2, ""),
    contactlastname: jspb.Message.getFieldWithDefault(msg, 3, ""),
    contactemail: jspb.Message.getFieldWithDefault(msg, 4, ""),
    contactphone: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.chat.CustomerContactType}
 */
proto.chat.CustomerContactType.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.chat.CustomerContactType;
  return proto.chat.CustomerContactType.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.chat.CustomerContactType} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.chat.CustomerContactType}
 */
proto.chat.CustomerContactType.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setContactfirstname(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setContactmiddlename(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setContactlastname(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setContactemail(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setContactphone(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.chat.CustomerContactType.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.chat.CustomerContactType.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.chat.CustomerContactType} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.CustomerContactType.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContactfirstname();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getContactmiddlename();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getContactlastname();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getContactemail();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getContactphone();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string ContactFirstName = 1;
 * @return {string}
 */
proto.chat.CustomerContactType.prototype.getContactfirstname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.CustomerContactType} returns this
 */
proto.chat.CustomerContactType.prototype.setContactfirstname = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string ContactMiddleName = 2;
 * @return {string}
 */
proto.chat.CustomerContactType.prototype.getContactmiddlename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.CustomerContactType} returns this
 */
proto.chat.CustomerContactType.prototype.setContactmiddlename = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string ContactLastName = 3;
 * @return {string}
 */
proto.chat.CustomerContactType.prototype.getContactlastname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.CustomerContactType} returns this
 */
proto.chat.CustomerContactType.prototype.setContactlastname = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string ContactEmail = 4;
 * @return {string}
 */
proto.chat.CustomerContactType.prototype.getContactemail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.CustomerContactType} returns this
 */
proto.chat.CustomerContactType.prototype.setContactemail = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string ContactPhone = 5;
 * @return {string}
 */
proto.chat.CustomerContactType.prototype.getContactphone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.CustomerContactType} returns this
 */
proto.chat.CustomerContactType.prototype.setContactphone = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.chat.Customer.prototype.toObject = function(opt_includeInstance) {
  return proto.chat.Customer.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.chat.Customer} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.Customer.toObject = function(includeInstance, msg) {
  var f, obj = {
    customernumber: jspb.Message.getFieldWithDefault(msg, 1, ""),
    customerid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    customername: jspb.Message.getFieldWithDefault(msg, 3, ""),
    customercontact: (f = msg.getCustomercontact()) && proto.chat.CustomerContactType.toObject(includeInstance, f),
    customeraddress: (f = msg.getCustomeraddress()) && proto.chat.CustomerAddressType.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.chat.Customer}
 */
proto.chat.Customer.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.chat.Customer;
  return proto.chat.Customer.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.chat.Customer} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.chat.Customer}
 */
proto.chat.Customer.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomernumber(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomername(value);
      break;
    case 4:
      var value = new proto.chat.CustomerContactType;
      reader.readMessage(value,proto.chat.CustomerContactType.deserializeBinaryFromReader);
      msg.setCustomercontact(value);
      break;
    case 5:
      var value = new proto.chat.CustomerAddressType;
      reader.readMessage(value,proto.chat.CustomerAddressType.deserializeBinaryFromReader);
      msg.setCustomeraddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.chat.Customer.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.chat.Customer.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.chat.Customer} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.Customer.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCustomernumber();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCustomerid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCustomername();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCustomercontact();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.chat.CustomerContactType.serializeBinaryToWriter
    );
  }
  f = message.getCustomeraddress();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.chat.CustomerAddressType.serializeBinaryToWriter
    );
  }
};


/**
 * optional string CustomerNumber = 1;
 * @return {string}
 */
proto.chat.Customer.prototype.getCustomernumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.Customer} returns this
 */
proto.chat.Customer.prototype.setCustomernumber = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string CustomerID = 2;
 * @return {string}
 */
proto.chat.Customer.prototype.getCustomerid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.Customer} returns this
 */
proto.chat.Customer.prototype.setCustomerid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string CustomerName = 3;
 * @return {string}
 */
proto.chat.Customer.prototype.getCustomername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.Customer} returns this
 */
proto.chat.Customer.prototype.setCustomername = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional CustomerContactType CustomerContact = 4;
 * @return {?proto.chat.CustomerContactType}
 */
proto.chat.Customer.prototype.getCustomercontact = function() {
  return /** @type{?proto.chat.CustomerContactType} */ (
    jspb.Message.getWrapperField(this, proto.chat.CustomerContactType, 4));
};


/**
 * @param {?proto.chat.CustomerContactType|undefined} value
 * @return {!proto.chat.Customer} returns this
*/
proto.chat.Customer.prototype.setCustomercontact = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.chat.Customer} returns this
 */
proto.chat.Customer.prototype.clearCustomercontact = function() {
  return this.setCustomercontact(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.chat.Customer.prototype.hasCustomercontact = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional CustomerAddressType CustomerAddress = 5;
 * @return {?proto.chat.CustomerAddressType}
 */
proto.chat.Customer.prototype.getCustomeraddress = function() {
  return /** @type{?proto.chat.CustomerAddressType} */ (
    jspb.Message.getWrapperField(this, proto.chat.CustomerAddressType, 5));
};


/**
 * @param {?proto.chat.CustomerAddressType|undefined} value
 * @return {!proto.chat.Customer} returns this
*/
proto.chat.Customer.prototype.setCustomeraddress = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.chat.Customer} returns this
 */
proto.chat.Customer.prototype.clearCustomeraddress = function() {
  return this.setCustomeraddress(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.chat.Customer.prototype.hasCustomeraddress = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.chat.CustomerList.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.chat.CustomerList.prototype.toObject = function(opt_includeInstance) {
  return proto.chat.CustomerList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.chat.CustomerList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.CustomerList.toObject = function(includeInstance, msg) {
  var f, obj = {
    total: jspb.Message.getFieldWithDefault(msg, 1, 0),
    customerdataList: jspb.Message.toObjectList(msg.getCustomerdataList(),
    proto.chat.Customer.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.chat.CustomerList}
 */
proto.chat.CustomerList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.chat.CustomerList;
  return proto.chat.CustomerList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.chat.CustomerList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.chat.CustomerList}
 */
proto.chat.CustomerList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotal(value);
      break;
    case 2:
      var value = new proto.chat.Customer;
      reader.readMessage(value,proto.chat.Customer.deserializeBinaryFromReader);
      msg.addCustomerdata(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.chat.CustomerList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.chat.CustomerList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.chat.CustomerList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.CustomerList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTotal();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getCustomerdataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.chat.Customer.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 total = 1;
 * @return {number}
 */
proto.chat.CustomerList.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.chat.CustomerList} returns this
 */
proto.chat.CustomerList.prototype.setTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated Customer CustomerData = 2;
 * @return {!Array<!proto.chat.Customer>}
 */
proto.chat.CustomerList.prototype.getCustomerdataList = function() {
  return /** @type{!Array<!proto.chat.Customer>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.chat.Customer, 2));
};


/**
 * @param {!Array<!proto.chat.Customer>} value
 * @return {!proto.chat.CustomerList} returns this
*/
proto.chat.CustomerList.prototype.setCustomerdataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.chat.Customer=} opt_value
 * @param {number=} opt_index
 * @return {!proto.chat.Customer}
 */
proto.chat.CustomerList.prototype.addCustomerdata = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.chat.Customer, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.chat.CustomerList} returns this
 */
proto.chat.CustomerList.prototype.clearCustomerdataList = function() {
  return this.setCustomerdataList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.chat.Req.prototype.toObject = function(opt_includeInstance) {
  return proto.chat.Req.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.chat.Req} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.Req.toObject = function(includeInstance, msg) {
  var f, obj = {
    userName: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.chat.Req}
 */
proto.chat.Req.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.chat.Req;
  return proto.chat.Req.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.chat.Req} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.chat.Req}
 */
proto.chat.Req.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.chat.Req.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.chat.Req.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.chat.Req} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.Req.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string user_name = 1;
 * @return {string}
 */
proto.chat.Req.prototype.getUserName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.Req} returns this
 */
proto.chat.Req.prototype.setUserName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.chat.Search.prototype.toObject = function(opt_includeInstance) {
  return proto.chat.Search.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.chat.Search} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.Search.toObject = function(includeInstance, msg) {
  var f, obj = {
    search: jspb.Message.getFieldWithDefault(msg, 1, ""),
    limit: jspb.Message.getFieldWithDefault(msg, 2, ""),
    skip: jspb.Message.getFieldWithDefault(msg, 3, ""),
    projection: jspb.Message.getFieldWithDefault(msg, 4, ""),
    sort: jspb.Message.getFieldWithDefault(msg, 5, ""),
    aggregation: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.chat.Search}
 */
proto.chat.Search.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.chat.Search;
  return proto.chat.Search.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.chat.Search} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.chat.Search}
 */
proto.chat.Search.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSearch(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLimit(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSkip(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjection(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setSort(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setAggregation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.chat.Search.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.chat.Search.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.chat.Search} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.Search.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSearch();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLimit();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSkip();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getProjection();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getSort();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getAggregation();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string search = 1;
 * @return {string}
 */
proto.chat.Search.prototype.getSearch = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.Search} returns this
 */
proto.chat.Search.prototype.setSearch = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string limit = 2;
 * @return {string}
 */
proto.chat.Search.prototype.getLimit = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.Search} returns this
 */
proto.chat.Search.prototype.setLimit = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string skip = 3;
 * @return {string}
 */
proto.chat.Search.prototype.getSkip = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.Search} returns this
 */
proto.chat.Search.prototype.setSkip = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string projection = 4;
 * @return {string}
 */
proto.chat.Search.prototype.getProjection = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.Search} returns this
 */
proto.chat.Search.prototype.setProjection = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string sort = 5;
 * @return {string}
 */
proto.chat.Search.prototype.getSort = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.Search} returns this
 */
proto.chat.Search.prototype.setSort = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string aggregation = 6;
 * @return {string}
 */
proto.chat.Search.prototype.getAggregation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.Search} returns this
 */
proto.chat.Search.prototype.setAggregation = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.chat.UpdateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.chat.UpdateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.chat.UpdateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.UpdateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    filter: jspb.Message.getFieldWithDefault(msg, 1, ""),
    id: jspb.Message.getFieldWithDefault(msg, 2, ""),
    msg: (f = msg.getMsg()) && proto.chat.Msg.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.chat.UpdateRequest}
 */
proto.chat.UpdateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.chat.UpdateRequest;
  return proto.chat.UpdateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.chat.UpdateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.chat.UpdateRequest}
 */
proto.chat.UpdateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFilter(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 3:
      var value = new proto.chat.Msg;
      reader.readMessage(value,proto.chat.Msg.deserializeBinaryFromReader);
      msg.setMsg(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.chat.UpdateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.chat.UpdateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.chat.UpdateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.UpdateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFilter();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMsg();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.chat.Msg.serializeBinaryToWriter
    );
  }
};


/**
 * optional string filter = 1;
 * @return {string}
 */
proto.chat.UpdateRequest.prototype.getFilter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.UpdateRequest} returns this
 */
proto.chat.UpdateRequest.prototype.setFilter = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string Id = 2;
 * @return {string}
 */
proto.chat.UpdateRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.UpdateRequest} returns this
 */
proto.chat.UpdateRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Msg msg = 3;
 * @return {?proto.chat.Msg}
 */
proto.chat.UpdateRequest.prototype.getMsg = function() {
  return /** @type{?proto.chat.Msg} */ (
    jspb.Message.getWrapperField(this, proto.chat.Msg, 3));
};


/**
 * @param {?proto.chat.Msg|undefined} value
 * @return {!proto.chat.UpdateRequest} returns this
*/
proto.chat.UpdateRequest.prototype.setMsg = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.chat.UpdateRequest} returns this
 */
proto.chat.UpdateRequest.prototype.clearMsg = function() {
  return this.setMsg(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.chat.UpdateRequest.prototype.hasMsg = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.chat.Login.prototype.toObject = function(opt_includeInstance) {
  return proto.chat.Login.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.chat.Login} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.Login.toObject = function(includeInstance, msg) {
  var f, obj = {
    username: jspb.Message.getFieldWithDefault(msg, 1, ""),
    password: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.chat.Login}
 */
proto.chat.Login.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.chat.Login;
  return proto.chat.Login.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.chat.Login} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.chat.Login}
 */
proto.chat.Login.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.chat.Login.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.chat.Login.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.chat.Login} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.Login.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string username = 1;
 * @return {string}
 */
proto.chat.Login.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.Login} returns this
 */
proto.chat.Login.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string password = 2;
 * @return {string}
 */
proto.chat.Login.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.Login} returns this
 */
proto.chat.Login.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.chat.LoginToken.prototype.toObject = function(opt_includeInstance) {
  return proto.chat.LoginToken.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.chat.LoginToken} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.LoginToken.toObject = function(includeInstance, msg) {
  var f, obj = {
    token: jspb.Message.getFieldWithDefault(msg, 1, ""),
    usertype: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.chat.LoginToken}
 */
proto.chat.LoginToken.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.chat.LoginToken;
  return proto.chat.LoginToken.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.chat.LoginToken} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.chat.LoginToken}
 */
proto.chat.LoginToken.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 2:
      var value = /** @type {!proto.chat.UserType} */ (reader.readEnum());
      msg.setUsertype(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.chat.LoginToken.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.chat.LoginToken.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.chat.LoginToken} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.LoginToken.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUsertype();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional string token = 1;
 * @return {string}
 */
proto.chat.LoginToken.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.LoginToken} returns this
 */
proto.chat.LoginToken.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional UserType usertype = 2;
 * @return {!proto.chat.UserType}
 */
proto.chat.LoginToken.prototype.getUsertype = function() {
  return /** @type {!proto.chat.UserType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.chat.UserType} value
 * @return {!proto.chat.LoginToken} returns this
 */
proto.chat.LoginToken.prototype.setUsertype = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.chat.Empty.prototype.toObject = function(opt_includeInstance) {
  return proto.chat.Empty.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.chat.Empty} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.Empty.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.chat.Empty}
 */
proto.chat.Empty.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.chat.Empty;
  return proto.chat.Empty.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.chat.Empty} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.chat.Empty}
 */
proto.chat.Empty.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.chat.Empty.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.chat.Empty.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.chat.Empty} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.Empty.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.chat.Dashboard.prototype.toObject = function(opt_includeInstance) {
  return proto.chat.Dashboard.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.chat.Dashboard} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.Dashboard.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    url: jspb.Message.getFieldWithDefault(msg, 2, ""),
    createdate: jspb.Message.getFieldWithDefault(msg, 3, ""),
    updatedate: jspb.Message.getFieldWithDefault(msg, 4, ""),
    createdby: jspb.Message.getFieldWithDefault(msg, 5, ""),
    updatedby: jspb.Message.getFieldWithDefault(msg, 6, ""),
    status: jspb.Message.getFieldWithDefault(msg, 7, ""),
    statusdate: jspb.Message.getFieldWithDefault(msg, 8, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.chat.Dashboard}
 */
proto.chat.Dashboard.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.chat.Dashboard;
  return proto.chat.Dashboard.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.chat.Dashboard} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.chat.Dashboard}
 */
proto.chat.Dashboard.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedate(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUpdatedate(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedby(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setUpdatedby(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatusdate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.chat.Dashboard.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.chat.Dashboard.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.chat.Dashboard} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.Dashboard.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCreatedate();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getUpdatedate();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCreatedby();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getUpdatedby();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getStatusdate();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional string Name = 1;
 * @return {string}
 */
proto.chat.Dashboard.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.Dashboard} returns this
 */
proto.chat.Dashboard.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string Url = 2;
 * @return {string}
 */
proto.chat.Dashboard.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.Dashboard} returns this
 */
proto.chat.Dashboard.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string CreateDate = 3;
 * @return {string}
 */
proto.chat.Dashboard.prototype.getCreatedate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.Dashboard} returns this
 */
proto.chat.Dashboard.prototype.setCreatedate = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string UpdateDate = 4;
 * @return {string}
 */
proto.chat.Dashboard.prototype.getUpdatedate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.Dashboard} returns this
 */
proto.chat.Dashboard.prototype.setUpdatedate = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string CreatedBy = 5;
 * @return {string}
 */
proto.chat.Dashboard.prototype.getCreatedby = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.Dashboard} returns this
 */
proto.chat.Dashboard.prototype.setCreatedby = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string UpdatedBy = 6;
 * @return {string}
 */
proto.chat.Dashboard.prototype.getUpdatedby = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.Dashboard} returns this
 */
proto.chat.Dashboard.prototype.setUpdatedby = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string Status = 7;
 * @return {string}
 */
proto.chat.Dashboard.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.Dashboard} returns this
 */
proto.chat.Dashboard.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string StatusDate = 8;
 * @return {string}
 */
proto.chat.Dashboard.prototype.getStatusdate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.Dashboard} returns this
 */
proto.chat.Dashboard.prototype.setStatusdate = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.chat.DashboardData.prototype.toObject = function(opt_includeInstance) {
  return proto.chat.DashboardData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.chat.DashboardData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.DashboardData.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    url: jspb.Message.getFieldWithDefault(msg, 3, ""),
    createdate: jspb.Message.getFieldWithDefault(msg, 4, ""),
    updatedate: jspb.Message.getFieldWithDefault(msg, 5, ""),
    createdby: jspb.Message.getFieldWithDefault(msg, 6, ""),
    updatedby: jspb.Message.getFieldWithDefault(msg, 7, ""),
    status: jspb.Message.getFieldWithDefault(msg, 8, ""),
    statusdate: jspb.Message.getFieldWithDefault(msg, 9, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.chat.DashboardData}
 */
proto.chat.DashboardData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.chat.DashboardData;
  return proto.chat.DashboardData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.chat.DashboardData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.chat.DashboardData}
 */
proto.chat.DashboardData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedate(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setUpdatedate(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedby(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setUpdatedby(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatusdate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.chat.DashboardData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.chat.DashboardData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.chat.DashboardData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.DashboardData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCreatedate();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getUpdatedate();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCreatedby();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getUpdatedby();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getStatusdate();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * optional string Id = 1;
 * @return {string}
 */
proto.chat.DashboardData.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.DashboardData} returns this
 */
proto.chat.DashboardData.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string Name = 2;
 * @return {string}
 */
proto.chat.DashboardData.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.DashboardData} returns this
 */
proto.chat.DashboardData.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string Url = 3;
 * @return {string}
 */
proto.chat.DashboardData.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.DashboardData} returns this
 */
proto.chat.DashboardData.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string CreateDate = 4;
 * @return {string}
 */
proto.chat.DashboardData.prototype.getCreatedate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.DashboardData} returns this
 */
proto.chat.DashboardData.prototype.setCreatedate = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string UpdateDate = 5;
 * @return {string}
 */
proto.chat.DashboardData.prototype.getUpdatedate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.DashboardData} returns this
 */
proto.chat.DashboardData.prototype.setUpdatedate = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string CreatedBy = 6;
 * @return {string}
 */
proto.chat.DashboardData.prototype.getCreatedby = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.DashboardData} returns this
 */
proto.chat.DashboardData.prototype.setCreatedby = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string UpdatedBy = 7;
 * @return {string}
 */
proto.chat.DashboardData.prototype.getUpdatedby = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.DashboardData} returns this
 */
proto.chat.DashboardData.prototype.setUpdatedby = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string Status = 8;
 * @return {string}
 */
proto.chat.DashboardData.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.DashboardData} returns this
 */
proto.chat.DashboardData.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string StatusDate = 9;
 * @return {string}
 */
proto.chat.DashboardData.prototype.getStatusdate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.DashboardData} returns this
 */
proto.chat.DashboardData.prototype.setStatusdate = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.chat.DashboardList.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.chat.DashboardList.prototype.toObject = function(opt_includeInstance) {
  return proto.chat.DashboardList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.chat.DashboardList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.DashboardList.toObject = function(includeInstance, msg) {
  var f, obj = {
    total: jspb.Message.getFieldWithDefault(msg, 1, 0),
    dashboarddataList: jspb.Message.toObjectList(msg.getDashboarddataList(),
    proto.chat.DashboardData.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.chat.DashboardList}
 */
proto.chat.DashboardList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.chat.DashboardList;
  return proto.chat.DashboardList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.chat.DashboardList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.chat.DashboardList}
 */
proto.chat.DashboardList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotal(value);
      break;
    case 2:
      var value = new proto.chat.DashboardData;
      reader.readMessage(value,proto.chat.DashboardData.deserializeBinaryFromReader);
      msg.addDashboarddata(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.chat.DashboardList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.chat.DashboardList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.chat.DashboardList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.DashboardList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTotal();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getDashboarddataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.chat.DashboardData.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 total = 1;
 * @return {number}
 */
proto.chat.DashboardList.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.chat.DashboardList} returns this
 */
proto.chat.DashboardList.prototype.setTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated DashboardData DashboardData = 2;
 * @return {!Array<!proto.chat.DashboardData>}
 */
proto.chat.DashboardList.prototype.getDashboarddataList = function() {
  return /** @type{!Array<!proto.chat.DashboardData>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.chat.DashboardData, 2));
};


/**
 * @param {!Array<!proto.chat.DashboardData>} value
 * @return {!proto.chat.DashboardList} returns this
*/
proto.chat.DashboardList.prototype.setDashboarddataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.chat.DashboardData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.chat.DashboardData}
 */
proto.chat.DashboardList.prototype.addDashboarddata = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.chat.DashboardData, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.chat.DashboardList} returns this
 */
proto.chat.DashboardList.prototype.clearDashboarddataList = function() {
  return this.setDashboarddataList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.chat.InsertDashboard.prototype.toObject = function(opt_includeInstance) {
  return proto.chat.InsertDashboard.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.chat.InsertDashboard} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.InsertDashboard.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    dashboard: (f = msg.getDashboard()) && proto.chat.Dashboard.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.chat.InsertDashboard}
 */
proto.chat.InsertDashboard.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.chat.InsertDashboard;
  return proto.chat.InsertDashboard.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.chat.InsertDashboard} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.chat.InsertDashboard}
 */
proto.chat.InsertDashboard.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new proto.chat.Dashboard;
      reader.readMessage(value,proto.chat.Dashboard.deserializeBinaryFromReader);
      msg.setDashboard(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.chat.InsertDashboard.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.chat.InsertDashboard.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.chat.InsertDashboard} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.InsertDashboard.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDashboard();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.chat.Dashboard.serializeBinaryToWriter
    );
  }
};


/**
 * optional string Id = 1;
 * @return {string}
 */
proto.chat.InsertDashboard.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.InsertDashboard} returns this
 */
proto.chat.InsertDashboard.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Dashboard dashboard = 2;
 * @return {?proto.chat.Dashboard}
 */
proto.chat.InsertDashboard.prototype.getDashboard = function() {
  return /** @type{?proto.chat.Dashboard} */ (
    jspb.Message.getWrapperField(this, proto.chat.Dashboard, 2));
};


/**
 * @param {?proto.chat.Dashboard|undefined} value
 * @return {!proto.chat.InsertDashboard} returns this
*/
proto.chat.InsertDashboard.prototype.setDashboard = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.chat.InsertDashboard} returns this
 */
proto.chat.InsertDashboard.prototype.clearDashboard = function() {
  return this.setDashboard(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.chat.InsertDashboard.prototype.hasDashboard = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.chat.UpdateDashboard.prototype.toObject = function(opt_includeInstance) {
  return proto.chat.UpdateDashboard.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.chat.UpdateDashboard} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.UpdateDashboard.toObject = function(includeInstance, msg) {
  var f, obj = {
    filter: jspb.Message.getFieldWithDefault(msg, 1, ""),
    id: jspb.Message.getFieldWithDefault(msg, 2, ""),
    dashboard: (f = msg.getDashboard()) && proto.chat.Dashboard.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.chat.UpdateDashboard}
 */
proto.chat.UpdateDashboard.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.chat.UpdateDashboard;
  return proto.chat.UpdateDashboard.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.chat.UpdateDashboard} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.chat.UpdateDashboard}
 */
proto.chat.UpdateDashboard.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFilter(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 3:
      var value = new proto.chat.Dashboard;
      reader.readMessage(value,proto.chat.Dashboard.deserializeBinaryFromReader);
      msg.setDashboard(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.chat.UpdateDashboard.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.chat.UpdateDashboard.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.chat.UpdateDashboard} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.UpdateDashboard.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFilter();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDashboard();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.chat.Dashboard.serializeBinaryToWriter
    );
  }
};


/**
 * optional string filter = 1;
 * @return {string}
 */
proto.chat.UpdateDashboard.prototype.getFilter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.UpdateDashboard} returns this
 */
proto.chat.UpdateDashboard.prototype.setFilter = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string Id = 2;
 * @return {string}
 */
proto.chat.UpdateDashboard.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.UpdateDashboard} returns this
 */
proto.chat.UpdateDashboard.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Dashboard dashboard = 3;
 * @return {?proto.chat.Dashboard}
 */
proto.chat.UpdateDashboard.prototype.getDashboard = function() {
  return /** @type{?proto.chat.Dashboard} */ (
    jspb.Message.getWrapperField(this, proto.chat.Dashboard, 3));
};


/**
 * @param {?proto.chat.Dashboard|undefined} value
 * @return {!proto.chat.UpdateDashboard} returns this
*/
proto.chat.UpdateDashboard.prototype.setDashboard = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.chat.UpdateDashboard} returns this
 */
proto.chat.UpdateDashboard.prototype.clearDashboard = function() {
  return this.setDashboard(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.chat.UpdateDashboard.prototype.hasDashboard = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.chat.DashboardContentReq.prototype.toObject = function(opt_includeInstance) {
  return proto.chat.DashboardContentReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.chat.DashboardContentReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.DashboardContentReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    customerid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    url: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.chat.DashboardContentReq}
 */
proto.chat.DashboardContentReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.chat.DashboardContentReq;
  return proto.chat.DashboardContentReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.chat.DashboardContentReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.chat.DashboardContentReq}
 */
proto.chat.DashboardContentReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.chat.DashboardContentReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.chat.DashboardContentReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.chat.DashboardContentReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.DashboardContentReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCustomerid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string CustomerID = 1;
 * @return {string}
 */
proto.chat.DashboardContentReq.prototype.getCustomerid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.DashboardContentReq} returns this
 */
proto.chat.DashboardContentReq.prototype.setCustomerid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string Url = 2;
 * @return {string}
 */
proto.chat.DashboardContentReq.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.DashboardContentReq} returns this
 */
proto.chat.DashboardContentReq.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.chat.DashboardContent.prototype.toObject = function(opt_includeInstance) {
  return proto.chat.DashboardContent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.chat.DashboardContent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.DashboardContent.toObject = function(includeInstance, msg) {
  var f, obj = {
    content: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.chat.DashboardContent}
 */
proto.chat.DashboardContent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.chat.DashboardContent;
  return proto.chat.DashboardContent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.chat.DashboardContent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.chat.DashboardContent}
 */
proto.chat.DashboardContent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.chat.DashboardContent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.chat.DashboardContent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.chat.DashboardContent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.DashboardContent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string Content = 1;
 * @return {string}
 */
proto.chat.DashboardContent.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.DashboardContent} returns this
 */
proto.chat.DashboardContent.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.chat.UploadFile.prototype.toObject = function(opt_includeInstance) {
  return proto.chat.UploadFile.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.chat.UploadFile} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.UploadFile.toObject = function(includeInstance, msg) {
  var f, obj = {
    content: msg.getContent_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.chat.UploadFile}
 */
proto.chat.UploadFile.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.chat.UploadFile;
  return proto.chat.UploadFile.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.chat.UploadFile} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.chat.UploadFile}
 */
proto.chat.UploadFile.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setContent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.chat.UploadFile.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.chat.UploadFile.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.chat.UploadFile} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.UploadFile.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContent_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes content = 1;
 * @return {!(string|Uint8Array)}
 */
proto.chat.UploadFile.prototype.getContent = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes content = 1;
 * This is a type-conversion wrapper around `getContent()`
 * @return {string}
 */
proto.chat.UploadFile.prototype.getContent_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getContent()));
};


/**
 * optional bytes content = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getContent()`
 * @return {!Uint8Array}
 */
proto.chat.UploadFile.prototype.getContent_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getContent()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.chat.UploadFile} returns this
 */
proto.chat.UploadFile.prototype.setContent = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.chat.MetaData.prototype.toObject = function(opt_includeInstance) {
  return proto.chat.MetaData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.chat.MetaData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.MetaData.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    type: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.chat.MetaData}
 */
proto.chat.MetaData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.chat.MetaData;
  return proto.chat.MetaData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.chat.MetaData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.chat.MetaData}
 */
proto.chat.MetaData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.chat.MetaData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.chat.MetaData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.chat.MetaData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.MetaData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.chat.MetaData.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.MetaData} returns this
 */
proto.chat.MetaData.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string type = 2;
 * @return {string}
 */
proto.chat.MetaData.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.MetaData} returns this
 */
proto.chat.MetaData.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.chat.File.prototype.toObject = function(opt_includeInstance) {
  return proto.chat.File.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.chat.File} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.File.toObject = function(includeInstance, msg) {
  var f, obj = {
    content: msg.getContent_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.chat.File}
 */
proto.chat.File.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.chat.File;
  return proto.chat.File.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.chat.File} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.chat.File}
 */
proto.chat.File.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setContent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.chat.File.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.chat.File.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.chat.File} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.File.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContent_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes content = 1;
 * @return {!(string|Uint8Array)}
 */
proto.chat.File.prototype.getContent = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes content = 1;
 * This is a type-conversion wrapper around `getContent()`
 * @return {string}
 */
proto.chat.File.prototype.getContent_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getContent()));
};


/**
 * optional bytes content = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getContent()`
 * @return {!Uint8Array}
 */
proto.chat.File.prototype.getContent_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getContent()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.chat.File} returns this
 */
proto.chat.File.prototype.setContent = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.chat.FileUploadRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.chat.FileUploadRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.chat.FileUploadRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.FileUploadRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    type: jspb.Message.getFieldWithDefault(msg, 2, ""),
    content: jspb.Message.getFieldWithDefault(msg, 3, ""),
    contenttype: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.chat.FileUploadRequest}
 */
proto.chat.FileUploadRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.chat.FileUploadRequest;
  return proto.chat.FileUploadRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.chat.FileUploadRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.chat.FileUploadRequest}
 */
proto.chat.FileUploadRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setContenttype(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.chat.FileUploadRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.chat.FileUploadRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.chat.FileUploadRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.FileUploadRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getContenttype();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.chat.FileUploadRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.FileUploadRequest} returns this
 */
proto.chat.FileUploadRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string type = 2;
 * @return {string}
 */
proto.chat.FileUploadRequest.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.FileUploadRequest} returns this
 */
proto.chat.FileUploadRequest.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string content = 3;
 * @return {string}
 */
proto.chat.FileUploadRequest.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.FileUploadRequest} returns this
 */
proto.chat.FileUploadRequest.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string contenttype = 4;
 * @return {string}
 */
proto.chat.FileUploadRequest.prototype.getContenttype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.FileUploadRequest} returns this
 */
proto.chat.FileUploadRequest.prototype.setContenttype = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.chat.FileDownloadRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.chat.FileDownloadRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.chat.FileDownloadRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.FileDownloadRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    search: jspb.Message.getFieldWithDefault(msg, 1, ""),
    id: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.chat.FileDownloadRequest}
 */
proto.chat.FileDownloadRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.chat.FileDownloadRequest;
  return proto.chat.FileDownloadRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.chat.FileDownloadRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.chat.FileDownloadRequest}
 */
proto.chat.FileDownloadRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSearch(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.chat.FileDownloadRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.chat.FileDownloadRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.chat.FileDownloadRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.FileDownloadRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSearch();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string Search = 1;
 * @return {string}
 */
proto.chat.FileDownloadRequest.prototype.getSearch = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.FileDownloadRequest} returns this
 */
proto.chat.FileDownloadRequest.prototype.setSearch = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string Id = 2;
 * @return {string}
 */
proto.chat.FileDownloadRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.FileDownloadRequest} returns this
 */
proto.chat.FileDownloadRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.chat.ReqDashboardStatistics.prototype.toObject = function(opt_includeInstance) {
  return proto.chat.ReqDashboardStatistics.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.chat.ReqDashboardStatistics} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.ReqDashboardStatistics.toObject = function(includeInstance, msg) {
  var f, obj = {
    username: jspb.Message.getFieldWithDefault(msg, 1, ""),
    customerid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    month: jspb.Message.getFieldWithDefault(msg, 3, 0),
    year: jspb.Message.getFieldWithDefault(msg, 4, 0),
    customernumber: jspb.Message.getFieldWithDefault(msg, 5, ""),
    emailsearch: jspb.Message.getFieldWithDefault(msg, 6, ""),
    usernamesearch: jspb.Message.getFieldWithDefault(msg, 7, ""),
    currentyearsearch: jspb.Message.getFieldWithDefault(msg, 8, 0),
    previousyearsearch: jspb.Message.getFieldWithDefault(msg, 9, 0),
    skip: jspb.Message.getFieldWithDefault(msg, 10, 0),
    limit: jspb.Message.getFieldWithDefault(msg, 11, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.chat.ReqDashboardStatistics}
 */
proto.chat.ReqDashboardStatistics.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.chat.ReqDashboardStatistics;
  return proto.chat.ReqDashboardStatistics.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.chat.ReqDashboardStatistics} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.chat.ReqDashboardStatistics}
 */
proto.chat.ReqDashboardStatistics.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMonth(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setYear(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomernumber(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmailsearch(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsernamesearch(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCurrentyearsearch(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPreviousyearsearch(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSkip(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLimit(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.chat.ReqDashboardStatistics.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.chat.ReqDashboardStatistics.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.chat.ReqDashboardStatistics} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.ReqDashboardStatistics.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCustomerid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMonth();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getYear();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getCustomernumber();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getEmailsearch();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getUsernamesearch();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getCurrentyearsearch();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
  f = message.getPreviousyearsearch();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
  f = message.getSkip();
  if (f !== 0) {
    writer.writeInt64(
      10,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeInt64(
      11,
      f
    );
  }
};


/**
 * optional string UserName = 1;
 * @return {string}
 */
proto.chat.ReqDashboardStatistics.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.ReqDashboardStatistics} returns this
 */
proto.chat.ReqDashboardStatistics.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string CustomerID = 2;
 * @return {string}
 */
proto.chat.ReqDashboardStatistics.prototype.getCustomerid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.ReqDashboardStatistics} returns this
 */
proto.chat.ReqDashboardStatistics.prototype.setCustomerid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 Month = 3;
 * @return {number}
 */
proto.chat.ReqDashboardStatistics.prototype.getMonth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.chat.ReqDashboardStatistics} returns this
 */
proto.chat.ReqDashboardStatistics.prototype.setMonth = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 Year = 4;
 * @return {number}
 */
proto.chat.ReqDashboardStatistics.prototype.getYear = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.chat.ReqDashboardStatistics} returns this
 */
proto.chat.ReqDashboardStatistics.prototype.setYear = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string CustomerNumber = 5;
 * @return {string}
 */
proto.chat.ReqDashboardStatistics.prototype.getCustomernumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.ReqDashboardStatistics} returns this
 */
proto.chat.ReqDashboardStatistics.prototype.setCustomernumber = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string EmailSearch = 6;
 * @return {string}
 */
proto.chat.ReqDashboardStatistics.prototype.getEmailsearch = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.ReqDashboardStatistics} returns this
 */
proto.chat.ReqDashboardStatistics.prototype.setEmailsearch = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string UserNameSearch = 7;
 * @return {string}
 */
proto.chat.ReqDashboardStatistics.prototype.getUsernamesearch = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.ReqDashboardStatistics} returns this
 */
proto.chat.ReqDashboardStatistics.prototype.setUsernamesearch = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional int64 CurrentYearSearch = 8;
 * @return {number}
 */
proto.chat.ReqDashboardStatistics.prototype.getCurrentyearsearch = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.chat.ReqDashboardStatistics} returns this
 */
proto.chat.ReqDashboardStatistics.prototype.setCurrentyearsearch = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional int64 PreviousYearSearch = 9;
 * @return {number}
 */
proto.chat.ReqDashboardStatistics.prototype.getPreviousyearsearch = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.chat.ReqDashboardStatistics} returns this
 */
proto.chat.ReqDashboardStatistics.prototype.setPreviousyearsearch = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional int64 Skip = 10;
 * @return {number}
 */
proto.chat.ReqDashboardStatistics.prototype.getSkip = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.chat.ReqDashboardStatistics} returns this
 */
proto.chat.ReqDashboardStatistics.prototype.setSkip = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional int64 Limit = 11;
 * @return {number}
 */
proto.chat.ReqDashboardStatistics.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.chat.ReqDashboardStatistics} returns this
 */
proto.chat.ReqDashboardStatistics.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.chat.ReqStatisticsByUserYearMonth.prototype.toObject = function(opt_includeInstance) {
  return proto.chat.ReqStatisticsByUserYearMonth.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.chat.ReqStatisticsByUserYearMonth} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.ReqStatisticsByUserYearMonth.toObject = function(includeInstance, msg) {
  var f, obj = {
    customerid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    emailsearch: jspb.Message.getFieldWithDefault(msg, 2, ""),
    usernamesearch: jspb.Message.getFieldWithDefault(msg, 3, ""),
    currentyearsearch: jspb.Message.getFieldWithDefault(msg, 4, 0),
    previousyearsearch: jspb.Message.getFieldWithDefault(msg, 5, 0),
    skip: jspb.Message.getFieldWithDefault(msg, 6, 0),
    limit: jspb.Message.getFieldWithDefault(msg, 7, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.chat.ReqStatisticsByUserYearMonth}
 */
proto.chat.ReqStatisticsByUserYearMonth.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.chat.ReqStatisticsByUserYearMonth;
  return proto.chat.ReqStatisticsByUserYearMonth.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.chat.ReqStatisticsByUserYearMonth} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.chat.ReqStatisticsByUserYearMonth}
 */
proto.chat.ReqStatisticsByUserYearMonth.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmailsearch(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsernamesearch(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCurrentyearsearch(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPreviousyearsearch(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSkip(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLimit(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.chat.ReqStatisticsByUserYearMonth.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.chat.ReqStatisticsByUserYearMonth.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.chat.ReqStatisticsByUserYearMonth} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.ReqStatisticsByUserYearMonth.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCustomerid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEmailsearch();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUsernamesearch();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCurrentyearsearch();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getPreviousyearsearch();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getSkip();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
};


/**
 * optional string CustomerID = 1;
 * @return {string}
 */
proto.chat.ReqStatisticsByUserYearMonth.prototype.getCustomerid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.ReqStatisticsByUserYearMonth} returns this
 */
proto.chat.ReqStatisticsByUserYearMonth.prototype.setCustomerid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string EmailSearch = 2;
 * @return {string}
 */
proto.chat.ReqStatisticsByUserYearMonth.prototype.getEmailsearch = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.ReqStatisticsByUserYearMonth} returns this
 */
proto.chat.ReqStatisticsByUserYearMonth.prototype.setEmailsearch = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string UserNameSearch = 3;
 * @return {string}
 */
proto.chat.ReqStatisticsByUserYearMonth.prototype.getUsernamesearch = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.ReqStatisticsByUserYearMonth} returns this
 */
proto.chat.ReqStatisticsByUserYearMonth.prototype.setUsernamesearch = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int64 CurrentYearSearch = 4;
 * @return {number}
 */
proto.chat.ReqStatisticsByUserYearMonth.prototype.getCurrentyearsearch = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.chat.ReqStatisticsByUserYearMonth} returns this
 */
proto.chat.ReqStatisticsByUserYearMonth.prototype.setCurrentyearsearch = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 PreviousYearSearch = 5;
 * @return {number}
 */
proto.chat.ReqStatisticsByUserYearMonth.prototype.getPreviousyearsearch = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.chat.ReqStatisticsByUserYearMonth} returns this
 */
proto.chat.ReqStatisticsByUserYearMonth.prototype.setPreviousyearsearch = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 Skip = 6;
 * @return {number}
 */
proto.chat.ReqStatisticsByUserYearMonth.prototype.getSkip = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.chat.ReqStatisticsByUserYearMonth} returns this
 */
proto.chat.ReqStatisticsByUserYearMonth.prototype.setSkip = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int64 Limit = 7;
 * @return {number}
 */
proto.chat.ReqStatisticsByUserYearMonth.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.chat.ReqStatisticsByUserYearMonth} returns this
 */
proto.chat.ReqStatisticsByUserYearMonth.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.chat.Statistic.prototype.toObject = function(opt_includeInstance) {
  return proto.chat.Statistic.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.chat.Statistic} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.Statistic.toObject = function(includeInstance, msg) {
  var f, obj = {
    count: jspb.Message.getFieldWithDefault(msg, 1, 0),
    month: jspb.Message.getFieldWithDefault(msg, 2, 0),
    year: jspb.Message.getFieldWithDefault(msg, 3, 0),
    status: jspb.Message.getFieldWithDefault(msg, 4, ""),
    statusdata: (f = msg.getStatusdata()) && proto.chat.StatusData.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.chat.Statistic}
 */
proto.chat.Statistic.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.chat.Statistic;
  return proto.chat.Statistic.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.chat.Statistic} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.chat.Statistic}
 */
proto.chat.Statistic.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCount(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMonth(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setYear(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 5:
      var value = new proto.chat.StatusData;
      reader.readMessage(value,proto.chat.StatusData.deserializeBinaryFromReader);
      msg.setStatusdata(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.chat.Statistic.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.chat.Statistic.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.chat.Statistic} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.Statistic.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCount();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getMonth();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getYear();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getStatusdata();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.chat.StatusData.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 Count = 1;
 * @return {number}
 */
proto.chat.Statistic.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.chat.Statistic} returns this
 */
proto.chat.Statistic.prototype.setCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 Month = 2;
 * @return {number}
 */
proto.chat.Statistic.prototype.getMonth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.chat.Statistic} returns this
 */
proto.chat.Statistic.prototype.setMonth = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 Year = 3;
 * @return {number}
 */
proto.chat.Statistic.prototype.getYear = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.chat.Statistic} returns this
 */
proto.chat.Statistic.prototype.setYear = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string Status = 4;
 * @return {string}
 */
proto.chat.Statistic.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.Statistic} returns this
 */
proto.chat.Statistic.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional StatusData StatusData = 5;
 * @return {?proto.chat.StatusData}
 */
proto.chat.Statistic.prototype.getStatusdata = function() {
  return /** @type{?proto.chat.StatusData} */ (
    jspb.Message.getWrapperField(this, proto.chat.StatusData, 5));
};


/**
 * @param {?proto.chat.StatusData|undefined} value
 * @return {!proto.chat.Statistic} returns this
*/
proto.chat.Statistic.prototype.setStatusdata = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.chat.Statistic} returns this
 */
proto.chat.Statistic.prototype.clearStatusdata = function() {
  return this.setStatusdata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.chat.Statistic.prototype.hasStatusdata = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.chat.ReqUserRegistration.repeatedFields_ = [10];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.chat.ReqUserRegistration.prototype.toObject = function(opt_includeInstance) {
  return proto.chat.ReqUserRegistration.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.chat.ReqUserRegistration} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.ReqUserRegistration.toObject = function(includeInstance, msg) {
  var f, obj = {
    email: jspb.Message.getFieldWithDefault(msg, 1, ""),
    password: jspb.Message.getFieldWithDefault(msg, 2, ""),
    status: jspb.Message.getFieldWithDefault(msg, 3, ""),
    createdate: jspb.Message.getFieldWithDefault(msg, 4, ""),
    updatedate: jspb.Message.getFieldWithDefault(msg, 5, ""),
    statusdate: jspb.Message.getFieldWithDefault(msg, 6, ""),
    usertype: jspb.Message.getFieldWithDefault(msg, 7, 0),
    firstname: jspb.Message.getFieldWithDefault(msg, 8, ""),
    lastname: jspb.Message.getFieldWithDefault(msg, 9, ""),
    customersList: (f = jspb.Message.getRepeatedField(msg, 10)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.chat.ReqUserRegistration}
 */
proto.chat.ReqUserRegistration.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.chat.ReqUserRegistration;
  return proto.chat.ReqUserRegistration.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.chat.ReqUserRegistration} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.chat.ReqUserRegistration}
 */
proto.chat.ReqUserRegistration.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedate(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setUpdatedate(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatusdate(value);
      break;
    case 7:
      var value = /** @type {!proto.chat.UserType} */ (reader.readEnum());
      msg.setUsertype(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setFirstname(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastname(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.addCustomers(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.chat.ReqUserRegistration.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.chat.ReqUserRegistration.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.chat.ReqUserRegistration} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.ReqUserRegistration.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCreatedate();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getUpdatedate();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getStatusdate();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getUsertype();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getFirstname();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getLastname();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getCustomersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      10,
      f
    );
  }
};


/**
 * optional string Email = 1;
 * @return {string}
 */
proto.chat.ReqUserRegistration.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.ReqUserRegistration} returns this
 */
proto.chat.ReqUserRegistration.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string Password = 2;
 * @return {string}
 */
proto.chat.ReqUserRegistration.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.ReqUserRegistration} returns this
 */
proto.chat.ReqUserRegistration.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string Status = 3;
 * @return {string}
 */
proto.chat.ReqUserRegistration.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.ReqUserRegistration} returns this
 */
proto.chat.ReqUserRegistration.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string CreateDate = 4;
 * @return {string}
 */
proto.chat.ReqUserRegistration.prototype.getCreatedate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.ReqUserRegistration} returns this
 */
proto.chat.ReqUserRegistration.prototype.setCreatedate = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string UpdateDate = 5;
 * @return {string}
 */
proto.chat.ReqUserRegistration.prototype.getUpdatedate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.ReqUserRegistration} returns this
 */
proto.chat.ReqUserRegistration.prototype.setUpdatedate = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string StatusDate = 6;
 * @return {string}
 */
proto.chat.ReqUserRegistration.prototype.getStatusdate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.ReqUserRegistration} returns this
 */
proto.chat.ReqUserRegistration.prototype.setStatusdate = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional UserType UserType = 7;
 * @return {!proto.chat.UserType}
 */
proto.chat.ReqUserRegistration.prototype.getUsertype = function() {
  return /** @type {!proto.chat.UserType} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.chat.UserType} value
 * @return {!proto.chat.ReqUserRegistration} returns this
 */
proto.chat.ReqUserRegistration.prototype.setUsertype = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional string FirstName = 8;
 * @return {string}
 */
proto.chat.ReqUserRegistration.prototype.getFirstname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.ReqUserRegistration} returns this
 */
proto.chat.ReqUserRegistration.prototype.setFirstname = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string LastName = 9;
 * @return {string}
 */
proto.chat.ReqUserRegistration.prototype.getLastname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.ReqUserRegistration} returns this
 */
proto.chat.ReqUserRegistration.prototype.setLastname = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * repeated string Customers = 10;
 * @return {!Array<string>}
 */
proto.chat.ReqUserRegistration.prototype.getCustomersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 10));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.chat.ReqUserRegistration} returns this
 */
proto.chat.ReqUserRegistration.prototype.setCustomersList = function(value) {
  return jspb.Message.setField(this, 10, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.chat.ReqUserRegistration} returns this
 */
proto.chat.ReqUserRegistration.prototype.addCustomers = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 10, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.chat.ReqUserRegistration} returns this
 */
proto.chat.ReqUserRegistration.prototype.clearCustomersList = function() {
  return this.setCustomersList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.chat.InsertUserRegistration.prototype.toObject = function(opt_includeInstance) {
  return proto.chat.InsertUserRegistration.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.chat.InsertUserRegistration} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.InsertUserRegistration.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    userregistration: (f = msg.getUserregistration()) && proto.chat.ReqUserRegistration.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.chat.InsertUserRegistration}
 */
proto.chat.InsertUserRegistration.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.chat.InsertUserRegistration;
  return proto.chat.InsertUserRegistration.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.chat.InsertUserRegistration} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.chat.InsertUserRegistration}
 */
proto.chat.InsertUserRegistration.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new proto.chat.ReqUserRegistration;
      reader.readMessage(value,proto.chat.ReqUserRegistration.deserializeBinaryFromReader);
      msg.setUserregistration(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.chat.InsertUserRegistration.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.chat.InsertUserRegistration.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.chat.InsertUserRegistration} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.InsertUserRegistration.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUserregistration();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.chat.ReqUserRegistration.serializeBinaryToWriter
    );
  }
};


/**
 * optional string Id = 1;
 * @return {string}
 */
proto.chat.InsertUserRegistration.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.InsertUserRegistration} returns this
 */
proto.chat.InsertUserRegistration.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional ReqUserRegistration userregistration = 2;
 * @return {?proto.chat.ReqUserRegistration}
 */
proto.chat.InsertUserRegistration.prototype.getUserregistration = function() {
  return /** @type{?proto.chat.ReqUserRegistration} */ (
    jspb.Message.getWrapperField(this, proto.chat.ReqUserRegistration, 2));
};


/**
 * @param {?proto.chat.ReqUserRegistration|undefined} value
 * @return {!proto.chat.InsertUserRegistration} returns this
*/
proto.chat.InsertUserRegistration.prototype.setUserregistration = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.chat.InsertUserRegistration} returns this
 */
proto.chat.InsertUserRegistration.prototype.clearUserregistration = function() {
  return this.setUserregistration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.chat.InsertUserRegistration.prototype.hasUserregistration = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.chat.UserRegistration.repeatedFields_ = [11];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.chat.UserRegistration.prototype.toObject = function(opt_includeInstance) {
  return proto.chat.UserRegistration.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.chat.UserRegistration} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.UserRegistration.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    email: jspb.Message.getFieldWithDefault(msg, 2, ""),
    password: jspb.Message.getFieldWithDefault(msg, 3, ""),
    status: jspb.Message.getFieldWithDefault(msg, 4, ""),
    createdate: jspb.Message.getFieldWithDefault(msg, 5, ""),
    updatedate: jspb.Message.getFieldWithDefault(msg, 6, ""),
    statusdate: jspb.Message.getFieldWithDefault(msg, 7, ""),
    usertype: jspb.Message.getFieldWithDefault(msg, 8, 0),
    firstname: jspb.Message.getFieldWithDefault(msg, 9, ""),
    lastname: jspb.Message.getFieldWithDefault(msg, 10, ""),
    customersList: (f = jspb.Message.getRepeatedField(msg, 11)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.chat.UserRegistration}
 */
proto.chat.UserRegistration.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.chat.UserRegistration;
  return proto.chat.UserRegistration.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.chat.UserRegistration} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.chat.UserRegistration}
 */
proto.chat.UserRegistration.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedate(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setUpdatedate(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatusdate(value);
      break;
    case 8:
      var value = /** @type {!proto.chat.UserType} */ (reader.readEnum());
      msg.setUsertype(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setFirstname(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastname(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.addCustomers(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.chat.UserRegistration.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.chat.UserRegistration.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.chat.UserRegistration} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.UserRegistration.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCreatedate();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getUpdatedate();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getStatusdate();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getUsertype();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = message.getFirstname();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getLastname();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getCustomersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      11,
      f
    );
  }
};


/**
 * optional string Id = 1;
 * @return {string}
 */
proto.chat.UserRegistration.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.UserRegistration} returns this
 */
proto.chat.UserRegistration.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string Email = 2;
 * @return {string}
 */
proto.chat.UserRegistration.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.UserRegistration} returns this
 */
proto.chat.UserRegistration.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string Password = 3;
 * @return {string}
 */
proto.chat.UserRegistration.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.UserRegistration} returns this
 */
proto.chat.UserRegistration.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string Status = 4;
 * @return {string}
 */
proto.chat.UserRegistration.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.UserRegistration} returns this
 */
proto.chat.UserRegistration.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string CreateDate = 5;
 * @return {string}
 */
proto.chat.UserRegistration.prototype.getCreatedate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.UserRegistration} returns this
 */
proto.chat.UserRegistration.prototype.setCreatedate = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string UpdateDate = 6;
 * @return {string}
 */
proto.chat.UserRegistration.prototype.getUpdatedate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.UserRegistration} returns this
 */
proto.chat.UserRegistration.prototype.setUpdatedate = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string StatusDate = 7;
 * @return {string}
 */
proto.chat.UserRegistration.prototype.getStatusdate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.UserRegistration} returns this
 */
proto.chat.UserRegistration.prototype.setStatusdate = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional UserType UserType = 8;
 * @return {!proto.chat.UserType}
 */
proto.chat.UserRegistration.prototype.getUsertype = function() {
  return /** @type {!proto.chat.UserType} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.chat.UserType} value
 * @return {!proto.chat.UserRegistration} returns this
 */
proto.chat.UserRegistration.prototype.setUsertype = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};


/**
 * optional string FirstName = 9;
 * @return {string}
 */
proto.chat.UserRegistration.prototype.getFirstname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.UserRegistration} returns this
 */
proto.chat.UserRegistration.prototype.setFirstname = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string LastName = 10;
 * @return {string}
 */
proto.chat.UserRegistration.prototype.getLastname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.UserRegistration} returns this
 */
proto.chat.UserRegistration.prototype.setLastname = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * repeated string Customers = 11;
 * @return {!Array<string>}
 */
proto.chat.UserRegistration.prototype.getCustomersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 11));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.chat.UserRegistration} returns this
 */
proto.chat.UserRegistration.prototype.setCustomersList = function(value) {
  return jspb.Message.setField(this, 11, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.chat.UserRegistration} returns this
 */
proto.chat.UserRegistration.prototype.addCustomers = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 11, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.chat.UserRegistration} returns this
 */
proto.chat.UserRegistration.prototype.clearCustomersList = function() {
  return this.setCustomersList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.chat.UserRegistrationProfile.repeatedFields_ = [11];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.chat.UserRegistrationProfile.prototype.toObject = function(opt_includeInstance) {
  return proto.chat.UserRegistrationProfile.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.chat.UserRegistrationProfile} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.UserRegistrationProfile.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    email: jspb.Message.getFieldWithDefault(msg, 2, ""),
    status: jspb.Message.getFieldWithDefault(msg, 4, ""),
    createdate: jspb.Message.getFieldWithDefault(msg, 5, ""),
    updatedate: jspb.Message.getFieldWithDefault(msg, 6, ""),
    statusdate: jspb.Message.getFieldWithDefault(msg, 7, ""),
    usertype: jspb.Message.getFieldWithDefault(msg, 8, 0),
    firstname: jspb.Message.getFieldWithDefault(msg, 9, ""),
    lastname: jspb.Message.getFieldWithDefault(msg, 10, ""),
    customersList: (f = jspb.Message.getRepeatedField(msg, 11)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.chat.UserRegistrationProfile}
 */
proto.chat.UserRegistrationProfile.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.chat.UserRegistrationProfile;
  return proto.chat.UserRegistrationProfile.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.chat.UserRegistrationProfile} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.chat.UserRegistrationProfile}
 */
proto.chat.UserRegistrationProfile.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedate(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setUpdatedate(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatusdate(value);
      break;
    case 8:
      var value = /** @type {!proto.chat.UserType} */ (reader.readEnum());
      msg.setUsertype(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setFirstname(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastname(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.addCustomers(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.chat.UserRegistrationProfile.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.chat.UserRegistrationProfile.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.chat.UserRegistrationProfile} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.UserRegistrationProfile.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCreatedate();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getUpdatedate();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getStatusdate();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getUsertype();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = message.getFirstname();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getLastname();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getCustomersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      11,
      f
    );
  }
};


/**
 * optional string Id = 1;
 * @return {string}
 */
proto.chat.UserRegistrationProfile.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.UserRegistrationProfile} returns this
 */
proto.chat.UserRegistrationProfile.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string Email = 2;
 * @return {string}
 */
proto.chat.UserRegistrationProfile.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.UserRegistrationProfile} returns this
 */
proto.chat.UserRegistrationProfile.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string Status = 4;
 * @return {string}
 */
proto.chat.UserRegistrationProfile.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.UserRegistrationProfile} returns this
 */
proto.chat.UserRegistrationProfile.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string CreateDate = 5;
 * @return {string}
 */
proto.chat.UserRegistrationProfile.prototype.getCreatedate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.UserRegistrationProfile} returns this
 */
proto.chat.UserRegistrationProfile.prototype.setCreatedate = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string UpdateDate = 6;
 * @return {string}
 */
proto.chat.UserRegistrationProfile.prototype.getUpdatedate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.UserRegistrationProfile} returns this
 */
proto.chat.UserRegistrationProfile.prototype.setUpdatedate = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string StatusDate = 7;
 * @return {string}
 */
proto.chat.UserRegistrationProfile.prototype.getStatusdate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.UserRegistrationProfile} returns this
 */
proto.chat.UserRegistrationProfile.prototype.setStatusdate = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional UserType UserType = 8;
 * @return {!proto.chat.UserType}
 */
proto.chat.UserRegistrationProfile.prototype.getUsertype = function() {
  return /** @type {!proto.chat.UserType} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.chat.UserType} value
 * @return {!proto.chat.UserRegistrationProfile} returns this
 */
proto.chat.UserRegistrationProfile.prototype.setUsertype = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};


/**
 * optional string FirstName = 9;
 * @return {string}
 */
proto.chat.UserRegistrationProfile.prototype.getFirstname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.UserRegistrationProfile} returns this
 */
proto.chat.UserRegistrationProfile.prototype.setFirstname = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string LastName = 10;
 * @return {string}
 */
proto.chat.UserRegistrationProfile.prototype.getLastname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.UserRegistrationProfile} returns this
 */
proto.chat.UserRegistrationProfile.prototype.setLastname = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * repeated string Customers = 11;
 * @return {!Array<string>}
 */
proto.chat.UserRegistrationProfile.prototype.getCustomersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 11));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.chat.UserRegistrationProfile} returns this
 */
proto.chat.UserRegistrationProfile.prototype.setCustomersList = function(value) {
  return jspb.Message.setField(this, 11, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.chat.UserRegistrationProfile} returns this
 */
proto.chat.UserRegistrationProfile.prototype.addCustomers = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 11, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.chat.UserRegistrationProfile} returns this
 */
proto.chat.UserRegistrationProfile.prototype.clearCustomersList = function() {
  return this.setCustomersList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.chat.UserRegistrationList.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.chat.UserRegistrationList.prototype.toObject = function(opt_includeInstance) {
  return proto.chat.UserRegistrationList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.chat.UserRegistrationList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.UserRegistrationList.toObject = function(includeInstance, msg) {
  var f, obj = {
    total: jspb.Message.getFieldWithDefault(msg, 1, 0),
    userregistrationList: jspb.Message.toObjectList(msg.getUserregistrationList(),
    proto.chat.UserRegistrationProfile.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.chat.UserRegistrationList}
 */
proto.chat.UserRegistrationList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.chat.UserRegistrationList;
  return proto.chat.UserRegistrationList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.chat.UserRegistrationList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.chat.UserRegistrationList}
 */
proto.chat.UserRegistrationList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotal(value);
      break;
    case 2:
      var value = new proto.chat.UserRegistrationProfile;
      reader.readMessage(value,proto.chat.UserRegistrationProfile.deserializeBinaryFromReader);
      msg.addUserregistration(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.chat.UserRegistrationList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.chat.UserRegistrationList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.chat.UserRegistrationList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.UserRegistrationList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTotal();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getUserregistrationList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.chat.UserRegistrationProfile.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 total = 1;
 * @return {number}
 */
proto.chat.UserRegistrationList.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.chat.UserRegistrationList} returns this
 */
proto.chat.UserRegistrationList.prototype.setTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated UserRegistrationProfile userregistration = 2;
 * @return {!Array<!proto.chat.UserRegistrationProfile>}
 */
proto.chat.UserRegistrationList.prototype.getUserregistrationList = function() {
  return /** @type{!Array<!proto.chat.UserRegistrationProfile>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.chat.UserRegistrationProfile, 2));
};


/**
 * @param {!Array<!proto.chat.UserRegistrationProfile>} value
 * @return {!proto.chat.UserRegistrationList} returns this
*/
proto.chat.UserRegistrationList.prototype.setUserregistrationList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.chat.UserRegistrationProfile=} opt_value
 * @param {number=} opt_index
 * @return {!proto.chat.UserRegistrationProfile}
 */
proto.chat.UserRegistrationList.prototype.addUserregistration = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.chat.UserRegistrationProfile, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.chat.UserRegistrationList} returns this
 */
proto.chat.UserRegistrationList.prototype.clearUserregistrationList = function() {
  return this.setUserregistrationList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.chat.ReqUpdateUserRegistration.prototype.toObject = function(opt_includeInstance) {
  return proto.chat.ReqUpdateUserRegistration.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.chat.ReqUpdateUserRegistration} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.ReqUpdateUserRegistration.toObject = function(includeInstance, msg) {
  var f, obj = {
    filter: jspb.Message.getFieldWithDefault(msg, 1, ""),
    id: jspb.Message.getFieldWithDefault(msg, 2, ""),
    userregistration: (f = msg.getUserregistration()) && proto.chat.ReqUserRegistration.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.chat.ReqUpdateUserRegistration}
 */
proto.chat.ReqUpdateUserRegistration.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.chat.ReqUpdateUserRegistration;
  return proto.chat.ReqUpdateUserRegistration.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.chat.ReqUpdateUserRegistration} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.chat.ReqUpdateUserRegistration}
 */
proto.chat.ReqUpdateUserRegistration.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFilter(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 3:
      var value = new proto.chat.ReqUserRegistration;
      reader.readMessage(value,proto.chat.ReqUserRegistration.deserializeBinaryFromReader);
      msg.setUserregistration(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.chat.ReqUpdateUserRegistration.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.chat.ReqUpdateUserRegistration.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.chat.ReqUpdateUserRegistration} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.ReqUpdateUserRegistration.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFilter();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUserregistration();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.chat.ReqUserRegistration.serializeBinaryToWriter
    );
  }
};


/**
 * optional string filter = 1;
 * @return {string}
 */
proto.chat.ReqUpdateUserRegistration.prototype.getFilter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.ReqUpdateUserRegistration} returns this
 */
proto.chat.ReqUpdateUserRegistration.prototype.setFilter = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string Id = 2;
 * @return {string}
 */
proto.chat.ReqUpdateUserRegistration.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.ReqUpdateUserRegistration} returns this
 */
proto.chat.ReqUpdateUserRegistration.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional ReqUserRegistration userregistration = 3;
 * @return {?proto.chat.ReqUserRegistration}
 */
proto.chat.ReqUpdateUserRegistration.prototype.getUserregistration = function() {
  return /** @type{?proto.chat.ReqUserRegistration} */ (
    jspb.Message.getWrapperField(this, proto.chat.ReqUserRegistration, 3));
};


/**
 * @param {?proto.chat.ReqUserRegistration|undefined} value
 * @return {!proto.chat.ReqUpdateUserRegistration} returns this
*/
proto.chat.ReqUpdateUserRegistration.prototype.setUserregistration = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.chat.ReqUpdateUserRegistration} returns this
 */
proto.chat.ReqUpdateUserRegistration.prototype.clearUserregistration = function() {
  return this.setUserregistration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.chat.ReqUpdateUserRegistration.prototype.hasUserregistration = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.chat.StatusData.prototype.toObject = function(opt_includeInstance) {
  return proto.chat.StatusData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.chat.StatusData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.StatusData.toObject = function(includeInstance, msg) {
  var f, obj = {
    statusname: jspb.Message.getFieldWithDefault(msg, 1, ""),
    iconname: jspb.Message.getFieldWithDefault(msg, 2, ""),
    iconcolor: jspb.Message.getFieldWithDefault(msg, 3, ""),
    createdate: jspb.Message.getFieldWithDefault(msg, 4, ""),
    updatedate: jspb.Message.getFieldWithDefault(msg, 5, ""),
    createdby: jspb.Message.getFieldWithDefault(msg, 6, ""),
    updatedby: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.chat.StatusData}
 */
proto.chat.StatusData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.chat.StatusData;
  return proto.chat.StatusData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.chat.StatusData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.chat.StatusData}
 */
proto.chat.StatusData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatusname(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setIconname(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setIconcolor(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedate(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setUpdatedate(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedby(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setUpdatedby(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.chat.StatusData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.chat.StatusData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.chat.StatusData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.StatusData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatusname();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIconname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIconcolor();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCreatedate();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getUpdatedate();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCreatedby();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getUpdatedby();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional string StatusName = 1;
 * @return {string}
 */
proto.chat.StatusData.prototype.getStatusname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.StatusData} returns this
 */
proto.chat.StatusData.prototype.setStatusname = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string IconName = 2;
 * @return {string}
 */
proto.chat.StatusData.prototype.getIconname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.StatusData} returns this
 */
proto.chat.StatusData.prototype.setIconname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string IconColor = 3;
 * @return {string}
 */
proto.chat.StatusData.prototype.getIconcolor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.StatusData} returns this
 */
proto.chat.StatusData.prototype.setIconcolor = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string CreateDate = 4;
 * @return {string}
 */
proto.chat.StatusData.prototype.getCreatedate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.StatusData} returns this
 */
proto.chat.StatusData.prototype.setCreatedate = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string UpdateDate = 5;
 * @return {string}
 */
proto.chat.StatusData.prototype.getUpdatedate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.StatusData} returns this
 */
proto.chat.StatusData.prototype.setUpdatedate = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string CreatedBy = 6;
 * @return {string}
 */
proto.chat.StatusData.prototype.getCreatedby = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.StatusData} returns this
 */
proto.chat.StatusData.prototype.setCreatedby = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string UpdatedBy = 7;
 * @return {string}
 */
proto.chat.StatusData.prototype.getUpdatedby = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.StatusData} returns this
 */
proto.chat.StatusData.prototype.setUpdatedby = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.chat.RecommendationsCountByMonthYear.prototype.toObject = function(opt_includeInstance) {
  return proto.chat.RecommendationsCountByMonthYear.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.chat.RecommendationsCountByMonthYear} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.RecommendationsCountByMonthYear.toObject = function(includeInstance, msg) {
  var f, obj = {
    count: jspb.Message.getFieldWithDefault(msg, 1, 0),
    month: jspb.Message.getFieldWithDefault(msg, 2, 0),
    year: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.chat.RecommendationsCountByMonthYear}
 */
proto.chat.RecommendationsCountByMonthYear.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.chat.RecommendationsCountByMonthYear;
  return proto.chat.RecommendationsCountByMonthYear.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.chat.RecommendationsCountByMonthYear} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.chat.RecommendationsCountByMonthYear}
 */
proto.chat.RecommendationsCountByMonthYear.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCount(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMonth(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setYear(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.chat.RecommendationsCountByMonthYear.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.chat.RecommendationsCountByMonthYear.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.chat.RecommendationsCountByMonthYear} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.RecommendationsCountByMonthYear.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCount();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getMonth();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getYear();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional int32 Count = 1;
 * @return {number}
 */
proto.chat.RecommendationsCountByMonthYear.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.chat.RecommendationsCountByMonthYear} returns this
 */
proto.chat.RecommendationsCountByMonthYear.prototype.setCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 Month = 2;
 * @return {number}
 */
proto.chat.RecommendationsCountByMonthYear.prototype.getMonth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.chat.RecommendationsCountByMonthYear} returns this
 */
proto.chat.RecommendationsCountByMonthYear.prototype.setMonth = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 Year = 3;
 * @return {number}
 */
proto.chat.RecommendationsCountByMonthYear.prototype.getYear = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.chat.RecommendationsCountByMonthYear} returns this
 */
proto.chat.RecommendationsCountByMonthYear.prototype.setYear = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.chat.StatisticsList.repeatedFields_ = [1,2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.chat.StatisticsList.prototype.toObject = function(opt_includeInstance) {
  return proto.chat.StatisticsList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.chat.StatisticsList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.StatisticsList.toObject = function(includeInstance, msg) {
  var f, obj = {
    statisticList: jspb.Message.toObjectList(msg.getStatisticList(),
    proto.chat.Statistic.toObject, includeInstance),
    recommendationscountbymonthyearList: jspb.Message.toObjectList(msg.getRecommendationscountbymonthyearList(),
    proto.chat.RecommendationsCountByMonthYear.toObject, includeInstance),
    recommendationscountbyusermonthyearList: jspb.Message.toObjectList(msg.getRecommendationscountbyusermonthyearList(),
    proto.chat.RecommendationsCountByUserMonthYear.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.chat.StatisticsList}
 */
proto.chat.StatisticsList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.chat.StatisticsList;
  return proto.chat.StatisticsList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.chat.StatisticsList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.chat.StatisticsList}
 */
proto.chat.StatisticsList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.chat.Statistic;
      reader.readMessage(value,proto.chat.Statistic.deserializeBinaryFromReader);
      msg.addStatistic(value);
      break;
    case 2:
      var value = new proto.chat.RecommendationsCountByMonthYear;
      reader.readMessage(value,proto.chat.RecommendationsCountByMonthYear.deserializeBinaryFromReader);
      msg.addRecommendationscountbymonthyear(value);
      break;
    case 3:
      var value = new proto.chat.RecommendationsCountByUserMonthYear;
      reader.readMessage(value,proto.chat.RecommendationsCountByUserMonthYear.deserializeBinaryFromReader);
      msg.addRecommendationscountbyusermonthyear(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.chat.StatisticsList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.chat.StatisticsList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.chat.StatisticsList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.StatisticsList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatisticList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.chat.Statistic.serializeBinaryToWriter
    );
  }
  f = message.getRecommendationscountbymonthyearList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.chat.RecommendationsCountByMonthYear.serializeBinaryToWriter
    );
  }
  f = message.getRecommendationscountbyusermonthyearList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.chat.RecommendationsCountByUserMonthYear.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Statistic statistic = 1;
 * @return {!Array<!proto.chat.Statistic>}
 */
proto.chat.StatisticsList.prototype.getStatisticList = function() {
  return /** @type{!Array<!proto.chat.Statistic>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.chat.Statistic, 1));
};


/**
 * @param {!Array<!proto.chat.Statistic>} value
 * @return {!proto.chat.StatisticsList} returns this
*/
proto.chat.StatisticsList.prototype.setStatisticList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.chat.Statistic=} opt_value
 * @param {number=} opt_index
 * @return {!proto.chat.Statistic}
 */
proto.chat.StatisticsList.prototype.addStatistic = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.chat.Statistic, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.chat.StatisticsList} returns this
 */
proto.chat.StatisticsList.prototype.clearStatisticList = function() {
  return this.setStatisticList([]);
};


/**
 * repeated RecommendationsCountByMonthYear recommendationscountbymonthyear = 2;
 * @return {!Array<!proto.chat.RecommendationsCountByMonthYear>}
 */
proto.chat.StatisticsList.prototype.getRecommendationscountbymonthyearList = function() {
  return /** @type{!Array<!proto.chat.RecommendationsCountByMonthYear>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.chat.RecommendationsCountByMonthYear, 2));
};


/**
 * @param {!Array<!proto.chat.RecommendationsCountByMonthYear>} value
 * @return {!proto.chat.StatisticsList} returns this
*/
proto.chat.StatisticsList.prototype.setRecommendationscountbymonthyearList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.chat.RecommendationsCountByMonthYear=} opt_value
 * @param {number=} opt_index
 * @return {!proto.chat.RecommendationsCountByMonthYear}
 */
proto.chat.StatisticsList.prototype.addRecommendationscountbymonthyear = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.chat.RecommendationsCountByMonthYear, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.chat.StatisticsList} returns this
 */
proto.chat.StatisticsList.prototype.clearRecommendationscountbymonthyearList = function() {
  return this.setRecommendationscountbymonthyearList([]);
};


/**
 * repeated RecommendationsCountByUserMonthYear recommendationscountbyusermonthyear = 3;
 * @return {!Array<!proto.chat.RecommendationsCountByUserMonthYear>}
 */
proto.chat.StatisticsList.prototype.getRecommendationscountbyusermonthyearList = function() {
  return /** @type{!Array<!proto.chat.RecommendationsCountByUserMonthYear>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.chat.RecommendationsCountByUserMonthYear, 3));
};


/**
 * @param {!Array<!proto.chat.RecommendationsCountByUserMonthYear>} value
 * @return {!proto.chat.StatisticsList} returns this
*/
proto.chat.StatisticsList.prototype.setRecommendationscountbyusermonthyearList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.chat.RecommendationsCountByUserMonthYear=} opt_value
 * @param {number=} opt_index
 * @return {!proto.chat.RecommendationsCountByUserMonthYear}
 */
proto.chat.StatisticsList.prototype.addRecommendationscountbyusermonthyear = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.chat.RecommendationsCountByUserMonthYear, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.chat.StatisticsList} returns this
 */
proto.chat.StatisticsList.prototype.clearRecommendationscountbyusermonthyearList = function() {
  return this.setRecommendationscountbyusermonthyearList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.chat.RecommendationsCountByUserMonthYearList.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.chat.RecommendationsCountByUserMonthYearList.prototype.toObject = function(opt_includeInstance) {
  return proto.chat.RecommendationsCountByUserMonthYearList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.chat.RecommendationsCountByUserMonthYearList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.RecommendationsCountByUserMonthYearList.toObject = function(includeInstance, msg) {
  var f, obj = {
    recommendationscountbyusermonthyearList: jspb.Message.toObjectList(msg.getRecommendationscountbyusermonthyearList(),
    proto.chat.RecommendationsCountByUserMonthYear.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.chat.RecommendationsCountByUserMonthYearList}
 */
proto.chat.RecommendationsCountByUserMonthYearList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.chat.RecommendationsCountByUserMonthYearList;
  return proto.chat.RecommendationsCountByUserMonthYearList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.chat.RecommendationsCountByUserMonthYearList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.chat.RecommendationsCountByUserMonthYearList}
 */
proto.chat.RecommendationsCountByUserMonthYearList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.chat.RecommendationsCountByUserMonthYear;
      reader.readMessage(value,proto.chat.RecommendationsCountByUserMonthYear.deserializeBinaryFromReader);
      msg.addRecommendationscountbyusermonthyear(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.chat.RecommendationsCountByUserMonthYearList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.chat.RecommendationsCountByUserMonthYearList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.chat.RecommendationsCountByUserMonthYearList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.RecommendationsCountByUserMonthYearList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecommendationscountbyusermonthyearList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.chat.RecommendationsCountByUserMonthYear.serializeBinaryToWriter
    );
  }
};


/**
 * repeated RecommendationsCountByUserMonthYear recommendationscountbyusermonthyear = 1;
 * @return {!Array<!proto.chat.RecommendationsCountByUserMonthYear>}
 */
proto.chat.RecommendationsCountByUserMonthYearList.prototype.getRecommendationscountbyusermonthyearList = function() {
  return /** @type{!Array<!proto.chat.RecommendationsCountByUserMonthYear>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.chat.RecommendationsCountByUserMonthYear, 1));
};


/**
 * @param {!Array<!proto.chat.RecommendationsCountByUserMonthYear>} value
 * @return {!proto.chat.RecommendationsCountByUserMonthYearList} returns this
*/
proto.chat.RecommendationsCountByUserMonthYearList.prototype.setRecommendationscountbyusermonthyearList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.chat.RecommendationsCountByUserMonthYear=} opt_value
 * @param {number=} opt_index
 * @return {!proto.chat.RecommendationsCountByUserMonthYear}
 */
proto.chat.RecommendationsCountByUserMonthYearList.prototype.addRecommendationscountbyusermonthyear = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.chat.RecommendationsCountByUserMonthYear, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.chat.RecommendationsCountByUserMonthYearList} returns this
 */
proto.chat.RecommendationsCountByUserMonthYearList.prototype.clearRecommendationscountbyusermonthyearList = function() {
  return this.setRecommendationscountbyusermonthyearList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.chat.RecommendationsCountByUserMonthYear.prototype.toObject = function(opt_includeInstance) {
  return proto.chat.RecommendationsCountByUserMonthYear.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.chat.RecommendationsCountByUserMonthYear} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.RecommendationsCountByUserMonthYear.toObject = function(includeInstance, msg) {
  var f, obj = {
    count: jspb.Message.getFieldWithDefault(msg, 1, 0),
    month: jspb.Message.getFieldWithDefault(msg, 2, 0),
    year: jspb.Message.getFieldWithDefault(msg, 3, 0),
    status: jspb.Message.getFieldWithDefault(msg, 4, ""),
    username: jspb.Message.getFieldWithDefault(msg, 5, ""),
    email: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.chat.RecommendationsCountByUserMonthYear}
 */
proto.chat.RecommendationsCountByUserMonthYear.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.chat.RecommendationsCountByUserMonthYear;
  return proto.chat.RecommendationsCountByUserMonthYear.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.chat.RecommendationsCountByUserMonthYear} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.chat.RecommendationsCountByUserMonthYear}
 */
proto.chat.RecommendationsCountByUserMonthYear.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCount(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMonth(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setYear(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.chat.RecommendationsCountByUserMonthYear.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.chat.RecommendationsCountByUserMonthYear.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.chat.RecommendationsCountByUserMonthYear} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.RecommendationsCountByUserMonthYear.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCount();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getMonth();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getYear();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional int32 Count = 1;
 * @return {number}
 */
proto.chat.RecommendationsCountByUserMonthYear.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.chat.RecommendationsCountByUserMonthYear} returns this
 */
proto.chat.RecommendationsCountByUserMonthYear.prototype.setCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 Month = 2;
 * @return {number}
 */
proto.chat.RecommendationsCountByUserMonthYear.prototype.getMonth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.chat.RecommendationsCountByUserMonthYear} returns this
 */
proto.chat.RecommendationsCountByUserMonthYear.prototype.setMonth = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 Year = 3;
 * @return {number}
 */
proto.chat.RecommendationsCountByUserMonthYear.prototype.getYear = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.chat.RecommendationsCountByUserMonthYear} returns this
 */
proto.chat.RecommendationsCountByUserMonthYear.prototype.setYear = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string Status = 4;
 * @return {string}
 */
proto.chat.RecommendationsCountByUserMonthYear.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.RecommendationsCountByUserMonthYear} returns this
 */
proto.chat.RecommendationsCountByUserMonthYear.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string UserName = 5;
 * @return {string}
 */
proto.chat.RecommendationsCountByUserMonthYear.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.RecommendationsCountByUserMonthYear} returns this
 */
proto.chat.RecommendationsCountByUserMonthYear.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string Email = 6;
 * @return {string}
 */
proto.chat.RecommendationsCountByUserMonthYear.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.RecommendationsCountByUserMonthYear} returns this
 */
proto.chat.RecommendationsCountByUserMonthYear.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.chat.MenuGroup.prototype.toObject = function(opt_includeInstance) {
  return proto.chat.MenuGroup.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.chat.MenuGroup} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.MenuGroup.toObject = function(includeInstance, msg) {
  var f, obj = {
    menugroup: jspb.Message.getFieldWithDefault(msg, 1, ""),
    order: jspb.Message.getFieldWithDefault(msg, 2, 0),
    createdate: jspb.Message.getFieldWithDefault(msg, 3, ""),
    updatedate: jspb.Message.getFieldWithDefault(msg, 4, ""),
    createdby: jspb.Message.getFieldWithDefault(msg, 5, ""),
    updatedby: jspb.Message.getFieldWithDefault(msg, 6, ""),
    status: jspb.Message.getFieldWithDefault(msg, 7, ""),
    statusdate: jspb.Message.getFieldWithDefault(msg, 8, ""),
    icon: jspb.Message.getFieldWithDefault(msg, 10, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.chat.MenuGroup}
 */
proto.chat.MenuGroup.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.chat.MenuGroup;
  return proto.chat.MenuGroup.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.chat.MenuGroup} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.chat.MenuGroup}
 */
proto.chat.MenuGroup.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMenugroup(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOrder(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedate(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUpdatedate(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedby(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setUpdatedby(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatusdate(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setIcon(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.chat.MenuGroup.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.chat.MenuGroup.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.chat.MenuGroup} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.MenuGroup.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMenugroup();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOrder();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getCreatedate();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getUpdatedate();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCreatedby();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getUpdatedby();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getStatusdate();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getIcon();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
};


/**
 * optional string MenuGroup = 1;
 * @return {string}
 */
proto.chat.MenuGroup.prototype.getMenugroup = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.MenuGroup} returns this
 */
proto.chat.MenuGroup.prototype.setMenugroup = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 Order = 2;
 * @return {number}
 */
proto.chat.MenuGroup.prototype.getOrder = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.chat.MenuGroup} returns this
 */
proto.chat.MenuGroup.prototype.setOrder = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string CreateDate = 3;
 * @return {string}
 */
proto.chat.MenuGroup.prototype.getCreatedate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.MenuGroup} returns this
 */
proto.chat.MenuGroup.prototype.setCreatedate = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string UpdateDate = 4;
 * @return {string}
 */
proto.chat.MenuGroup.prototype.getUpdatedate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.MenuGroup} returns this
 */
proto.chat.MenuGroup.prototype.setUpdatedate = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string CreatedBy = 5;
 * @return {string}
 */
proto.chat.MenuGroup.prototype.getCreatedby = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.MenuGroup} returns this
 */
proto.chat.MenuGroup.prototype.setCreatedby = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string UpdatedBy = 6;
 * @return {string}
 */
proto.chat.MenuGroup.prototype.getUpdatedby = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.MenuGroup} returns this
 */
proto.chat.MenuGroup.prototype.setUpdatedby = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string Status = 7;
 * @return {string}
 */
proto.chat.MenuGroup.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.MenuGroup} returns this
 */
proto.chat.MenuGroup.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string StatusDate = 8;
 * @return {string}
 */
proto.chat.MenuGroup.prototype.getStatusdate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.MenuGroup} returns this
 */
proto.chat.MenuGroup.prototype.setStatusdate = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string Icon = 10;
 * @return {string}
 */
proto.chat.MenuGroup.prototype.getIcon = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.MenuGroup} returns this
 */
proto.chat.MenuGroup.prototype.setIcon = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.chat.MenuGroupData.prototype.toObject = function(opt_includeInstance) {
  return proto.chat.MenuGroupData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.chat.MenuGroupData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.MenuGroupData.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    menugroup: jspb.Message.getFieldWithDefault(msg, 2, ""),
    order: jspb.Message.getFieldWithDefault(msg, 3, 0),
    createdate: jspb.Message.getFieldWithDefault(msg, 4, ""),
    updatedate: jspb.Message.getFieldWithDefault(msg, 5, ""),
    createdby: jspb.Message.getFieldWithDefault(msg, 6, ""),
    updatedby: jspb.Message.getFieldWithDefault(msg, 7, ""),
    status: jspb.Message.getFieldWithDefault(msg, 8, ""),
    statusdate: jspb.Message.getFieldWithDefault(msg, 9, ""),
    icon: jspb.Message.getFieldWithDefault(msg, 10, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.chat.MenuGroupData}
 */
proto.chat.MenuGroupData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.chat.MenuGroupData;
  return proto.chat.MenuGroupData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.chat.MenuGroupData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.chat.MenuGroupData}
 */
proto.chat.MenuGroupData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMenugroup(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOrder(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedate(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setUpdatedate(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedby(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setUpdatedby(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatusdate(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setIcon(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.chat.MenuGroupData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.chat.MenuGroupData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.chat.MenuGroupData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.MenuGroupData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMenugroup();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getOrder();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getCreatedate();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getUpdatedate();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCreatedby();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getUpdatedby();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getStatusdate();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getIcon();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
};


/**
 * optional string Id = 1;
 * @return {string}
 */
proto.chat.MenuGroupData.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.MenuGroupData} returns this
 */
proto.chat.MenuGroupData.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string MenuGroup = 2;
 * @return {string}
 */
proto.chat.MenuGroupData.prototype.getMenugroup = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.MenuGroupData} returns this
 */
proto.chat.MenuGroupData.prototype.setMenugroup = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 Order = 3;
 * @return {number}
 */
proto.chat.MenuGroupData.prototype.getOrder = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.chat.MenuGroupData} returns this
 */
proto.chat.MenuGroupData.prototype.setOrder = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string CreateDate = 4;
 * @return {string}
 */
proto.chat.MenuGroupData.prototype.getCreatedate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.MenuGroupData} returns this
 */
proto.chat.MenuGroupData.prototype.setCreatedate = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string UpdateDate = 5;
 * @return {string}
 */
proto.chat.MenuGroupData.prototype.getUpdatedate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.MenuGroupData} returns this
 */
proto.chat.MenuGroupData.prototype.setUpdatedate = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string CreatedBy = 6;
 * @return {string}
 */
proto.chat.MenuGroupData.prototype.getCreatedby = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.MenuGroupData} returns this
 */
proto.chat.MenuGroupData.prototype.setCreatedby = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string UpdatedBy = 7;
 * @return {string}
 */
proto.chat.MenuGroupData.prototype.getUpdatedby = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.MenuGroupData} returns this
 */
proto.chat.MenuGroupData.prototype.setUpdatedby = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string Status = 8;
 * @return {string}
 */
proto.chat.MenuGroupData.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.MenuGroupData} returns this
 */
proto.chat.MenuGroupData.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string StatusDate = 9;
 * @return {string}
 */
proto.chat.MenuGroupData.prototype.getStatusdate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.MenuGroupData} returns this
 */
proto.chat.MenuGroupData.prototype.setStatusdate = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string Icon = 10;
 * @return {string}
 */
proto.chat.MenuGroupData.prototype.getIcon = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.MenuGroupData} returns this
 */
proto.chat.MenuGroupData.prototype.setIcon = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.chat.MenuGroupList.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.chat.MenuGroupList.prototype.toObject = function(opt_includeInstance) {
  return proto.chat.MenuGroupList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.chat.MenuGroupList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.MenuGroupList.toObject = function(includeInstance, msg) {
  var f, obj = {
    total: jspb.Message.getFieldWithDefault(msg, 1, 0),
    menugroupdataList: jspb.Message.toObjectList(msg.getMenugroupdataList(),
    proto.chat.MenuGroupData.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.chat.MenuGroupList}
 */
proto.chat.MenuGroupList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.chat.MenuGroupList;
  return proto.chat.MenuGroupList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.chat.MenuGroupList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.chat.MenuGroupList}
 */
proto.chat.MenuGroupList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotal(value);
      break;
    case 2:
      var value = new proto.chat.MenuGroupData;
      reader.readMessage(value,proto.chat.MenuGroupData.deserializeBinaryFromReader);
      msg.addMenugroupdata(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.chat.MenuGroupList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.chat.MenuGroupList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.chat.MenuGroupList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.MenuGroupList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTotal();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getMenugroupdataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.chat.MenuGroupData.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 total = 1;
 * @return {number}
 */
proto.chat.MenuGroupList.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.chat.MenuGroupList} returns this
 */
proto.chat.MenuGroupList.prototype.setTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated MenuGroupData MenuGroupData = 2;
 * @return {!Array<!proto.chat.MenuGroupData>}
 */
proto.chat.MenuGroupList.prototype.getMenugroupdataList = function() {
  return /** @type{!Array<!proto.chat.MenuGroupData>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.chat.MenuGroupData, 2));
};


/**
 * @param {!Array<!proto.chat.MenuGroupData>} value
 * @return {!proto.chat.MenuGroupList} returns this
*/
proto.chat.MenuGroupList.prototype.setMenugroupdataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.chat.MenuGroupData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.chat.MenuGroupData}
 */
proto.chat.MenuGroupList.prototype.addMenugroupdata = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.chat.MenuGroupData, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.chat.MenuGroupList} returns this
 */
proto.chat.MenuGroupList.prototype.clearMenugroupdataList = function() {
  return this.setMenugroupdataList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.chat.InsertMenuGroup.prototype.toObject = function(opt_includeInstance) {
  return proto.chat.InsertMenuGroup.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.chat.InsertMenuGroup} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.InsertMenuGroup.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    menugroup: (f = msg.getMenugroup()) && proto.chat.MenuGroup.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.chat.InsertMenuGroup}
 */
proto.chat.InsertMenuGroup.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.chat.InsertMenuGroup;
  return proto.chat.InsertMenuGroup.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.chat.InsertMenuGroup} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.chat.InsertMenuGroup}
 */
proto.chat.InsertMenuGroup.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new proto.chat.MenuGroup;
      reader.readMessage(value,proto.chat.MenuGroup.deserializeBinaryFromReader);
      msg.setMenugroup(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.chat.InsertMenuGroup.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.chat.InsertMenuGroup.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.chat.InsertMenuGroup} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.InsertMenuGroup.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMenugroup();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.chat.MenuGroup.serializeBinaryToWriter
    );
  }
};


/**
 * optional string Id = 1;
 * @return {string}
 */
proto.chat.InsertMenuGroup.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.InsertMenuGroup} returns this
 */
proto.chat.InsertMenuGroup.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional MenuGroup menugroup = 2;
 * @return {?proto.chat.MenuGroup}
 */
proto.chat.InsertMenuGroup.prototype.getMenugroup = function() {
  return /** @type{?proto.chat.MenuGroup} */ (
    jspb.Message.getWrapperField(this, proto.chat.MenuGroup, 2));
};


/**
 * @param {?proto.chat.MenuGroup|undefined} value
 * @return {!proto.chat.InsertMenuGroup} returns this
*/
proto.chat.InsertMenuGroup.prototype.setMenugroup = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.chat.InsertMenuGroup} returns this
 */
proto.chat.InsertMenuGroup.prototype.clearMenugroup = function() {
  return this.setMenugroup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.chat.InsertMenuGroup.prototype.hasMenugroup = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.chat.UpdateMenuGroup.prototype.toObject = function(opt_includeInstance) {
  return proto.chat.UpdateMenuGroup.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.chat.UpdateMenuGroup} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.UpdateMenuGroup.toObject = function(includeInstance, msg) {
  var f, obj = {
    filter: jspb.Message.getFieldWithDefault(msg, 1, ""),
    id: jspb.Message.getFieldWithDefault(msg, 2, ""),
    menugroup: (f = msg.getMenugroup()) && proto.chat.MenuGroup.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.chat.UpdateMenuGroup}
 */
proto.chat.UpdateMenuGroup.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.chat.UpdateMenuGroup;
  return proto.chat.UpdateMenuGroup.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.chat.UpdateMenuGroup} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.chat.UpdateMenuGroup}
 */
proto.chat.UpdateMenuGroup.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFilter(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 3:
      var value = new proto.chat.MenuGroup;
      reader.readMessage(value,proto.chat.MenuGroup.deserializeBinaryFromReader);
      msg.setMenugroup(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.chat.UpdateMenuGroup.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.chat.UpdateMenuGroup.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.chat.UpdateMenuGroup} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.UpdateMenuGroup.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFilter();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMenugroup();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.chat.MenuGroup.serializeBinaryToWriter
    );
  }
};


/**
 * optional string filter = 1;
 * @return {string}
 */
proto.chat.UpdateMenuGroup.prototype.getFilter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.UpdateMenuGroup} returns this
 */
proto.chat.UpdateMenuGroup.prototype.setFilter = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string Id = 2;
 * @return {string}
 */
proto.chat.UpdateMenuGroup.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.UpdateMenuGroup} returns this
 */
proto.chat.UpdateMenuGroup.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional MenuGroup menugroup = 3;
 * @return {?proto.chat.MenuGroup}
 */
proto.chat.UpdateMenuGroup.prototype.getMenugroup = function() {
  return /** @type{?proto.chat.MenuGroup} */ (
    jspb.Message.getWrapperField(this, proto.chat.MenuGroup, 3));
};


/**
 * @param {?proto.chat.MenuGroup|undefined} value
 * @return {!proto.chat.UpdateMenuGroup} returns this
*/
proto.chat.UpdateMenuGroup.prototype.setMenugroup = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.chat.UpdateMenuGroup} returns this
 */
proto.chat.UpdateMenuGroup.prototype.clearMenugroup = function() {
  return this.setMenugroup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.chat.UpdateMenuGroup.prototype.hasMenugroup = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.chat.MenuOption.prototype.toObject = function(opt_includeInstance) {
  return proto.chat.MenuOption.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.chat.MenuOption} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.MenuOption.toObject = function(includeInstance, msg) {
  var f, obj = {
    optionname: jspb.Message.getFieldWithDefault(msg, 1, ""),
    order: jspb.Message.getFieldWithDefault(msg, 2, 0),
    createdate: jspb.Message.getFieldWithDefault(msg, 3, ""),
    updatedate: jspb.Message.getFieldWithDefault(msg, 4, ""),
    createdby: jspb.Message.getFieldWithDefault(msg, 5, ""),
    updatedby: jspb.Message.getFieldWithDefault(msg, 6, ""),
    status: jspb.Message.getFieldWithDefault(msg, 7, ""),
    statusdate: jspb.Message.getFieldWithDefault(msg, 8, ""),
    icon: jspb.Message.getFieldWithDefault(msg, 9, ""),
    usertype: jspb.Message.getFieldWithDefault(msg, 10, 0),
    menugroup: jspb.Message.getFieldWithDefault(msg, 11, ""),
    optionhref: jspb.Message.getFieldWithDefault(msg, 12, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.chat.MenuOption}
 */
proto.chat.MenuOption.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.chat.MenuOption;
  return proto.chat.MenuOption.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.chat.MenuOption} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.chat.MenuOption}
 */
proto.chat.MenuOption.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOptionname(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOrder(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedate(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUpdatedate(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedby(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setUpdatedby(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatusdate(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setIcon(value);
      break;
    case 10:
      var value = /** @type {!proto.chat.UserType} */ (reader.readEnum());
      msg.setUsertype(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setMenugroup(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setOptionhref(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.chat.MenuOption.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.chat.MenuOption.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.chat.MenuOption} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.MenuOption.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOptionname();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOrder();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getCreatedate();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getUpdatedate();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCreatedby();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getUpdatedby();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getStatusdate();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getIcon();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getUsertype();
  if (f !== 0.0) {
    writer.writeEnum(
      10,
      f
    );
  }
  f = message.getMenugroup();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getOptionhref();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
};


/**
 * optional string OptionName = 1;
 * @return {string}
 */
proto.chat.MenuOption.prototype.getOptionname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.MenuOption} returns this
 */
proto.chat.MenuOption.prototype.setOptionname = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 Order = 2;
 * @return {number}
 */
proto.chat.MenuOption.prototype.getOrder = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.chat.MenuOption} returns this
 */
proto.chat.MenuOption.prototype.setOrder = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string CreateDate = 3;
 * @return {string}
 */
proto.chat.MenuOption.prototype.getCreatedate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.MenuOption} returns this
 */
proto.chat.MenuOption.prototype.setCreatedate = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string UpdateDate = 4;
 * @return {string}
 */
proto.chat.MenuOption.prototype.getUpdatedate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.MenuOption} returns this
 */
proto.chat.MenuOption.prototype.setUpdatedate = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string CreatedBy = 5;
 * @return {string}
 */
proto.chat.MenuOption.prototype.getCreatedby = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.MenuOption} returns this
 */
proto.chat.MenuOption.prototype.setCreatedby = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string UpdatedBy = 6;
 * @return {string}
 */
proto.chat.MenuOption.prototype.getUpdatedby = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.MenuOption} returns this
 */
proto.chat.MenuOption.prototype.setUpdatedby = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string Status = 7;
 * @return {string}
 */
proto.chat.MenuOption.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.MenuOption} returns this
 */
proto.chat.MenuOption.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string StatusDate = 8;
 * @return {string}
 */
proto.chat.MenuOption.prototype.getStatusdate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.MenuOption} returns this
 */
proto.chat.MenuOption.prototype.setStatusdate = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string Icon = 9;
 * @return {string}
 */
proto.chat.MenuOption.prototype.getIcon = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.MenuOption} returns this
 */
proto.chat.MenuOption.prototype.setIcon = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional UserType UserType = 10;
 * @return {!proto.chat.UserType}
 */
proto.chat.MenuOption.prototype.getUsertype = function() {
  return /** @type {!proto.chat.UserType} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {!proto.chat.UserType} value
 * @return {!proto.chat.MenuOption} returns this
 */
proto.chat.MenuOption.prototype.setUsertype = function(value) {
  return jspb.Message.setProto3EnumField(this, 10, value);
};


/**
 * optional string MenuGroup = 11;
 * @return {string}
 */
proto.chat.MenuOption.prototype.getMenugroup = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.MenuOption} returns this
 */
proto.chat.MenuOption.prototype.setMenugroup = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string OptionHref = 12;
 * @return {string}
 */
proto.chat.MenuOption.prototype.getOptionhref = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.MenuOption} returns this
 */
proto.chat.MenuOption.prototype.setOptionhref = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.chat.MenuOptionData.prototype.toObject = function(opt_includeInstance) {
  return proto.chat.MenuOptionData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.chat.MenuOptionData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.MenuOptionData.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    optionname: jspb.Message.getFieldWithDefault(msg, 2, ""),
    order: jspb.Message.getFieldWithDefault(msg, 3, 0),
    createdate: jspb.Message.getFieldWithDefault(msg, 4, ""),
    updatedate: jspb.Message.getFieldWithDefault(msg, 5, ""),
    createdby: jspb.Message.getFieldWithDefault(msg, 6, ""),
    updatedby: jspb.Message.getFieldWithDefault(msg, 7, ""),
    status: jspb.Message.getFieldWithDefault(msg, 8, ""),
    statusdate: jspb.Message.getFieldWithDefault(msg, 9, ""),
    icon: jspb.Message.getFieldWithDefault(msg, 10, ""),
    usertype: jspb.Message.getFieldWithDefault(msg, 11, 0),
    menugroup: jspb.Message.getFieldWithDefault(msg, 12, ""),
    optionhref: jspb.Message.getFieldWithDefault(msg, 13, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.chat.MenuOptionData}
 */
proto.chat.MenuOptionData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.chat.MenuOptionData;
  return proto.chat.MenuOptionData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.chat.MenuOptionData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.chat.MenuOptionData}
 */
proto.chat.MenuOptionData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOptionname(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOrder(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedate(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setUpdatedate(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedby(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setUpdatedby(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatusdate(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setIcon(value);
      break;
    case 11:
      var value = /** @type {!proto.chat.UserType} */ (reader.readEnum());
      msg.setUsertype(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setMenugroup(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setOptionhref(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.chat.MenuOptionData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.chat.MenuOptionData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.chat.MenuOptionData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.MenuOptionData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOptionname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getOrder();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getCreatedate();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getUpdatedate();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCreatedby();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getUpdatedby();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getStatusdate();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getIcon();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getUsertype();
  if (f !== 0.0) {
    writer.writeEnum(
      11,
      f
    );
  }
  f = message.getMenugroup();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getOptionhref();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
};


/**
 * optional string Id = 1;
 * @return {string}
 */
proto.chat.MenuOptionData.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.MenuOptionData} returns this
 */
proto.chat.MenuOptionData.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string OptionName = 2;
 * @return {string}
 */
proto.chat.MenuOptionData.prototype.getOptionname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.MenuOptionData} returns this
 */
proto.chat.MenuOptionData.prototype.setOptionname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 Order = 3;
 * @return {number}
 */
proto.chat.MenuOptionData.prototype.getOrder = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.chat.MenuOptionData} returns this
 */
proto.chat.MenuOptionData.prototype.setOrder = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string CreateDate = 4;
 * @return {string}
 */
proto.chat.MenuOptionData.prototype.getCreatedate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.MenuOptionData} returns this
 */
proto.chat.MenuOptionData.prototype.setCreatedate = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string UpdateDate = 5;
 * @return {string}
 */
proto.chat.MenuOptionData.prototype.getUpdatedate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.MenuOptionData} returns this
 */
proto.chat.MenuOptionData.prototype.setUpdatedate = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string CreatedBy = 6;
 * @return {string}
 */
proto.chat.MenuOptionData.prototype.getCreatedby = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.MenuOptionData} returns this
 */
proto.chat.MenuOptionData.prototype.setCreatedby = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string UpdatedBy = 7;
 * @return {string}
 */
proto.chat.MenuOptionData.prototype.getUpdatedby = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.MenuOptionData} returns this
 */
proto.chat.MenuOptionData.prototype.setUpdatedby = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string Status = 8;
 * @return {string}
 */
proto.chat.MenuOptionData.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.MenuOptionData} returns this
 */
proto.chat.MenuOptionData.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string StatusDate = 9;
 * @return {string}
 */
proto.chat.MenuOptionData.prototype.getStatusdate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.MenuOptionData} returns this
 */
proto.chat.MenuOptionData.prototype.setStatusdate = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string Icon = 10;
 * @return {string}
 */
proto.chat.MenuOptionData.prototype.getIcon = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.MenuOptionData} returns this
 */
proto.chat.MenuOptionData.prototype.setIcon = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional UserType UserType = 11;
 * @return {!proto.chat.UserType}
 */
proto.chat.MenuOptionData.prototype.getUsertype = function() {
  return /** @type {!proto.chat.UserType} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {!proto.chat.UserType} value
 * @return {!proto.chat.MenuOptionData} returns this
 */
proto.chat.MenuOptionData.prototype.setUsertype = function(value) {
  return jspb.Message.setProto3EnumField(this, 11, value);
};


/**
 * optional string MenuGroup = 12;
 * @return {string}
 */
proto.chat.MenuOptionData.prototype.getMenugroup = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.MenuOptionData} returns this
 */
proto.chat.MenuOptionData.prototype.setMenugroup = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string OptionHref = 13;
 * @return {string}
 */
proto.chat.MenuOptionData.prototype.getOptionhref = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.MenuOptionData} returns this
 */
proto.chat.MenuOptionData.prototype.setOptionhref = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.chat.MenuOptionList.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.chat.MenuOptionList.prototype.toObject = function(opt_includeInstance) {
  return proto.chat.MenuOptionList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.chat.MenuOptionList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.MenuOptionList.toObject = function(includeInstance, msg) {
  var f, obj = {
    total: jspb.Message.getFieldWithDefault(msg, 1, 0),
    menuoptiondataList: jspb.Message.toObjectList(msg.getMenuoptiondataList(),
    proto.chat.MenuOptionData.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.chat.MenuOptionList}
 */
proto.chat.MenuOptionList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.chat.MenuOptionList;
  return proto.chat.MenuOptionList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.chat.MenuOptionList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.chat.MenuOptionList}
 */
proto.chat.MenuOptionList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotal(value);
      break;
    case 2:
      var value = new proto.chat.MenuOptionData;
      reader.readMessage(value,proto.chat.MenuOptionData.deserializeBinaryFromReader);
      msg.addMenuoptiondata(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.chat.MenuOptionList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.chat.MenuOptionList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.chat.MenuOptionList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.MenuOptionList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTotal();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getMenuoptiondataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.chat.MenuOptionData.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 total = 1;
 * @return {number}
 */
proto.chat.MenuOptionList.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.chat.MenuOptionList} returns this
 */
proto.chat.MenuOptionList.prototype.setTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated MenuOptionData MenuOptionData = 2;
 * @return {!Array<!proto.chat.MenuOptionData>}
 */
proto.chat.MenuOptionList.prototype.getMenuoptiondataList = function() {
  return /** @type{!Array<!proto.chat.MenuOptionData>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.chat.MenuOptionData, 2));
};


/**
 * @param {!Array<!proto.chat.MenuOptionData>} value
 * @return {!proto.chat.MenuOptionList} returns this
*/
proto.chat.MenuOptionList.prototype.setMenuoptiondataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.chat.MenuOptionData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.chat.MenuOptionData}
 */
proto.chat.MenuOptionList.prototype.addMenuoptiondata = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.chat.MenuOptionData, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.chat.MenuOptionList} returns this
 */
proto.chat.MenuOptionList.prototype.clearMenuoptiondataList = function() {
  return this.setMenuoptiondataList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.chat.InsertMenuOption.prototype.toObject = function(opt_includeInstance) {
  return proto.chat.InsertMenuOption.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.chat.InsertMenuOption} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.InsertMenuOption.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    menuoption: (f = msg.getMenuoption()) && proto.chat.MenuOption.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.chat.InsertMenuOption}
 */
proto.chat.InsertMenuOption.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.chat.InsertMenuOption;
  return proto.chat.InsertMenuOption.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.chat.InsertMenuOption} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.chat.InsertMenuOption}
 */
proto.chat.InsertMenuOption.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new proto.chat.MenuOption;
      reader.readMessage(value,proto.chat.MenuOption.deserializeBinaryFromReader);
      msg.setMenuoption(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.chat.InsertMenuOption.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.chat.InsertMenuOption.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.chat.InsertMenuOption} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.InsertMenuOption.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMenuoption();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.chat.MenuOption.serializeBinaryToWriter
    );
  }
};


/**
 * optional string Id = 1;
 * @return {string}
 */
proto.chat.InsertMenuOption.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.InsertMenuOption} returns this
 */
proto.chat.InsertMenuOption.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional MenuOption menuoption = 2;
 * @return {?proto.chat.MenuOption}
 */
proto.chat.InsertMenuOption.prototype.getMenuoption = function() {
  return /** @type{?proto.chat.MenuOption} */ (
    jspb.Message.getWrapperField(this, proto.chat.MenuOption, 2));
};


/**
 * @param {?proto.chat.MenuOption|undefined} value
 * @return {!proto.chat.InsertMenuOption} returns this
*/
proto.chat.InsertMenuOption.prototype.setMenuoption = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.chat.InsertMenuOption} returns this
 */
proto.chat.InsertMenuOption.prototype.clearMenuoption = function() {
  return this.setMenuoption(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.chat.InsertMenuOption.prototype.hasMenuoption = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.chat.UpdateMenuOption.prototype.toObject = function(opt_includeInstance) {
  return proto.chat.UpdateMenuOption.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.chat.UpdateMenuOption} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.UpdateMenuOption.toObject = function(includeInstance, msg) {
  var f, obj = {
    filter: jspb.Message.getFieldWithDefault(msg, 1, ""),
    id: jspb.Message.getFieldWithDefault(msg, 2, ""),
    menuoption: (f = msg.getMenuoption()) && proto.chat.MenuOption.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.chat.UpdateMenuOption}
 */
proto.chat.UpdateMenuOption.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.chat.UpdateMenuOption;
  return proto.chat.UpdateMenuOption.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.chat.UpdateMenuOption} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.chat.UpdateMenuOption}
 */
proto.chat.UpdateMenuOption.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFilter(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 3:
      var value = new proto.chat.MenuOption;
      reader.readMessage(value,proto.chat.MenuOption.deserializeBinaryFromReader);
      msg.setMenuoption(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.chat.UpdateMenuOption.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.chat.UpdateMenuOption.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.chat.UpdateMenuOption} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.UpdateMenuOption.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFilter();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMenuoption();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.chat.MenuOption.serializeBinaryToWriter
    );
  }
};


/**
 * optional string filter = 1;
 * @return {string}
 */
proto.chat.UpdateMenuOption.prototype.getFilter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.UpdateMenuOption} returns this
 */
proto.chat.UpdateMenuOption.prototype.setFilter = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string Id = 2;
 * @return {string}
 */
proto.chat.UpdateMenuOption.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.UpdateMenuOption} returns this
 */
proto.chat.UpdateMenuOption.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional MenuOption menuoption = 3;
 * @return {?proto.chat.MenuOption}
 */
proto.chat.UpdateMenuOption.prototype.getMenuoption = function() {
  return /** @type{?proto.chat.MenuOption} */ (
    jspb.Message.getWrapperField(this, proto.chat.MenuOption, 3));
};


/**
 * @param {?proto.chat.MenuOption|undefined} value
 * @return {!proto.chat.UpdateMenuOption} returns this
*/
proto.chat.UpdateMenuOption.prototype.setMenuoption = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.chat.UpdateMenuOption} returns this
 */
proto.chat.UpdateMenuOption.prototype.clearMenuoption = function() {
  return this.setMenuoption(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.chat.UpdateMenuOption.prototype.hasMenuoption = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.chat.Menu.repeatedFields_ = [11];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.chat.Menu.prototype.toObject = function(opt_includeInstance) {
  return proto.chat.Menu.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.chat.Menu} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.Menu.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    menugroup: jspb.Message.getFieldWithDefault(msg, 2, ""),
    order: jspb.Message.getFieldWithDefault(msg, 3, 0),
    createdate: jspb.Message.getFieldWithDefault(msg, 4, ""),
    updatedate: jspb.Message.getFieldWithDefault(msg, 5, ""),
    createdby: jspb.Message.getFieldWithDefault(msg, 6, ""),
    updatedby: jspb.Message.getFieldWithDefault(msg, 7, ""),
    status: jspb.Message.getFieldWithDefault(msg, 8, ""),
    statusdate: jspb.Message.getFieldWithDefault(msg, 9, ""),
    icon: jspb.Message.getFieldWithDefault(msg, 10, ""),
    menuoptionsList: jspb.Message.toObjectList(msg.getMenuoptionsList(),
    proto.chat.MenuOptionData.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.chat.Menu}
 */
proto.chat.Menu.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.chat.Menu;
  return proto.chat.Menu.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.chat.Menu} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.chat.Menu}
 */
proto.chat.Menu.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMenugroup(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOrder(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedate(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setUpdatedate(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedby(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setUpdatedby(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatusdate(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setIcon(value);
      break;
    case 11:
      var value = new proto.chat.MenuOptionData;
      reader.readMessage(value,proto.chat.MenuOptionData.deserializeBinaryFromReader);
      msg.addMenuoptions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.chat.Menu.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.chat.Menu.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.chat.Menu} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.Menu.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMenugroup();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getOrder();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getCreatedate();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getUpdatedate();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCreatedby();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getUpdatedby();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getStatusdate();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getIcon();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getMenuoptionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      11,
      f,
      proto.chat.MenuOptionData.serializeBinaryToWriter
    );
  }
};


/**
 * optional string Id = 1;
 * @return {string}
 */
proto.chat.Menu.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.Menu} returns this
 */
proto.chat.Menu.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string MenuGroup = 2;
 * @return {string}
 */
proto.chat.Menu.prototype.getMenugroup = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.Menu} returns this
 */
proto.chat.Menu.prototype.setMenugroup = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 Order = 3;
 * @return {number}
 */
proto.chat.Menu.prototype.getOrder = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.chat.Menu} returns this
 */
proto.chat.Menu.prototype.setOrder = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string CreateDate = 4;
 * @return {string}
 */
proto.chat.Menu.prototype.getCreatedate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.Menu} returns this
 */
proto.chat.Menu.prototype.setCreatedate = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string UpdateDate = 5;
 * @return {string}
 */
proto.chat.Menu.prototype.getUpdatedate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.Menu} returns this
 */
proto.chat.Menu.prototype.setUpdatedate = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string CreatedBy = 6;
 * @return {string}
 */
proto.chat.Menu.prototype.getCreatedby = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.Menu} returns this
 */
proto.chat.Menu.prototype.setCreatedby = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string UpdatedBy = 7;
 * @return {string}
 */
proto.chat.Menu.prototype.getUpdatedby = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.Menu} returns this
 */
proto.chat.Menu.prototype.setUpdatedby = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string Status = 8;
 * @return {string}
 */
proto.chat.Menu.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.Menu} returns this
 */
proto.chat.Menu.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string StatusDate = 9;
 * @return {string}
 */
proto.chat.Menu.prototype.getStatusdate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.Menu} returns this
 */
proto.chat.Menu.prototype.setStatusdate = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string Icon = 10;
 * @return {string}
 */
proto.chat.Menu.prototype.getIcon = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.Menu} returns this
 */
proto.chat.Menu.prototype.setIcon = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * repeated MenuOptionData MenuOptions = 11;
 * @return {!Array<!proto.chat.MenuOptionData>}
 */
proto.chat.Menu.prototype.getMenuoptionsList = function() {
  return /** @type{!Array<!proto.chat.MenuOptionData>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.chat.MenuOptionData, 11));
};


/**
 * @param {!Array<!proto.chat.MenuOptionData>} value
 * @return {!proto.chat.Menu} returns this
*/
proto.chat.Menu.prototype.setMenuoptionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 11, value);
};


/**
 * @param {!proto.chat.MenuOptionData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.chat.MenuOptionData}
 */
proto.chat.Menu.prototype.addMenuoptions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 11, opt_value, proto.chat.MenuOptionData, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.chat.Menu} returns this
 */
proto.chat.Menu.prototype.clearMenuoptionsList = function() {
  return this.setMenuoptionsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.chat.MenuList.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.chat.MenuList.prototype.toObject = function(opt_includeInstance) {
  return proto.chat.MenuList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.chat.MenuList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.MenuList.toObject = function(includeInstance, msg) {
  var f, obj = {
    menuList: jspb.Message.toObjectList(msg.getMenuList(),
    proto.chat.Menu.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.chat.MenuList}
 */
proto.chat.MenuList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.chat.MenuList;
  return proto.chat.MenuList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.chat.MenuList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.chat.MenuList}
 */
proto.chat.MenuList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.chat.Menu;
      reader.readMessage(value,proto.chat.Menu.deserializeBinaryFromReader);
      msg.addMenu(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.chat.MenuList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.chat.MenuList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.chat.MenuList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.MenuList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMenuList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.chat.Menu.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Menu menu = 1;
 * @return {!Array<!proto.chat.Menu>}
 */
proto.chat.MenuList.prototype.getMenuList = function() {
  return /** @type{!Array<!proto.chat.Menu>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.chat.Menu, 1));
};


/**
 * @param {!Array<!proto.chat.Menu>} value
 * @return {!proto.chat.MenuList} returns this
*/
proto.chat.MenuList.prototype.setMenuList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.chat.Menu=} opt_value
 * @param {number=} opt_index
 * @return {!proto.chat.Menu}
 */
proto.chat.MenuList.prototype.addMenu = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.chat.Menu, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.chat.MenuList} returns this
 */
proto.chat.MenuList.prototype.clearMenuList = function() {
  return this.setMenuList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.chat.MenuRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.chat.MenuRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.chat.MenuRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.MenuRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    usertype: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.chat.MenuRequest}
 */
proto.chat.MenuRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.chat.MenuRequest;
  return proto.chat.MenuRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.chat.MenuRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.chat.MenuRequest}
 */
proto.chat.MenuRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.chat.UserType} */ (reader.readEnum());
      msg.setUsertype(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.chat.MenuRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.chat.MenuRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.chat.MenuRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.MenuRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUsertype();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional UserType UserType = 1;
 * @return {!proto.chat.UserType}
 */
proto.chat.MenuRequest.prototype.getUsertype = function() {
  return /** @type {!proto.chat.UserType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.chat.UserType} value
 * @return {!proto.chat.MenuRequest} returns this
 */
proto.chat.MenuRequest.prototype.setUsertype = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.chat.ButtonToDisplay.prototype.toObject = function(opt_includeInstance) {
  return proto.chat.ButtonToDisplay.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.chat.ButtonToDisplay} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.ButtonToDisplay.toObject = function(includeInstance, msg) {
  var f, obj = {
    applicationname: jspb.Message.getFieldWithDefault(msg, 1, ""),
    display: jspb.Message.getFieldWithDefault(msg, 2, ""),
    updatedby: jspb.Message.getFieldWithDefault(msg, 3, ""),
    status: jspb.Message.getFieldWithDefault(msg, 4, ""),
    createdby: jspb.Message.getFieldWithDefault(msg, 5, ""),
    createdate: jspb.Message.getFieldWithDefault(msg, 6, ""),
    viewname: jspb.Message.getFieldWithDefault(msg, 7, ""),
    buttonname: jspb.Message.getFieldWithDefault(msg, 8, ""),
    thisbuttonisonlyenabledfortheowner: jspb.Message.getFieldWithDefault(msg, 9, ""),
    updateddate: jspb.Message.getFieldWithDefault(msg, 10, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.chat.ButtonToDisplay}
 */
proto.chat.ButtonToDisplay.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.chat.ButtonToDisplay;
  return proto.chat.ButtonToDisplay.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.chat.ButtonToDisplay} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.chat.ButtonToDisplay}
 */
proto.chat.ButtonToDisplay.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setApplicationname(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplay(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUpdatedby(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedby(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedate(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setViewname(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setButtonname(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setThisbuttonisonlyenabledfortheowner(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setUpdateddate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.chat.ButtonToDisplay.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.chat.ButtonToDisplay.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.chat.ButtonToDisplay} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.ButtonToDisplay.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getApplicationname();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDisplay();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUpdatedby();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCreatedby();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCreatedate();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getViewname();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getButtonname();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getThisbuttonisonlyenabledfortheowner();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getUpdateddate();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
};


/**
 * optional string ApplicationName = 1;
 * @return {string}
 */
proto.chat.ButtonToDisplay.prototype.getApplicationname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.ButtonToDisplay} returns this
 */
proto.chat.ButtonToDisplay.prototype.setApplicationname = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string Display = 2;
 * @return {string}
 */
proto.chat.ButtonToDisplay.prototype.getDisplay = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.ButtonToDisplay} returns this
 */
proto.chat.ButtonToDisplay.prototype.setDisplay = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string UpdatedBy = 3;
 * @return {string}
 */
proto.chat.ButtonToDisplay.prototype.getUpdatedby = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.ButtonToDisplay} returns this
 */
proto.chat.ButtonToDisplay.prototype.setUpdatedby = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string Status = 4;
 * @return {string}
 */
proto.chat.ButtonToDisplay.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.ButtonToDisplay} returns this
 */
proto.chat.ButtonToDisplay.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string CreatedBy = 5;
 * @return {string}
 */
proto.chat.ButtonToDisplay.prototype.getCreatedby = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.ButtonToDisplay} returns this
 */
proto.chat.ButtonToDisplay.prototype.setCreatedby = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string CreateDate = 6;
 * @return {string}
 */
proto.chat.ButtonToDisplay.prototype.getCreatedate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.ButtonToDisplay} returns this
 */
proto.chat.ButtonToDisplay.prototype.setCreatedate = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string ViewName = 7;
 * @return {string}
 */
proto.chat.ButtonToDisplay.prototype.getViewname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.ButtonToDisplay} returns this
 */
proto.chat.ButtonToDisplay.prototype.setViewname = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string ButtonName = 8;
 * @return {string}
 */
proto.chat.ButtonToDisplay.prototype.getButtonname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.ButtonToDisplay} returns this
 */
proto.chat.ButtonToDisplay.prototype.setButtonname = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string ThisButtonIsOnlyEnabledForTheOwner = 9;
 * @return {string}
 */
proto.chat.ButtonToDisplay.prototype.getThisbuttonisonlyenabledfortheowner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.ButtonToDisplay} returns this
 */
proto.chat.ButtonToDisplay.prototype.setThisbuttonisonlyenabledfortheowner = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string UpdatedDate = 10;
 * @return {string}
 */
proto.chat.ButtonToDisplay.prototype.getUpdateddate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.ButtonToDisplay} returns this
 */
proto.chat.ButtonToDisplay.prototype.setUpdateddate = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.chat.ButtonToDisplayData.prototype.toObject = function(opt_includeInstance) {
  return proto.chat.ButtonToDisplayData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.chat.ButtonToDisplayData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.ButtonToDisplayData.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    applicationname: jspb.Message.getFieldWithDefault(msg, 2, ""),
    display: jspb.Message.getFieldWithDefault(msg, 3, ""),
    updatedby: jspb.Message.getFieldWithDefault(msg, 4, ""),
    status: jspb.Message.getFieldWithDefault(msg, 5, ""),
    createdby: jspb.Message.getFieldWithDefault(msg, 6, ""),
    createdate: jspb.Message.getFieldWithDefault(msg, 7, ""),
    viewname: jspb.Message.getFieldWithDefault(msg, 8, ""),
    buttonname: jspb.Message.getFieldWithDefault(msg, 9, ""),
    thisbuttonisonlyenabledfortheowner: jspb.Message.getFieldWithDefault(msg, 10, ""),
    updateddate: jspb.Message.getFieldWithDefault(msg, 11, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.chat.ButtonToDisplayData}
 */
proto.chat.ButtonToDisplayData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.chat.ButtonToDisplayData;
  return proto.chat.ButtonToDisplayData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.chat.ButtonToDisplayData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.chat.ButtonToDisplayData}
 */
proto.chat.ButtonToDisplayData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setApplicationname(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplay(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUpdatedby(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedby(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedate(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setViewname(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setButtonname(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setThisbuttonisonlyenabledfortheowner(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setUpdateddate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.chat.ButtonToDisplayData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.chat.ButtonToDisplayData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.chat.ButtonToDisplayData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.ButtonToDisplayData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getApplicationname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDisplay();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getUpdatedby();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCreatedby();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getCreatedate();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getViewname();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getButtonname();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getThisbuttonisonlyenabledfortheowner();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getUpdateddate();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
};


/**
 * optional string Id = 1;
 * @return {string}
 */
proto.chat.ButtonToDisplayData.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.ButtonToDisplayData} returns this
 */
proto.chat.ButtonToDisplayData.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string ApplicationName = 2;
 * @return {string}
 */
proto.chat.ButtonToDisplayData.prototype.getApplicationname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.ButtonToDisplayData} returns this
 */
proto.chat.ButtonToDisplayData.prototype.setApplicationname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string Display = 3;
 * @return {string}
 */
proto.chat.ButtonToDisplayData.prototype.getDisplay = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.ButtonToDisplayData} returns this
 */
proto.chat.ButtonToDisplayData.prototype.setDisplay = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string UpdatedBy = 4;
 * @return {string}
 */
proto.chat.ButtonToDisplayData.prototype.getUpdatedby = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.ButtonToDisplayData} returns this
 */
proto.chat.ButtonToDisplayData.prototype.setUpdatedby = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string Status = 5;
 * @return {string}
 */
proto.chat.ButtonToDisplayData.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.ButtonToDisplayData} returns this
 */
proto.chat.ButtonToDisplayData.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string CreatedBy = 6;
 * @return {string}
 */
proto.chat.ButtonToDisplayData.prototype.getCreatedby = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.ButtonToDisplayData} returns this
 */
proto.chat.ButtonToDisplayData.prototype.setCreatedby = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string CreateDate = 7;
 * @return {string}
 */
proto.chat.ButtonToDisplayData.prototype.getCreatedate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.ButtonToDisplayData} returns this
 */
proto.chat.ButtonToDisplayData.prototype.setCreatedate = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string ViewName = 8;
 * @return {string}
 */
proto.chat.ButtonToDisplayData.prototype.getViewname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.ButtonToDisplayData} returns this
 */
proto.chat.ButtonToDisplayData.prototype.setViewname = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string ButtonName = 9;
 * @return {string}
 */
proto.chat.ButtonToDisplayData.prototype.getButtonname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.ButtonToDisplayData} returns this
 */
proto.chat.ButtonToDisplayData.prototype.setButtonname = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string ThisButtonIsOnlyEnabledForTheOwner = 10;
 * @return {string}
 */
proto.chat.ButtonToDisplayData.prototype.getThisbuttonisonlyenabledfortheowner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.ButtonToDisplayData} returns this
 */
proto.chat.ButtonToDisplayData.prototype.setThisbuttonisonlyenabledfortheowner = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string UpdatedDate = 11;
 * @return {string}
 */
proto.chat.ButtonToDisplayData.prototype.getUpdateddate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.ButtonToDisplayData} returns this
 */
proto.chat.ButtonToDisplayData.prototype.setUpdateddate = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.chat.ButtonToDisplayRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.chat.ButtonToDisplayRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.chat.ButtonToDisplayRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.ButtonToDisplayRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    buttontodisplay: (f = msg.getButtontodisplay()) && proto.chat.ButtonToDisplay.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.chat.ButtonToDisplayRequest}
 */
proto.chat.ButtonToDisplayRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.chat.ButtonToDisplayRequest;
  return proto.chat.ButtonToDisplayRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.chat.ButtonToDisplayRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.chat.ButtonToDisplayRequest}
 */
proto.chat.ButtonToDisplayRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.chat.ButtonToDisplay;
      reader.readMessage(value,proto.chat.ButtonToDisplay.deserializeBinaryFromReader);
      msg.setButtontodisplay(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.chat.ButtonToDisplayRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.chat.ButtonToDisplayRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.chat.ButtonToDisplayRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.ButtonToDisplayRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getButtontodisplay();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.chat.ButtonToDisplay.serializeBinaryToWriter
    );
  }
};


/**
 * optional ButtonToDisplay ButtonToDisplay = 1;
 * @return {?proto.chat.ButtonToDisplay}
 */
proto.chat.ButtonToDisplayRequest.prototype.getButtontodisplay = function() {
  return /** @type{?proto.chat.ButtonToDisplay} */ (
    jspb.Message.getWrapperField(this, proto.chat.ButtonToDisplay, 1));
};


/**
 * @param {?proto.chat.ButtonToDisplay|undefined} value
 * @return {!proto.chat.ButtonToDisplayRequest} returns this
*/
proto.chat.ButtonToDisplayRequest.prototype.setButtontodisplay = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.chat.ButtonToDisplayRequest} returns this
 */
proto.chat.ButtonToDisplayRequest.prototype.clearButtontodisplay = function() {
  return this.setButtontodisplay(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.chat.ButtonToDisplayRequest.prototype.hasButtontodisplay = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.chat.ButtonToDisplayList.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.chat.ButtonToDisplayList.prototype.toObject = function(opt_includeInstance) {
  return proto.chat.ButtonToDisplayList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.chat.ButtonToDisplayList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.ButtonToDisplayList.toObject = function(includeInstance, msg) {
  var f, obj = {
    total: jspb.Message.getFieldWithDefault(msg, 1, 0),
    buttontodisplaydataList: jspb.Message.toObjectList(msg.getButtontodisplaydataList(),
    proto.chat.ButtonToDisplayData.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.chat.ButtonToDisplayList}
 */
proto.chat.ButtonToDisplayList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.chat.ButtonToDisplayList;
  return proto.chat.ButtonToDisplayList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.chat.ButtonToDisplayList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.chat.ButtonToDisplayList}
 */
proto.chat.ButtonToDisplayList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotal(value);
      break;
    case 2:
      var value = new proto.chat.ButtonToDisplayData;
      reader.readMessage(value,proto.chat.ButtonToDisplayData.deserializeBinaryFromReader);
      msg.addButtontodisplaydata(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.chat.ButtonToDisplayList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.chat.ButtonToDisplayList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.chat.ButtonToDisplayList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.ButtonToDisplayList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTotal();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getButtontodisplaydataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.chat.ButtonToDisplayData.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 total = 1;
 * @return {number}
 */
proto.chat.ButtonToDisplayList.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.chat.ButtonToDisplayList} returns this
 */
proto.chat.ButtonToDisplayList.prototype.setTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated ButtonToDisplayData ButtonToDisplayData = 2;
 * @return {!Array<!proto.chat.ButtonToDisplayData>}
 */
proto.chat.ButtonToDisplayList.prototype.getButtontodisplaydataList = function() {
  return /** @type{!Array<!proto.chat.ButtonToDisplayData>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.chat.ButtonToDisplayData, 2));
};


/**
 * @param {!Array<!proto.chat.ButtonToDisplayData>} value
 * @return {!proto.chat.ButtonToDisplayList} returns this
*/
proto.chat.ButtonToDisplayList.prototype.setButtontodisplaydataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.chat.ButtonToDisplayData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.chat.ButtonToDisplayData}
 */
proto.chat.ButtonToDisplayList.prototype.addButtontodisplaydata = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.chat.ButtonToDisplayData, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.chat.ButtonToDisplayList} returns this
 */
proto.chat.ButtonToDisplayList.prototype.clearButtontodisplaydataList = function() {
  return this.setButtontodisplaydataList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.chat.InsertButtonToDisplay.prototype.toObject = function(opt_includeInstance) {
  return proto.chat.InsertButtonToDisplay.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.chat.InsertButtonToDisplay} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.InsertButtonToDisplay.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    buttontodisplay: (f = msg.getButtontodisplay()) && proto.chat.ButtonToDisplay.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.chat.InsertButtonToDisplay}
 */
proto.chat.InsertButtonToDisplay.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.chat.InsertButtonToDisplay;
  return proto.chat.InsertButtonToDisplay.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.chat.InsertButtonToDisplay} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.chat.InsertButtonToDisplay}
 */
proto.chat.InsertButtonToDisplay.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new proto.chat.ButtonToDisplay;
      reader.readMessage(value,proto.chat.ButtonToDisplay.deserializeBinaryFromReader);
      msg.setButtontodisplay(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.chat.InsertButtonToDisplay.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.chat.InsertButtonToDisplay.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.chat.InsertButtonToDisplay} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.InsertButtonToDisplay.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getButtontodisplay();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.chat.ButtonToDisplay.serializeBinaryToWriter
    );
  }
};


/**
 * optional string Id = 1;
 * @return {string}
 */
proto.chat.InsertButtonToDisplay.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.InsertButtonToDisplay} returns this
 */
proto.chat.InsertButtonToDisplay.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional ButtonToDisplay ButtonToDisplay = 2;
 * @return {?proto.chat.ButtonToDisplay}
 */
proto.chat.InsertButtonToDisplay.prototype.getButtontodisplay = function() {
  return /** @type{?proto.chat.ButtonToDisplay} */ (
    jspb.Message.getWrapperField(this, proto.chat.ButtonToDisplay, 2));
};


/**
 * @param {?proto.chat.ButtonToDisplay|undefined} value
 * @return {!proto.chat.InsertButtonToDisplay} returns this
*/
proto.chat.InsertButtonToDisplay.prototype.setButtontodisplay = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.chat.InsertButtonToDisplay} returns this
 */
proto.chat.InsertButtonToDisplay.prototype.clearButtontodisplay = function() {
  return this.setButtontodisplay(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.chat.InsertButtonToDisplay.prototype.hasButtontodisplay = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.chat.UpdateButtonToDisplay.prototype.toObject = function(opt_includeInstance) {
  return proto.chat.UpdateButtonToDisplay.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.chat.UpdateButtonToDisplay} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.UpdateButtonToDisplay.toObject = function(includeInstance, msg) {
  var f, obj = {
    filter: jspb.Message.getFieldWithDefault(msg, 1, ""),
    id: jspb.Message.getFieldWithDefault(msg, 2, ""),
    buttontodisplay: (f = msg.getButtontodisplay()) && proto.chat.ButtonToDisplay.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.chat.UpdateButtonToDisplay}
 */
proto.chat.UpdateButtonToDisplay.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.chat.UpdateButtonToDisplay;
  return proto.chat.UpdateButtonToDisplay.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.chat.UpdateButtonToDisplay} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.chat.UpdateButtonToDisplay}
 */
proto.chat.UpdateButtonToDisplay.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFilter(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 3:
      var value = new proto.chat.ButtonToDisplay;
      reader.readMessage(value,proto.chat.ButtonToDisplay.deserializeBinaryFromReader);
      msg.setButtontodisplay(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.chat.UpdateButtonToDisplay.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.chat.UpdateButtonToDisplay.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.chat.UpdateButtonToDisplay} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.UpdateButtonToDisplay.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFilter();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getButtontodisplay();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.chat.ButtonToDisplay.serializeBinaryToWriter
    );
  }
};


/**
 * optional string filter = 1;
 * @return {string}
 */
proto.chat.UpdateButtonToDisplay.prototype.getFilter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.UpdateButtonToDisplay} returns this
 */
proto.chat.UpdateButtonToDisplay.prototype.setFilter = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string Id = 2;
 * @return {string}
 */
proto.chat.UpdateButtonToDisplay.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.UpdateButtonToDisplay} returns this
 */
proto.chat.UpdateButtonToDisplay.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional ButtonToDisplay ButtonToDisplay = 3;
 * @return {?proto.chat.ButtonToDisplay}
 */
proto.chat.UpdateButtonToDisplay.prototype.getButtontodisplay = function() {
  return /** @type{?proto.chat.ButtonToDisplay} */ (
    jspb.Message.getWrapperField(this, proto.chat.ButtonToDisplay, 3));
};


/**
 * @param {?proto.chat.ButtonToDisplay|undefined} value
 * @return {!proto.chat.UpdateButtonToDisplay} returns this
*/
proto.chat.UpdateButtonToDisplay.prototype.setButtontodisplay = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.chat.UpdateButtonToDisplay} returns this
 */
proto.chat.UpdateButtonToDisplay.prototype.clearButtontodisplay = function() {
  return this.setButtontodisplay(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.chat.UpdateButtonToDisplay.prototype.hasButtontodisplay = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.chat.LabelMetadata.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.chat.LabelMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.chat.LabelMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.chat.LabelMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.LabelMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    applicationname: jspb.Message.getFieldWithDefault(msg, 1, ""),
    formname: jspb.Message.getFieldWithDefault(msg, 2, ""),
    labelselementsList: jspb.Message.toObjectList(msg.getLabelselementsList(),
    proto.chat.LabelsElements.toObject, includeInstance),
    createdby: jspb.Message.getFieldWithDefault(msg, 4, ""),
    createdate: jspb.Message.getFieldWithDefault(msg, 5, ""),
    updateddate: jspb.Message.getFieldWithDefault(msg, 6, ""),
    updatedby: jspb.Message.getFieldWithDefault(msg, 7, ""),
    status: jspb.Message.getFieldWithDefault(msg, 8, ""),
    statusdate: jspb.Message.getFieldWithDefault(msg, 9, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.chat.LabelMetadata}
 */
proto.chat.LabelMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.chat.LabelMetadata;
  return proto.chat.LabelMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.chat.LabelMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.chat.LabelMetadata}
 */
proto.chat.LabelMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setApplicationname(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFormname(value);
      break;
    case 3:
      var value = new proto.chat.LabelsElements;
      reader.readMessage(value,proto.chat.LabelsElements.deserializeBinaryFromReader);
      msg.addLabelselements(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedby(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedate(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setUpdateddate(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setUpdatedby(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatusdate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.chat.LabelMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.chat.LabelMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.chat.LabelMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.LabelMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getApplicationname();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFormname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLabelselementsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.chat.LabelsElements.serializeBinaryToWriter
    );
  }
  f = message.getCreatedby();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCreatedate();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getUpdateddate();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getUpdatedby();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getStatusdate();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * optional string ApplicationName = 1;
 * @return {string}
 */
proto.chat.LabelMetadata.prototype.getApplicationname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.LabelMetadata} returns this
 */
proto.chat.LabelMetadata.prototype.setApplicationname = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string FormName = 2;
 * @return {string}
 */
proto.chat.LabelMetadata.prototype.getFormname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.LabelMetadata} returns this
 */
proto.chat.LabelMetadata.prototype.setFormname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated LabelsElements LabelsElements = 3;
 * @return {!Array<!proto.chat.LabelsElements>}
 */
proto.chat.LabelMetadata.prototype.getLabelselementsList = function() {
  return /** @type{!Array<!proto.chat.LabelsElements>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.chat.LabelsElements, 3));
};


/**
 * @param {!Array<!proto.chat.LabelsElements>} value
 * @return {!proto.chat.LabelMetadata} returns this
*/
proto.chat.LabelMetadata.prototype.setLabelselementsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.chat.LabelsElements=} opt_value
 * @param {number=} opt_index
 * @return {!proto.chat.LabelsElements}
 */
proto.chat.LabelMetadata.prototype.addLabelselements = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.chat.LabelsElements, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.chat.LabelMetadata} returns this
 */
proto.chat.LabelMetadata.prototype.clearLabelselementsList = function() {
  return this.setLabelselementsList([]);
};


/**
 * optional string CreatedBy = 4;
 * @return {string}
 */
proto.chat.LabelMetadata.prototype.getCreatedby = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.LabelMetadata} returns this
 */
proto.chat.LabelMetadata.prototype.setCreatedby = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string CreateDate = 5;
 * @return {string}
 */
proto.chat.LabelMetadata.prototype.getCreatedate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.LabelMetadata} returns this
 */
proto.chat.LabelMetadata.prototype.setCreatedate = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string UpdatedDate = 6;
 * @return {string}
 */
proto.chat.LabelMetadata.prototype.getUpdateddate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.LabelMetadata} returns this
 */
proto.chat.LabelMetadata.prototype.setUpdateddate = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string UpdatedBy = 7;
 * @return {string}
 */
proto.chat.LabelMetadata.prototype.getUpdatedby = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.LabelMetadata} returns this
 */
proto.chat.LabelMetadata.prototype.setUpdatedby = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string Status = 8;
 * @return {string}
 */
proto.chat.LabelMetadata.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.LabelMetadata} returns this
 */
proto.chat.LabelMetadata.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string StatusDate = 9;
 * @return {string}
 */
proto.chat.LabelMetadata.prototype.getStatusdate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.LabelMetadata} returns this
 */
proto.chat.LabelMetadata.prototype.setStatusdate = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.chat.LabelMetadataData.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.chat.LabelMetadataData.prototype.toObject = function(opt_includeInstance) {
  return proto.chat.LabelMetadataData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.chat.LabelMetadataData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.LabelMetadataData.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    applicationname: jspb.Message.getFieldWithDefault(msg, 2, ""),
    formname: jspb.Message.getFieldWithDefault(msg, 3, ""),
    labelselementsList: jspb.Message.toObjectList(msg.getLabelselementsList(),
    proto.chat.LabelsElements.toObject, includeInstance),
    createdby: jspb.Message.getFieldWithDefault(msg, 5, ""),
    createdate: jspb.Message.getFieldWithDefault(msg, 6, ""),
    updateddate: jspb.Message.getFieldWithDefault(msg, 7, ""),
    updatedby: jspb.Message.getFieldWithDefault(msg, 8, ""),
    status: jspb.Message.getFieldWithDefault(msg, 9, ""),
    statusdate: jspb.Message.getFieldWithDefault(msg, 10, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.chat.LabelMetadataData}
 */
proto.chat.LabelMetadataData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.chat.LabelMetadataData;
  return proto.chat.LabelMetadataData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.chat.LabelMetadataData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.chat.LabelMetadataData}
 */
proto.chat.LabelMetadataData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setApplicationname(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setFormname(value);
      break;
    case 4:
      var value = new proto.chat.LabelsElements;
      reader.readMessage(value,proto.chat.LabelsElements.deserializeBinaryFromReader);
      msg.addLabelselements(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedby(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedate(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setUpdateddate(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setUpdatedby(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatusdate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.chat.LabelMetadataData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.chat.LabelMetadataData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.chat.LabelMetadataData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.LabelMetadataData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getApplicationname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFormname();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getLabelselementsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.chat.LabelsElements.serializeBinaryToWriter
    );
  }
  f = message.getCreatedby();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCreatedate();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getUpdateddate();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getUpdatedby();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getStatusdate();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
};


/**
 * optional string Id = 1;
 * @return {string}
 */
proto.chat.LabelMetadataData.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.LabelMetadataData} returns this
 */
proto.chat.LabelMetadataData.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string ApplicationName = 2;
 * @return {string}
 */
proto.chat.LabelMetadataData.prototype.getApplicationname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.LabelMetadataData} returns this
 */
proto.chat.LabelMetadataData.prototype.setApplicationname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string FormName = 3;
 * @return {string}
 */
proto.chat.LabelMetadataData.prototype.getFormname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.LabelMetadataData} returns this
 */
proto.chat.LabelMetadataData.prototype.setFormname = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated LabelsElements LabelsElements = 4;
 * @return {!Array<!proto.chat.LabelsElements>}
 */
proto.chat.LabelMetadataData.prototype.getLabelselementsList = function() {
  return /** @type{!Array<!proto.chat.LabelsElements>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.chat.LabelsElements, 4));
};


/**
 * @param {!Array<!proto.chat.LabelsElements>} value
 * @return {!proto.chat.LabelMetadataData} returns this
*/
proto.chat.LabelMetadataData.prototype.setLabelselementsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.chat.LabelsElements=} opt_value
 * @param {number=} opt_index
 * @return {!proto.chat.LabelsElements}
 */
proto.chat.LabelMetadataData.prototype.addLabelselements = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.chat.LabelsElements, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.chat.LabelMetadataData} returns this
 */
proto.chat.LabelMetadataData.prototype.clearLabelselementsList = function() {
  return this.setLabelselementsList([]);
};


/**
 * optional string CreatedBy = 5;
 * @return {string}
 */
proto.chat.LabelMetadataData.prototype.getCreatedby = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.LabelMetadataData} returns this
 */
proto.chat.LabelMetadataData.prototype.setCreatedby = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string CreateDate = 6;
 * @return {string}
 */
proto.chat.LabelMetadataData.prototype.getCreatedate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.LabelMetadataData} returns this
 */
proto.chat.LabelMetadataData.prototype.setCreatedate = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string UpdatedDate = 7;
 * @return {string}
 */
proto.chat.LabelMetadataData.prototype.getUpdateddate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.LabelMetadataData} returns this
 */
proto.chat.LabelMetadataData.prototype.setUpdateddate = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string UpdatedBy = 8;
 * @return {string}
 */
proto.chat.LabelMetadataData.prototype.getUpdatedby = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.LabelMetadataData} returns this
 */
proto.chat.LabelMetadataData.prototype.setUpdatedby = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string Status = 9;
 * @return {string}
 */
proto.chat.LabelMetadataData.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.LabelMetadataData} returns this
 */
proto.chat.LabelMetadataData.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string StatusDate = 10;
 * @return {string}
 */
proto.chat.LabelMetadataData.prototype.getStatusdate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.LabelMetadataData} returns this
 */
proto.chat.LabelMetadataData.prototype.setStatusdate = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.chat.LabelsElements.prototype.toObject = function(opt_includeInstance) {
  return proto.chat.LabelsElements.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.chat.LabelsElements} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.LabelsElements.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, ""),
    value: jspb.Message.getFieldWithDefault(msg, 2, ""),
    type: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.chat.LabelsElements}
 */
proto.chat.LabelsElements.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.chat.LabelsElements;
  return proto.chat.LabelsElements.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.chat.LabelsElements} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.chat.LabelsElements}
 */
proto.chat.LabelsElements.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.chat.LabelsElements.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.chat.LabelsElements.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.chat.LabelsElements} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.LabelsElements.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string Key = 1;
 * @return {string}
 */
proto.chat.LabelsElements.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.LabelsElements} returns this
 */
proto.chat.LabelsElements.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string Value = 2;
 * @return {string}
 */
proto.chat.LabelsElements.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.LabelsElements} returns this
 */
proto.chat.LabelsElements.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string Type = 3;
 * @return {string}
 */
proto.chat.LabelsElements.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.LabelsElements} returns this
 */
proto.chat.LabelsElements.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.chat.InsertLabelMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.chat.InsertLabelMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.chat.InsertLabelMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.InsertLabelMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    labelmetadata: (f = msg.getLabelmetadata()) && proto.chat.LabelMetadata.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.chat.InsertLabelMetadata}
 */
proto.chat.InsertLabelMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.chat.InsertLabelMetadata;
  return proto.chat.InsertLabelMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.chat.InsertLabelMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.chat.InsertLabelMetadata}
 */
proto.chat.InsertLabelMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new proto.chat.LabelMetadata;
      reader.readMessage(value,proto.chat.LabelMetadata.deserializeBinaryFromReader);
      msg.setLabelmetadata(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.chat.InsertLabelMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.chat.InsertLabelMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.chat.InsertLabelMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.InsertLabelMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLabelmetadata();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.chat.LabelMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional string Id = 1;
 * @return {string}
 */
proto.chat.InsertLabelMetadata.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.InsertLabelMetadata} returns this
 */
proto.chat.InsertLabelMetadata.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional LabelMetadata LabelMetadata = 2;
 * @return {?proto.chat.LabelMetadata}
 */
proto.chat.InsertLabelMetadata.prototype.getLabelmetadata = function() {
  return /** @type{?proto.chat.LabelMetadata} */ (
    jspb.Message.getWrapperField(this, proto.chat.LabelMetadata, 2));
};


/**
 * @param {?proto.chat.LabelMetadata|undefined} value
 * @return {!proto.chat.InsertLabelMetadata} returns this
*/
proto.chat.InsertLabelMetadata.prototype.setLabelmetadata = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.chat.InsertLabelMetadata} returns this
 */
proto.chat.InsertLabelMetadata.prototype.clearLabelmetadata = function() {
  return this.setLabelmetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.chat.InsertLabelMetadata.prototype.hasLabelmetadata = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.chat.UpdateLabelMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.chat.UpdateLabelMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.chat.UpdateLabelMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.UpdateLabelMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    filter: jspb.Message.getFieldWithDefault(msg, 1, ""),
    id: jspb.Message.getFieldWithDefault(msg, 2, ""),
    labelmetadata: (f = msg.getLabelmetadata()) && proto.chat.LabelMetadata.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.chat.UpdateLabelMetadata}
 */
proto.chat.UpdateLabelMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.chat.UpdateLabelMetadata;
  return proto.chat.UpdateLabelMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.chat.UpdateLabelMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.chat.UpdateLabelMetadata}
 */
proto.chat.UpdateLabelMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFilter(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 3:
      var value = new proto.chat.LabelMetadata;
      reader.readMessage(value,proto.chat.LabelMetadata.deserializeBinaryFromReader);
      msg.setLabelmetadata(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.chat.UpdateLabelMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.chat.UpdateLabelMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.chat.UpdateLabelMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.UpdateLabelMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFilter();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLabelmetadata();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.chat.LabelMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional string filter = 1;
 * @return {string}
 */
proto.chat.UpdateLabelMetadata.prototype.getFilter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.UpdateLabelMetadata} returns this
 */
proto.chat.UpdateLabelMetadata.prototype.setFilter = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string Id = 2;
 * @return {string}
 */
proto.chat.UpdateLabelMetadata.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.chat.UpdateLabelMetadata} returns this
 */
proto.chat.UpdateLabelMetadata.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional LabelMetadata LabelMetadata = 3;
 * @return {?proto.chat.LabelMetadata}
 */
proto.chat.UpdateLabelMetadata.prototype.getLabelmetadata = function() {
  return /** @type{?proto.chat.LabelMetadata} */ (
    jspb.Message.getWrapperField(this, proto.chat.LabelMetadata, 3));
};


/**
 * @param {?proto.chat.LabelMetadata|undefined} value
 * @return {!proto.chat.UpdateLabelMetadata} returns this
*/
proto.chat.UpdateLabelMetadata.prototype.setLabelmetadata = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.chat.UpdateLabelMetadata} returns this
 */
proto.chat.UpdateLabelMetadata.prototype.clearLabelmetadata = function() {
  return this.setLabelmetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.chat.UpdateLabelMetadata.prototype.hasLabelmetadata = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.chat.LabelMetadataList.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.chat.LabelMetadataList.prototype.toObject = function(opt_includeInstance) {
  return proto.chat.LabelMetadataList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.chat.LabelMetadataList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.LabelMetadataList.toObject = function(includeInstance, msg) {
  var f, obj = {
    total: jspb.Message.getFieldWithDefault(msg, 1, 0),
    labelmetadatadataList: jspb.Message.toObjectList(msg.getLabelmetadatadataList(),
    proto.chat.LabelMetadataData.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.chat.LabelMetadataList}
 */
proto.chat.LabelMetadataList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.chat.LabelMetadataList;
  return proto.chat.LabelMetadataList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.chat.LabelMetadataList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.chat.LabelMetadataList}
 */
proto.chat.LabelMetadataList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotal(value);
      break;
    case 2:
      var value = new proto.chat.LabelMetadataData;
      reader.readMessage(value,proto.chat.LabelMetadataData.deserializeBinaryFromReader);
      msg.addLabelmetadatadata(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.chat.LabelMetadataList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.chat.LabelMetadataList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.chat.LabelMetadataList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.LabelMetadataList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTotal();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getLabelmetadatadataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.chat.LabelMetadataData.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 total = 1;
 * @return {number}
 */
proto.chat.LabelMetadataList.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.chat.LabelMetadataList} returns this
 */
proto.chat.LabelMetadataList.prototype.setTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated LabelMetadataData LabelMetadataData = 2;
 * @return {!Array<!proto.chat.LabelMetadataData>}
 */
proto.chat.LabelMetadataList.prototype.getLabelmetadatadataList = function() {
  return /** @type{!Array<!proto.chat.LabelMetadataData>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.chat.LabelMetadataData, 2));
};


/**
 * @param {!Array<!proto.chat.LabelMetadataData>} value
 * @return {!proto.chat.LabelMetadataList} returns this
*/
proto.chat.LabelMetadataList.prototype.setLabelmetadatadataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.chat.LabelMetadataData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.chat.LabelMetadataData}
 */
proto.chat.LabelMetadataList.prototype.addLabelmetadatadata = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.chat.LabelMetadataData, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.chat.LabelMetadataList} returns this
 */
proto.chat.LabelMetadataList.prototype.clearLabelmetadatadataList = function() {
  return this.setLabelmetadatadataList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.chat.LabelMetadataRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.chat.LabelMetadataRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.chat.LabelMetadataRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.LabelMetadataRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    labelmetadata: (f = msg.getLabelmetadata()) && proto.chat.LabelMetadata.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.chat.LabelMetadataRequest}
 */
proto.chat.LabelMetadataRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.chat.LabelMetadataRequest;
  return proto.chat.LabelMetadataRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.chat.LabelMetadataRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.chat.LabelMetadataRequest}
 */
proto.chat.LabelMetadataRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.chat.LabelMetadata;
      reader.readMessage(value,proto.chat.LabelMetadata.deserializeBinaryFromReader);
      msg.setLabelmetadata(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.chat.LabelMetadataRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.chat.LabelMetadataRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.chat.LabelMetadataRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chat.LabelMetadataRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLabelmetadata();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.chat.LabelMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional LabelMetadata LabelMetadata = 1;
 * @return {?proto.chat.LabelMetadata}
 */
proto.chat.LabelMetadataRequest.prototype.getLabelmetadata = function() {
  return /** @type{?proto.chat.LabelMetadata} */ (
    jspb.Message.getWrapperField(this, proto.chat.LabelMetadata, 1));
};


/**
 * @param {?proto.chat.LabelMetadata|undefined} value
 * @return {!proto.chat.LabelMetadataRequest} returns this
*/
proto.chat.LabelMetadataRequest.prototype.setLabelmetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.chat.LabelMetadataRequest} returns this
 */
proto.chat.LabelMetadataRequest.prototype.clearLabelmetadata = function() {
  return this.setLabelmetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.chat.LabelMetadataRequest.prototype.hasLabelmetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * @enum {number}
 */
proto.chat.UserType = {
  ADMINISTRATOR: 0,
  ANALYST: 1
};

goog.object.extend(exports, proto.chat);
