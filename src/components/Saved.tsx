import React from 'react';

import SavedItem from './SavedItem';
import Layout from './Layout';

interface SavedProps {
  savedItems: Array<{
    id: number;
    type: 'photo' | 'post';
    title: string;
    url?: string;
    content?: string;
  }>;
}

const Saved: React.FC<SavedProps> = ({ savedItems }) => {
  return (
    <Layout>
      <div>
        <h2 className="text-2xl font-bold mb-4">Saved Items</h2>
        {savedItems.map((item) => (
          <SavedItem key={item.id} item={item} />
        ))}
      </div>
    </Layout>
  );
};

export default Saved;
