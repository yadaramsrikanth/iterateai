import './index.css'
import Header from '../Header'

const Home = () => {
  return (
    <div className='home-container'>
      <Header />
      <div className='home-content-container'>
        <div className='first-section-container'>
          <p className='rank-para'>WORLD’S LARGEST APP FOR HINDU DEVOTEES</p>
          <h1 className='rank-heading'>
            Pray daily with <span>Sri Mandir</span>.<br /> One App for all your
            <br />
            devotional needs.
          </h1>
          <div className='app-stores-buttons-container'>
            <button type='button' className='play-store-button'>
              <img
                src='https://cdn.freebiesupply.com/logos/large/2x/google-play-badge-logo-png-transparent.png'
                className='play-store-image'
                alt='play-store'
              />
            </button>
            <button type='button' className='play-store-button'>
              <img
                src='https://1000logos.net/wp-content/uploads/2020/08/apple-app-store-logo-500x173.jpg'
                alt='app-store'
                className='play-store-image'
              />
            </button>
          </div>
        </div>
        <div className='second-section-container'>
          <img
            src='https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_hero_artwork_en.ecfc0911.webp&w=1920&q=75'
            alt='ram-mandir-photo'
            className='ram-mandir-image'
          />
        </div>
      </div>
    </div>
  )
}

export default Home
