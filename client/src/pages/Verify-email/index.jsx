import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const VerifyEmail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);
  const token = query.get('token');
  const email = query.get('email');
  const status = query.get('status');
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    const verifyAccount = async () => {
      if (status === 'success') {
        toast.success('Account verified successfully!');
        setIsVerified(true);
        return;
      }

      if (token && email && !isVerified) {
        try {
          const response = await axios.get(`http://localhost:3000/api/users/verify-email?token=${token}&email=${email}`);
          if (response.data.success) {
            toast.success('Account verified successfully!');
            setIsVerified(true);
           
          } else {
            toast.error('Verification failed. Please try again.');
          }
        } catch (error) {
          toast.error('Verification failed. Please try again.');
        }
      }
    };
    
    verifyAccount();
  }, [token, email, status, isVerified]);

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-10 rounded shadow-md">
        {isVerified ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Verification Successful</h2>
            <p>Your account has been verified successfully!</p>
            
            <button  className="text-white py-2 px-4 mt-6 uppercase rounded bg-indigo-500 hover:bg-indigo-600 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
             onClick={handleLoginRedirect} >Login</button>
          </div>
        ) : (
          <div className="text-center ">
            <h2 className="text-2xl font-bold mb-4">Verification failed</h2>
            <p>Try after some time.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VerifyEmail;
