const path = require('path');

module.exports = {
  webpack: {
    alias: {
      'Components': path.resolve(__dirname, 'src/components/'),
      'Pages': path.resolve(__dirname, 'src/pages/'),
      'Services': path.resolve(__dirname, 'src/services/'),
      'Hooks': path.resolve(__dirname, 'src/hooks/'),
      'Types': path.resolve(__dirname, 'src/types/'),
      'Utils': path.resolve(__dirname, 'src/utils/'),
    }
  },
}

export {};
