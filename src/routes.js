import {Profile} from "components/Profile";
import {LayoutRedux} from "containers/LayoutContainer";

export const routes = [
  {
    path: '/',
    exact: true,
    component: LayoutRedux,
  },
  {
    path: '/chat/:id',
    exact: true,
    component: LayoutRedux,
  },
  {
    path: '/profile',
    exact: true,
    component: Profile
  }
]