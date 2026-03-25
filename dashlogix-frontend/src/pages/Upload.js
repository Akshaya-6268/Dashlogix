import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./Upload.css";

function Upload() {
  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadStatus, setUploadStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
      setUploadStatus(null);
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setUploadStatus(null);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setUploadStatus({ type: "error", message: "Please select a file first" });
      return;
    }

    setIsLoading(true);
    setUploadStatus(null);

    // Simulate upload delay
    setTimeout(() => {
      setIsLoading(false);
      setUploadStatus({ type: "success", message: "File uploaded successfully!" });
      setFile(null);
    }, 2000);
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + " " + sizes[i];
  };

  return (
    <>
      <Navbar />

      <div className="upload-container">
        <div className="upload-content">
          <div className="upload-header">
            <h1>Upload Your Log Files</h1>
            <p className="subtitle">Drag and drop your files or click to browse</p>
          </div>

          <div
            className={`upload-zone ${isDragging ? "dragging" : ""} ${file ? "has-file" : ""}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <input
              type="file"
              id="fileInput"
              className="file-input"
              onChange={handleFileChange}
            />
            <label htmlFor="fileInput" className="upload-label">
              {file ? (
                <div className="file-info">
                  <div className="file-details">
                    <h4>{file.name}</h4>
                    <p>{formatFileSize(file.size)}</p>
                  </div>
                  <div className="file-actions">
                    <button
                      type="button"
                      className="btn-remove"
                      onClick={(e) => {
                        e.preventDefault();
                        setFile(null);
                      }}
                    >
                      ✕
                    </button>
                  </div>
                </div>
              ) : (
                <div className="upload-placeholder">
                  <h3>Drop your file here</h3>
                  <p>or click to select from your computer</p>
                  <span className="file-hint">Supports .log, .txt, .csv files</span>
                </div>
              )}
            </label>
          </div>

          {uploadStatus && (
            <div className={`alert-message ${uploadStatus.type}`}>
              {uploadStatus.message}
            </div>
          )}

          <button
            className={`upload-btn ${isLoading ? "loading" : ""}`}
            onClick={handleUpload}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <span className="spinner"></span> Uploading...
              </>
            ) : (
              "Upload File"
            )}
          </button>
        </div>
      </div>
    </>
  );
}

export default Upload;