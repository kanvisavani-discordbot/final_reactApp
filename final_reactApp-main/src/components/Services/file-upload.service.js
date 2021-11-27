import http from "../Services/http-common";

class FileUploadService {
  upload(file) {
    let formData = new FormData();
debugger;
    formData.append("file", file);

    return http.post("/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      }
    });
  }

  getFiles() {
    return http.get("/files");
  }
}

export default new FileUploadService();