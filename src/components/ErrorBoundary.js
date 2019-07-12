import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    // this.state.error && this.state.error.toString()
    // this.state.errorInfo.componentStack
    console.log(error, info)
  }

  render() {
    if (this.state.hasError) {
      return <h3>未知错误 请刷新页面</h3>
    }

    return this.props.children
  }
}

export default ErrorBoundary
