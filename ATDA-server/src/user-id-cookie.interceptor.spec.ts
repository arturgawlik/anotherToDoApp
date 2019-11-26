import { UserIdCookieInterceptor } from './user-id-cookie.interceptor';

describe('UserIdCookieInterceptor', () => {
  it('should be defined', () => {
    expect(new UserIdCookieInterceptor()).toBeDefined();
  });
});
