export default function MyFooter() {
  return (
    <section className='sayhello' id='hello'>
      <div className='row'>
        <div className='large-4 columns pad10'>
          <p>
            <b>
              No <i className='fa fa-copyright' /> copyright issues.
            </b>
            <br />
            Feel free to copy.If you need any help, ping me !
          </p>
        </div>
        <div className='large-4 columns'>
          <p className='footTitle alignCenter'>Akshay Saini</p>
          <p className='madewithlove'>
            Made with <i className='fa fa-heart' /> in India
          </p>
        </div>
        <div className='large-4 columns alignCenter pad10'>
          <p className='alignCenter'>You can find me everywhere</p>
          <ul className='tools'>
            <li>
              <a href='https://youtube.com/akshaymarch7' target='_blank'>
                <i className='fa fa-youtube-play' />
              </a>
            </li>
            <li>
              <a href='https://www.facebook.com/akshaysaini.in' target='_blank'>
                <i className='fa fa-facebook-official' />
              </a>
            </li>
            <li>
              <a href='https://in.linkedin.com/in/akshaymarch7' target='_blank'>
                <i className='fa fa-linkedin-square' />
              </a>
            </li>
            <li>
              <a href='mailto:akshaysaini.in@gmail.com' target='_blank'>
                <i className='fa fa-envelope-o' />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <img className='footer-image' src='img/foot.jpg' />
    </section>
  );
}
