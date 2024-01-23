import React from 'react';
import { useDropzone } from 'react-dropzone';
import './DropZone.css';

interface MyDropzoneProps {
  onFileChange: (file: File) => void;
}

const MyDropzone: React.FC<MyDropzoneProps> = ({ onFileChange }) => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    onDrop: (files) => {
      if (files !== null && files.length > 0) {
        onFileChange(files[0]);
      }
    },
  });

  const files = acceptedFiles.map((file) => (
    <li key={file.name}>
      {file.name} - {file.size} bytes
    </li>
  ));

  return (
    <section className="container">
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} id="file-input" />
        <p>Drag or drop some file here, or click to select file</p>
      </div>
      <aside>
        <h3>Selected file:</h3>
        <ul>{files}</ul>
      </aside>
    </section>
  );
};

export default MyDropzone;
