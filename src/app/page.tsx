import ClientComponent from '@/components/ClientComponent';
import ServerComponent from '@/components/ServerComponent';

import SignOutButton from '@/components/SignOutButton';

const Home = async () => {
  return (
    <main>
      <ClientComponent />
      <h1>Home</h1>
      <ServerComponent />

      <SignOutButton />
    </main>
  );
};

export default Home;
