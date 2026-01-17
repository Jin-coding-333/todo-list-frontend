import { axiosInstance } from "@/lib/axiosInstance";
import { TodoItem, CreateTodoRequest, UpdateTodoRequest, ImageUploadResponse } from "./types";

export const todoApi = {
  // 할 일 목록 조회
  getItems: async () => {
    const { data } = await axiosInstance.get<TodoItem[]>("/items");
    return data;
  },

  // 할 일 생성
  createItem: async (payload: CreateTodoRequest) => {
    const { data } = await axiosInstance.post<TodoItem>("/items", payload);
    return data;
  },

  // 할 일 상세 조회
  getItemDetail: async (itemId: string | number) => {
    const { data } = await axiosInstance.get<TodoItem>(`/items/${itemId}`);
    return data;
  },

  // 할 일 수정
  updateItem: async (itemId: string | number, payload: UpdateTodoRequest) => {
    const { data } = await axiosInstance.patch<TodoItem>(`/items/${itemId}`, payload);
    return data;
  },

  // 할 일 삭제
  deleteItem: async (itemId: string | number) => {
    const { data } = await axiosInstance.delete<{ message: string }>(`/items/${itemId}`);
    return data;
  },

  // 이미지 업로드
  uploadImage: async (imageFile: File) => {
    const formData = new FormData();
    // 파일명에 한글이나 특수문자가 포함되면 S3 인코딩 문제로 403 에러가 발생할 수 있습니다.
    // 이를 방지하기 위해 파일명을 안전한 영문/숫자 조합으로 변경하여 업로드합니다.
    const extension = imageFile.name.split(".").pop();
    const safeFileName = `image_${Date.now()}.${extension}`;
    const safeFile = new File([imageFile], safeFileName, {
      type: imageFile.type,
    });
    formData.append("image", safeFile);

    const { data } = await axiosInstance.post<ImageUploadResponse>("/images/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return data;
  },
};
