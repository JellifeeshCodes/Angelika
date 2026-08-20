import React, { useState } from 'react';

interface ArtItem {
  id: string;
  category: string;
  title: string;
  medium: string;
  year: string;
  description: string;
  src: string;
}

const galleryData: ArtItem[] = [
  {
    id: 'art-1',
    category: 'Digital Art',
    title: 'linux girl',
    medium: 'Digital Painting (Procreate)',
    year: '2026',
    description: 'A shirtless girl thinking with Linux in the background.',
    src: 'https://64.media.tumblr.com/0aba985d59874588f49ef6fed9e5af22/0cf21d95b323dd13-cd/s2048x3072/59b43b0569ac862b783f5649020c1fc5ad905155.pnj',
  },
  {
    id: 'art-2',
    category: 'Digital Art',
    title: 'joint girl',
    medium: 'Digital Painting (Procreate)',
    year: '2026',
    description: 'A shirtless girl smoking a joint.',
    src: 'https://64.media.tumblr.com/5b5509047342cc288f74b69164dbecce/dd1c4aad1231feb1-cc/s2048x3072/b19499c30f66db1ddf31b7333b3fe05903c7c801.pnj',
  },
  {
    id: 'art-3',
    category: 'Digital Art',
    title: 'bobbi',
    medium: 'Digital Painting (Procreate)',
    year: '2025',
    description: 'My mums dog.',
    src: 'https://64.media.tumblr.com/5a1b31b04f5d019a6f7d10b48c0a693e/f62644258e3b9c1b-48/s2048x3072/078e4fd5747def314b7bd6dd5282976c034e7f2f.pnj',
  },
];

export default function ArtGallery() {
  const [activeTab, setActiveTab] = useState('All Works');

  const filteredArt = galleryData.filter((art) => {
    if (activeTab === 'Digital Art') return art.category === 'Digital Art';
    if (activeTab === '3D & Assets') return art.category === '3D & Assets';
    return true;
  });

  return (
    <div style={{ padding: '12px', backgroundColor: '#c0c0c0', color: '#000', height: '100%' }}>
      {/* Tab Navigation */}
      <div style={{ display: 'flex', gap: '4px', marginBottom: '8px' }}>
        {['All Works', 'Digital Art', '3D & Assets'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: '4px 10px',
              backgroundColor: '#c0c0c0',
              border: '2px solid',
              borderColor: activeTab === tab ? '#000 #fff #fff #000' : '#fff #000 #000 #fff',
              fontWeight: activeTab === tab ? 'bold' : 'normal',
              cursor: 'pointer',
              fontSize: '13px',
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Main Container */}
      <div 
        style={{ 
          border: '2px solid', 
          borderColor: '#808080 #fff #fff #808080', 
          backgroundColor: '#c0c0c0', 
          padding: '12px', 
          maxHeight: '400px', 
          overflowY: 'auto' 
        }}
      >
        <h3 style={{ margin: '0 0 8px 0' }}>Angelika's Portfolio</h3>
        <p style={{ margin: '0 0 16px 0', fontSize: '13px' }}>
          A collection of digital artwork, illustrations, and 3D models.
        </p>

        {filteredArt.map((art) => (
          <fieldset
            key={art.id}
            style={{
              border: '2px groove #dfdfdf',
              marginBottom: '16px',
              padding: '12px',
            }}
          >
            <legend style={{ padding: '0 4px', fontWeight: 'bold', fontSize: '13px' }}>
              {art.title} ({art.year})
            </legend>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
              <div 
                style={{ 
                  border: '2px solid', 
                  borderColor: '#808080 #fff #fff #808080', 
                  padding: '2px', 
                  backgroundColor: '#fff' 
                }}
              >
                <img
                  src={art.src}
                  alt={art.title}
                  style={{ width: '200px', height: '150px', objectFit: 'cover', display: 'block' }}
                />
              </div>
              <div style={{ flex: 1, minWidth: '180px' }}>
                <p style={{ margin: '0 0 8px 0', fontWeight: 'bold', fontSize: '13px' }}>
                  Medium: <span style={{ fontWeight: 'normal' }}>{art.medium}</span>
                </p>
                <p style={{ margin: 0, fontSize: '13px' }}>{art.description}</p>
              </div>
            </div>
          </fieldset>
        ))}
      </div>
    </div>
  );
}
