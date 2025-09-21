import React from 'react';

const SketchfabViewer = () => {
  return (
    <div className="sketchfab-embed-wrapper" style={{ width: '100%', height: '600px' }}>
      <iframe
        allowFullScreen
        // mozAllowFullScreen is a vendor-specific attribute and might not be needed in modern browsers.
        // webkitAllowFullScreen is also a vendor-specific attribute.
        allow="autoplay; fullscreen; xr-spatial-tracking"
        // These are non-standard attributes and might be handled directly by the browser.
        // In JSX, custom attributes should be lowercase.
        xr-spatial-tracking="true"
        execution-while-out-of-viewport="true"
        execution-while-not-rendered="true"
        web-share="false"
        src="https://sketchfab.com/models/6256d3314d5a4bd081b35d1ddc86fcd6/embed?autospin=1&autostart=1&ui_theme=dark"
        style={{ width: '100%', height: '140%' }}
      ></iframe>
    </div>
  );
};

export default SketchfabViewer;