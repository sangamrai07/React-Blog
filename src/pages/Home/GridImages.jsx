import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import bg1 from '../../images/gridImg1.png'
import bg2 from '../../images/gridImg2.png'
import bg3 from '../../images/gridImg3.png'
import bg4 from '../../images/gridImg4.png'
import bg5 from '../../images/gridImg5.png'
import bg6 from '../../images/gridImg6.png'
import bg7 from '../../images/gridImg7.png'
import bg8 from '../../images/gridImg8.png'
import bg9 from '../../images/gridImg9.png'

 function GridImages() {
  return (
      <ImageList sx={{ width: 1155, height: 450, margin: '0px 150px' }} variant="woven" cols={3} gap={8}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=161&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}


export default GridImages

const itemData = [
  {
    img: bg1,
    title: 'blogger',
  },
  {
    img: bg5,
    title: 'blogger',
  },
  {
    img: bg3,
    title: 'blogger',
  },
  {
    img: bg4,
    title: 'blogger',
  },
  {
    img: bg2,
    title: 'blogger',
  },
  {
    img: bg6,
    title: 'blogger',
  },
  {
    img: bg7,
    title: 'blogger',
  },
  {
    img: bg8,
    title: 'blogger',
  },
  {
    img: bg9,
    title: 'blogger',
  }
];

