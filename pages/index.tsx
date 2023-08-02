import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import BlogPost from '../components/BlogPost';
import { Post } from '../types/post'; // Import the Post interface

const App: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [tag, setTag] = useState('tech'); // Default tag value
  const [sortBy, setSortBy] = useState('reads'); // Default sortBy value
  const [direction, setDirection] = useState('desc'); // Default direction value

  const fetchPosts = useCallback(async () => {
    try {
      const response = await axios.get('https://api.hatchways.io/assessment/blog/posts', {
        params: {
          tag,
          sortBy,
          direction,
        },
      });

      // Sorting logic here...
      const sortedPosts = response.data.posts.sort((a: Post, b: Post) => {
        if (sortBy === 'id') {
          return direction === 'asc' ? a.id - b.id : b.id - a.id;
        } else if (sortBy === 'likes') {
          return direction === 'asc' ? a.likes - b.likes : b.likes - a.likes;
        } else if (sortBy === 'reads') {
          return direction === 'asc' ? a.reads - b.reads : b.reads - a.reads;
        } else if (sortBy === 'popularity') {
          return direction === 'asc' ? a.popularity - b.popularity : b.popularity - a.popularity;
        }
        return 0;
      });

      setPosts(sortedPosts);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  }, [tag, sortBy, direction]); // Memoize the function with the dependencies

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]); // Use fetchPosts as a dependency for useEffect

  return (
    <div>
      <h1>Blog Posts</h1>
      <div>
        <p>Available Tags:</p>
        <p>tech, health, startups, science, history, design, culture, politics</p>
      </div>
      <div>
        <label>
          Tag:
          <input
            type="text"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            placeholder="Enter a tag from above to fetch blog posts"
          />
        </label>
      </div>
      <div>
        <label>
          Sort By:
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="id">ID</option>
            <option value="likes">Likes</option>
            <option value="reads">Reads</option>
            <option value="popularity">Popularity</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Direction:
          <select value={direction} onChange={(e) => setDirection(e.target.value)}>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </label>
      </div>
      {posts.map((post, index) => (
        <React.Fragment key={post.id}>
          <BlogPost post={post} />
          {index !== posts.length - 1 && <hr />} {/* Add the horizontal rule if not the last post */}
        </React.Fragment>
      ))}
    </div>
  );
};

export default function Home() {
  return <App />;
}
