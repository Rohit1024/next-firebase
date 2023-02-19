import { Button, Card } from "flowbite-react";
import EditProfile from "../components/EditProfile";
import SocialAccounts from "../components/SocialAccounts";

export default function Profile() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='grid p-3 gap-x-1.5 gap-y-2 md:grid-cols-2 lg:grid-cols-2'>
        <div className='max-w-sm'>
          <Card>
            <div className='flex items-center md:grid-cols-2 lg:grid-cols-2'>
              <img
                className='h-28 w-28 rounded-lg shadow-lg'
                src='https://flowbite.com/docs/images/people/profile-picture-3.jpg'
                alt='Bonnie image'
              />
              <div className="ml-4">
                <h2 className='mb-1 text-xl font-medium text-gray-900 dark:text-white'>
                  Bonnie Green
                </h2>
                <span className='text-sm text-gray-500 dark:text-gray-400'>
                  Visual Designer
                </span>
                <Button className='mt-4'>
                    Change Profile Picture
                </Button>
              </div>
            </div>
          </Card>
        </div>
        <div className='row-span-2'>
          <EditProfile />
        </div>
        <div>
          <SocialAccounts />
        </div>
      </div>
    </div>
  );
}
