import { Breadcrumb } from '@/components/breadcrumb/Breadcrumb'
import { Icon } from '@/components/icon/Icon'

export async function generateMetadata({ params, searchParams }) {
  return { title: '...' }
}

export default function Schools() {
  return (
    <main>
      <Breadcrumb></Breadcrumb>

      <section className='mt-16'>
        <div className='pt-8 pb-23 container flex'>
          <div className='w-710 border border-gray-700 p-4 mr-26 flex-shrink-0'>
            <img src='https://picsum.photos/678/453?v=3' width={'678'} height={'453'} className=''></img>
          </div>
          <div className='pr-34'>
            <h1 className='font-light text-headlineHp text-yellow mb-4'>
              Základní a střední
              škola waldorfská
            </h1>
            <p className='text-xl mb-4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
            </p>
            <div className='flex items-center text-blue-100 fill-blue-100'>
              <Icon icon='dialog' height='32' width='32' className='fill-blue-100'></Icon>
              <div className='ml-2 mr-8 text-2xl'>35</div>

              <Icon icon='eye' height='32' width='52'></Icon>
              <div className='ml-2 text-2xl'>35</div>

            </div>
          </div>
        </div>
      </section>

      {/* 46 */}
      <section className='mt-11'>
        <div className='container'>

          <div className='bg-gray-100 flex items-center px-10 pt-4.5 pb-3.5'>
            <Icon icon='info' width='29' height='29'></Icon>
            <h4 className='text-2xl leading-tight flex-shrink-0 ml-4'>Aktuální informace</h4>
            <p className='text-base leading-tight ml-10'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Proin gravida dolor sit amet lacus Více informací

            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
