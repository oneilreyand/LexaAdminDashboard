import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/atoms/Button';
import Card from '../components/atoms/Card';

function ErrorPage() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/dashboard');
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="p-6 h-full bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <Card className="text-center" padding="p-8">
          {/* 404 Number */}
          <div className="mb-6">
            <h1 className="text-8xl font-bold text-primary mb-2">404</h1>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          {/* Error Message */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              Page Not Found
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Sorry, we couldn't find the page you're looking for. The page might have been moved, deleted, or you entered the wrong URL.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button
              onClick={handleGoHome}
              variant="primary"
              size="large"
              className="w-full"
            >
              Go to Dashboard
            </Button>
            <Button
              onClick={handleGoBack}
              variant="secondary"
              size="large"
              className="w-full"
            >
              Go Back
            </Button>
          </div>

          {/* Additional Help Text */}
          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              If you believe this is an error, please contact support.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default ErrorPage;
