
// A comment section component where each comment is a separate component. Should include an avatar, the username, and comment along with buttons to interact with each comment


import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ThumbsUp, ThumbsDown, MessageCircle, Flag } from 'lucide-react';

// Single Comment Component
const Comment = ({ avatar, username, comment, likes, dislikes }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setIsDisliked(false);
  };

  const handleDislike = () => {
    setIsDisliked(!isDisliked);
    setIsLiked(false);
  };

  return (
    <motion.div 
      className="glass dark:glass-dark p-4 rounded-xl shadow-lg text-white mb-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center mb-2">
        <img src={avatar} alt={username} className="w-10 h-10 rounded-full mr-3" />
        <h3 className="font-semibold">{username}</h3>
      </div>
      <p className="text-gray-300 mb-3">{comment}</p>
      <div className="flex space-x-4">
        <button 
          onClick={handleLike} 
          className={`flex items-center space-x-1 ${isLiked ? 'text-blue-500' : 'text-gray-400'}`}
        >
          <ThumbsUp size={16} />
          <span>{likes + (isLiked ? 1 : 0)}</span>
        </button>
        <button 
          onClick={handleDislike} 
          className={`flex items-center space-x-1 ${isDisliked ? 'text-red-500' : 'text-gray-400'}`}
        >
          <ThumbsDown size={16} />
          <span>{dislikes + (isDisliked ? 1 : 0)}</span>
        </button>
        <button className="flex items-center space-x-1 text-gray-400">
          <MessageCircle size={16} />
          <span>Reply</span>
        </button>
        <button className="flex items-center space-x-1 text-gray-400">
          <Flag size={16} />
          <span>Report</span>
        </button>
      </div>
    </motion.div>
  );
};

// Comment Section Component
const CommentSection = () => {
  const comments = [
    {
      id: 1,
      avatar: 'https://i.pravatar.cc/150?img=1',
      username: 'JohnDoe',
      comment: 'This is a great post! Thanks for sharing.',
      likes: 5,
      dislikes: 1,
    },
    {
      id: 2,
      avatar: 'https://i.pravatar.cc/150?img=2',
      username: 'JaneSmith',
      comment: 'I learned a lot from this. Keep up the good work!',
      likes: 3,
      dislikes: 0,
    },
    {
      id: 3,
      avatar: 'https://i.pravatar.cc/150?img=3',
      username: 'AliceJohnson',
      comment: 'Interesting perspective. I\'d love to see more content like this.',
      likes: 7,
      dislikes: 2,
    },
  ];

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h2 className="text-2xl font-semibold text-white mb-4">Comments</h2>
      {comments.map((comment) => (
        <Comment key={comment.id} {...comment} />
      ))}
    </div>
  );
};

export default CommentSection;
