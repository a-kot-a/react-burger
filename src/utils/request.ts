export const BASE_URL = 'https://norma.nomoreparties.space/api/';
export const ORDERS_ALL_URL = 'wss://norma.nomoreparties.space/orders/all';
export const ORDERS_URL = `wss://norma.nomoreparties.space/orders`;

const checkResponse = (res: Response): Promise<any> => {
  if (res.ok) {
    return res.json();
  }

  return res.json().then(err => Promise.reject(err.message));
}

const checkSuccess = (res: Promise<any> & { success: boolean }) => {
  if (res && res.success) {
    return res;
  }

  return Promise.reject(`Ответ не success: ${res}`);
};

export const request = (endpoint: string, options?: RequestInit) => {
  return fetch(`${ BASE_URL }${ endpoint }`, options)
    .then(checkResponse)
    .then(checkSuccess);
};

export const refreshToken = () => {
  return fetch(`${ BASE_URL }auth/token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    body: JSON.stringify({
      token: localStorage.getItem('refreshToken'),
    }),
  })
  .then(checkResponse);
};

export const requestWithRefresh = async (endpoint: string, options: RequestInit) => {
  try {
    const res = await fetch(`${ BASE_URL }${ endpoint }`, options)

    return await checkResponse(res);
  } catch (err: any) {
    if (err === "jwt expired") {
      const refreshData = await refreshToken();

      if (!refreshData.success) {
        return Promise.reject(refreshData);
      }

      localStorage.setItem('refreshToken', refreshData.refreshToken);
      localStorage.setItem('accessToken', refreshData.accessToken);

      options.headers = {
        ...options.headers,
        authorization: refreshData.accessToken,
      };

      const res = await fetch(`${ BASE_URL }${ endpoint }`, options);

      return await checkResponse(res);
    } else {
      return Promise.reject(err);
    }
  }
};
