export default function gallery() {
  const galleryWindow = document.querySelector('.gallery__block_window');
  const images = document.querySelectorAll('.gallery__block_window div');

  images.forEach((image) => {
    image.addEventListener('click', (i) => {
      const showImage = document.createElement('img');
      showImage.src = i.target.src;
      console.log(showImage);

      image.style.width = "100%";
      image.style.height = "100%";
      galleryWindow.style.display = 'block';

      image.classList.add('show-image');

      const bigImage = document.querySelector('.show-image');

      galleryWindow.innerHTML = "";
      galleryWindow.appendChild(image);

      bigImage.addEventListener('click', () => {
        if (true) {
          galleryWindow.style.display = 'flex';
          image.classList.remove('show-image');
          galleryWindow.innerHTML = `
          <div>
        <img src="./assets/images/section-gallery/gallery-first.png" alt="">
        </div>
        <div>
        <img src="./assets/images/section-gallery/gallery-second.png" alt="">
        </div>
        <div>
        <img src="./assets/images/section-gallery/gallery-third.png" alt="">
        </div>
        <div>
        <img src="./assets/images/section-gallery/gallery-fourth.png" alt="">
        </div>
        <div>
        <img src="./assets/images/section-gallery/gallery-fifth.png" alt="">
        </div>
        <div>
        <img src="./assets/images/section-gallery/gallery-sixth.png" alt="">
        </div>
        `;
        }
      })
    })
  })
}

