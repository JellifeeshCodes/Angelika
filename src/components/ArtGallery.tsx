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
    imageUrl: "/art/linux-girl.png", // replace with your image path/import
    description: "A digital illustration of a girl in front of a Linux terminal.",
    medium: "Digital Art",
  },
  {
    id: "joint-girl",
    title: "joint girl",
    year: "2026",
    imageUrl: "/art/joint-girl.png", // replace with your image path/import
    description: "A stylized digital artwork portrait.",
    medium: "Digital Art",
  },
];

const ArtGallery = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "100%" }}>
      <p style={{ margin: "0 0 8px 0", fontSize: "12px" }}>
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
          }}
        >
          <legend style={{ fontWeight: "bold", padding: "0 4px" }}>
            {item.title} ({item.year})
          </legend>

          {/* Vertical Stack: Full-width Image top, details bottom */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", width: "100%" }}>
            <div
              style={{
                border: "2px solid #808080",
                borderRightColor: "#ffffff",
                borderBottomColor: "#ffffff",
                backgroundColor: "#000000",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
                width: "100%",
              }}
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  objectFit: "contain",
                }}
              />
            </div>

            <div style={{ fontSize: "12px", lineHeight: "1.4" }}>
              {item.medium && (
                <p style={{ margin: "0 0 4px 0", fontWeight: "bold" }}>
                  Medium: {item.medium}
                </p>
              )}
              <p style={{ margin: 0 }}>{item.description}</p>
            </div>
          </div>
        </fieldset>
      ))}
    </div>
  );
};

export default ArtGallery;
