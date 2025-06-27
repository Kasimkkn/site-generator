
import { useState } from 'react';
import LoginForm from '@/components/auth/LoginForm';
import RegisterForm from '@/components/auth/RegisterForm';
import ForgotPasswordForm from '@/components/auth/ForgotPasswordForm';
import ResetPasswordForm from '@/components/auth/ResetPasswordForm';

const Index = () => {
  const [currentView, setCurrentView] = useState<'login' | 'register' | 'forgot' | 'reset'>('login');
  const [userEmail, setUserEmail] = useState('');

  const handleViewChange = (view: 'login' | 'register' | 'forgot' | 'reset', email?: string) => {
    setCurrentView(view);
    if (email) setUserEmail(email);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex">
      {/* Left Side - Scenic Background */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 z-10" />
        <img
          src="/images/login.jpg"
          alt="Scenic mountains"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-8 left-8 z-20 text-white">
          <h1 className="text-4xl font-bold mb-2">Folio Generator</h1>
          <p className="text-xl opacity-90">Capturing Moments, Creating Memories</p>
          <div className="flex space-x-2 mt-4">
            <div className="w-8 h-2 bg-white rounded-full"></div>
            <div className="w-2 h-2 bg-white/50 rounded-full"></div>
            <div className="w-2 h-2 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Right Side - Auth Forms */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {currentView === 'login' && (
            <LoginForm onViewChange={handleViewChange} />
          )}
          {currentView === 'register' && (
            <RegisterForm onViewChange={handleViewChange} />
          )}
          {currentView === 'forgot' && (
            <ForgotPasswordForm onViewChange={handleViewChange} />
          )}
          {currentView === 'reset' && (
            <ResetPasswordForm userEmail={userEmail} onViewChange={handleViewChange} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
