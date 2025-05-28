import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', {
        name,
        dob,
        email,
        password,
      });
      localStorage.setItem('user', JSON.stringify(response.data.user));
      localStorage.setItem('token', response.data.token);
      navigate('/dashboard');
    } catch (err) {
      const msg = err.response?.data?.message || 'Registration failed';
      setError(msg);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <div className="flex justify-center mb-2">
            <i className="fas fa-user-plus text-gray-700 text-2xl"></i>
          </div>
          <label className="block text-gray-700">Name</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <i className="fas fa-user text-gray-400"></i>
            </span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 pl-10 border rounded"
              placeholder="Enter your name"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Date of Birth</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <i className="fas fa-calendar-alt text-gray-400"></i>
            </span>
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="w-full p-2 pl-10 border rounded"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <i className="fas fa-envelope text-gray-400"></i>
            </span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 pl-10 border rounded"
              placeholder="Enter your email"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <i className="fas fa-lock text-gray-400"></i>
            </span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 pl-10 border rounded"
              placeholder="Enter your password"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;