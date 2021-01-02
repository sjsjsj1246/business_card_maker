class ImageUploader {
  async upload(file) {
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'yhkg6dan');
    const result = await fetch(
      'https://api.cloudinary.com/v1_1/dom5hev0f/image/upload',
      {
        method: 'POST',
        body: data,
      },
    );
    return await result.json();
  }
}

export default ImageUploader;
