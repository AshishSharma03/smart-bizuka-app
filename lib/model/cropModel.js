import mongoose from "mongoose";

const cropSchema = new mongoose.Schema( {
    image: {
      type: String,
      default: undefined
    },
    diseasefound: {
      type: Boolean,
      default: false,
    },
    planttype: {
      type: String,
      required: true,
    },
    diseaseType: {
      type: String,
      default: '',
    },
    isreviewed: {
      type: Boolean,
      default: false,
    },
    advice: {
      type: "ObjectId",
      ref: "expertModel",
    },
  },
  {
    timestamps: true,
  }
)

export default mongoose.models.cropModel || mongoose.model("cropModel", cropSchema)