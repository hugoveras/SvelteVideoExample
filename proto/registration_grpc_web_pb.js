/**
 * @fileoverview gRPC-Web generated client stub for registration
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.registration = require('./registration_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.registration.UserRegistrationReqClient =
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
proto.registration.UserRegistrationReqPromiseClient =
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
 *   !proto.registration.ReqUserRegistration,
 *   !proto.registration.Empty>}
 */
const methodDescriptor_UserRegistrationReq_UserRegistration = new grpc.web.MethodDescriptor(
  '/registration.UserRegistrationReq/UserRegistration',
  grpc.web.MethodType.UNARY,
  proto.registration.ReqUserRegistration,
  proto.registration.Empty,
  /**
   * @param {!proto.registration.ReqUserRegistration} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.registration.Empty.deserializeBinary
);


/**
 * @param {!proto.registration.ReqUserRegistration} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.registration.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.registration.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.registration.UserRegistrationReqClient.prototype.userRegistration =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/registration.UserRegistrationReq/UserRegistration',
      request,
      metadata || {},
      methodDescriptor_UserRegistrationReq_UserRegistration,
      callback);
};


/**
 * @param {!proto.registration.ReqUserRegistration} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.registration.Empty>}
 *     Promise that resolves to the response
 */
proto.registration.UserRegistrationReqPromiseClient.prototype.userRegistration =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/registration.UserRegistrationReq/UserRegistration',
      request,
      metadata || {},
      methodDescriptor_UserRegistrationReq_UserRegistration);
};


module.exports = proto.registration;

