import { FaUsers } from 'react-icons/fa';
import { MdOutlineLibraryAdd } from 'react-icons/md';

export const auth = [
  {
    name: 'Login',
    path: '/login',
    icon: <img src="https://cdn-icons-png.flaticon.com/512/7960/7960597.png" alt="login" width={24} height={24} />,
    gap: true,
  },
  {
    name: 'Sign Up',
    path: '/register',
    icon: <img src="https://cdn-icons-png.flaticon.com/512/3815/3815596.png" alt="login" width={24} height={24} />,
  },
];

export const socialIcons = [
  {
    icon: <img src="https://cdn-icons-png.flaticon.com/128/174/174883.png" alt="login" width={24} height={24} />,
  },
  {
    icon: <img src="https://cdn-icons-png.flaticon.com/128/3670/3670151.png" alt="login" width={24} height={24} />,
  },
  {
    icon: <img src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" alt="login" width={24} height={24} />,
  },
  {
    icon: <img src="https://cdn-icons-png.flaticon.com/128/270/270798.png" alt="login" width={24} height={24} />,
  },
  {
    icon: <img src="https://cdn-icons-png.flaticon.com/128/2504/2504903.png" alt="login" width={24} height={24} />,
  },
];

export const NavItemsAdmin = [
  {
    name: 'Add Cars',
    path: '/cars',
    icon: <MdOutlineLibraryAdd />,
  },
  {
    name: 'Users',
    path: '/users',
    icon: <FaUsers />,
  },
];
