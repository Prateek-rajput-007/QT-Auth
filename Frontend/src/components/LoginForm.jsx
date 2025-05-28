import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      });
      if (response.data && response.data.user && response.data.token) {
        localStorage.setItem('user', JSON.stringify(response.data.user));
        localStorage.setItem('token', response.data.token);
        navigate('/dashboard');
      } else {
        setError('Invalid response from server');
        setLoading(false);
      }
    } catch (err) {
      const msg = err.response?.data?.message || 'Login failed';
      setError(msg);
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <div className="flex justify-center mb-2">
            <i className="fas fa-user text-gray-700 text-2xl"></i>
          </div>
          <label className="block text-gray-700">Email</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <i className="fas fa-user text-gray-400"></i>
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
        {/* Remember me and Forget password row */}
        <div className="flex items-center justify-between mb-4">
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox mr-2" />
            <span className="text-gray-700 text-sm">Remember me</span>
          </label>
          <button
            type="button"
            className="text-blue-500 text-sm hover:underline focus:outline-none"
            tabIndex={-1}
          >
            Forgot password?
          </button>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
        <button
          type="button"
          className="w-full mt-2 bg-gray-200 text-gray-700 p-2 rounded hover:bg-gray-300"
          onClick={() => navigate('/register')}
          disabled={loading}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default LoginForm;

