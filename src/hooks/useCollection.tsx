import {
  collection, onSnapshot, where, query,
  DocumentData,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { appFireStore } from '../firebase/config';

function useCollection(
  transaction: string,
  myQuery: string[],
) {
  const [documents, setDocuments] = useState<DocumentData[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const q = myQuery ? query(
      collection(appFireStore, transaction),
      where(...myQuery),
    ) : collection(appFireStore, transaction);

    const unsubscribe = onSnapshot( // 구독을 끊어주는 함수 반환
      // 스냅샷 찍을 컬렉션
      q,
      // 스냅샷 함수, snapshot (사진직은것처럼 지금 데이터 전부를 담아옴)
      (snapshot) => {
        let result:DocumentData[] = [];
        // snapshot.docs안에 데이터가 배열상태로 저장되어있음
        snapshot.docs.forEach((doc) => {
          result.push({
            ...doc.data(),
            id: doc.id,
          });
        });
        result = result.sort((a, b) => b.createdTime.seconds - a.createdTime.seconds);
        console.log(result);
        setDocuments(result);
      },
      // 에러함수
      (errMsg: string) => {
        setError(errMsg);
      },
    );

    return () => {
      unsubscribe();
    };
  }, []); // 의존 배열을 비워두면 첨에 한 번만 실행되죵?

  return { documents, error };
}
export default useCollection;
