import React from 'react';

import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import Loading from '../components/loading';

const Profile = () => {
  const { user } = useAuth0();
  const { name, picture, email } = user;

  return (
    <div>
      <div>
        <div>
          <img
            src={picture}
            alt="Profile"
          />
        </div>
        <div>
          <h2>{name}</h2>
            <p>{email}</p>
        </div>
      </div>
      <div>
        <pre>
          {JSON.stringify(user, null, 2)}
        </pre>
      </div>
    </div>
  );
};
export default withAuthenticationRequired(Profile, {
  onRedirecting: () => <Loading />,
});
