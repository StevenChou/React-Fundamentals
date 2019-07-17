import _ from 'lodash';

import jsonPlaceholder from './../apis/jsonPlaceholder';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  // const userIds = _.uniq(_.map(getState().posts, 'userId'));
  // userIds.forEach(id => dispatch(fetchUser(id)));

  // _.chain
  _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value();
};

export const fetchPosts = () => {
  return async (dispatch, getState) => {
    const { data } = await jsonPlaceholder('/posts');
    dispatch({
      type: 'FETCH_POSTS',
      payload: data
    });
  };
};

// [Version 1] --- 會重複請求不必要的資源！！
// export const fetchUser = id => {
//   return async (dispatch, getState) => {
//     const { data } = await jsonPlaceholder(`/users/${id}`);

//     dispatch({
//       type: 'FETCH_USER',
//       payload: data
//     });
//   };
// };

// [Version 2] --- 相同的 id 只能請求一次
// export const fetchUser = id => dispatch => _fetchUser(id, dispatch);
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const { data } = await await jsonPlaceholder(`/users/${id}`);
//   dispatch({
//     type: 'FETCH_USER',
//     payload: data
//   });
// });

export const fetchUser = id => async dispatch => {
  const { data } = await await jsonPlaceholder(`/users/${id}`);
  dispatch({
    type: 'FETCH_USER',
    payload: data
  });
};
