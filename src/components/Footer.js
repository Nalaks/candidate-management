import React from 'react';
import Button from './Button';

const Footer = ({ resetTable, handleFileChosen, handleFileToData, handleDownload }) => (
  <div className="footer">
    <Button text="Clear mask" buttonHandler={resetTable} />
    <div className="right">
      <Button text="Save to file" buttonHandler={handleDownload} />
      <div className="divider" />
      <Button text="Read from file" buttonHandler={handleFileToData} />
      <input
        type="file"
        id="file"
        className="input-file"
        accept=".json"
        onChange={(e) => handleFileChosen(e.target.files[0])}
      />
    </div>
  </div>
);

export default Footer;
