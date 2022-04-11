const { Schema, model } = require('mongoose');

const CommentSchema = new Schema ({
    writtenBody: {
        type: String
    },
    commentBody: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Comment = model('Comment', CommentSchema);

module.exports = Comment;