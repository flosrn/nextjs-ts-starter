import { ThemeProps } from 'flowbite-react/lib/esm/components/Flowbite';

const theme: ThemeProps = {
  theme: {
    alert: {
      color: {
        primary: 'bg-red-500',
      },
    },
    button: {
      label: 'font-bold',
    },
    navbar: {
      link: {
        base: 'select-none cursor-pointer',
      },
    },
  },
};

export default theme;
