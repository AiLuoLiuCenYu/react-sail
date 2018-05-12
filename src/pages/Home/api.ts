import request from '../../utils/request';

const fetchUser = {
  query: () => request('/api/v0/user/1'),

  create: (user: { name: string; role: string; note?: string; }) => request('/api/v0/user', {
    method: 'post',
    data: user
  })
};

export default fetchUser;
