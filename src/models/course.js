// File: /src/models/course.js
const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  instructor: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  chapters: [{
    title: String,
    lessons: [{
      title: String,
      contentType: { type: String, enum: ['video', 'text', 'quiz', 'file'] },
      content: String, // URL or text content
      order: Number
    }]
  }],
  createdAt: { type: Date, default: Date.now },
  isPublished: { type: Boolean, default: false }
});

module.exports = mongoose.model('Course', courseSchema);