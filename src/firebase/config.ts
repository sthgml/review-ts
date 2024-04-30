import { initializeApp } from 'firebase/app';
import { Firestore, Timestamp, getFirestore } from 'firebase/firestore';
import { type Auth, getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

// firebase 초기화
const app = initializeApp(firebaseConfig);

// firestore 초기화
const appFireStore = getFirestore(app);

const timestamp = Timestamp;
// 인증 초기화
const appAuth = getAuth();

// 밖에서 사용할 수 있도록 준비합니다.
export { appFireStore, appAuth, timestamp };

// firebase 랑 연결한다음에 firebase랑 계속 통신할 수잇도록 그 경로를 변수에 저장한 다음, 다른데서 import해서 사용할 수 있도록 export함
