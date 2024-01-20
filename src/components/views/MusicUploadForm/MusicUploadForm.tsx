import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks'
import { setSongs } from '../../../store/slices/songsListSlice'

import './MusicUploadForm.css'

const MusicUploadForm: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [uploadProgress, setUploadProgress] = useState<number>(0)
  const dispatch = useAppDispatch()

  const songs = useAppSelector((state) => state.songList.songs)

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const file = event.target.files?.[0]
    setSelectedFile(file ?? null)
  }

  const handleUpload = (): void => {
    // Simulate a file upload process with a mock progress indicator
    const simulateUpload = (): void => {
      const interval = setInterval(() => {
        setUploadProgress((prevProgress) => {
          const newProgress = prevProgress + 10
          if (newProgress >= 100) {
            clearInterval(interval)

            const fileNameParts = selectedFile?.name.split(' - ') ?? []
            const artistName = fileNameParts[0] ?? 'Unknown Artist'
            const songName = fileNameParts[1] ?? 'Unknown Song'

            // Mock data for the uploaded song (you can customize this)
            const uploadedSong = {
              id: Date.now().toString(), // You might want to generate a unique ID
              songName,
              artistName, // Set artistName as per your requirement
              trackNumber: songs.length + 1, // Assign a track number based on the current song count
              // Add other properties as needed
            }

            // Dispatch the setSongs action with the new song
            dispatch(setSongs([...songs, uploadedSong]))

            // Reset state
            setSelectedFile(null)
            setUploadProgress(0)

            return 0
          }

          return newProgress
        })
      }, 100)
      toast('barev')
    }

    // Start the simulation
    simulateUpload()
  }

  return (
    <div className="music-upload-form">
      <input
        type="file"
        accept=".mp3, .wav"
        onChange={handleFileChange}
        className="file-input"
      />
      {selectedFile !== null && (
        <div className="selected-file">Selected File: {selectedFile.name}</div>
      )}
      <button
        className="upload-button"
        onClick={handleUpload}
        disabled={selectedFile === null}
      >
        Upload
      </button>
      {uploadProgress > 0 && (
        <div className="progress-indicator">Uploading: {uploadProgress}%</div>
      )}
    </div>
  )
}

export default MusicUploadForm
