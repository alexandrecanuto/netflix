import axios from 'axios';

export default class Connector {

  static defaultHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };

  static methods = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'];

  constructor(url, headers) {
    this.url = url;
    this.interceptors = [];
  }

  request(method = '', path = '', data, configs = {}, tag) {
    if (!Connector.methods.includes(method)) {
      method = 'GET';
      path = method;
      tag = path;
    }

    // Configs:
    let config = { 
      method: method,
      headers: {...Connector.defaultHeaders, ...configs.headers}
    };

    if (!['GET'].includes(method) && data) {
      config.data = config.headers['Content-Type'] === Connector.defaultHeaders['Content-Type'] ? JSON.stringify(data) : data;
    }

    config = this.runRequestInterceptors(config);

    return axios(this.url + path, config, tag)
      .then(response => {
        response = this.runResponseInterceptors(response);
        return response.data;
      }, error => {
        throw error.response;
      });
  }

  /**
   * Aborts a request based on its tag.
   */
  abort(tag) {
    return axios.abort(tag);
  }

  /**
   * Runs interceptor(s) for the request.
   */
  runRequestInterceptors(requestConfig) {
    this.interceptors.forEach(interceptor => {
      if (typeof interceptor.request === 'function') {
        let requestInterceptorConfig = interceptor.request(requestConfig);
        if (requestInterceptorConfig !== undefined) 
          requestConfig = requestInterceptorConfig;
      }
    });
    return requestConfig;
  }

  /**
   * Runs interceptor(s) for the response.
   */
  runResponseInterceptors(response) {
    this.interceptors.forEach(interceptor => {
      if (typeof interceptor.response === 'function') {
        let interceptorResponse = interceptor.response(response);
        if (interceptorResponse !== undefined) 
          response = interceptorResponse;
      }
    });
    return response;
  }

  /**
   * Adds an interceptor to the mix.
   */
  addInterceptor(interceptor) {
    if (!interceptor) 
      return false;
    this.interceptors.push(interceptor);
  }

  /**
   * POST shorthand.
   */
  post(path, params, data, configs, tag) {
    if (!path) path = '';
    if (!params) params = {};
    return this.request('POST', path + Connector.resolveParams(params), data, configs, tag)
  }

  /**
   * GET shorthand.
   */
  get(path, params, configs, tag) {
    if (!path) path = '';
    if (!params) params = {};
    return this.request('GET', path + Connector.resolveParams(params), {}, configs, tag)
  }

  /**
   * PUT shorthand.
   */
  put(path, params, data, configs, tag) {
    if (!path) path = '';
    if (!params) params = {};
    return this.request('PUT', path + Connector.resolveParams(params), data, configs, tag)
  }

  /**
   * PATCH shorthand.
   */
  patch(path, data, configs, tag) {
    if (!path) path = '';
    return this.request('PATCH', path, data, configs, tag)
  }

  /**
   * DELETE shorthand.
   */
  delete(path, params, data, configs, tag) {
    if (!path) path = '';
    if (!params) params = {};
    return this.request('DELETE', path + Connector.resolveParams(params), data, configs, tag)
  }

  /**
   * Resolves params into an URI.
   */
  static resolveParams(params = {}) {
    return Object.keys(params).reduce((prev, curr) => {
      const mid = prev ? '&' : '?';
      return prev + (params[curr] ? mid + encodeURIComponent(curr) + '=' + encodeURIComponent(params[curr]) : '')
    }, '');
  }
}
