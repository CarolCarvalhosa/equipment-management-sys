import axios, { AxiosInstance } from 'axios';

export default class BaseAPI {
  private api: AxiosInstance;

  constructor(baseURL = 'http://localhost:5001') {
    this.api = axios.create({ baseURL: baseURL });

    this.api.interceptors.response.use(
      response => {
        return response;
      },
      function (error) {
        return Promise.reject(error);
      }
    );
  }

  async fetch(route: string): Promise<unknown> {
    const response = await this.api.get(route);

    return response.data;
  }

  async post<T>(route: string, data: T): Promise<unknown> {
    const response = await this.api.post(route, data);

    return response.data;
  }
}
