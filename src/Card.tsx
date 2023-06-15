import { useFirebaseAuth } from './firebase/auth';

export default function Card() {
  const { signInWithGoogle, logOut, user } = useFirebaseAuth();

  return (
    <div className='card'>
      {user ? (
        <button onClick={logOut}>Sign Out</button>
      ) : (
        <button onClick={signInWithGoogle}>Sign In With Google</button>
      )}
      {user && (
        <section style={{ padding: '2em' }}>
          <img
            src={`${user.photoURL}`}
            width={100}
            height={100}
            style={{ borderRadius: '50%' }}
            alt='profile'
          />
          <p>
            <code>{user?.email}</code>
          </p>
        </section>
      )}
    </div>
  );
}
