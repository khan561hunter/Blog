"use client"
import React, { useState, useEffect } from "react";

interface Comment {
  username: string;
  comment: string;
}

const CommentSection = () => {
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<Comment[]>([]);

  // Load comments from local storage on component mount
  useEffect(() => {
    const savedComments = localStorage.getItem("comments");
    if (savedComments) {
      setComments(JSON.parse(savedComments));
    }
  }, []);

  // Save comments to local storage when the comments array changes
  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  const handleAddComment = () => {
    if (username.trim() && comment.trim()) {
      const newComment = { username, comment };
      setComments((prev) => [...prev, newComment]);
      setUsername("");
      setComment("");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Comment Section</h1>
      <div className="bg-white shadow-md rounded-lg p-4">
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter your username"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
            Comment
          </label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows={4}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Write your comment here"
          ></textarea>
        </div>
        <button
          onClick={handleAddComment}
          className="w-full bg-[#3A3960] text-[#A9BFA8] py-2 px-4 rounded-md shadow hover:text-[#3A3960] hover:bg-[#A9BFA8] focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Add Comment
        </button>
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-bold mb-4">Comments</h2>
        {comments.length > 0 ? (
          <ul className="space-y-4">
            {comments.map((comment, index) => (
              <li
                key={index}
                className="bg-gray-100 p-4 rounded-md shadow-md"
              >
                <p className="text-sm font-medium text-gray-700">
                  {comment.username}
                </p>
                <p className="text-gray-600">{comment.comment}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No comments yet. Be the first to comment!</p>
        )}
      </div>
    </div>
  );
};

export default CommentSection;
