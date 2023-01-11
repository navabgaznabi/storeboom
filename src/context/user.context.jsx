import { createContext, useState,useEffect } from "react";
import {onAuthStateChangedListner ,createUserDocumentUsingAuth} from '../utils/firebase/firebase.utils'

//Creating a context with actual value.
export const UserContext = createContext({
  //default Value
    currentUser: null,
    setCurrentUser: () => null,
});

// Listner to keep a track of user auth status.
// export const authChangeObserer = () => {
//     const {setCurrentUser} = useContext(UserContext);
//     const user = onAuthStateChangedListner();
//     if(user){
//         setCurrentUser(user);
//     }else{

//     }
// }

//Creating a provider.
export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser}; 

    //Starting A Listner for auth Change When Website mounts.
    useEffect(() => {
        const unsubscribe = onAuthStateChangedListner((user) => {
            setCurrentUser(user);
            if(user){
                createUserDocumentUsingAuth(user);
            }

        });
        return unsubscribe;
    }, []);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
