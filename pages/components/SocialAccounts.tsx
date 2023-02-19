import { Button, Card } from "flowbite-react";

export default function SocialAccounts() {
  return (
    <div className='max-w-sm'>
      <Card>
        <div className='flex items-center justify-between'>
          <h5 className='text-xl font-bold leading-none text-gray-900 dark:text-white'>
            Social Accounts
          </h5>
        </div>
        <div className='flow-root'>
          <ul className='divide-y divide-gray-200 dark:divide-gray-700'>
            <li className='py-3 sm:py-4'>
              <div className='flex items-center space-x-4'>
                <div className='shrink-0'>
                  <img
                    className='h-8 w-8 rounded-full'
                    src='https://flowbite.com/docs/images/people/profile-picture-1.jpg'
                    alt='Facebook'
                  />
                </div>
                <div className='min-w-0 flex-1'>
                  <p className='truncate text-sm font-medium text-gray-900 dark:text-white'>
                    Facebook Account
                  </p>
                  <a href='#' className='truncate text-sm text-blue-700 hover:underline dark:text-blue-500'>
                  www.facebook.com/the...
                  </a>
                </div>
                <Button color="gray">
                    Disconnect
                </Button>
              </div>
            </li>
            <li className='py-3 sm:py-4'>
              <div className='flex items-center space-x-4'>
                <div className='shrink-0'>
                  <img
                    className='h-8 w-8 rounded-full'
                    src='https://flowbite.com/docs/images/people/profile-picture-3.jpg'
                    alt='Bonnie image'
                  />
                </div>
                <div className='min-w-0 flex-1'>
                  <p className='truncate text-sm font-medium text-gray-900 dark:text-white'>
                    Twitter Account
                  </p>
                  <a href='#' className='truncate text-sm text-blue-700 hover:underline dark:text-blue-500'>
                  www.twitter.com/the...
                  </a>
                </div>
                <Button color="gray">
                    Disconnect
                </Button>
              </div>
            </li>
            <li className='py-3 sm:py-4'>
              <div className='flex items-center space-x-4'>
                <div className='shrink-0'>
                  <img
                    className='h-8 w-8 rounded-full'
                    src='https://flowbite.com/docs/images/people/profile-picture-2.jpg'
                    alt='Michael image'
                  />
                </div>
                <div className='min-w-0 flex-1'>
                  <p className='truncate text-sm font-medium text-gray-900 dark:text-white'>
                    Github Account
                  </p>
                  <p className='truncate text-sm text-gray-500 dark:text-gray-400'>
                    Not Connected
                  </p>
                </div>
                <Button>
                    Connect
                </Button>
              </div>
            </li>
            <li className='py-3 sm:py-4'>
              <div className='flex items-center space-x-4'>
                <div className='shrink-0'>
                  <img
                    className='h-8 w-8 rounded-full'
                    src='https://flowbite.com/docs/images/people/profile-picture-4.jpg'
                    alt='Lana image'
                  />
                </div>
                <div className='min-w-0 flex-1'>
                  <p className='truncate text-sm font-medium text-gray-900 dark:text-white'>
                    Dribble Account
                  </p>
                  <p className='truncate text-sm text-gray-500 dark:text-gray-400'>
                    Not Connected
                  </p>
                </div>
                <Button>
                    Connect
                </Button>
              </div>
            </li>
          </ul>
        </div>
      </Card>
    </div>
  );
}
