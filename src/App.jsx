import { useEffect, useState } from "react";
import { FireBaseContext } from "./Context/FirebaseContext/FirebaseContext";
import { FireBaseContextValue } from "./Context/FirebaseContext/FirebaseContextValue";
import Layout from "./Layout";
import { StateContext } from "./Context/StateContext/StateContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./FireBase/firebase.init";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [allData, setAllData] = useState([]);
  const [w, setW] = useState(true);
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (crrUser) => {
      setUser(crrUser);
      setLoading(false);
    });
    return () => unSubscribe();
  }, []);
  useEffect(() => {
    fetch("/FrenchVocabulary.json")
      .then((res) => res.json())
      .then((data) => setAllData(data));
  }, []);

  return (
    <>
      <FireBaseContext.Provider value={FireBaseContextValue}>
        <StateContext.Provider
          value={{
            allData,
            setAllData,
            user,
            setUser,
            loading,
            email,
            setEmail,
            w,
            setW,
          }}
        >
          <Layout />
        </StateContext.Provider>
      </FireBaseContext.Provider>
    </>
  );
}

export default App;
