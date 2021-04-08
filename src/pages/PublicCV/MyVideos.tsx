export function MyVideos() {
  return (
    <section className='projects' id='projects'>
      <div className='row alignCenter'>
        <h1>My Youtube Videos</h1>
        <div id='cbp-fwslider' className='cbp-fwslider'>
          <ul>
            <li>
              <iframe
                width={400}
                height={225}
                src='https://www.youtube.com/embed/pN6jk0uUrD8'
                frameBorder={0}
                allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              />
              <h2 className='name'>Namaste JavaScript Web Series</h2>
              <p className='desc'>In depth JavaScript video tutorials!</p>
              <a className='btn project' href='https://youtube.com/akshaymarch7'>
                Watch Video
              </a>
            </li>
            <li>
              <iframe
                width={400}
                height={225}
                src='https://www.youtube.com/embed/ozh5WMot6io'
                frameBorder={0}
                allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              />
              <h2 className='name'>How to become a Web Developer</h2>
              <p className='desc'>Covering my personal tips and tricks!</p>
              <a className='btn project' href='https://youtube.com/akshaymarch7'>
                Watch Video
              </a>
            </li>
            <li>
              <iframe
                width={400}
                height={225}
                src='https://www.youtube.com/embed/ExPusSE0d30'
                frameBorder={0}
                allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              />
              <h2 className='name'>My Journey</h2>
              <p className='desc'>How I fell in love with Javascript and ended up being a Web Developer!</p>
              <a className='btn project' href='https://youtube.com/akshaymarch7'>
                Watch Video
              </a>
            </li>
            <li>
              <br />
              <br />
              <br />
              <br />
              <h2 className='name'>There are many more !</h2>
              <p className='desc'>Check out all the videos on my Youtube Channel</p>
              <a className='btn project' href='https://youtube.com/akshaymarch7' target='_blank'>
                Visit now
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
