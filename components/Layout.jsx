import React, { useEffect } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { app } from "../lib/firebase";
import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "../store/selector";
import { setUser } from "../store/features/auth.slice";

const Layout = (props) => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const user = useSelector(userSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((auth, error) => {
      if (auth && !user) {
        dispatch(
          setUser({
            accessToken: auth.accessToken,
            uid: auth.uid,
            displayName: auth.displayName,
            email: auth.email,
          })
        );
      } else {
        dispatch(setUser(null));
      }
    });
  }, []);

  return (
    <div>
      <Header />

      {props.children}

      <Footer />
    </div>
  );
};

export default Layout;
