import { Button, Card } from "flowbite-react";

export default function EditProfile() {
  return (
    <div className='max-w-md'>
      <Card>
        <form>
          <div className='grid gap-6 mb-6 lg:grid-cols-2'>
            <div>
              <label
                htmlFor='first_name'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                First name
              </label>
              <input
                type='text'
                id='first_name'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='John'
                required={true}
              />
            </div>
            <div>
              <label
                htmlFor='last_name'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Last name
              </label>
              <input
                type='text'
                id='last_name'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='Doe'
                required={true}
              />
            </div>
            <div>
              <label
                htmlFor='company'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Country
              </label>
              <input
                type='text'
                id='company'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='United States'
                required={true}
              />
            </div>
            <div>
              <label
                htmlFor='city'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                City
              </label>
              <input
                type='text'
                id='city'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='Washington DC'
                required={true}
              />
            </div>
            <div>
              <label
                htmlFor='visitors'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Email
              </label>
              <input
                type='number'
                id='visitors'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='johndoe@email.com'
                required={true}
              />
            </div>
            <div>
              <label
                htmlFor='phone'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Phone Number
              </label>
              <input
                type='tel'
                id='phone'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='123-45-678'
                pattern='[0-9]{3}-[0-9]{2}-[0-9]{3}'
                required={true}
              />
            </div>
            <div>
              <label
                htmlFor='birthday'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                BirthDay
              </label>
              <input
                type='date'
                id='birthday'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='15/08/1990'
                required={true}
              />
            </div>
            <div>
              <label
                htmlFor='org'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Organization
              </label>
              <input
                type='text'
                id='org'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='Comapany Name'
                required={true}
              />
            </div>
            <div>
              <label
                htmlFor='role'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Role
              </label>
              <input
                type='text'
                id='role'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='React Developer'
                required={true}
              />
            </div>
            <div>
              <label
                htmlFor='department'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Department
              </label>
              <input
                type='text'
                id='department'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='Development'
                required={true}
              />
            </div>
          </div>

          <Button className='w-full' type='submit'>
            Save All
          </Button>
        </form>
      </Card>
    </div>
  );
}
