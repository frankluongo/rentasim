import React from "react";

export default function TestPage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        padding: "1rem",
      }}
    >
      <h1>h1 page heading</h1>
      <h2>h2 section heading</h2>
      <h3>h3 sub-section heading</h3>
      <h4>h4 sub sub-section heading</h4>
      <h5>h5 sized heading or text</h5>
      <h6>h6 sized heading or text</h6>
      <p>this is a paragraph</p>
      <small>this is small text</small>
      <br />
      <div className="h1">h1 page heading</div>
      <div className="h2">h2 section heading</div>
      <div className="h3">h3 sub-section heading</div>
      <div className="h4">h4 sub sub-section heading</div>
      <div className="h5">h5 sized heading or text</div>
      <div className="h6">h6 sized heading or text</div>
      <div className="p">this is a paragraph</div>
      <div className="small">this is small text</div>
    </div>
  );
}
