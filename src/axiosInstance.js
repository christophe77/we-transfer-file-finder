const axios = require('axios');

const axiosInstance = axios.create({
  baseURL: 'https://wetransfer.com/api/v4/transfers',
  withCredentials: true,
});
axiosInstance.defaults.headers.common.authorization = '';
axiosInstance.defaults.headers.common["'X-CSRF-TOKEN'"] = '';
axiosInstance.defaults.headers.common.authority = 'wetransfer.com';
axiosInstance.defaults.headers.common.accept =
  'application/json, text/plain, */*';
axiosInstance.defaults.headers.common['accept-language'] =
  'fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7';
axiosInstance.defaults.headers.common.referer = 'https://wetransfer.com/';
axiosInstance.defaults.headers.common['sec-fetch-mode'] = 'cors';
axiosInstance.defaults.headers.common['sec-fetch-dest'] = 'empty';
axiosInstance.defaults.headers.common['x-requested-with'] = 'XMLHttpRequest';
axiosInstance.defaults.headers.common['content-type'] = 'application/json';
axiosInstance.defaults.headers.common['user-agent'] =
  'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Mobile Safari/537.36';
axiosInstance.defaults.headers.common['accept-encoding'] = 'gzip';
axiosInstance.defaults.headers.common.connection = 'keep-alive';
axiosInstance.defaults.headers.common.host = 'wetransfer.com';
axiosInstance.defaults.headers.common.platform = 'android';
axiosInstance.defaults.headers.common['sec-ch-ua-mobile'] = '?1';
axiosInstance.defaults.headers.common['sec-ch-ua-platform'] = 'Android';
module.exports = axiosInstance;
