import React from 'react'
import { FaDownload } from 'react-icons/fa';
import './FileInfoBox.css'
const FileInfoBox = ({ className, dateUploaded, description, docente, fileSize }) => {
  return (
    <article className={`chard-article ${className}`}>
      <div className="file-details">
        <p className="dateUploaded">{dateUploaded}</p>
        <p className="file-description">{description}</p>
        <p className="docente">{docente}</p>
        <p className="file-size">{fileSize}</p>
        <FaDownload className="ic-download" />
      </div>
    </article>
  );
}
export default FileInfoBox