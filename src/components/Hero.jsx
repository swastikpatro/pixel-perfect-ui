import { FaStar } from 'react-icons/fa';
import { FiArrowDownRight, FiChevronsDown } from 'react-icons/fi';

const AVATARS_LIST = [
  {
    id: 1,
    imageUrl:
      'https://res.cloudinary.com/dtbd1y4en/image/upload/v1690706751/Gutargu-social/ce0hmyg4spgkrbpsnxqz.jpg',
    alt: 'swastik',
  },
  {
    id: 2,
    imageUrl:
      'https://res.cloudinary.com/dtbd1y4en/image/upload/v1688977281/untitled-5_2_0-sixteen_nine_oxh0ob.jpg',
    alt: 'random1',
  },
  {
    id: 3,
    imageUrl:
      'https://res.cloudinary.com/dtbd1y4en/image/upload/v1688976587/lSvWN_q-_400x400_i0hvck.jpg',
    alt: 'random2',
  },
];

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

        <div className='moon-container'>
          <div className='circle'></div>
        </div>
      </div>

      {/* cards */}
      <div className='cards-container'>
        <article className='card'>
          <div className='card-content flex-start'>
            <div className='count'>01</div>

            <div className='flex flex-col gap-3'>
              <div className='avatar-container'>
                {AVATARS_LIST.map(({ id, imageUrl, alt }, index) => (
                  <div
                    key={id}
                    className={index === 0 ? 'avatar' : 'avatar shift-left'}
                  >
                    <img src={imageUrl} alt={alt} />
                  </div>
                ))}
              </div>

              <p className='card-1-text'>Learn from best mentors</p>

              <button className='btn gap-2 flex-center text-white border-white'>
                <span>Start Learning</span>
                <FiArrowDownRight className='arrow-down-right' />
              </button>
            </div>
          </div>

          <img
            src='https://images.unsplash.com/photo-1699903577109-b9072c4b87b4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='man with googles'
          />
        </article>
        <article className='card'>
          <div className='card-content'>
            <div className='count'>02</div>

            <ul className='card-2-links-container'>
              {[
                { id: 1, text: 'Free Edit' },
                { id: 2, text: 'Interactive' },
                { id: 3, text: 'Easy Interface' },
                { id: 4, text: 'Compare to other' },
              ].map(({ id, text }) => (
                <li className='card-2-link text-white' key={id}>
                  <span>{text}</span>
                  <FiArrowDownRight className='arrow-down-right pr-1 font-2rem' />
                </li>
              ))}
            </ul>
          </div>
          <img
            src='https://images.unsplash.com/photo-1699694927230-bea08b4dbd45?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='man taking nature photo'
          />
        </article>
        <article className='card'>
          <div className='card-content pb-0'>
            <div className='count'>03</div>

            <div className='card-3-content'>
              <span className='amount'>+20k</span>

              <p>Glass Pattern generated this week in the first release</p>

              <FiChevronsDown className='text-white font-2-5rem' />
            </div>
          </div>
          <img
            src='https://images.unsplash.com/photo-1698339513848-4015f4c46b6c?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='man'
          />
        </article>
      </div>
    </section>
  );
};

export default Hero;
