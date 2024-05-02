import { useState } from 'react';
import { updateProfile } from 'firebase/auth';
import { appAuth } from '../firebase/config';

const useUpdateProfile = () => {
  const [error, setError] = useState<string | null>(null);
  const [isPending, setIsPending] = useState(false);

  const update = (
    displayName: string,
    photoURL: string,
  ) => {
    setIsPending(true);
    try {
      updateProfile(appAuth.currentUser, {
        displayName,
        photoURL,
      });
    } catch (error) {
      setError(error.message);
    }

    setIsPending(false);
  };

  return { error, isPending, update };
};

export default useUpdateProfile;
