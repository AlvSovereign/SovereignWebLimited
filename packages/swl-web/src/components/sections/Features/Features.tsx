import { FC } from 'react';
import Row from '../../ui/Row/Row';
import Text from '../../ui/Text/Text';

interface FeaturesProps {}

const Features: FC<FeaturesProps> = ({}) => {
  return (
    <Row
      as='section'
      direction='col'
      className='bg-white'
      justifyContent='center'
      withContainer={true}>
      <div className='py-16 lg:py-24 lg:grid lg:grid-cols-3 lg:gap-x-8'>
        <div>
          <Text
            as='h2'
            className='text-base tracking-wide uppercase'
            color='blue'
            weight='semibold'>
            Everything you need
          </Text>
          <Text
            as='h2'
            className='mt-2'
            color='black'
            type='subheading'
            weight='semibold'>
            Development as a Service
          </Text>
          {/* <p className='mt-2 text-3xl font-extrabold text-gray-900'>
            Development as a Service
          </p> */}
          <p className='mt-4 text-lg text-gray-500'>
            We can help with your needs by providing you with:
          </p>
        </div>
        <div className='mt-12 lg:mt-0 lg:col-span-2'>
          <dl className='space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:grid-rows-4 sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 lg:gap-x-8'>
            <div className='flex'>
              <svg
                className='flex-shrink-0 h-6 w-6 text-green-500'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M5 13l4 4L19 7'
                />
              </svg>
              <div className='ml-3'>
                <dt className='text-lg leading-6 font-medium text-gray-900'>
                  Invite team members
                </dt>
                <dd className='mt-2 text-base text-gray-500'>
                  You can manage phone, email and chat conversations all from a
                  single mailbox.
                </dd>
              </div>
            </div>

            <div className='flex'>
              <svg
                className='flex-shrink-0 h-6 w-6 text-green-500'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M5 13l4 4L19 7'
                />
              </svg>
              <div className='ml-3'>
                <dt className='text-lg leading-6 font-medium text-gray-900'>
                  List view
                </dt>
                <dd className='mt-2 text-base text-gray-500'>
                  You can manage phone, email and chat conversations all from a
                  single mailbox.
                </dd>
              </div>
            </div>

            <div className='flex'>
              <svg
                className='flex-shrink-0 h-6 w-6 text-green-500'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M5 13l4 4L19 7'
                />
              </svg>
              <div className='ml-3'>
                <dt className='text-lg leading-6 font-medium text-gray-900'>
                  Keyboard shortcuts
                </dt>
                <dd className='mt-2 text-base text-gray-500'>
                  You can manage phone, email and chat conversations all from a
                  single mailbox.
                </dd>
              </div>
            </div>

            <div className='flex'>
              <svg
                className='flex-shrink-0 h-6 w-6 text-green-500'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M5 13l4 4L19 7'
                />
              </svg>
              <div className='ml-3'>
                <dt className='text-lg leading-6 font-medium text-gray-900'>
                  Calendars
                </dt>
                <dd className='mt-2 text-base text-gray-500'>
                  You can manage phone, email and chat conversations all from a
                  single mailbox.
                </dd>
              </div>
            </div>

            <div className='flex'>
              <svg
                className='flex-shrink-0 h-6 w-6 text-green-500'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M5 13l4 4L19 7'
                />
              </svg>
              <div className='ml-3'>
                <dt className='text-lg leading-6 font-medium text-gray-900'>
                  Notifications
                </dt>
                <dd className='mt-2 text-base text-gray-500'>
                  Find what you need with advanced filters, bulk actions, and
                  quick views.
                </dd>
              </div>
            </div>

            <div className='flex'>
              <svg
                className='flex-shrink-0 h-6 w-6 text-green-500'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M5 13l4 4L19 7'
                />
              </svg>
              <div className='ml-3'>
                <dt className='text-lg leading-6 font-medium text-gray-900'>
                  Boards
                </dt>
                <dd className='mt-2 text-base text-gray-500'>
                  Find what you need with advanced filters, bulk actions, and
                  quick views.
                </dd>
              </div>
            </div>

            <div className='flex'>
              <svg
                className='flex-shrink-0 h-6 w-6 text-green-500'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M5 13l4 4L19 7'
                />
              </svg>
              <div className='ml-3'>
                <dt className='text-lg leading-6 font-medium text-gray-900'>
                  Reporting
                </dt>
                <dd className='mt-2 text-base text-gray-500'>
                  Find what you need with advanced filters, bulk actions, and
                  quick views.
                </dd>
              </div>
            </div>

            <div className='flex'>
              <svg
                className='flex-shrink-0 h-6 w-6 text-green-500'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M5 13l4 4L19 7'
                />
              </svg>
              <div className='ml-3'>
                <dt className='text-lg leading-6 font-medium text-gray-900'>
                  Mobile app
                </dt>
                <dd className='mt-2 text-base text-gray-500'>
                  Find what you need with advanced filters, bulk actions, and
                  quick views.
                </dd>
              </div>
            </div>
          </dl>
        </div>
      </div>
    </Row>
  );
};

export default Features;
