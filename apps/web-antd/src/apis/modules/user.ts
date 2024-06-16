import type { UserInfo } from '@vben/types';

import type { UserApiType } from '../types';

import { request } from '@/forward';

/**
 * 登录
 */
async function userLogin(data: UserApiType.LoginParams) {
  return request<UserApiType.LoginResult>('/login', { data, method: 'post' });
}

/**
 * 获取用户信息
 */
async function getUserInfo() {
  return request<UserInfo>('/getUserInfo', { method: 'get' });
}

export { getUserInfo, userLogin };

export * from './user';