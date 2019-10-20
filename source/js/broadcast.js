function setupVideo() {
    let video = document.querySelector('.broadcast__video');
    let link = video.querySelector('.broadcast__video-link');
    let button = video.querySelector('.broadcast__play-button');

    video.addEventListener('click', () => {
        let iframe = createIframe();

        link.remove();
        button.remove();
        video.appendChild(iframe);
    });

    link.removeAttribute('href');
}

function createIframe() {
    let iframe = document.createElement('iframe');

    iframe.setAttribute('allowfullscreen', '');
    // iframe.setAttribute('width', '100%');
    iframe.setAttribute('allow', 'autoplay');
    iframe.setAttribute('src', generateURL());
    iframe.classList.add('broadcast__video-link');

    return iframe;
}

function generateURL() {
    let query = '?rel=0&showinfo=0&autoplay=1';
    const src = 'https://www.youtube.com/embed/CpdpqLJzjvY?list=PLaZTwe67UYaSkaCxOTXDiAL8DiNa2VmnH';
    return src + query;
}

setupVideo();
