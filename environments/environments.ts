type Environment = 'local';

const ENV = {
  local: {
    apiUrl: 'http://192.168.60.136:3000',
  },
};

const environment = (env: Environment = 'local') => ENV[env];

export default environment;
