export const INITIALIZATION = 'INITIALIZATION';
export const SAGAS_INITIALIZATION = 'SAGAS_INITIALIZATION';

export const GET_POSTS = 'GET_POSTS';
export const SAGAS_GET_POSTS = 'SAGAS_GET_POSTS';

export const initialization = () => ({
  type: INITIALIZATION,
});

export const getPosts = () => ({
  type: GET_POSTS,
});
