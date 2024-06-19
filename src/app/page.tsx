import ClientComponent from '@/components/ClientComponent';
import ServerComponent from '@/components/ServerComponent';

import SignOutButton from '@/components/SignOutButton';
import UserContent from '@/components/UserContent';

import Line from '@/components/ui/line';

const Home = async () => {
  return (
    <main className='w-full p-4'>
      <h1 className='text-3xl font-bold text-center mb-8'>Home</h1>

      <div className='mx-auto border-2 border-gray-600 shadow w-fit p-2 my-4 rounded-xl'>
        <h2 className='text-center text-xl font-bold'>ClientComponent</h2>
        <ClientComponent />
      </div>

      <div className='mx-auto border-2 border-gray-600 shadow w-fit p-2 my-4 rounded-xl'>
        <h2 className='text-center text-xl font-bold'>ServerComponent</h2>
        <ServerComponent />
      </div>

      <SignOutButton className='w-fit block mx-auto'>SignOut</SignOutButton>

      <Line />

      <h2 className='text-center font-bold text-2xl'>セッション情報</h2>
      <UserContent />
    </main>
  );
};

export default Home;
