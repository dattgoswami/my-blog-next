// src/components/BlogPost.tsx
import React from 'react';

interface BlogPostProps {
  post: {
    id: number;
    author: string;
    authorId: number;
    likes: number;
    popularity: number;
    reads: number;
    tags: string[];
    title: string;
  };
}

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>Author: {post.author}</p>
      <p>Likes: {post.likes}</p>
      <p>Popularity: {post.popularity}</p>
      <p>Reads: {post.reads}</p>
      <p>Tags: {post.tags.join(', ')}</p>
    </div>
  );
};

export default BlogPost;
