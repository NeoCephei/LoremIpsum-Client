import { Options } from '../interfaces/ApiInterfaces';
import { User } from '../interfaces/UserInterface';
import { loginInterface } from '../store/state_interfaces/loginInterface';
const BASE_URL = 'http://localhost:3005';

async function fetchApi<T>(slug: string, options?: Options): Promise<T> {
  const res = await fetch(BASE_URL + slug, options);
  return res.json();
}

export function getUser(id: string): Promise<User> {
  return fetchApi<User>(id);
}

export function LoginService (user: loginInterface)  {
  return fetch(`${BASE_URL}/login`, {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  })
  .then((res) => res.json())
  .catch((err) => console.error(err));
}

export function LogoutService ()  {
  return fetch(`${BASE_URL}/logout`, {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
  })
  .then((res) => res.json())
  .catch((err) => console.error(err));
}