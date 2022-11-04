
import React, { useState, useEffect } from 'react'
import './App.css';
const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://www.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=f9736f4d370f9c7115a952951b506569&gallery_id=66911286-72157647277042064&format=json&nojsoncallback=1').then((res) =>
      res.json()
    )
      .then((res) => {
        setData(res.photos.photo)
        console.log(res.photos.photo);
      })
  }, [])

  return (
    <center>
      <div className='container'>
        <div className='row'>
          {
            data.map((item) => (
              <div className='container col-sm-6 col-m-6 col-l-12' >
                <img src={`https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`} className='size' />
                <h3 className='color heading'>
                  {item.title}
                </h3>
              </div>
            ))
          }
        </div>
      </div>
    </center>
  )
}
export default App






































































































