import { FC } from 'react';
import { Button, Row, Text } from '../..';

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  return (
    <Row
      alignItems='center'
      as='section'
      className='bg-gray-900'
      direction='col'
      justifyContent='center'
      withContainer={true}>
      <Row
        as='div'
        className='py-12 md:py-32 w-full'
        direction='col'
        justifyContent='center'>
        <Text
          align='center'
          as='h1'
          className='text-gray-50 block'
          type='hero'
          weight='semibold'>
          {'We help you realise your'}
        </Text>
        <Text
          align='center'
          as='h1'
          className='block text-yellow-400 mb-4 md:mb-8'
          type='hero'
          weight='semibold'>
          {'digital experiences'}
        </Text>
        <Text
          align='center'
          className='text-gray-50 mb-8 md:mb-12'
          as='h2'
          type='subheading'
          weight='light'>
          {'Leverage our skills and expertise for your next project.'}
        </Text>
        <Button
          className='self-center'
          onClick={() => {}}
          size='xl'
          type='button'>
          CONTACT US
        </Button>
      </Row>
    </Row>
  );
};

export default Hero;
