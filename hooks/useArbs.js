import { useState, useCallback } from "react";
import Provider from ".";

const useArbs = () => {

    const [arbs, setArbs] = useState();
    const [isLoading, setIsLoading] = useState( false );
    const [errorMessage, setErrorMessage] = useState( null );

    const getArbs = useCallback( async () => {
      setIsLoading( true );
      setErrorMessage( null );
      try {
        const response = await Provider.get('/getSurebets');
        setArbs( response );
        return response;
      } catch ( err ) {
        setArbs(null);
        setErrorMessage( err?.message );
        throw err;
      } finally {
        setIsLoading( false );
      }
      // eslint-disable-next-line
    }, [] );
  
    return { errorMessage, isLoading, getArbs, arbs };
  
  
  };

export default useArbs;