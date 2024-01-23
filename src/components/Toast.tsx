import React from 'react';
import  { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../components/Toast.css'

const YourComponent = ():JSX.Element=> {

  const showToast = () :void=> {
      toast.success('Your message has been sent!', { autoClose: 2000 }); 
  };

  return (
    <div>
      <button onClick={showToast}>Show Toast</button>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />
    </div>
  );
};

export default YourComponent;
