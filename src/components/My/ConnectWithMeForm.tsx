export default function ConnectWithMeForm() {
  return (
    <section className='coffeewithme' id='coffeewithme'>
      <div className='row alignCenter'>
        <h1>Coffee with me.</h1>
        <p>I am always excited to work on some awesome projects, message me and let's discuss over coffee.</p>
        <form id='theForm' className='simform' autoComplete='off'>
          <div className='simform-inner'>
            <ol className='questions'>
              <li>
                <span>
                  <label htmlFor='q1'>Write a message for me below</label>
                </span>
                <input id='q1' name='q1' type='text' />
              </li>
              <li>
                <span>
                  <label htmlFor='q2'>Your name</label>
                </span>
                <input id='q2' name='q2' type='text' />
              </li>
              <li>
                <span>
                  <label htmlFor='q3'>Your email or phone number</label>
                </span>
                <input id='q3' name='q3' type='text' />
              </li>
            </ol>
            {/* /questions */}
            <button className='submit' type='submit'>
              Send answers
            </button>
            <div className='controls'>
              <button className='next'>
                <i className='fa fa-arrow-right' />
              </button>
              <div className='progress'></div>
              <span className='number'>
                <span className='number-current' />
                <span className='number-total' />
              </span>
              <span className='error-message' />
            </div>
            {/* / controls */}
          </div>
          {/* /simform-inner */}
          <span className='final-message' />
        </form>
        {/* /simform */}
      </div>
    </section>
  );
}
