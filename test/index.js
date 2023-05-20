setInterval(() => {
  const imgs = document.querySelectorAll('img');

  imgs.forEach((img) => {
    img.src =
      'https://i.pinimg.com/originals/35/e4/8e/35e48e469aa636b91a82704da2944670.gif';
    img.loop = Infinity;
  });
}, 500);
