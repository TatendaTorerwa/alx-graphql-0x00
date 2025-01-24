// src/components/UserUpdates.tsx
import { useSubscription } from '@apollo/client';
import { gql } from '@apollo/client';

const USER_UPDATED = gql`
  subscription OnUserUpdated {
    userUpdated {
      id
      name
      email
    }
  }
`;

const UserUpdates: React.FC = () => {
  const { data, loading, error } = useSubscription(USER_UPDATED);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h3>User Update</h3>
      <p>Name: {data.userUpdated.name}</p>
      <p>Email: {data.userUpdated.email}</p>
    </div>
  );
};

export default UserUpdates;
