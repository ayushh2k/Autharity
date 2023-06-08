import { Link } from 'react-router-dom';

import avatarAnisha from '../assets/images/avatar-anisha.png';
import avatarAli from '../assets/images/avatar-ali.png';
import avatarRichard from '../assets/images/avatar-richard.png';

const Testimonial = () => {
  return (
    <section id='testimonials'>
      {/* Container to heading and testm blocks */}
      <div className='max-w-6xl px-5 mx-auto mt-32 text-center'>
        {/* Heading */}
        <h2 className='text-4xl font-bold text-center'>
          What's Different About AuthARity?
        </h2>
        {/* Testimonials Container */}
        <div className='flex flex-col mt-24 md:flex-row md:space-x-6'>
          {/* Testimonial 1 */}
          <div className='flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3'>
            <img src={avatarAnisha} className='w-16 -mt-14' alt='' />
            <h5 className='text-lg font-bold'>Anisha Li</h5>
            <p className='text-sm text-darkGrayishBlue'>
              “We revolutionize user authentication by combining ML, AR, and personalized user signatures. Instead of relying on passwords or biometrics, we analyze how you interact with authentication tokens. We consider factors like AR recognition, keyboard speed, and other unique characteristics to create your individual user signature"

            </p>
          </div>

          {/* Testimonial 2 */}
          <div className='hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3'>
            <img src={avatarAli} className='w-16 -mt-14' alt='' />
            <h5 className='text-lg font-bold'>Ali Bravo</h5>
            <p className='text-sm text-darkGrayishBlue'>
            "What sets AuthARity apart is our comprehensive approach to authentication. We go beyond just one-factor authentication by considering multiple factors that are specific to you. From tracking IP location to analyzing mouse movement and typing patterns, our innovative solution creates a holistic user signature. This multi-dimensional approach adds an unparalleled layer of security, making it extremely difficult for unauthorized individuals to replicate or bypass your authentication."
            </p>
          </div>

          {/* Testimonial 3 */}
          <div className='hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3'>
            <img src={avatarRichard} className='w-16 -mt-14' alt='' />
            <h5 className='text-lg font-bold'>Raju Ramesh</h5>
            <p className='text-sm text-darkGrayishBlue'>
              “Our ultimate goal is to provide you with the most secure authentication experience possible. With AuthARity, you can have peace of mind knowing that your identity is protected by a highly advanced and personalized authentication method. We understand the importance of convenience as well, which is why our seamless integration of ML, AR, and user-specific signatures ensures a user-friendly experience without compromising on security. Trust AuthARity to keep your digital world secure like never before"
            </p>
          </div>
        </div>
        {/* Button */}
        <div className='my-16'>
          <Link
            to='#'
            className='p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight'
          >
            Create Signature
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
