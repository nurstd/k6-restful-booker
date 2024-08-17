import http from 'k6/http';
import { endpoint } from '../../data/url-endpoint.js';

export function createAuth(data) {
  const url = `${endpoint.auth}`;
  const payload = {
    "username" : data.username,
    "password" : data.password
  }
  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return http.post(url, JSON.stringify(payload), params);
}