import { Component } from '@angular/core';

@Component({
  selector: 'app-id',
  templateUrl: './id.component.html',
  styleUrls: ['./id.component.css']
})
export class IdComponent {
  inputValue: string;

  constructor() {
    this.inputValue = '';
  }
  previewImageSrc: string | ArrayBuffer | null | undefined = null;

  onFileChange(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    const file = fileInput.files ? fileInput.files[0] : null;
  
    if (file) {
      const reader = new FileReader();
  
      reader.onload = (e: ProgressEvent<FileReader>) => {
        // Create an image object
        const img = new Image();
  
        // Set the source of the image object to the selected file
        img.src = e.target?.result as string;
  
        // When the image is loaded
        img.onload = () => {
          // Create a canvas element
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
  
          // Check if the context is supported
          if (ctx) {
            
            const maxWidth = 150; 
            const maxHeight = 250;
            let width = img.width;
            let height = img.height;
            if (width > height) {
              if (width > maxWidth) {
                height *= maxWidth / width;
                width = maxWidth;
              }
            } else {
              if (height > maxHeight) {
                width *= maxHeight / height;
                height = maxHeight;
              }
            }
            canvas.width = width;
            canvas.height = height;
  
            // Draw the image on the canvas
            ctx.drawImage(img, 0, 0, width, height);
  
            // Convert the canvas to a data URL
            const dataUrl = canvas.toDataURL('image/jpeg', 0.7); 
  
            // Get the preview image element
            const previewImage = document.getElementById('previewImage') as HTMLImageElement;
  
            // Set the source of the preview image to the minimized image if the element exists
            if (previewImage) {
              previewImage.src = dataUrl;
            }
          }
        };
      };
  
      reader.readAsDataURL(file);
    }
  }
  onTakePictureClick() {
    const video = document.createElement('video');
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
  
    // Check if the context is supported
    if (ctx) {
      // Request permission to use the camera
      navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
          // Set the video source to the camera stream
          video.srcObject = stream;
          video.play();
  
          // When the video is playing
          video.addEventListener('playing', () => {
            // Set the canvas dimensions to match the video
            const width = 250;
            const height = 250;
            canvas.width = width;
            canvas.height = height;
  
            // Draw the video frame on the canvas
            ctx.drawImage(video, 0, 0, width, height);
  
            // Convert the canvas to a data URL
            const dataUrl = canvas.toDataURL('image/jpeg', 0.7); 
  
            // Get the preview image element
            const previewImage = document.getElementById('previewImage') as HTMLImageElement;
  
            // Set the source of the preview image to the captured image
            if (previewImage) {
              previewImage.src = dataUrl;
            }
  
            // Stop the video stream and release the camera resources
            stream.getTracks().forEach((track) => track.stop());
          });
        })
        .catch((error) => {
          console.error('Error accessing camera:', error);
        });
    }
  }
  printThisPage(){
    window.print();
  }
}  
