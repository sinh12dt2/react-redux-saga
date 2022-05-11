import http from '../http-common';
import { Api } from '../api';
export class PostService {
  static getPosts = () => http.get(Api.GET_POSTS);
  static getPostDetails = (id) =>
    http.get(
      Api.GET_POST_DETAILS, {
      params: {
        id: id,
      },
    });
}
