import { FC } from 'react';
import {
  ArrowsOut,
  Code,
  Columns,
  DeviceMobile,
  Handshake,
  Laptop,
} from 'phosphor-react';
import { Row, Text } from '../..';

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
            className='text-base tracking-wide uppercase'
            color='blue'
            weight='semibold'
            withMarkdown={true}>
            {'Everything you need'}
          </Text>
          <Text
            className='mt-2'
            color='black'
            type='subheading'
            weight='semibold'
            withMarkdown={true}>
            {`## Development as a Service`}
          </Text>
          <Text color='gray' className='mt-4 text-lg' withMarkdown={true}>
            {`We take extreme ownership in the projects we're involved with - this
            means that when you're working with us you are talking to the
            experts who work for you. We never outsource work.`}
          </Text>
          <Text color='gray' className='mt-4 text-lg' withMarkdown={true}>
            {`We focus on quality over quantity - so we go incredibly deep into
            your project.`}
          </Text>
        </div>
        <div className='mt-12 lg:mt-0 lg:col-span-2'>
          <dl className='space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:grid-rows-3 sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 lg:gap-x-8'>
            <Row
              alignItems='start'
              as='div'
              className='flex'
              direction='row'
              justifyContent='center'>
              <Code
                className='flex-shrink-0 h-6 w-6 text-green-500'
                size={24}
              />
              <div className='ml-3'>
                <Text
                  as='dt'
                  className='text-lg leading-6'
                  color='black'
                  weight='medium'>
                  Ace software development
                </Text>
                <dd className='mt-2 text-base text-gray-500'>
                  You can feel confidence in the digital product we make. We
                  ensure robust and stable software via tesing and up-to-date
                  development practices.
                </dd>
              </div>
            </Row>

            <Row
              alignItems='start'
              as='div'
              className='flex'
              direction='row'
              justifyContent='center'>
              <ArrowsOut
                className='flex-shrink-0 h-6 w-6 text-green-500'
                size={24}
              />
              <div className='ml-3'>
                <dt className='text-lg leading-6 font-medium text-gray-900'>
                  Mobility
                </dt>
                <dd className='mt-2 text-base text-gray-500'>
                  Experts will be at hand at all phases during your project we
                  can slot our experts into your team where you need them the
                  most.
                </dd>
              </div>
            </Row>

            <Row
              alignItems='start'
              as='div'
              className='flex'
              direction='row'
              justifyContent='center'>
              <Columns
                className='flex-shrink-0 h-6 w-6 text-green-500'
                size={24}
              />
              <div className='ml-3'>
                <dt className='text-lg leading-6 font-medium text-gray-900'>
                  Agile development
                </dt>
                <dd className='mt-2 text-base text-gray-500'>
                  We work effectively by using 'sprints' to keep us accountable,
                  transparent and organised.
                </dd>
              </div>
            </Row>

            <Row
              alignItems='start'
              as='div'
              className='flex'
              direction='row'
              justifyContent='center'>
              <Handshake
                className='flex-shrink-0 h-6 w-6 text-green-500'
                size={24}
              />
              <div className='ml-3'>
                <dt className='text-lg leading-6 font-medium text-gray-900'>
                  Collaboration
                </dt>
                <dd className='mt-2 text-base text-gray-500'>
                  We use tools to communicate within our team and with you.
                  Transparency is important to us so we will include your team
                  in our workflow - we don't build your product in a black box
                  but out in the open.
                </dd>
              </div>
            </Row>

            <Row
              alignItems='start'
              as='div'
              className='flex'
              direction='row'
              justifyContent='center'>
              <Laptop
                className='flex-shrink-0 h-6 w-6 text-green-500'
                size={24}
              />
              <div className='ml-3'>
                <dt className='text-lg leading-6 font-medium text-gray-900'>
                  Deep knowledge
                </dt>
                <dd className='mt-2 text-base text-gray-500'>
                  We understand both the technical details and business
                  motivators that have an impact across all teams in your
                  organization.
                </dd>
              </div>
            </Row>

            <Row
              alignItems='start'
              as='div'
              className='flex'
              direction='row'
              justifyContent='center'>
              <DeviceMobile
                className='flex-shrink-0 h-6 w-6 text-green-500'
                size={24}
              />
              <div className='ml-3'>
                <dt className='text-lg leading-6 font-medium text-gray-900'>
                  Web & Mobile development
                </dt>
                <dd className='mt-2 text-base text-gray-500'>
                  We develop what you need, whether that be bespoke web apps,
                  server-side rendered websites or mobile apps.
                </dd>
              </div>
            </Row>
          </dl>
        </div>
      </div>
    </Row>
  );
};

export default Features;
