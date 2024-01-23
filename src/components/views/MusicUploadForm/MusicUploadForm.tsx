import React, { useEffect, useState } from 'react';
// import { toast } from 'react-toastify';
import Loader from '../../shared/Loader/Loader';
import MyDropzone from '../DropZone/DropZone';
import './MusicUploadForm.css';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { addSong } from '../../../store/slices/fetchedSongsSlice';
import generateFateResponse from '../../../utils/fakeBackendData';

const MusicUploadForm: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState<number>(0);

  const handleFileChange = (file: File): void => {
    setSelectedFile(file);
  };

  const dispatch = useAppDispatch();

  useEffect(()=>{
    dispatch(addSong(generateFateResponse()));
  },[])

  const fetchedSong = useAppSelector(state => state.fetchedSong.song);
  console.log(fetchedSong);
  const handleUpload = (): void => {

    // Simulate a file upload process with a mock progress indicator
    const simulateUpload = (): void => {
      const interval = setInterval(() => {
        setUploadProgress((prevProgress) => {
          const newProgress = prevProgress + 10;
          if (newProgress >= 100) {
            clearInterval(interval);

            // Reset state
            setSelectedFile(null);
            setUploadProgress(0);

          
            // toast.success('Successfully uploaded the file', {
            //   autoClose: 2000,
            //   hideProgressBar: false,
            //   closeOnClick: true,
            //   pauseOnHover: true,
            // });

            console.log('Successfully uploaded');
            return 0;
          }

          return newProgress;
        });
      }, 500);
    };

    // Start the simulation
    simulateUpload();
  };

  return (
    <div className="music-upload-form">
      <MyDropzone onFileChange={handleFileChange} />
      
      {uploadProgress > 0 ? <Loader/> :
      <button
        className="upload-button"
        onClick={handleUpload}
        disabled={selectedFile === null || uploadProgress > 0}
      >
        Upload
      </button> 
      }

      {uploadProgress > 0 && (
        <div className="progress-indicator">Uploading: {uploadProgress}%</div>
      )}

    </div>
  );
};

export default MusicUploadForm;
