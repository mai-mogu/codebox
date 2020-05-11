'use strict';
{
  const list = ['pic/img.png', 'pic/img2.png', 'pic/img3.png'];
  let num = 0;

  const pic = document.getElementById('pic');

  pic.addEventListener('mouseover',() => {
    let id = setInterval(change,1000);

    function change () {
      if (num < list.length - 1) {
        num++;
        pic.src = list[num];
      } else {
        num = 0;
        pic.src = list[num]
      }
    }

    pic.addEventListener('mouseleave', () => {
      clearTimeout(id);
    });
  });

  const list = [
    {img:'pic/img1.png'},
    {img:'pic/img2.png'},
    {img:'pic/img3.png'}
  ];

  const pic = document.getElementById('pic');
  let num = 0;

  const change = () => {
    num < list.length - 1 ? num++ : num = 0;
    pic.src = list[num].img
  }
  pic.addEventListener('mouseover', () => {
    let id = setInterval(change,500);

    pic.addEventListener('mouseleave', () => {
      clearTimeout(id);
    })
  });
}