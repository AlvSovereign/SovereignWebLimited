import Link from 'next/link';
import { FC } from 'react';
import { Row, Swl } from '..';
import Text from '../ui/Text/Text';

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <Row
      as='header'
      direction='row'
      className='bg-gray-900 h-20'
      containerClassName='flex flex-row items-center '
      justifyContent='center'
      withContainer={true}>
      <Link href='/'>
        <a className='h-8'>
          <Swl className='h-full' fill='#fff' />
        </a>
      </Link>
      {/* <div className='flex-1 flex-row items-end justify-end hidden md:flex'>
        <Link href='#our-work'>
          <Text
            className='text-white pr-8'
            as='span'
            type='nav'
            weight='semibold'>
            Our Work
          </Text>
        </Link>
        <Link href='#contact'>
          <Text className='text-white' as='span' type='nav' weight='semibold'>
            Contact
          </Text>
        </Link>
      </div> */}
    </Row>
  );
};

export default Header;
