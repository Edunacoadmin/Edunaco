
// export async function generateMetadata({ params, searchParams }) {
//   return { title: 'Školy' }
// }

import { Breadcrumb } from '@/components/breadcrumb/Breadcrumb';
import { Button } from '@/components/form/button/Button';
import { Icon } from '@/components/icon/Icon';

export const metadata = {
  title: 'Školy'
};

export default function Schools() {
  return (
    <main>
      <Breadcrumb></Breadcrumb>

      <section className='mt-2'>
        <div className='pl-[720px] pt-8 pb-23 container'>
          <div>
            <h2 className='font-bold text-lg text-blue'>Vyhledávejte v katalogu</h2>
            <h1 className='font-light text-headline text-yellow'>
              Alternativní školy
            </h1>
            <p className='text-xl mt-4 mb-9'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className='container'>
          <div className='grid grid-cols-3 border border-gray-600 bg-white'>
            <div className='px-14 pt-14 pb-16 border-r border-r-gray-600 flex items-start'>
              <Icon icon='counter' width='58px' height='54px' />
              <div className='ml-9'>
                <h3 className='text-3xl leading-7 text-blue mb-4 font-light'>
                  Alternativy běžného vzdělávání
                </h3>
                <p className='text-base text-blue mb-4'>
                  Zjistěte, co vše je možné.
                  Consectetur adipiscing elit. Aenean euismod.
                </p>
                <Button label='Prohlédnout'></Button>
              </div>
            </div>

            <div className='px-14 pt-14 pb-16 border-r border-r-gray-600 flex items-start'>
              <Icon icon='book' width='58px' height='54px' />
              <div className='ml-9'>
                <h3 className='text-3xl leading-7 text-blue mb-4 font-light'>
                  Alternativy běžného vzdělávání
                </h3>
                <p className='text-base text-blue mb-4'>
                  Zjistěte, co vše je možné.
                  Consectetur adipiscing elit. Aenean euismod.
                </p>
                <Button label='Prohlédnout'></Button>
              </div>
            </div>

            <div className='px-14 pt-14 pb-16 border-r border-r-gray-600 flex items-start'>
              <Icon icon='microscope' width='58px' height='54px' />
              <div className='ml-9'>
                <h3 className='text-3xl leading-7 text-blue mb-4 font-light'>
                  Alternativy běžného vzdělávání
                </h3>
                <p className='text-base text-blue mb-4'>
                  Zjistěte, co vše je možné.
                  Consectetur adipiscing elit. Aenean euismod.
                </p>
                <Button label='Prohlédnout'></Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
