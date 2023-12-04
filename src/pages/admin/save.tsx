import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import SavedItem from "../../components/SavedItem";

const SavedPage: React.FC = () => {
  const [savedItems, setSavedItems] = useState<any[]>([]); // Change the type based on your Photo and Post types

  useEffect(() => {
    // Retrieve saved items from local storage
    const savedItemsFromLocalStorage = JSON.parse(localStorage.getItem("likedItems") || "[]");
    setSavedItems(savedItemsFromLocalStorage);
  }, []);

  return (
    <Layout>
      <div>
        <h2 className="text-2xl font-bold mb-4">Saved Items</h2>
        {savedItems.length > 0 ? (
          savedItems.map((item) => <SavedItem key={item.id} item={item} />)
        ) : (
          <p>No saved items yet.</p>
        )}
      </div>
    </Layout>
  );
};

export default SavedPage;
