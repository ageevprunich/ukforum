export interface Speaker {
  name: string;
  position: string;
  photo: string;
  bg: string;
  bgmobile: string;
  bgname: string;
  thumb: string;
}

const speakers: Speaker[] = [
  
  {
    name: 'Андрій Длігач',
    position: 'Андрій Длігач',
    photo: '/images/dligach-photo.png',
    bg: '/images/dligach-bg.png',
    bgmobile:'/images/dligach-bg-mobile.png',
    bgname: 'dligach',
    thumb: '/images/dligach-photo-thumb.png',
  },
  {
    name: 'Вікторія Тігіпко',
    position: 'Вікторія Тігіпко',
    photo: '/images/tigipko-photo.png',
    bg: '/images/tigipko-bg.png',
    bgmobile:'/images/tigipko-bg-mobile.png',
    bgname: 'tigipko',
    thumb: '/images/tigipko-photo-thumb.png',
  },
  {
    name: 'Андрій Федорів',
    position: 'Андрій Федорів',
    photo: '/images/fedoriv-photo.png',
    bg: '/images/fedoriv-bg.png',
    bgmobile:'/images/fedoriv-bg-mobile.png',
    bgname: 'fedoriv',
    thumb: '/images/fedoriv-photo-thumb.png',
  },
  {
    name: 'Дмитро Дубілет',
    position: 'Дмитро Дубілет',
    photo: '/images/dubilet-photo.png',
    bg: '/images/dubilet-bg.png',
    bgmobile:'/images/dubilet-bg-mobile.png',
    bgname: 'dubilet',
    thumb: '/images/dubilet-photo-thumb.png',
  }
];

export default speakers;
