// eslint-disable-next-line import/no-extraneous-dependencies
import { FullConfig } from 'windicss/types/interfaces';

export const shortcuts: FullConfig = {
  btn: {
    color: 'white',
    '@apply':
      'text-sm text-center font-medium bg-blue-700 rounded-lg mr-2 mb-2 px-5 py-2.5',
    '&:hover': {
      '@apply': 'bg-blue-800',
    },
    '&:focus': {
      '@apply': 'ring-4 ring-blue-300',
    },
    '&:dark': {
      '@apply': 'bg-blue-600',
      '&:focus': {
        '@apply': 'ring-blue-800',
      },
      '&:hover': {
        '@apply': 'bg-blue-700',
      },
    },
  },
};
