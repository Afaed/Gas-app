const { Schema, model } = require('mongoose')
const dateFormat = require('../utils/dateFormat.js')

const reviewSchema = new Schema(
    {
        StationId: {
          type: String,
          required: true,
          unique: true
        },
        ReviewText: {
            type: String,
            minLength: 1,
            maxLength: 280
        },
        CreatedAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        },
        Username: {
            type: String,
            required: true,
        }
    },
    {
        toJSON: {
          getters: true
        }
      }
    );

const Review = model('Review', reviewSchema)

module.exports = Review;