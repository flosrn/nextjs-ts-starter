import { ThemeProps } from 'flowbite-react/lib/esm/components/Flowbite';

const theme: ThemeProps = {
  theme: {
    button: {
      label: 'font-bold',
    },
    navbar: {
      base: 'bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600',
      collapse: {
        base: 'justify-between items-center w-full md:flex md:w-auto md:order-1',
        list: 'flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700',
      },
    },
  },
};

export default theme;
