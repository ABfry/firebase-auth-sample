import ClientComponent from '@/components/ClientComponent';
import ServerComponent from '@/components/ServerComponent';

import SignOutButton from '@/components/SignOutButton';

const Home = async () => {
  return (
    <main>
      <h1>Home</h1>

      <h2>ClientComponent</h2>
      <ClientComponent />

      <h2>ServerComponent</h2>
      <ServerComponent />

      <SignOutButton />
    </main>
  );
};

export default Home;
