import React from 'react'
import { useLocation } from 'react-router-dom'

const ErrorText = {
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: 'calc(100vh - 150px)',
  flexDirection: 'column',
  padding: '1rem'
}

class ErrorBoundaryComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    console.log('Error caught by ErrorBoundary:', error)
  }

  componentDidUpdate(prevProps) {
    // Reset error state when location changes
    if (this.props.location !== prevProps.location && this.state.hasError) {
      this.setState({ hasError: false });
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={ErrorText} className="p-4">
          <h1
            className="text-lg md:text-3xl"
            style={{ color: '#1a1a1a', fontWeight: '600' }}
          >
            OOPS!
          </h1>
          <p
            className="text-sm md:text-xl"
            style={{ color: '#1a1a1a', fontWeight: '100' }}
          >
            oops something went error, please try again
          </p>
          <button
            onClick={() => this.setState({ hasError: false })}
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            Try Again
          </button>
        </div>
      )
    }

    return this.props.children;
  }
}

// Wrapper component to provide location prop
function ErrorBoundary({ children }) {
  const location = useLocation();
  
  return (
    <ErrorBoundaryComponent location={location}>
      {children}
    </ErrorBoundaryComponent>
  )
}

export default ErrorBoundary;
