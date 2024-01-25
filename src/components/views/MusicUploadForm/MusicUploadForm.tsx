import React, { useState } from 'react';
import { Loader } from '../../shared/index';
import DragOrDrop from '../DragOrDrop/DragOrDrop';
import './MusicUploadForm.css';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { addSong as addSongFromComputer } from '../../../store/slices/songsListSlice';
import showToast from '../../../utils/toast';

const MusicUploadForm: React.FC = () => {
  // State for selected file, upload progress, and loading status
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fakeData = useAppSelector((state) => state.fetchedSong.song);
  console.log(fakeData);
  
  // Function to handle file change event
  const handleFileChange = (file: File): void => {
    setSelectedFile(file);
  }

  // Access Redux dispatch and selector hooks
  const dispatch = useAppDispatch();
  const songs = useAppSelector((state) => state.songList.songs);

  // Function to handle the upload process
  const handleUpload = (): void => {
    setIsLoading(true);
    simulateUpload(10);
  }

  // Simulate a file upload process with a mock progress indicator
  const simulateUpload = (progress: number): void => {
    setTimeout(() => {
      try {
        if (progress >= 100) {
          handleSuccessfulUpload();
        } else {
          setUploadProgress(progress);
          simulateUpload(progress + 10);
        }
      } catch (error) {
        handleUploadError(error);
      }
    }, 500);
  }

  // Handle successful upload
  const handleSuccessfulUpload = (): void => {
    const fileNameParts = selectedFile?.name.split(' - ') ?? [];
    const artistName = fileNameParts[0] ?? 'Unknown Artist';
    const songName = fileNameParts[1] ?? 'Unknown Song';

    const uploadedSong = {
      id: Date.now(),
      songName,
      artistName,
      trackNumber: songs.length + 1,
    };

    dispatch(addSongFromComputer(uploadedSong));

    setSelectedFile(null);
    setUploadProgress(0);
    setIsLoading(false);

    console.log('Successfully uploaded');
    showToast('Successfully uploaded, open console');
  }

  // Handle upload errors
  const handleUploadError = (error: any): void => {
    console.error('Upload failed:', error);

    // Reset state and show error message to the user
    setSelectedFile(null);
    setUploadProgress(0);
    setIsLoading(false);

    showToast('Upload failed. Please try again.');
  }

  return (
    <div className="music-upload-form">
      <DragOrDrop onFileChange={handleFileChange} />

      {isLoading ? (
        <Loader />
      ) : (
        <button
          className="upload-button"
          onClick={handleUpload}
          disabled={selectedFile === null || uploadProgress > 0}
        >
          Upload
        </button>
      )}

      {uploadProgress > 0 && (
        <div className="progress-indicator">Uploading: {uploadProgress}%</div>
      )}
    </div>
  );
}

export default MusicUploadForm;
