import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { motion } from 'framer-motion';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom'; // ✅ Import these

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required')
        .matches(/^(?!\d+$)[a-zA-Z0-9 ]+$/, 'Only alphabets or alphanumeric values are allowed'),
  email: Yup.string()
    .email('Enter a valid Gmail address')
    .matches(/@gmail\.com$/, 'Only Gmail addresses are allowed')
    .required('Email is required'),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
    .required('Phone number is required'),
  password: Yup.string()
  .required('Password is required')
  .min(8, 'Password must be at least 8 characters')
  .matches(/[a-z]/, 'Must contain at least one lowercase letter')
  .matches(/[A-Z]/, 'Must contain at least one uppercase letter')
  .matches(/[0-9]/, 'Must contain at least one number')
  .matches(/[@$!%*?&#]/, 'Must contain at least one special character')
  .matches(/^\S*$/, 'No whitespace allowed'),
});

type FormValues = {
  name: string;
  email: string;
  phone: string;
  password: string;
};

const Signup: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: yupResolver(validationSchema),
  });

  const navigate = useNavigate(); // ✅ Add useNavigate hook

  const onSubmit = async (data: FormValues) => {
    try {
      const response = await axios.post("http://localhost:8080/api/auth/signUp", data);
      alert("SignUp successful");
      reset();
      navigate('/'); // ✅ Redirect to home
    } catch (error: any) {
      if (error.response && error.response.status === 409) {
        alert(error.response.data);
      } else {
        alert("Error in SigningUp");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-rose-100 p-6">
      <motion.div
        className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-4">
          Create Your Account
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Sign up to organize your special moments
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Full Name"
              {...register('name')}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <input
              type="email"
              placeholder="Gmail Address"
              {...register('email')}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <input
              type="tel"
              placeholder="Phone Number"
              {...register('phone')}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              {...register('password')}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-lg shadow-md hover:bg-purple-700 transition duration-300"
          >
            Sign Up
          </motion.button>
        </form>

        {/* ✅ Add login link below the form */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{' '}
          <Link to="/signIn" className="text-purple-600 hover:underline">
            Login
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Signup;
