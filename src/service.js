import axios from "axios";
import { toast } from "react-toastify";

export const imageUploadToServer = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const result = await axios.post(
      process.env.NODE_ENV === "development"
        ? "http://localhost:4000/api/upload"
        : "https://geulhouse-backend.herokuapp.com/api/upload",
      formData,
      { headers: { "content-type": "multipart/form-data" } }
    );
    return result.data.key;
  } catch (error) {
    toast.error("이미지 업로드 요청에 실패했습니다.");
  }
};

export const getCeilNumber = (number) => {
  if (typeof number === "number") {
    return Math.ceil(number);
  } else return 1;
};

export const getBoardName = (category) => {
  switch (category) {
    case "essay":
      return "수필인의 방";

    case "poem":
      return "시인의 방";

    case "dream":
      return "꿈일기의 방";

    case "review":
      return "리뷰의 방";

    default:
      return "";
  }
};
