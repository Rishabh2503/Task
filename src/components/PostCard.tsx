import React from "react";

interface PostCardProps {
  post: {
    id: number;
    title: string;
    content: string;
  };
  onLike: (id: number) => void;
}

const PostCard: React.FC<PostCardProps> = ({ post, onLike }) => {
  return (
    <div className="card w-96 bg-primary text-primary-content m-4">
      <div className="card-body">
        <h2 className="card-title">{post.title}</h2>
        <p>{post.content}</p>
        <div className="card-actions justify-end">
          <button className="btn" onClick={() => onLike(post.id)}>
            Like
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;