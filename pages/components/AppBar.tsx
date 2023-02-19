import { Avatar, Navbar, Dropdown } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import Firebase from "../../public/firebase-logo.svg";
import User from "../../public/user.png";
export default function AppBar() {
  const user: boolean = true;
  return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand href='/'>
        <Image src={Firebase} height={28} width={28} alt='Flowbite Logo' />
        <span className='ml-3 self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
          Firebase
        </span>
      </Navbar.Brand>
      {user && (
        <div className='flex md:order-2'>
          <Dropdown
            arrowIcon={false}
            inline={true}
            label={
              <Image
                className='rounded-full'
                height={34}
                width={34}
                alt='User settings'
                src={User}
              />
            }
          >
            <Dropdown.Header>
              <span className='block text-sm'>Bonnie Green</span>
              <span className='block truncate text-sm font-medium'>
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item><Link
                href='/profile'
              >
                Profile
              </Link></Dropdown.Item>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
      )}
      {!user && (
        <Navbar.Collapse>
          <Navbar.Link href='/login'>Login</Navbar.Link>
          <Navbar.Link href='/register'>Register</Navbar.Link>
        </Navbar.Collapse>
      )}
    </Navbar>
  );
}
