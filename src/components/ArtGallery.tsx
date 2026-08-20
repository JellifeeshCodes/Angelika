import React from "react";

interface ArtItem {
  id: string;
  title: string;
  year: string;
  imageUrl: string;
  description: string;
  medium?: string;
}

const artData: ArtItem[] = [
  {
    id: "linux-girl",
    title: "linux girl",
    year: "2026",
    imageUrl: "/art/linux-girl.png", // replace with your image import or path
    description: "A digital illustration of a girl sitting in front of a Linux terminal.",
    medium: "Digital Art",
  },
  {
    id: "joint-girl",
    title: "joint girl",
    year: "2026",
    imageUrl: "/art/joint-girl.png", // replace with your image import or path
    description: "A stylized digital portrait illustration.",
    medium: "Digital Art",
  },
];

const ArtGallery = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px", width: "100%", boxSizing: "border-box" }}>
      <p style={{ margin: "0", fontSize: "12px", color: "#222" }}>
        A collection of digital artwork, illustrations, and design work.
      </p>

      {artData.map((item) => (
        <fieldset
          key={item.id}
          style={{
            border: "2px solid #dfdfdf",
            borderRightColor: "#000000",
            borderBottomColor: "#000000",
            padding: "12px",
            margin: 0,
            boxSizing: "border-box",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <legend style={{ fontWeight: "bold", padding: "0 4px" }}>
            {item.title} ({item.year})
          </legend>

          {/* Full-width Image Frame */}
          <div
            style={{
              border: "2px solid #808080",
              borderRightColor: "#ffffff",
              borderBottomColor: "#ffffff",
              backgroundColor: "#000000",
              width: "100%",
              overflow: "hidden",
              boxSizing: "border-box",
            }}
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                objectFit: "cover",
              }}
            />
          </div>

          {/* Text Description Box */}
          <div style={{ fontSize: "12px", lineHeight: "1.4", wordBreak: "break-word" }}>
            {item.medium && (
              <p style={{ margin: "0 0 4px 0", fontWeight: "bold" }}>
                Medium: {item.medium}
              </p>
            )}
            <p style={{ margin: 0 }}>{item.description}</p>
          </div>
        </fieldset>
      ))}
    </div>
  );
};

export default ArtGallery;
