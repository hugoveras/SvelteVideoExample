/**
 * @fileoverview gRPC-Web generated client stub for chat
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.chat = require('./chat_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.chat.ChatReqClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.chat.ChatReqPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.chat.ReqDashboardStatistics,
 *   !proto.chat.StatisticsList>}
 */
const methodDescriptor_ChatReq_GetDashboardStatistics = new grpc.web.MethodDescriptor(
  '/chat.ChatReq/GetDashboardStatistics',
  grpc.web.MethodType.UNARY,
  proto.chat.ReqDashboardStatistics,
  proto.chat.StatisticsList,
  /**
   * @param {!proto.chat.ReqDashboardStatistics} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.chat.StatisticsList.deserializeBinary
);


/**
 * @param {!proto.chat.ReqDashboardStatistics} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.chat.StatisticsList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.chat.StatisticsList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.chat.ChatReqClient.prototype.getDashboardStatistics =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/chat.ChatReq/GetDashboardStatistics',
      request,
      metadata || {},
      methodDescriptor_ChatReq_GetDashboardStatistics,
      callback);
};


/**
 * @param {!proto.chat.ReqDashboardStatistics} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.chat.StatisticsList>}
 *     Promise that resolves to the response
 */
proto.chat.ChatReqPromiseClient.prototype.getDashboardStatistics =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/chat.ChatReq/GetDashboardStatistics',
      request,
      metadata || {},
      methodDescriptor_ChatReq_GetDashboardStatistics);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.chat.ReqStatisticsByUserYearMonth,
 *   !proto.chat.RecommendationsCountByUserMonthYearList>}
 */
const methodDescriptor_ChatReq_GetStatisticsByUserYearMonth = new grpc.web.MethodDescriptor(
  '/chat.ChatReq/GetStatisticsByUserYearMonth',
  grpc.web.MethodType.UNARY,
  proto.chat.ReqStatisticsByUserYearMonth,
  proto.chat.RecommendationsCountByUserMonthYearList,
  /**
   * @param {!proto.chat.ReqStatisticsByUserYearMonth} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.chat.RecommendationsCountByUserMonthYearList.deserializeBinary
);


/**
 * @param {!proto.chat.ReqStatisticsByUserYearMonth} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.chat.RecommendationsCountByUserMonthYearList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.chat.RecommendationsCountByUserMonthYearList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.chat.ChatReqClient.prototype.getStatisticsByUserYearMonth =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/chat.ChatReq/GetStatisticsByUserYearMonth',
      request,
      metadata || {},
      methodDescriptor_ChatReq_GetStatisticsByUserYearMonth,
      callback);
};


/**
 * @param {!proto.chat.ReqStatisticsByUserYearMonth} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.chat.RecommendationsCountByUserMonthYearList>}
 *     Promise that resolves to the response
 */
proto.chat.ChatReqPromiseClient.prototype.getStatisticsByUserYearMonth =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/chat.ChatReq/GetStatisticsByUserYearMonth',
      request,
      metadata || {},
      methodDescriptor_ChatReq_GetStatisticsByUserYearMonth);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.chat.Req,
 *   !proto.chat.InsertMsg>}
 */
const methodDescriptor_ChatReq_ConnectServer = new grpc.web.MethodDescriptor(
  '/chat.ChatReq/ConnectServer',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.chat.Req,
  proto.chat.InsertMsg,
  /**
   * @param {!proto.chat.Req} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.chat.InsertMsg.deserializeBinary
);


/**
 * @param {!proto.chat.Req} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.chat.InsertMsg>}
 *     The XHR Node Readable Stream
 */
proto.chat.ChatReqClient.prototype.connectServer =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/chat.ChatReq/ConnectServer',
      request,
      metadata || {},
      methodDescriptor_ChatReq_ConnectServer);
};


/**
 * @param {!proto.chat.Req} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.chat.InsertMsg>}
 *     The XHR Node Readable Stream
 */
proto.chat.ChatReqPromiseClient.prototype.connectServer =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/chat.ChatReq/ConnectServer',
      request,
      metadata || {},
      methodDescriptor_ChatReq_ConnectServer);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.chat.FileDownloadRequest,
 *   !proto.chat.File>}
 */
const methodDescriptor_ChatReq_DownloadFileFromDatabase = new grpc.web.MethodDescriptor(
  '/chat.ChatReq/DownloadFileFromDatabase',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.chat.FileDownloadRequest,
  proto.chat.File,
  /**
   * @param {!proto.chat.FileDownloadRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.chat.File.deserializeBinary
);


/**
 * @param {!proto.chat.FileDownloadRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.chat.File>}
 *     The XHR Node Readable Stream
 */
proto.chat.ChatReqClient.prototype.downloadFileFromDatabase =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/chat.ChatReq/DownloadFileFromDatabase',
      request,
      metadata || {},
      methodDescriptor_ChatReq_DownloadFileFromDatabase);
};


/**
 * @param {!proto.chat.FileDownloadRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.chat.File>}
 *     The XHR Node Readable Stream
 */
proto.chat.ChatReqPromiseClient.prototype.downloadFileFromDatabase =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/chat.ChatReq/DownloadFileFromDatabase',
      request,
      metadata || {},
      methodDescriptor_ChatReq_DownloadFileFromDatabase);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.chat.Msg,
 *   !proto.chat.Empty>}
 */
const methodDescriptor_ChatReq_SendMsg = new grpc.web.MethodDescriptor(
  '/chat.ChatReq/SendMsg',
  grpc.web.MethodType.UNARY,
  proto.chat.Msg,
  proto.chat.Empty,
  /**
   * @param {!proto.chat.Msg} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.chat.Empty.deserializeBinary
);


/**
 * @param {!proto.chat.Msg} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.chat.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.chat.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.chat.ChatReqClient.prototype.sendMsg =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/chat.ChatReq/SendMsg',
      request,
      metadata || {},
      methodDescriptor_ChatReq_SendMsg,
      callback);
};


/**
 * @param {!proto.chat.Msg} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.chat.Empty>}
 *     Promise that resolves to the response
 */
proto.chat.ChatReqPromiseClient.prototype.sendMsg =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/chat.ChatReq/SendMsg',
      request,
      metadata || {},
      methodDescriptor_ChatReq_SendMsg);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.chat.Search,
 *   !proto.chat.DataList>}
 */
const methodDescriptor_ChatReq_SelectDocumentFromMongo = new grpc.web.MethodDescriptor(
  '/chat.ChatReq/SelectDocumentFromMongo',
  grpc.web.MethodType.UNARY,
  proto.chat.Search,
  proto.chat.DataList,
  /**
   * @param {!proto.chat.Search} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.chat.DataList.deserializeBinary
);


/**
 * @param {!proto.chat.Search} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.chat.DataList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.chat.DataList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.chat.ChatReqClient.prototype.selectDocumentFromMongo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/chat.ChatReq/SelectDocumentFromMongo',
      request,
      metadata || {},
      methodDescriptor_ChatReq_SelectDocumentFromMongo,
      callback);
};


/**
 * @param {!proto.chat.Search} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.chat.DataList>}
 *     Promise that resolves to the response
 */
proto.chat.ChatReqPromiseClient.prototype.selectDocumentFromMongo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/chat.ChatReq/SelectDocumentFromMongo',
      request,
      metadata || {},
      methodDescriptor_ChatReq_SelectDocumentFromMongo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.chat.Search,
 *   !proto.chat.SupplierList>}
 */
const methodDescriptor_ChatReq_SelectSupplierFromMongo = new grpc.web.MethodDescriptor(
  '/chat.ChatReq/SelectSupplierFromMongo',
  grpc.web.MethodType.UNARY,
  proto.chat.Search,
  proto.chat.SupplierList,
  /**
   * @param {!proto.chat.Search} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.chat.SupplierList.deserializeBinary
);


/**
 * @param {!proto.chat.Search} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.chat.SupplierList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.chat.SupplierList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.chat.ChatReqClient.prototype.selectSupplierFromMongo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/chat.ChatReq/SelectSupplierFromMongo',
      request,
      metadata || {},
      methodDescriptor_ChatReq_SelectSupplierFromMongo,
      callback);
};


/**
 * @param {!proto.chat.Search} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.chat.SupplierList>}
 *     Promise that resolves to the response
 */
proto.chat.ChatReqPromiseClient.prototype.selectSupplierFromMongo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/chat.ChatReq/SelectSupplierFromMongo',
      request,
      metadata || {},
      methodDescriptor_ChatReq_SelectSupplierFromMongo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.chat.Search,
 *   !proto.chat.CustomerList>}
 */
const methodDescriptor_ChatReq_SelectCustomerFromMongo = new grpc.web.MethodDescriptor(
  '/chat.ChatReq/SelectCustomerFromMongo',
  grpc.web.MethodType.UNARY,
  proto.chat.Search,
  proto.chat.CustomerList,
  /**
   * @param {!proto.chat.Search} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.chat.CustomerList.deserializeBinary
);


/**
 * @param {!proto.chat.Search} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.chat.CustomerList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.chat.CustomerList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.chat.ChatReqClient.prototype.selectCustomerFromMongo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/chat.ChatReq/SelectCustomerFromMongo',
      request,
      metadata || {},
      methodDescriptor_ChatReq_SelectCustomerFromMongo,
      callback);
};


/**
 * @param {!proto.chat.Search} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.chat.CustomerList>}
 *     Promise that resolves to the response
 */
proto.chat.ChatReqPromiseClient.prototype.selectCustomerFromMongo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/chat.ChatReq/SelectCustomerFromMongo',
      request,
      metadata || {},
      methodDescriptor_ChatReq_SelectCustomerFromMongo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.chat.UpdateRequest,
 *   !proto.chat.Empty>}
 */
const methodDescriptor_ChatReq_UpdateDocumentToMongo = new grpc.web.MethodDescriptor(
  '/chat.ChatReq/UpdateDocumentToMongo',
  grpc.web.MethodType.UNARY,
  proto.chat.UpdateRequest,
  proto.chat.Empty,
  /**
   * @param {!proto.chat.UpdateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.chat.Empty.deserializeBinary
);


/**
 * @param {!proto.chat.UpdateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.chat.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.chat.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.chat.ChatReqClient.prototype.updateDocumentToMongo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/chat.ChatReq/UpdateDocumentToMongo',
      request,
      metadata || {},
      methodDescriptor_ChatReq_UpdateDocumentToMongo,
      callback);
};


/**
 * @param {!proto.chat.UpdateRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.chat.Empty>}
 *     Promise that resolves to the response
 */
proto.chat.ChatReqPromiseClient.prototype.updateDocumentToMongo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/chat.ChatReq/UpdateDocumentToMongo',
      request,
      metadata || {},
      methodDescriptor_ChatReq_UpdateDocumentToMongo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.chat.Login,
 *   !proto.chat.LoginToken>}
 */
const methodDescriptor_ChatReq_GetLoginToken = new grpc.web.MethodDescriptor(
  '/chat.ChatReq/GetLoginToken',
  grpc.web.MethodType.UNARY,
  proto.chat.Login,
  proto.chat.LoginToken,
  /**
   * @param {!proto.chat.Login} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.chat.LoginToken.deserializeBinary
);


/**
 * @param {!proto.chat.Login} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.chat.LoginToken)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.chat.LoginToken>|undefined}
 *     The XHR Node Readable Stream
 */
proto.chat.ChatReqClient.prototype.getLoginToken =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/chat.ChatReq/GetLoginToken',
      request,
      metadata || {},
      methodDescriptor_ChatReq_GetLoginToken,
      callback);
};


/**
 * @param {!proto.chat.Login} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.chat.LoginToken>}
 *     Promise that resolves to the response
 */
proto.chat.ChatReqPromiseClient.prototype.getLoginToken =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/chat.ChatReq/GetLoginToken',
      request,
      metadata || {},
      methodDescriptor_ChatReq_GetLoginToken);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.chat.Search,
 *   !proto.chat.DashboardList>}
 */
const methodDescriptor_ChatReq_SelectDashboardFromMongo = new grpc.web.MethodDescriptor(
  '/chat.ChatReq/SelectDashboardFromMongo',
  grpc.web.MethodType.UNARY,
  proto.chat.Search,
  proto.chat.DashboardList,
  /**
   * @param {!proto.chat.Search} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.chat.DashboardList.deserializeBinary
);


/**
 * @param {!proto.chat.Search} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.chat.DashboardList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.chat.DashboardList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.chat.ChatReqClient.prototype.selectDashboardFromMongo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/chat.ChatReq/SelectDashboardFromMongo',
      request,
      metadata || {},
      methodDescriptor_ChatReq_SelectDashboardFromMongo,
      callback);
};


/**
 * @param {!proto.chat.Search} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.chat.DashboardList>}
 *     Promise that resolves to the response
 */
proto.chat.ChatReqPromiseClient.prototype.selectDashboardFromMongo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/chat.ChatReq/SelectDashboardFromMongo',
      request,
      metadata || {},
      methodDescriptor_ChatReq_SelectDashboardFromMongo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.chat.Dashboard,
 *   !proto.chat.Empty>}
 */
const methodDescriptor_ChatReq_InsertDashboardToMongo = new grpc.web.MethodDescriptor(
  '/chat.ChatReq/InsertDashboardToMongo',
  grpc.web.MethodType.UNARY,
  proto.chat.Dashboard,
  proto.chat.Empty,
  /**
   * @param {!proto.chat.Dashboard} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.chat.Empty.deserializeBinary
);


/**
 * @param {!proto.chat.Dashboard} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.chat.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.chat.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.chat.ChatReqClient.prototype.insertDashboardToMongo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/chat.ChatReq/InsertDashboardToMongo',
      request,
      metadata || {},
      methodDescriptor_ChatReq_InsertDashboardToMongo,
      callback);
};


/**
 * @param {!proto.chat.Dashboard} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.chat.Empty>}
 *     Promise that resolves to the response
 */
proto.chat.ChatReqPromiseClient.prototype.insertDashboardToMongo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/chat.ChatReq/InsertDashboardToMongo',
      request,
      metadata || {},
      methodDescriptor_ChatReq_InsertDashboardToMongo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.chat.UpdateDashboard,
 *   !proto.chat.Empty>}
 */
const methodDescriptor_ChatReq_UpdateDashboardToMongo = new grpc.web.MethodDescriptor(
  '/chat.ChatReq/UpdateDashboardToMongo',
  grpc.web.MethodType.UNARY,
  proto.chat.UpdateDashboard,
  proto.chat.Empty,
  /**
   * @param {!proto.chat.UpdateDashboard} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.chat.Empty.deserializeBinary
);


/**
 * @param {!proto.chat.UpdateDashboard} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.chat.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.chat.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.chat.ChatReqClient.prototype.updateDashboardToMongo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/chat.ChatReq/UpdateDashboardToMongo',
      request,
      metadata || {},
      methodDescriptor_ChatReq_UpdateDashboardToMongo,
      callback);
};


/**
 * @param {!proto.chat.UpdateDashboard} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.chat.Empty>}
 *     Promise that resolves to the response
 */
proto.chat.ChatReqPromiseClient.prototype.updateDashboardToMongo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/chat.ChatReq/UpdateDashboardToMongo',
      request,
      metadata || {},
      methodDescriptor_ChatReq_UpdateDashboardToMongo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.chat.DashboardContentReq,
 *   !proto.chat.DashboardContent>}
 */
const methodDescriptor_ChatReq_GetDashboardContent = new grpc.web.MethodDescriptor(
  '/chat.ChatReq/GetDashboardContent',
  grpc.web.MethodType.UNARY,
  proto.chat.DashboardContentReq,
  proto.chat.DashboardContent,
  /**
   * @param {!proto.chat.DashboardContentReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.chat.DashboardContent.deserializeBinary
);


/**
 * @param {!proto.chat.DashboardContentReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.chat.DashboardContent)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.chat.DashboardContent>|undefined}
 *     The XHR Node Readable Stream
 */
proto.chat.ChatReqClient.prototype.getDashboardContent =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/chat.ChatReq/GetDashboardContent',
      request,
      metadata || {},
      methodDescriptor_ChatReq_GetDashboardContent,
      callback);
};


/**
 * @param {!proto.chat.DashboardContentReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.chat.DashboardContent>}
 *     Promise that resolves to the response
 */
proto.chat.ChatReqPromiseClient.prototype.getDashboardContent =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/chat.ChatReq/GetDashboardContent',
      request,
      metadata || {},
      methodDescriptor_ChatReq_GetDashboardContent);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.chat.FileUploadRequest,
 *   !proto.chat.Empty>}
 */
const methodDescriptor_ChatReq_UploadFileToMongo = new grpc.web.MethodDescriptor(
  '/chat.ChatReq/UploadFileToMongo',
  grpc.web.MethodType.UNARY,
  proto.chat.FileUploadRequest,
  proto.chat.Empty,
  /**
   * @param {!proto.chat.FileUploadRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.chat.Empty.deserializeBinary
);


/**
 * @param {!proto.chat.FileUploadRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.chat.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.chat.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.chat.ChatReqClient.prototype.uploadFileToMongo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/chat.ChatReq/UploadFileToMongo',
      request,
      metadata || {},
      methodDescriptor_ChatReq_UploadFileToMongo,
      callback);
};


/**
 * @param {!proto.chat.FileUploadRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.chat.Empty>}
 *     Promise that resolves to the response
 */
proto.chat.ChatReqPromiseClient.prototype.uploadFileToMongo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/chat.ChatReq/UploadFileToMongo',
      request,
      metadata || {},
      methodDescriptor_ChatReq_UploadFileToMongo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.chat.ReqUserRegistration,
 *   !proto.chat.InsertUserRegistration>}
 */
const methodDescriptor_ChatReq_UserRegistration = new grpc.web.MethodDescriptor(
  '/chat.ChatReq/UserRegistration',
  grpc.web.MethodType.UNARY,
  proto.chat.ReqUserRegistration,
  proto.chat.InsertUserRegistration,
  /**
   * @param {!proto.chat.ReqUserRegistration} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.chat.InsertUserRegistration.deserializeBinary
);


/**
 * @param {!proto.chat.ReqUserRegistration} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.chat.InsertUserRegistration)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.chat.InsertUserRegistration>|undefined}
 *     The XHR Node Readable Stream
 */
proto.chat.ChatReqClient.prototype.userRegistration =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/chat.ChatReq/UserRegistration',
      request,
      metadata || {},
      methodDescriptor_ChatReq_UserRegistration,
      callback);
};


/**
 * @param {!proto.chat.ReqUserRegistration} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.chat.InsertUserRegistration>}
 *     Promise that resolves to the response
 */
proto.chat.ChatReqPromiseClient.prototype.userRegistration =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/chat.ChatReq/UserRegistration',
      request,
      metadata || {},
      methodDescriptor_ChatReq_UserRegistration);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.chat.Search,
 *   !proto.chat.UserRegistrationList>}
 */
const methodDescriptor_ChatReq_SelectUserRegistration = new grpc.web.MethodDescriptor(
  '/chat.ChatReq/SelectUserRegistration',
  grpc.web.MethodType.UNARY,
  proto.chat.Search,
  proto.chat.UserRegistrationList,
  /**
   * @param {!proto.chat.Search} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.chat.UserRegistrationList.deserializeBinary
);


/**
 * @param {!proto.chat.Search} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.chat.UserRegistrationList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.chat.UserRegistrationList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.chat.ChatReqClient.prototype.selectUserRegistration =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/chat.ChatReq/SelectUserRegistration',
      request,
      metadata || {},
      methodDescriptor_ChatReq_SelectUserRegistration,
      callback);
};


/**
 * @param {!proto.chat.Search} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.chat.UserRegistrationList>}
 *     Promise that resolves to the response
 */
proto.chat.ChatReqPromiseClient.prototype.selectUserRegistration =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/chat.ChatReq/SelectUserRegistration',
      request,
      metadata || {},
      methodDescriptor_ChatReq_SelectUserRegistration);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.chat.ReqUpdateUserRegistration,
 *   !proto.chat.Empty>}
 */
const methodDescriptor_ChatReq_UpdateUserRegistration = new grpc.web.MethodDescriptor(
  '/chat.ChatReq/UpdateUserRegistration',
  grpc.web.MethodType.UNARY,
  proto.chat.ReqUpdateUserRegistration,
  proto.chat.Empty,
  /**
   * @param {!proto.chat.ReqUpdateUserRegistration} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.chat.Empty.deserializeBinary
);


/**
 * @param {!proto.chat.ReqUpdateUserRegistration} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.chat.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.chat.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.chat.ChatReqClient.prototype.updateUserRegistration =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/chat.ChatReq/UpdateUserRegistration',
      request,
      metadata || {},
      methodDescriptor_ChatReq_UpdateUserRegistration,
      callback);
};


/**
 * @param {!proto.chat.ReqUpdateUserRegistration} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.chat.Empty>}
 *     Promise that resolves to the response
 */
proto.chat.ChatReqPromiseClient.prototype.updateUserRegistration =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/chat.ChatReq/UpdateUserRegistration',
      request,
      metadata || {},
      methodDescriptor_ChatReq_UpdateUserRegistration);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.chat.Search,
 *   !proto.chat.MenuGroupList>}
 */
const methodDescriptor_ChatReq_SelectMenuGroupfromDatabase = new grpc.web.MethodDescriptor(
  '/chat.ChatReq/SelectMenuGroupfromDatabase',
  grpc.web.MethodType.UNARY,
  proto.chat.Search,
  proto.chat.MenuGroupList,
  /**
   * @param {!proto.chat.Search} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.chat.MenuGroupList.deserializeBinary
);


/**
 * @param {!proto.chat.Search} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.chat.MenuGroupList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.chat.MenuGroupList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.chat.ChatReqClient.prototype.selectMenuGroupfromDatabase =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/chat.ChatReq/SelectMenuGroupfromDatabase',
      request,
      metadata || {},
      methodDescriptor_ChatReq_SelectMenuGroupfromDatabase,
      callback);
};


/**
 * @param {!proto.chat.Search} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.chat.MenuGroupList>}
 *     Promise that resolves to the response
 */
proto.chat.ChatReqPromiseClient.prototype.selectMenuGroupfromDatabase =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/chat.ChatReq/SelectMenuGroupfromDatabase',
      request,
      metadata || {},
      methodDescriptor_ChatReq_SelectMenuGroupfromDatabase);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.chat.MenuGroup,
 *   !proto.chat.Empty>}
 */
const methodDescriptor_ChatReq_InsertMenuGrouptoDatabase = new grpc.web.MethodDescriptor(
  '/chat.ChatReq/InsertMenuGrouptoDatabase',
  grpc.web.MethodType.UNARY,
  proto.chat.MenuGroup,
  proto.chat.Empty,
  /**
   * @param {!proto.chat.MenuGroup} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.chat.Empty.deserializeBinary
);


/**
 * @param {!proto.chat.MenuGroup} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.chat.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.chat.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.chat.ChatReqClient.prototype.insertMenuGrouptoDatabase =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/chat.ChatReq/InsertMenuGrouptoDatabase',
      request,
      metadata || {},
      methodDescriptor_ChatReq_InsertMenuGrouptoDatabase,
      callback);
};


/**
 * @param {!proto.chat.MenuGroup} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.chat.Empty>}
 *     Promise that resolves to the response
 */
proto.chat.ChatReqPromiseClient.prototype.insertMenuGrouptoDatabase =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/chat.ChatReq/InsertMenuGrouptoDatabase',
      request,
      metadata || {},
      methodDescriptor_ChatReq_InsertMenuGrouptoDatabase);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.chat.UpdateMenuGroup,
 *   !proto.chat.Empty>}
 */
const methodDescriptor_ChatReq_UpdateMenuGrouptoDatabase = new grpc.web.MethodDescriptor(
  '/chat.ChatReq/UpdateMenuGrouptoDatabase',
  grpc.web.MethodType.UNARY,
  proto.chat.UpdateMenuGroup,
  proto.chat.Empty,
  /**
   * @param {!proto.chat.UpdateMenuGroup} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.chat.Empty.deserializeBinary
);


/**
 * @param {!proto.chat.UpdateMenuGroup} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.chat.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.chat.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.chat.ChatReqClient.prototype.updateMenuGrouptoDatabase =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/chat.ChatReq/UpdateMenuGrouptoDatabase',
      request,
      metadata || {},
      methodDescriptor_ChatReq_UpdateMenuGrouptoDatabase,
      callback);
};


/**
 * @param {!proto.chat.UpdateMenuGroup} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.chat.Empty>}
 *     Promise that resolves to the response
 */
proto.chat.ChatReqPromiseClient.prototype.updateMenuGrouptoDatabase =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/chat.ChatReq/UpdateMenuGrouptoDatabase',
      request,
      metadata || {},
      methodDescriptor_ChatReq_UpdateMenuGrouptoDatabase);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.chat.Search,
 *   !proto.chat.MenuOptionList>}
 */
const methodDescriptor_ChatReq_SelectMenuOptionfromDatabase = new grpc.web.MethodDescriptor(
  '/chat.ChatReq/SelectMenuOptionfromDatabase',
  grpc.web.MethodType.UNARY,
  proto.chat.Search,
  proto.chat.MenuOptionList,
  /**
   * @param {!proto.chat.Search} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.chat.MenuOptionList.deserializeBinary
);


/**
 * @param {!proto.chat.Search} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.chat.MenuOptionList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.chat.MenuOptionList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.chat.ChatReqClient.prototype.selectMenuOptionfromDatabase =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/chat.ChatReq/SelectMenuOptionfromDatabase',
      request,
      metadata || {},
      methodDescriptor_ChatReq_SelectMenuOptionfromDatabase,
      callback);
};


/**
 * @param {!proto.chat.Search} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.chat.MenuOptionList>}
 *     Promise that resolves to the response
 */
proto.chat.ChatReqPromiseClient.prototype.selectMenuOptionfromDatabase =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/chat.ChatReq/SelectMenuOptionfromDatabase',
      request,
      metadata || {},
      methodDescriptor_ChatReq_SelectMenuOptionfromDatabase);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.chat.MenuOption,
 *   !proto.chat.Empty>}
 */
const methodDescriptor_ChatReq_InsertMenuOptionuptoDatabase = new grpc.web.MethodDescriptor(
  '/chat.ChatReq/InsertMenuOptionuptoDatabase',
  grpc.web.MethodType.UNARY,
  proto.chat.MenuOption,
  proto.chat.Empty,
  /**
   * @param {!proto.chat.MenuOption} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.chat.Empty.deserializeBinary
);


/**
 * @param {!proto.chat.MenuOption} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.chat.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.chat.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.chat.ChatReqClient.prototype.insertMenuOptionuptoDatabase =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/chat.ChatReq/InsertMenuOptionuptoDatabase',
      request,
      metadata || {},
      methodDescriptor_ChatReq_InsertMenuOptionuptoDatabase,
      callback);
};


/**
 * @param {!proto.chat.MenuOption} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.chat.Empty>}
 *     Promise that resolves to the response
 */
proto.chat.ChatReqPromiseClient.prototype.insertMenuOptionuptoDatabase =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/chat.ChatReq/InsertMenuOptionuptoDatabase',
      request,
      metadata || {},
      methodDescriptor_ChatReq_InsertMenuOptionuptoDatabase);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.chat.UpdateMenuOption,
 *   !proto.chat.Empty>}
 */
const methodDescriptor_ChatReq_UpdateMenuOptiontoDatabase = new grpc.web.MethodDescriptor(
  '/chat.ChatReq/UpdateMenuOptiontoDatabase',
  grpc.web.MethodType.UNARY,
  proto.chat.UpdateMenuOption,
  proto.chat.Empty,
  /**
   * @param {!proto.chat.UpdateMenuOption} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.chat.Empty.deserializeBinary
);


/**
 * @param {!proto.chat.UpdateMenuOption} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.chat.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.chat.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.chat.ChatReqClient.prototype.updateMenuOptiontoDatabase =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/chat.ChatReq/UpdateMenuOptiontoDatabase',
      request,
      metadata || {},
      methodDescriptor_ChatReq_UpdateMenuOptiontoDatabase,
      callback);
};


/**
 * @param {!proto.chat.UpdateMenuOption} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.chat.Empty>}
 *     Promise that resolves to the response
 */
proto.chat.ChatReqPromiseClient.prototype.updateMenuOptiontoDatabase =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/chat.ChatReq/UpdateMenuOptiontoDatabase',
      request,
      metadata || {},
      methodDescriptor_ChatReq_UpdateMenuOptiontoDatabase);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.chat.MenuRequest,
 *   !proto.chat.MenuList>}
 */
const methodDescriptor_ChatReq_SelectMenufromDatabase = new grpc.web.MethodDescriptor(
  '/chat.ChatReq/SelectMenufromDatabase',
  grpc.web.MethodType.UNARY,
  proto.chat.MenuRequest,
  proto.chat.MenuList,
  /**
   * @param {!proto.chat.MenuRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.chat.MenuList.deserializeBinary
);


/**
 * @param {!proto.chat.MenuRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.chat.MenuList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.chat.MenuList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.chat.ChatReqClient.prototype.selectMenufromDatabase =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/chat.ChatReq/SelectMenufromDatabase',
      request,
      metadata || {},
      methodDescriptor_ChatReq_SelectMenufromDatabase,
      callback);
};


/**
 * @param {!proto.chat.MenuRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.chat.MenuList>}
 *     Promise that resolves to the response
 */
proto.chat.ChatReqPromiseClient.prototype.selectMenufromDatabase =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/chat.ChatReq/SelectMenufromDatabase',
      request,
      metadata || {},
      methodDescriptor_ChatReq_SelectMenufromDatabase);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.chat.Search,
 *   !proto.chat.ButtonToDisplayList>}
 */
const methodDescriptor_ChatReq_SelectButtonToDisplayfromDatabase = new grpc.web.MethodDescriptor(
  '/chat.ChatReq/SelectButtonToDisplayfromDatabase',
  grpc.web.MethodType.UNARY,
  proto.chat.Search,
  proto.chat.ButtonToDisplayList,
  /**
   * @param {!proto.chat.Search} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.chat.ButtonToDisplayList.deserializeBinary
);


/**
 * @param {!proto.chat.Search} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.chat.ButtonToDisplayList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.chat.ButtonToDisplayList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.chat.ChatReqClient.prototype.selectButtonToDisplayfromDatabase =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/chat.ChatReq/SelectButtonToDisplayfromDatabase',
      request,
      metadata || {},
      methodDescriptor_ChatReq_SelectButtonToDisplayfromDatabase,
      callback);
};


/**
 * @param {!proto.chat.Search} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.chat.ButtonToDisplayList>}
 *     Promise that resolves to the response
 */
proto.chat.ChatReqPromiseClient.prototype.selectButtonToDisplayfromDatabase =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/chat.ChatReq/SelectButtonToDisplayfromDatabase',
      request,
      metadata || {},
      methodDescriptor_ChatReq_SelectButtonToDisplayfromDatabase);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.chat.ButtonToDisplay,
 *   !proto.chat.Empty>}
 */
const methodDescriptor_ChatReq_InsertButtonToDisplaytoDatabase = new grpc.web.MethodDescriptor(
  '/chat.ChatReq/InsertButtonToDisplaytoDatabase',
  grpc.web.MethodType.UNARY,
  proto.chat.ButtonToDisplay,
  proto.chat.Empty,
  /**
   * @param {!proto.chat.ButtonToDisplay} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.chat.Empty.deserializeBinary
);


/**
 * @param {!proto.chat.ButtonToDisplay} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.chat.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.chat.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.chat.ChatReqClient.prototype.insertButtonToDisplaytoDatabase =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/chat.ChatReq/InsertButtonToDisplaytoDatabase',
      request,
      metadata || {},
      methodDescriptor_ChatReq_InsertButtonToDisplaytoDatabase,
      callback);
};


/**
 * @param {!proto.chat.ButtonToDisplay} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.chat.Empty>}
 *     Promise that resolves to the response
 */
proto.chat.ChatReqPromiseClient.prototype.insertButtonToDisplaytoDatabase =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/chat.ChatReq/InsertButtonToDisplaytoDatabase',
      request,
      metadata || {},
      methodDescriptor_ChatReq_InsertButtonToDisplaytoDatabase);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.chat.UpdateButtonToDisplay,
 *   !proto.chat.Empty>}
 */
const methodDescriptor_ChatReq_UpdateButtonToDisplaytoDatabase = new grpc.web.MethodDescriptor(
  '/chat.ChatReq/UpdateButtonToDisplaytoDatabase',
  grpc.web.MethodType.UNARY,
  proto.chat.UpdateButtonToDisplay,
  proto.chat.Empty,
  /**
   * @param {!proto.chat.UpdateButtonToDisplay} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.chat.Empty.deserializeBinary
);


/**
 * @param {!proto.chat.UpdateButtonToDisplay} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.chat.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.chat.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.chat.ChatReqClient.prototype.updateButtonToDisplaytoDatabase =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/chat.ChatReq/UpdateButtonToDisplaytoDatabase',
      request,
      metadata || {},
      methodDescriptor_ChatReq_UpdateButtonToDisplaytoDatabase,
      callback);
};


/**
 * @param {!proto.chat.UpdateButtonToDisplay} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.chat.Empty>}
 *     Promise that resolves to the response
 */
proto.chat.ChatReqPromiseClient.prototype.updateButtonToDisplaytoDatabase =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/chat.ChatReq/UpdateButtonToDisplaytoDatabase',
      request,
      metadata || {},
      methodDescriptor_ChatReq_UpdateButtonToDisplaytoDatabase);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.chat.Search,
 *   !proto.chat.LabelMetadataList>}
 */
const methodDescriptor_ChatReq_SelectLabelMetadatafromDatabase = new grpc.web.MethodDescriptor(
  '/chat.ChatReq/SelectLabelMetadatafromDatabase',
  grpc.web.MethodType.UNARY,
  proto.chat.Search,
  proto.chat.LabelMetadataList,
  /**
   * @param {!proto.chat.Search} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.chat.LabelMetadataList.deserializeBinary
);


/**
 * @param {!proto.chat.Search} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.chat.LabelMetadataList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.chat.LabelMetadataList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.chat.ChatReqClient.prototype.selectLabelMetadatafromDatabase =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/chat.ChatReq/SelectLabelMetadatafromDatabase',
      request,
      metadata || {},
      methodDescriptor_ChatReq_SelectLabelMetadatafromDatabase,
      callback);
};


/**
 * @param {!proto.chat.Search} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.chat.LabelMetadataList>}
 *     Promise that resolves to the response
 */
proto.chat.ChatReqPromiseClient.prototype.selectLabelMetadatafromDatabase =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/chat.ChatReq/SelectLabelMetadatafromDatabase',
      request,
      metadata || {},
      methodDescriptor_ChatReq_SelectLabelMetadatafromDatabase);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.chat.LabelMetadata,
 *   !proto.chat.Empty>}
 */
const methodDescriptor_ChatReq_InsertLabelMetadatatoDatabase = new grpc.web.MethodDescriptor(
  '/chat.ChatReq/InsertLabelMetadatatoDatabase',
  grpc.web.MethodType.UNARY,
  proto.chat.LabelMetadata,
  proto.chat.Empty,
  /**
   * @param {!proto.chat.LabelMetadata} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.chat.Empty.deserializeBinary
);


/**
 * @param {!proto.chat.LabelMetadata} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.chat.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.chat.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.chat.ChatReqClient.prototype.insertLabelMetadatatoDatabase =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/chat.ChatReq/InsertLabelMetadatatoDatabase',
      request,
      metadata || {},
      methodDescriptor_ChatReq_InsertLabelMetadatatoDatabase,
      callback);
};


/**
 * @param {!proto.chat.LabelMetadata} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.chat.Empty>}
 *     Promise that resolves to the response
 */
proto.chat.ChatReqPromiseClient.prototype.insertLabelMetadatatoDatabase =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/chat.ChatReq/InsertLabelMetadatatoDatabase',
      request,
      metadata || {},
      methodDescriptor_ChatReq_InsertLabelMetadatatoDatabase);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.chat.UpdateLabelMetadata,
 *   !proto.chat.Empty>}
 */
const methodDescriptor_ChatReq_UpdateLabelMetadatatoDatabase = new grpc.web.MethodDescriptor(
  '/chat.ChatReq/UpdateLabelMetadatatoDatabase',
  grpc.web.MethodType.UNARY,
  proto.chat.UpdateLabelMetadata,
  proto.chat.Empty,
  /**
   * @param {!proto.chat.UpdateLabelMetadata} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.chat.Empty.deserializeBinary
);


/**
 * @param {!proto.chat.UpdateLabelMetadata} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.chat.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.chat.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.chat.ChatReqClient.prototype.updateLabelMetadatatoDatabase =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/chat.ChatReq/UpdateLabelMetadatatoDatabase',
      request,
      metadata || {},
      methodDescriptor_ChatReq_UpdateLabelMetadatatoDatabase,
      callback);
};


/**
 * @param {!proto.chat.UpdateLabelMetadata} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.chat.Empty>}
 *     Promise that resolves to the response
 */
proto.chat.ChatReqPromiseClient.prototype.updateLabelMetadatatoDatabase =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/chat.ChatReq/UpdateLabelMetadatatoDatabase',
      request,
      metadata || {},
      methodDescriptor_ChatReq_UpdateLabelMetadatatoDatabase);
};


module.exports = proto.chat;

