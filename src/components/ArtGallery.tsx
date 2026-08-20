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
    imageUrl: "https://64.media.tumblr.com/0aba985d59874588f49ef6fed9e5af22/0cf21d95b323dd13-cd/s2048x3072/59b43b0569ac862b783f5649020c1fc5ad905155.pnj",
    medium: "Digital Painting (Procreate)",
    description: "A shirtless girl thinking with Linux in the background.",
  },
  {
    id: "joint-girl",
    title: "joint girl",
    year: "2026",
    category: "Digital Art",
    imageUrl: "https://64.media.tumblr.com/5b5509047342cc288f74b69164dbecce/dd1c4aad1231feb1-cc/s2048x3072/b19499c30f66db1ddf31b7333b3fe05903c7c801.pnj",
    medium: "Digital Painting (Procreate)",
    description: "A shirtless girl smoking a joint.",
  },
  {
    id: "bobbi",
    title: "bobbi",
    year: "2026",
    category: "Digital Art",
    imageUrl: "https://64.media.tumblr.com/5a1b31b04f5d019a6f7d10b48c0a693e/f62644258e3b9c1b-48/s2048x3072/078e4fd5747def314b7bd6dd5282976c034e7f2f.pnj",
    medium: "Digital Painting (Procreate)",
    description: "Portrait illustration of Bobbi.",
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

          {/* Full-width Image Frame */}
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
