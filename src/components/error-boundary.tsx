import { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="min-h-screen flex items-center justify-center bg-brand-background">
            <div className="text-center p-8 max-w-md mx-auto">
              <div className="text-6xl mb-4">🤖💥</div>
              <h1 className="text-2xl font-bold text-brand-foreground mb-4">
                OOPS! SOMETHING WENT WRONG
              </h1>
              <p className="text-brand-foreground mb-6">
                The friendly robot encountered an unexpected error. Don't worry,
                we're on it!
              </p>
              <button
                onClick={() => window.location.reload()}
                className="bg-brand-primary text-white px-6 py-3 rounded-md font-bold hover:bg-brand-secondary transition-colors duration-200"
                type="button"
              >
                RELOAD PAGE
              </button>
            </div>
          </div>
        )
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
