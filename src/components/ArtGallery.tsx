import React, { useState } from "react";

interface ArtItem {
  id: string;
  title: string;
  year: string;
  category: "Digital Art" | "3D & Assets";
  imageUrl: string;
  description: string;
  medium: string;
}

const artData: ArtItem[] = [
  {
    id: "linux-girl",
    title: "linux girl",
    year: "2026",
    category: "Digital Art",
    imageUrl: "/art/linux-girl.png", // replace with your image import or path
    medium: "Digital Painting (Procreate)",
    description: "A shirtless girl thinking with Linux in the background.",
  },
  {
    id: "joint-girl",
    title: "joint girl",
    year: "2026",
    category: "Digital Art",
    imageUrl: "/art/joint-girl.png", // replace with your image import or path
    medium: "Digital Painting (Procreate)",
    description: "A shirtless girl smoking a joint.",
  },
];

const ArtGallery = () => {
  const [activeTab, setActiveTab] = useState<string>("All Works");

  const filteredData = artData.filter((item) => {
    if (activeTab === "Digital Art") return item.category === "Digital Art";
    if (activeTab === "3D & Assets") return item.category === "3D & Assets";
    return true;
  });

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px", width: "100%", boxSizing: "border-box" }}>
      {/* Navigation Tabs */}
      <div style={{ display: "flex", gap: "4px" }}>
        {["All Works", "Digital Art", "3D & Assets"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: "4px 12px",
              fontSize: "12px",
              fontWeight: activeTab === tab ? "bold" : "normal",
              cursor: "pointer",
              backgroundColor: "#c0c0c0",
              border: "2px solid",
              borderColor: activeTab === tab ? "#000000 #dfdfdf #dfdfdf #000000" : "#ffffff #808080 #808080 #ffffff",
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Header Info */}
      <div>
        <h3 style={{ margin: "4px 0", fontSize: "14px" }}>Angelika's Portfolio</h3>
        <p style={{ margin: 0, fontSize: "12px", color: "#333" }}>
          A collection of digital artwork, illustrations, and 3D models.
        </p>
      </div>

      {/* Artwork Items */}
      {filteredData.map((item) => (
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
            gap: "10px",
          }}
        >
          <legend style={{ fontWeight: "bold", padding: "0 4px", fontSize: "12px" }}>
            {item.title} ({item.year})
          </legend>

          {/* Uncropped, Full-Width Image Box */}
          <div
            style={{
              border: "2px solid #808080",
              borderRightColor: "#ffffff",
              borderBottomColor: "#ffffff",
              backgroundColor: "#000000",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              style={{
                width: "100%",
                height: "auto",
                maxHeight: "500px",
                objectFit: "contain",
                display: "block",
              }}
            />
          </div>

          {/* Details below image */}
          <div style={{ fontSize: "12px", lineHeight: "1.4" }}>
            <p style={{ margin: "0 0 4px 0" }}>
              <strong>Medium:</strong> {item.medium}
            </p>
            <p style={{ margin: 0 }}>{item.description}</p>
          </div>
        </fieldset>
      ))}
    </div>
  );
};

export default ArtGallery;
