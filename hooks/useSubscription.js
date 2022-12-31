import { useState, useCallback } from "react";
import Provider from ".";

const useSubscription = () => {

    const [subscription, setSubscription] = useState();
    const [isLoading, setIsLoading] = useState( false );
    const [errorMessage, setErrorMessage] = useState( null );

    const cancelSubscription = useCallback( async params => {
      setIsLoading( true );
      setErrorMessage( null );
      try {
        const response = await Provider.post('/cancel_subscription', params);
        setSubscription( response );
        return response;
      } catch ( err ) {
        setSubscription(null);
        setErrorMessage( err?.message );
        throw err;
      } finally {
        setIsLoading( false );
      }
      // eslint-disable-next-line
    }, [] );
  
    return { errorMessage, isLoading, cancelSubscription, subscription };
  
  
  };

export default useSubscription;