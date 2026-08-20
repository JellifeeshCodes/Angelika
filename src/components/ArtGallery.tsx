import React, { useState } from 'react';
import { Button, Fieldset, Frame } from '@react95/core';

const galleryData = [
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

function GalleryItem({ item }) {
  return (
    <Fieldset legend={`${item.title} (${item.year})`} style={{ marginBottom: '16px' }}>
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
        <Frame
          boxShadow="in"
          style={{
            padding: '4px',
            backgroundColor: '#fff',
            display: 'inline-block',
          }}
        >
          <img
            src={item.src}
            alt={item.title}
            style={{
              width: '220px',
              height: '160px',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        </Frame>

        <div style={{ flex: 1, minWidth: '200px' }}>
          <p style={{ margin: '0 0 8px 0', fontWeight: 'bold' }}>
            Medium: <span style={{ fontWeight: 'normal' }}>{item.medium}</span>
          </p>
          <p style={{ margin: 0 }}>{item.description}</p>
        </div>
      </div>
    </Fieldset>
  );
}

function ArtGallery() {
  const [activeTab, setActiveTab] = useState('All Works');

  const filteredArt = galleryData.filter((art) => {
    if (activeTab === 'Digital Art') return art.category === 'Digital Art';
    if (activeTab === '3D & Assets') return art.category === '3D & Assets';
    return true;
  });

  return (
    <div style={{ padding: '8px', maxHeight: '500px', overflowY: 'auto' }}>
      {/* Retro Tab Bar */}
      <div style={{ display: 'flex', gap: '4px', marginBottom: '8px' }}>
        {['All Works', 'Digital Art', '3D & Assets'].map((tab) => (
          <Button
            key={tab}
            active={activeTab === tab}
            onClick={() => setActiveTab(tab)}
            style={{ fontWeight: activeTab === tab ? 'bold' : 'normal' }}
          >
            {tab}
          </Button>
        ))}
      </div>

      <Frame boxShadow="in" style={{ padding: '16px', backgroundColor: '#c0c0c0' }}>
        <h3 style={{ marginTop: 0 }}>Angelika's Portfolio</h3>
        <p style={{ marginBottom: '16px' }}>
          A collection of digital artwork, illustrations, and 3D models.
        </p>

        {filteredArt.length === 0 ? (
          <p style={{ fontStyle: 'italic' }}>No artworks available in this category.</p>
        ) : (
          filteredArt.map((art) => <GalleryItem key={art.id} item={art} />)
        )}
      </Frame>
    </div>
  );
}

export default ArtGallery;
