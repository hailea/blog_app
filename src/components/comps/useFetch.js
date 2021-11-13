import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(() => {
    // Make a request for a resource with a given url.A command to run json server is:
    //npx json-server --watch data/db.json --port 8000
    const controller = new AbortController();
    /* The AbortController interface represents a controller object that allows you to abort one or more Web requests as and when desired. */
    setTimeout(() => {
      fetch(url, {signal:controller.signal} )
      /* Returns an AbortSignal object instance, which can be used to communicate with, or to abort, a DOM request. */
        .then((response) => {
          console.log("Response", response);
          console.log("Time1:", Date.now());
          if (response.status === 404) {
            throw Error("The server can not find the requested resource");
          }
          const data = response.json();
          return data;
        })
        .then(function (data) {
          // handle success
          console.log("Data: ", data);
          console.log("Time2:", Date.now());
          // console.log(response.statusText)
          setData(data);
          setIsLoading(false);
          setError(null); //Just To see pending messages
          //     setTimeout(() => {
          //       setData(data);
          //       setIsLoading(false);
          //       setError(null);
          //     }, 2000);
        })
        .catch(function (err) {
          // handle error
          if(err.name === 'AbortError'){
              console.log("Fetch Aborted");
          }else{
          console.log("error: ", err);
          setError(err.message);
          setIsLoading(false);
        }
        })
        .then(function () {
          // always executed
        });
    }, 500);
    return ()=>controller.abort(); 
    /*Aborts a DOM request before it has completed. This is able to abort fetch requests, consumption of any response bodies, and streams. */
  }, [url]);
  return { data, isLoading, isError };
};

export default useFetch;
