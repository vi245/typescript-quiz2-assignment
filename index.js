const image1=document.querySelector('#image-1');
const image2=document.querySelector('#image-2');
const image3=document.querySelector('#image-3');

const imageAnimation=[
    {
        transform:"rotate(0) scale(1)"
    },
    {
        transform:"rotate(360deg) scale(0)"
    }
];
const animationTiming={
    duration:2000,
    iterations:1,
    fill:"forwards",
}
image1.animate(imageAnimation, animationTiming).finished
    .then(() => image2.animate(imageAnimation, animationTiming).finished)
    .then(() => image3.animate(imageAnimation, animationTiming).finished)
    .catch(error => console.error(`Error animating images: ${error}`));
