import { createSlice } from '@reduxjs/toolkit'

const uploadFormSlice = createSlice({
  name: 'uploadForm',
  initialState: {
    selectedFile: null,
    uploadInProgress: false,
    uploadError: null,
  },
  reducers: {
    setFile: (state, action) => {
      state.selectedFile = action.payload
    },
    setUploadInProgress: (state, action) => {
      state.uploadInProgress = action.payload
    },
    setUploadError: (state, action) => {
      state.uploadError = action.payload
    },
    // Add other upload-related actions as needed
  },
})

export const { setFile, setUploadInProgress, setUploadError } = uploadFormSlice.actions
export default uploadFormSlice.reducer
