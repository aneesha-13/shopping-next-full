import { useRouter } from 'next/router';
import { useContext } from 'react';
import { Store } from '../utils/store';

export default function Shipping() {
  const router = useRouter();

  // condition to check react context for userinfo
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;
  if (!userInfo) {
    //useInfo exists(logged in user) then redirect to /shipping page
    router.push('/login?redirect=/shipping');
  }
  return (
  <div>
    Shipping Page
  </div>
  );
}