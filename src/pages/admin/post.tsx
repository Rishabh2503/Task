import React, { useState, useEffect, Suspense } from 'react';
import axios from 'axios';
import PostCard from '../../components/PostCard';
import Layout from '../../components/Layout';

interface Post {
  id: number;
  title: string;
  content: string;
}

const PostPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [likedPosts, setLikedPosts] = useState<Post[]>([]);

  const fetchPosts = async () => {
    try {
      const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
      setPosts(response.data.slice(0, 20));
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleLike = (id: number) => {
    const itemToLike = posts.find((post) => post.id === id);
    if (itemToLike) {
      setLikedPosts((prevLikedPosts) => [...prevLikedPosts, itemToLike]);
      localStorage.setItem('likedItems', JSON.stringify([...likedPosts, itemToLike]));
    }
  };

  return (
    <Layout>
      <div>
        <h2 className="text-2xl font-bold mb-4">Posts</h2>
        <Suspense fallback={<div>Loading...</div>}>
          {posts.map((post) => (
            <PostCard key={post.id} post={post} onLike={handleLike} />
          ))}
        </Suspense>
      </div>
    </Layout>
  );
};

export default PostPage;
