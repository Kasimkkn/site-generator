
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Mail, ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface ForgotPasswordFormProps {
  onViewChange: (view: 'login' | 'register' | 'forgot' | 'reset', email?: string) => void;
}

const ForgotPasswordForm = ({ onViewChange }: ForgotPasswordFormProps) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [error, setError] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);

  const validateEmail = () => {
    if (!email) {
      setError('Email is required');
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email');
      return false;
    }
    setError('');
    return true;
  };

  const handleSendCode = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail()) return;
    
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setIsEmailSent(true);
      toast({
        title: "Reset Code Sent!",
        description: "Please check your email for the verification code.",
      });
      
      console.log('Password reset requested for:', email);
    } catch (error) {
      toast({
        title: "Failed to Send Code",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyCode = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!verificationCode || verificationCode.length !== 6) {
      toast({
        title: "Invalid Code",
        description: "Please enter a valid 6-digit code.",
        variant: "destructive",
      });
      return;
    }
    
    setIsVerifying(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Code Verified!",
        description: "Redirecting to reset password...",
      });
      
      // Redirect to reset password form
      onViewChange('reset', email);
      
    } catch (error) {
      toast({
        title: "Invalid Code",
        description: "Please check your code and try again.",
        variant: "destructive",
      });
    } finally {
      setIsVerifying(false);
    }
  };

  const handleResendCode = async () => {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast({
        title: "Code Resent!",
        description: "A new verification code has been sent to your email.",
      });
    } catch (error) {
      toast({
        title: "Failed to Resend",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isEmailSent) {
    return (
      <div className="space-y-6">
        <div className="text-center">
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-500" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">Check Your Email</h2>
          <p className="text-gray-300">
            We've sent a 6-digit verification code to{' '}
            <span className="text-purple-400 font-medium">{email}</span>
          </p>
        </div>

        <form onSubmit={handleVerifyCode} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="code" className="text-gray-200">Verification Code</Label>
            <Input
              id="code"
              type="text"
              placeholder="Enter 6-digit code"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
              className="text-center text-2xl tracking-widest bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500"
              maxLength={6}
            />
          </div>

          <Button
            type="submit"
            disabled={isVerifying || verificationCode.length !== 6}
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium py-3 rounded-lg transition-all duration-200 transform hover:scale-[1.02]"
          >
            {isVerifying ? (
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Verifying...</span>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <span>Verify Code</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            )}
          </Button>
        </form>

        <div className="text-center space-y-4">
          <p className="text-gray-300">
            Didn't receive the code?{' '}
            <button
              onClick={handleResendCode}
              disabled={isLoading}
              className="text-purple-400 hover:text-purple-300 font-medium transition-colors"
            >
              {isLoading ? 'Sending...' : 'Resend code'}
            </button>
          </p>

          <button
            onClick={() => onViewChange('login')}
            className="flex items-center space-x-2 text-gray-400 hover:text-gray-300 transition-colors mx-auto"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Login</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white mb-2">Forgot Password?</h2>
        <p className="text-gray-300">
          Enter your email address and we'll send you a verification code to reset your password.
        </p>
      </div>

      <form onSubmit={handleSendCode} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-gray-200">Email Address</Label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-10 bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500"
            />
          </div>
          {error && (
            <p className="text-sm text-red-400">{error}</p>
          )}
        </div>

        <Button
          type="submit"
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium py-3 rounded-lg transition-all duration-200 transform hover:scale-[1.02]"
        >
          {isLoading ? (
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Sending code...</span>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <span>Send Verification Code</span>
              <ArrowRight className="h-4 w-4" />
            </div>
          )}
        </Button>
      </form>

      <div className="text-center">
        <button
          onClick={() => onViewChange('login')}
          className="flex items-center space-x-2 text-gray-400 hover:text-gray-300 transition-colors mx-auto"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Login</span>
        </button>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
