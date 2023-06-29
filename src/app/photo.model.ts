// {
//  "albumId": 1,
//  "id": 1,
//  "title": "accusamus beatae ad facilis cum similique qui sunt",
//  "url": "https://via.placeholder.com/600/92c952",
//  "thumbnailUrl": "https://via.placeholder.com/150/92c952"
// }

export interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

/*
{
  "id":"0",
  "author":"Alejandro Escamilla",
  "width":5000,
  "height":3333,
  "url":"https://unsplash.com/photos/yC-Yzbqy7PY","download_url":"https://picsum.photos/id/0/5000/3333"
}
*/
export interface PicsumPhoto {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}
