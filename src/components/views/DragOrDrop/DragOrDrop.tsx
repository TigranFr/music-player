import React from 'react'
import { useDropzone } from 'react-dropzone'
import './DragOrDrop.css'

// Define the properties expected by this component
interface DragOrDropProps {
  onFileChange: (file: File) => void // Callback function to handle file change
}

const DragOrDrop: React.FC<DragOrDropProps> = ({ onFileChange }) => {
  // Use the useDropzone hook to manage drag-and-drop functionality
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    onDrop: (files) => {
      if (files !== null && files.length > 0) {
        // Take only the first file if multiple files are dropped
        const singleFile = files[0]
        onFileChange(singleFile) // Call the provided callback with the selected file
      }
    },
    maxFiles: 1, // Allow only one file to be selected
    accept: {
      'audio/mp3.wav': ['.mp3', '.wav'], // Accept only MP3 and WAV file formats
    },
  })

  // Map the accepted files to a list of file information
  const files = acceptedFiles.map((file) => (
    <li key={file.name} className="file-list-item">
      {file.name} - {file.size} bytes
    </li>
  ))

  // Render the main component structure
  return (
    <section className="container">
      <div
        {...getRootProps({ className: 'dropzone', 'data-testid': 'dropzone' })}
      >
        <input {...getInputProps()} id="file-input" accept=".mp3, .wav" />
        <p className="dropzone-text">
          Drag or drop a file here, or click to select a file
        </p>
      </div>
      <aside className="file-aside">
        <h3 className="file-header">Selected file:</h3>
        <ul className="file-list">{files}</ul>
      </aside>
    </section>
  )
}

export default DragOrDrop
