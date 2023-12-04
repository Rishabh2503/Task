import React, { useEffect, useState } from "react";
import axios from "axios";

const PhotoCard: React.FC<PhotoCardProps> = ({ photo, onLike }) => {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  // const [savedItems, setSavedItems] = useState([]);

  const fetchPhotos = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://jsonplaceholder.typicode.com/photos");
      setPhotos(response.data.slice(0, 20)); 
    } catch (error) {
      console.error("Error fetching photos:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  const handleLike = (id: number) => {
    onLike(photo.id);
   
  };

  return (
    <div className={`card w-96 bg-base-100 shadow-xl m-4 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}>
      {loading ? (
        <div className="flex flex-col gap-4 w-52 p-8">
          <div className="skeleton h-32 w-full"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
      ) : (
        <>
          <figure className="px-10 pt-10">
            <img src={photo.url} alt={photo.title} className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{photo.title}</h2>
            <div className="card-actions">
              <button className="btn btn-primary" onClick={() => onLike(photo.id)}>
                Like
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

interface PhotoCardProps {
  photo: {
    id: number;
    title: string;
    url: string;
  };
  onLike: (id: number) => void;
}

export default PhotoCard;
