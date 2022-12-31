import { useState, useCallback } from "react";
import Provider from ".";

const useAuth = () => {

    const [user, setUser] = useState();
    const [isLoading, setIsLoading] = useState( false );
    const [errorMessage, setErrorMessage] = useState( null );

    const getUserInfo = useCallback( async params => {
      setIsLoading( true );
      setErrorMessage( null );
      try {
        if (params?.email?.length == 0) return false;
        const response = await Provider.post('/getUserInfo', { email: params });
        setUser( response );
        return response;
      } catch ( err ) {
        setUser(null);
        setErrorMessage( err?.message );
        throw err;
      } finally {
        setIsLoading( false );
      }
      // eslint-disable-next-line
    }, [] );
  
    const getUser = useCallback( async params => {
      setIsLoading( true );
      setErrorMessage( null );
      try {
        if (params?.email?.length == 0) return false;
        const response = await Provider.post('/signin', params);
        setUser( response );
        localStorage.setItem("OmnesTOKEN", response.data.token);
        return response;
      } catch ( err ) {
        setUser(null);
        setErrorMessage( err?.message );
        throw err;
      } finally {
        setIsLoading( false );
      }
      // eslint-disable-next-line
    }, [] );

    const registerUser = useCallback( async params => {
      setIsLoading( true );
      setErrorMessage( null );
      try {
        if (params?.email?.length == 0) return false;
        const response = await Provider.post('/signup', params);
        setUser( response );
        return response;
      } catch ( err ) {
        setUser(null);
        setErrorMessage( err?.message );
        throw err;
      } finally {
        setIsLoading( false );
      }
      // eslint-disable-next-line
    }, [] );
  
    return { errorMessage, isLoading, getUser, registerUser, getUserInfo, user };
  
  
  };

export default useAuth;