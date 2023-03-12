import Link from 'next/link';
import { Icon } from '../icon/Icon';

type TileProps = {
  href: string;
  showComments?: boolean
  showReadTime?: boolean
  showVisits?: boolean
}

export const Tile = ({
  href,
  showComments = false,
  showReadTime = false,
  showVisits = true,
}: TileProps) => {
  return (
    <Link href={href}>
      <div className='p-5 border-r border-r-gray-600'>
        <img src='https://picsum.photos/439/287?v=2' height={'287px'} className='w-full'></img>
        <div className='p-7'>
          <h4 className='text-xl mb-1'>

          </h4>
          <p className='text-blue-100 mb-4'>
            12.1. 2022 &nbsp;|&nbsp; Metodika
          </p>
          <p className='leading-snug mb-11'>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.
          </p>
          <div className='flex items-center'>
            {
              showComments && <>
                <Icon icon='dialog' height='20' width='20'></Icon>
                <div className='ml-2 mr-8'>35</div>
              </>
            }
            {
              showVisits && <>
                <Icon icon='eye' height='20' width='33'></Icon>
                <div className='ml-2'>35</div>
              </>
            }
            {
              showReadTime && (<>
                <Icon icon='info' height='20' width='33'></Icon>
                <div className='ml-2'>čtení 2 minuty</div>
              </>)
            }
          </div>
        </div>
      </div>
    </Link>
  );
};
