import React, { useState } from 'react';
import "./Home.css"
import upload_icon from "../Assets/add_photo_alternate_outlined.png"

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [postContent, setPostContent] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handlePostContentChange = (event) => {
    setPostContent(event.target.value);
  };

  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];
    setImage(selectedImage);

    // Image preview
    const reader = new FileReader();
    reader.onload = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(selectedImage);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Assuming you have some function to handle post submission
    // Here we just add the new post to the posts array
    const newPost = {
      content: postContent,
      image: image,
      // Add other properties like user ID, timestamp, etc. as needed
    };

    setPosts([newPost, ...posts]);
    setPostContent('');
    setImage(null);
    setImagePreview(null);
  };

  return (
    <div className="feed-container">
      {/* Form for creating new posts */}
      <form className='post-form' onSubmit={handleSubmit}>
        <textarea
          value={postContent}
          onChange={handlePostContentChange}
          placeholder="Write something..."
          rows="4"
          cols="50"
        />
        <div className='img-submit'>
          <label htmlFor="file-input">
            <img src={upload_icon} alt="Upload" />
          </label>
          <input id="file-input" type="file" onChange={handleImageChange} />
          {imagePreview && <img src={imagePreview} alt="Preview" />}
          <button type="submit">POST</button>
        </div>
      </form>

      {/* Display area for posts */}
      <div className='posts-container'>
        {posts.map((post, index) => (
          <div className='post-content' key={index}>
            <p>{post.content}</p>
            {post.image && 
              <div className="image-container">
                <img src={URL.createObjectURL(post.image)} alt="Uploaded" />
              </div>
            }
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
