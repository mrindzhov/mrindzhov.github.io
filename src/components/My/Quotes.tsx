export default function Quotes() {
  return (
    <section className='quotes' id='quotes'>
      <div className='row alignCenter'>
        <h1>Inspiring Quotes.</h1>
        <p></p>
        <div id='quote-slider' className='cbp-fwslider'>
          <ul>
            <li>
              <img className='quotes_img' src='img/quotes/steve-jobs.jpg' alt='Steve Jobs' />
              <h2 className='quotelines'>
                " Because the people who are crazy enough to think they can
                <br />
                change the world are the ones who do. "
              </h2>
              <p className='desc'>
                by <b>Steve Jobs</b>
              </p>
            </li>
            <li>
              <img className='quotes_img' src='img/quotes/bill-gates.jpg' alt='Bill Gates' />
              <h2 className='quotelines'>
                " Success is a lousy teacher. It seduces smart people into
                <br />
                thinking they can't lose. "
              </h2>
              <p className='desc'>
                by <b>Bill Gates</b>
              </p>
            </li>
            <li>
              <img className='quotes_img' src='img/quotes/linus-torvalds.jpg' alt='Linus Torvalds' />
              <h2 className='quotelines'>
                " See, you not only have to be a good coder to create system
                <br />
                like Linux, you have to be a sneaky bastard too. "
              </h2>
              <p className='desc'>
                by <b>Linus Torvalds</b>
              </p>
            </li>
            <li>
              <img className='quotes_img' src='img/quotes/larry-page.jpg' alt='Larry Page' />
              <h2 className='quotelines'>
                " If you're changing the world, you're working on important things.
                <br />
                You're excited to get up in the morning. "
              </h2>
              <p className='desc'>
                by <b>Larry Page</b>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
