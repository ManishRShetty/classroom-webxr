import React from 'react';

const SketchfabViewer = () => {
  return (
    <div className="sketchfab-embed-wrapper" style={{ width: '100%', height: '600px' }}>
      <iframe
        title="VR ClassRoom April 2021"
        frameBorder="0"
        allowFullScreen
        // mozAllowFullScreen is a vendor-specific attribute and might not be needed in modern browsers.
        // webkitAllowFullScreen is also a vendor-specific attribute.
        allow="autoplay; fullscreen; xr-spatial-tracking"
        // These are non-standard attributes and might be handled directly by the browser.
        // In JSX, custom attributes should be lowercase.
        xr-spatial-tracking="true"
        execution-while-out-of-viewport="true"
        execution-while-not-rendered="true"
        web-share="true"
        src="https://sketchfab.com/models/6256d3314d5a4bd081b35d1ddc86fcd6/embed?autospin=1&autostart=1&ui_theme=dark"
        style={{ width: '100%', height: '100%' }}
      ></iframe>
      <p style={{ fontSize: '13px', fontWeight: 'normal', margin: '5px', color: '#4A4A4A' }}>
        <a
          href="https://sketchfab.com/3d-models/vr-classroom-april-2021-6256d3314d5a4bd081b35d1ddc86fcd6?utm_medium=embed&utm_campaign=share-popup&utm_content=6256d3314d5a4bd081b35d1ddc86fcd6"
          target="_blank"
          rel="noopener noreferrer" // 'nofollow' is not a standard rel value in React, 'noopener noreferrer' is recommended for security.
          style={{ fontWeight: 'bold', color: '#1CAAD9' }}
        >
          VR ClassRoom April 2021
        </a> by{' '}
        <a
          href="https://sketchfab.com/GbehnamG?utm_medium=embed&utm_campaign=share-popup&utm_content=6256d3314d5a4bd081b35d1ddc86fcd6"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontWeight: 'bold', color: '#1CAAD9' }}
        >
          BehNaM
        </a> on{' '}
        <a
          href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=6256d3314d5a4bd081b35d1ddc86fcd6"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontWeight: 'bold', color: '#1CAAD9' }}
        >
          Nexus-Matrix
        </a>
      </p>
    </div>
  );
};

export default SketchfabViewer;