
import React from 'react';
import Header from './components/Header';
import PhotoGallery from './components/PhotoGallery';
import VideoSection from './components/VideoSection';
import ParticipantList from './components/ParticipantList';
import SponsorList from './components/SponsorList';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen font-sans text-gray-800">
      <Header />
      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto space-y-16">
          <ParticipantList />
          <PhotoGallery />
          <VideoSection />
          <SponsorList />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
