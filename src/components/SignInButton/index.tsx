import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi'
import { signIn, signOut, useSession } from 'next-auth/client';

import styles from './styles.module.scss';
import { Fragment } from 'react';

export function SignInButton() {
  const isUserLoggedIn = true;
  const [session] = useSession();

  return session ? (
    <button 
      type="button"
      className={styles.signInButton}
    >
      <FaGithub color="#0ade61" />
      {session.user.name}
      <FiX onClick={() => signOut()} color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button 
      type="button"
      className={styles.signInButton}
      onClick={() => signIn('github')}
    >
      <FaGithub color="#eba417" />
      Sign in with GitHub
    </button>
  )
}