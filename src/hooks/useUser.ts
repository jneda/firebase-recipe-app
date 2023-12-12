import { useEffect, useState } from "react";
import { signInAnonymously, onAuthStateChanged } from "firebase/auth";
import { useFirebase } from "./useFirebase";
import type { User } from "../types/User";

export function useUser() {
  const { auth } = useFirebase();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (!auth) return;

    signInAnonymously(auth)
      .then(() => {
        console.log("Signed in anonymously");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log({ errorCode, errorMessage });
      });
  }, [auth]);

  useEffect(() => {
    if (!auth) return;

    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        setUser({ uid });
      } else {
        setUser(null);
      }
    });
  }, [auth]);

  return { user };
}
