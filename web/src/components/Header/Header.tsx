/* eslint-disable import/no-extraneous-dependencies */
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import tw from 'tailwind-styled-components';
import { BiMenu, BiChevronLeft } from 'react-icons/bi';
import { v4 as uuidv4 } from 'uuid';
import { useUser } from '../../context/auth/auth';

const Container = tw.div`
 h-full
`;
const SideBar = tw.div<{ open: boolean }>`
  ${(props) => (props.open ? 'translate-x-0' : '-translate-x-full')}
  absolute inset-0  transform ease-in-out duration-100 z-10 w-48 bg-gray-900 text-white h-full min-h-screen p-3
`;

const menus = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'Create Event',
    link: '/create-event',
  },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { user, logout } = useUser();
  const location = useLocation();
  const toggleModal = () => setOpen((prev) => !prev);

  return (
    <Container className="h-full">
      <SideBar open={open}>
        <div className="flex justify-between">
          <span className="font-bold text-sm px-3">
            <img src={user?.avatar} width="50" alt="avatar" />
          </span>
          <BiChevronLeft
            onClick={toggleModal}
            className="text-5xl p-2 hover:bg-gray-700 cursor-pointer rounded-full "
          />
        </div>
        <ul className="mt-8 space-y-3">
          {menus.map((menu) => (
            <li
              className={`block ${
                location.pathname === menu.link ? 'bg-gray-800' : null
              } py-2 rounded-md`}
              key={uuidv4()}
            >
              <Link
                to={menu.link}
                className="px-4 py-2  rounded-md "
                onClick={toggleModal}
              >
                {menu.name}
              </Link>
            </li>
          ))}
          <hr />
          <li className="block   py-2">
            <button
              type="button"
              className="px-4 py-2  rounded-md "
              onClick={logout}
            >
              Logout
            </button>
          </li>
        </ul>
      </SideBar>
      <div className="w-full ">
        <header className="bg-gray-800 relative z-0 w-full flex items-center p-1 justify-between py-2 ">
          <div className="p-1 hover:bg-gray-700 rounded-full">
            <BiMenu
              onClick={toggleModal}
              className="text-4xl    text-white cursor-pointer rounded-full "
            />
          </div>
          <span className="block text-lg text-white  font-bold px-2">
            <img src={user?.avatar} width="50" alt="avatar" />
          </span>
        </header>
      </div>
    </Container>
  );
}
