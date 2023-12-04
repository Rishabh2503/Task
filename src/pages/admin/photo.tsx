
import React, { useState, useEffect, lazy, Suspense } from 'react';
import axios from 'axios';
import PhotoCard from '../../components/PhotoCard';
import Layout from '../../components/Layout';

interface Photo {
  id: number;
  title: string;
  url: string;
}

const photo: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [savedItems, setSavedItems] = useState<Photo[]>([]);

  const fetchPhotos = async () => {
    try {
      const response = await axios.get<Photo[]>('https://jsonplaceholder.typicode.com/photos');
      setPhotos((prevPhotos) => [...prevPhotos, ...response.data.slice(0, 20)]);
    } catch (error) {
      console.error('Error fetching photos:', error);
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  const handleLike = (id: number) => {
    const itemToLike = photos.find((photo) => photo.id === id);
    if (itemToLike) {
      setSavedItems((prevSavedItems) => [...prevSavedItems, itemToLike]);

      // Save liked items to local storage
      localStorage.setItem('likedItems', JSON.stringify([...savedItems, itemToLike]));
    }
  };

  return (
    <Layout>
      <div className="pageContent flex flex-wrap">
        <Suspense fallback={<div>Loading...</div>}>
          {photos.map((photo) => (
            <PhotoCard key={photo.id} photo={photo} onLike={handleLike} />
          ))}
        </Suspense>
      </div>
    </Layout>
  );
};

export default photo;
