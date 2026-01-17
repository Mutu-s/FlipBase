import { TruncateParams } from '@/utils/type.dt'
import { toast } from 'react-toastify'

export const truncate = ({ text, startChars, endChars, maxLength }: TruncateParams): string => {
  if (text.length > maxLength) {
    let start = text.substring(0, startChars)
    let end = text.substring(text.length - endChars, text.length)
    while (start.length + end.length < maxLength) {
      start = start + '.'
    }
    return start + end
  }
  return text
}

export const formatDate = (timestamp: number): string => {
  const date = new Date(timestamp)
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  return new Intl.DateTimeFormat('en-US', options).format(date)
}

export const timestampToDate = (timestamp: number) => {
  const date = new Date(timestamp)
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }
  return date.toLocaleDateString('en-US', options)
}

export const reportError = (error: unknown): void => {
  if (typeof window === 'undefined') {
    console.error('Error:', error)
    return
  }

  let errorMessage = 'An unexpected error occurred'
  
  if (error instanceof Error) {
    errorMessage = error.message
  } else if (typeof error === 'string') {
    errorMessage = error
  } else if (error && typeof error === 'object' && 'message' in error) {
    errorMessage = String(error.message)
  }

  // User-friendly error messages
  if (errorMessage.includes('user rejected')) {
    errorMessage = 'Transaction was rejected'
  } else if (errorMessage.includes('insufficient funds')) {
    errorMessage = 'Insufficient funds for this transaction'
  } else if (errorMessage.includes('network')) {
    errorMessage = 'Network error. Please check your connection'
  } else if (errorMessage.includes('provider')) {
    errorMessage = 'Please install a Web3 wallet (MetaMask, etc.)'
  }

  toast.error(errorMessage, {
    position: 'bottom-center',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  })

  console.error('Error details:', error)
}
