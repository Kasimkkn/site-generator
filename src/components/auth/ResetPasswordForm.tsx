
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Lock, Eye, EyeOff, ArrowRight, CheckCircle } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface ResetPasswordFormProps {
  userEmail: string;
  onViewChange: (view: 'login' | 'register' | 'forgot' | 'reset') => void;
}

const ResetPasswordForm = ({ userEmail, onViewChange }: ResetPasswordFormProps) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<{ password?: string; confirmPassword?: string }>({});

  const validateForm = () => {
    const newErrors: { password?: string; confirmPassword?: string } = {};
    
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/.test(password)) {
      newErrors.password = 'Password must contain uppercase, lowercase, number, and special character';
    }
    
    if (!confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const getPasswordStrength = () => {
    if (!password) return { strength: 0, label: '', color: '' };
    
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[@$!%*?&]/.test(password)) strength++;
    
    if (strength <= 2) return { strength: 1, label: 'Weak', color: 'bg-red-500' };
    if (strength <= 3) return { strength: 2, label: 'Fair', color: 'bg-yellow-500' };
    if (strength <= 4) return { strength: 3, label: 'Good', color: 'bg-blue-500' };
    return { strength: 4, label: 'Strong', color: 'bg-green-500' };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setIsSuccess(true);
      toast({
        title: "Password Reset Successful!",
        description: "Your password has been updated successfully.",
      });
      
      console.log('Password reset for:', userEmail);
      
      // Auto-redirect to login after 3 seconds
      setTimeout(() => {
        onViewChange('login');
      }, 3000);
      
    } catch (error) {
      toast({
        title: "Reset Failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="space-y-6 text-center">
        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle className="w-8 h-8 text-green-500" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">Password Reset Complete!</h2>
          <p className="text-gray-300">
            Your password has been successfully updated. You will be redirected to the login page shortly.
          </p>
        </div>
        <Button
          onClick={() => onViewChange('login')}
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium py-3 rounded-lg transition-all duration-200 transform hover:scale-[1.02]"
        >
          Continue to Login
        </Button>
      </div>
    );
  }

  const passwordStrength = getPasswordStrength();

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white mb-2">Reset Password</h2>
        <p className="text-gray-300">
          Create a new password for{' '}
          <span className="text-purple-400 font-medium">{userEmail}</span>
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="password" className="text-gray-200">New Password</Label>
          <div className="relative">
            <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your new password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pl-10 pr-10 bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-gray-400 hover:text-gray-300"
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
          
          {password && (
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="flex-1 bg-gray-700 rounded-full h-2">
                  <div 
                    className={`h-full rounded-full transition-all duration-300 ${passwordStrength.color}`}
                    style={{ width: `${(passwordStrength.strength / 4) * 100}%` }}
                  />
                </div>
                <span className={`text-sm font-medium ${passwordStrength.color.replace('bg-', 'text-')}`}>
                  {passwordStrength.label}
                </span>
              </div>
              <ul className="text-xs text-gray-400 space-y-1">
                <li className={password.length >= 8 ? 'text-green-400' : ''}>
                  ✓ At least 8 characters
                </li>
                <li className={/[a-z]/.test(password) ? 'text-green-400' : ''}>
                  ✓ One lowercase letter
                </li>
                <li className={/[A-Z]/.test(password) ? 'text-green-400' : ''}>
                  ✓ One uppercase letter
                </li>
                <li className={/\d/.test(password) ? 'text-green-400' : ''}>
                  ✓ One number
                </li>
                <li className={/[@$!%*?&]/.test(password) ? 'text-green-400' : ''}>
                  ✓ One special character
                </li>
              </ul>
            </div>
          )}
          
          {errors.password && (
            <p className="text-sm text-red-400">{errors.password}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="confirmPassword" className="text-gray-200">Confirm New Password</Label>
          <div className="relative">
            <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              id="confirmPassword"
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Confirm your new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="pl-10 pr-10 bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-3 text-gray-400 hover:text-gray-300"
            >
              {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
          {errors.confirmPassword && (
            <p className="text-sm text-red-400">{errors.confirmPassword}</p>
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
              <span>Updating password...</span>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <span>Update Password</span>
              <ArrowRight className="h-4 w-4" />
            </div>
          )}
        </Button>
      </form>
    </div>
  );
};

export default ResetPasswordForm;
