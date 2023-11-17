import { FaStar } from 'react-icons/fa';

const Hero = () => {
  return (
    <section>
      <div className='relative section-center hero-align'>
        <h3 className='text-gray-500 font-normal'>Revolutionize your</h3>

        <div className='center-content max-w-3xl'>
          <h2 className='font-main-header'>
            Create Projects with the utlimate AI-Powered Pattern
          </h2>

          <div className='inline-block-items'>
            <p className='para-last-line'>
              The Next generation <span className='text-black'>Production</span>{' '}
              for Designers
            </p>

            <button className='btn btn-dark uppercase'>start generating</button>
          </div>
        </div>
        <FaStar className='star' />

        <div className='star-moon'>
          <div className='circle'></div>
        </div>
      </div>

      {/* cards */}
      <div className='cards-container'>
        <div className='img-container'>
          <img
            src='https://images.unsplash.com/photo-1699903577109-b9072c4b87b4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='man with googles'
          />
        </div>
        <div className='img-container'>
          <img
            src='https://images.unsplash.com/photo-1682686581797-21ec383ead02?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='girl running'
          />
        </div>
        <div className='img-container'>
          <img
            src='https://images.unsplash.com/photo-1698339513848-4015f4c46b6c?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='man'
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
