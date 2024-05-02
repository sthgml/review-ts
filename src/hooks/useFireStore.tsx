import { Reducer, useReducer } from 'react';
import {
  DocumentData,
  DocumentReference,
  WithFieldValue,
  addDoc, collection, deleteDoc, doc, updateDoc,
} from 'firebase/firestore';
import { appFireStore, timestamp } from '../firebase/config';

const initState = {
  document: null,
  isPending: false,
  error: null,
  success: false,
};

type Error = {
  message: string;
}

type State = {
  document: DocumentReference<DocumentData, DocumentData> | null;
  isPending: boolean;
  error: Error | null;
  success: boolean;
};

const actionTypes = {
  addDoc: 'addDoc',
  error: 'error',
  isPending: 'isPending',
  deleteDoc: 'deleteDoc',
  updateDoc: 'updateDoc',
} as const;

type ActionType = typeof actionTypes;

type Action =
  {
    type: ActionType['addDoc'],
    payload: DocumentReference<DocumentData, DocumentData>
  }
  | {
    type: ActionType['error'],
    payload: Error;
  }
  | {
    type: ActionType['isPending'],
  }
  | {
    type: ActionType['deleteDoc'],
  } | {
    type: ActionType['updateDoc'],
  };

const storeReducer = (state: State, action: Action) => {
  switch (action.type) {
  case 'addDoc':
    return {
      isPending: false,
      document: action.payload,
      success: true,
      error: null,
    };
  case 'error':
    return {
      isPending: false,
      document: null,
      success: false,
      error: action.payload,
    };
  case 'isPending':
    return {
      isPending: true,
      document: null,
      success: true,
      error: null,
    };
  case 'deleteDoc':
    return {
      isPending: false,
      document: null,
      success: true,
      error: null,
    };
  case 'updateDoc':
    return {
      isPending: false,
      document: null,
      success: true,
      error: null,
    };
  default: return state;
  }
};

function useFirestore(transaction: string) {
  const [response, dispatch] = useReducer<Reducer<State, Action>>(
    storeReducer,
    initState,
  );

  // collection의 참조값
  const colRef = collection(appFireStore, transaction); // appFirestore를 불러와야해

  const addDocument = async (doc: DocumentData) => {
    try {
      const createdTime = timestamp.fromDate(new Date());
      const docRef = await addDoc(colRef, { doc, createdTime });
      dispatch({ type: 'addDoc', payload: docRef });
    } catch (error) {
      dispatch({ type: 'error', payload: error.message });
    }
  };

  const deleteDocument = async (id) => {
    try {
      const docRef = doc(colRef, id);
      await deleteDoc(docRef);
      dispatch({ type: 'deleteDoc' });
    } catch (error) {
      dispatch({ type: 'error', payload: error.message });
    }
  };

  const updateDocument = async (id, data) => {
    try {
      const docRef = doc(colRef, id);
      await updateDoc(docRef, data);
      dispatch({ type: 'updateDoc' });
    } catch (error) {
      dispatch({ type: 'error', payload: error.message });
    }
  };

  return {
    addDocument, deleteDocument, updateDocument, response,
  };
}

export default useFirestore;
