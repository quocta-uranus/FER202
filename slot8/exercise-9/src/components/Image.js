import React from "react";

function Image({ url }) {
  if (!url) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          fontSize: "2rem",
          fontWeight: "bold",
          color: "#f0d264",
        }}
      >
        IMG
      </div>
    );
  }

  return (
    <img
      src={url}
      alt="Card image"
      style={{
        maxWidth: "100%",
        maxHeight: "150px",
        objectFit: "contain",
      }}
    />
  );
}

export default Image;
