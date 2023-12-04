import React from 'react';

interface SavedItemProps {
  item: {
    id: number;
    type: 'photo' | 'post';
    title: string;
    url?: string;
    content?: string;
  };
}

const SavedItem: React.FC<SavedItemProps> = ({ item }) => {
  console.log('Item Type:', item.type);
  console.log('Item Title:', item.title);

  return (
    <div className="card w-96 bg-primary text-primary-content m-4">
      <div className="card-body">
        <h2 className="card-title">{item.title}</h2>
        {item.type === 'photo' && item.url && (
          <figure className="px-10 pt-10">
            <img src={item.url} alt={item.title} className="rounded-xl" />
          </figure>
        )}
        {item.type === 'post' && item.content && <p>{item.content}</p>}
      </div>
    </div>
  );
};

export default SavedItem;
