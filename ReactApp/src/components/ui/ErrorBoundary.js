import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('React Error Boundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 border-2 border-dashed border-red-500 rounded-lg bg-red-50 text-red-700">
          <h2 className="font-bold">Hệ thống đang bảo trì vùng này</h2>
          <p className="text-sm">Vui lòng thử lại sau. Lỗi: {this.state.error?.message}</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
