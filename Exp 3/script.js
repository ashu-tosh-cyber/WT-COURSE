document.addEventListener('DOMContentLoaded', () => {
    const galleryContainer = document.querySelector('.gallery-container');
    const imageUrls = [
        "https://www.dreamstime.com/royalty-free-stock-images-enjoying-good-music-image3953579",
        "https://www.dreamstime.com/waterfall-nature-green-tree-slow-speed-photography-cool-peace-image413111679",
        "https://thumbs.dreamstime.com/b/woman-jump-777955.jpg?w=768",
        "https://www.dreamstime.com/royalty-free-stock-images-jump-girl-hair-sky-image221199",
        "https://thumbs.dreamstime.com/b/friengs-meditation-5176353.jpg?w=768",
        "https://thumbs.dreamstime.com/b/couple-dogs-two-cool-grass-meadow-park-peace-victory-fingers-44486993.jpg?w=1400",
    ];
function createGalleryItem(URL) {
    const galleryItem = document.createElement('div');
    galleryItem.classList.add('gallery-item');
    
    const img = document.createElement('img');
    img.src = URL;
    img.alt = 'Gallery Image';
    
    img.addEventListener('click', () => {    
        console.log(`Image clicked: ${URL}`);
        alert(`You clicked on the image with URL: ${URL}`);
    });
    
    galleryItem.appendChild(img);
    return galleryItem;
}
imageUrls.forEach(url => {
    const galleryItem = createGalleryItem(url);
    galleryContainer.appendChild(galleryItem);
});
});