import axios from "axios";
import { useEffect, useState } from "react"
//we nwee to import CopyToClipboard to copy items from clipboard before
//this we also need to install this.
import CopyToClipboard from "react-copy-to-clipboard";

const LinkResult = ({ inputValue }) => {
  //by default useState shortenLink will be blank. before getting any result it will be blank.
  const [shortenLink, setShortenLink] = useState("");
  //by default setting useState as false for copied.
  //useState(false) returns a tuple where the first parameter copied is the current state of the 
  //copied and setCopied is the method that will allow us to update the copied's state. 
  //We can use the setCopied method to update the state of copied anywhere
  const [copied, setCopied] = useState(false);
  //by default setting useState as false for loading.
  const [loading, setLoading] = useState(false);
  //by default setting useState as false for loading.
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      //To use the async/await syntax, we need to wrap the axios.get() function call 
      //within an async function. We encase the method call with a try...catch block 
      //so that we can capture any errors, similar to the catch()
      setLoading(true);
      const res = await axios(`https://api.shrtco.de/v2/shorten?url=${inputValue}`);
      setShortenLink(res.data.result.full_short_link);
    } catch(err) {//it is used to handle error
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if(inputValue.length) {
      fetchData();
    }
  }, [inputValue]);
//after 1 sec, once we click on copied button, its color will change.
  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 1000);
 // this will clear Timeout
    return () => clearTimeout(timer);
     // useEffect will run only one time with empty []
    // if you pass a value to array,
    // like this - [copied]
    // than clearTimeout will run every time
    // this value changes (useEffect re-run)
  }, [copied]);

  if(loading) {
    return <p className="noData">Loading...</p>
  }
  if(error) {
    return <p className="noData">Something went wrong :(</p>
  }


  return (
    <>
      {shortenLink && (
        <div className="result">
          <p>{shortenLink}</p>
          {/* CopyToClipboard-> it has come from "react-copy-to-clipboard" */}
          <CopyToClipboard
          // text-> we need to copy once we click on button.and the text will be shortenLink
            text={shortenLink}
            // dafault state of onCopy will be false as given above but once button is clicked then
            //we need to set it to true..
            onCopy={() => setCopied(true)}
          >
            {/* this className will depend on the state of copied */}
            <button className={copied ? "copied" : ""}>Copy</button>
          </CopyToClipboard>
        </div>
      )}
    </>
  )
}

export default LinkResult