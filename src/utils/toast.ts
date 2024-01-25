import { toast } from 'react-toastify'

const showToast = (message: string): void => {
  toast.success(message, {
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnFocusLoss: false,
    pauseOnHover: false,
  })
}

export default showToast
