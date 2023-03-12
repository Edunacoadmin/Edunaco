import { Breadcrumb } from '@/components/breadcrumb/Breadcrumb'
import { Icon } from '@/components/icon/Icon'
import { Tile } from '@/components/tile/Tile'


export default function Blog() {
  return (
    <main>
      <Breadcrumb></Breadcrumb>

      <section className='mt-10 mb-14'>
        <div className='container text-center'>
          <h1 className='font-light text-headline text-yellow text-left inline-block leading-10'>
            <span className='font-bold text-lg text-blue text-left'>Edunaco</span>

            <br />
            Blog
          </h1>

          <div className='flex justify-center gap-4 mt-9'>
            <span className='border border-blue cursor-pointer px-4 pt-1.5 pb-2.5 text-blue text-xl left-5 bg-blue text-white '>
              Vše
            </span>
            <span className='border border-blue cursor-pointer px-4 pt-1.5 pb-2.5 text-blue text-xl left-5 hover:bg-blue hover:text-white '>
              Unschooling
            </span>
            <span className='border border-blue cursor-pointer px-4 pt-1.5 pb-2.5 text-blue text-xl left-5 hover:bg-blue hover:text-white '>
              Domácí vzdělávání
            </span>
            <span className='border border-blue cursor-pointer px-4 pt-1.5 pb-2.5 text-blue text-xl left-5 hover:bg-blue hover:text-white '>
              Svou cestou
            </span>
            <span className='border border-blue cursor-pointer px-4 pt-1.5 pb-2.5 text-blue text-xl left-5 hover:bg-blue hover:text-white '>
              Respektující výchova
            </span>
            <span className='border border-blue cursor-pointer px-4 pt-1.5 pb-2.5 text-blue text-xl left-5 hover:bg-blue hover:text-white '>
              Legislativa
            </span>
            <span className='border border-blue cursor-pointer px-4 pt-1.5 pb-2.5 text-blue text-xl left-5 hover:bg-blue hover:text-white '>
              Worldschooling
            </span>

          </div>
        </div>
      </section>


      <section className='bg-gray-100 pt-16 pb-14'>
        <div className='pt-8 pb-23 container flex'>
          <div className='w-710 border border-gray-700 p-4 mr-26 flex-shrink-0'>
            <div className='relative'>
              <div className='absolute inset-0 bg-blue bg-opacity-80 pl-9 pr-36 py-14 text-white flex flex-col justify-end'>
                <h1 className='text-overImage mb-1'>
                  Základní a střední
                  škola waldorfská
                </h1>
                <p className='text-blue-100 mb-4'>
                  12.1. 2022 &nbsp;|&nbsp; Metodika
                </p>
                <p className='text-xl mb-4 text-white'>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.
                </p>
                <div className='flex items-center'>
                  <Icon icon='eye' height='20' width='33'></Icon>
                  <div className='ml-2'>35</div>

                  <Icon icon='info' height='20' width='33' className='fill-white'></Icon>
                  <div className='ml-2'>čtení 2 minuty</div>
                </div>
              </div>
              <img src='https://picsum.photos/678/604?v=3' width={'678'} height={'604'} className=''></img>
            </div>
          </div>
          <div className='pr-26'>
            <div className='flex items-center mb-14'>
              <Icon icon='eye' height='80' width='124'></Icon>
              <h3 className='text-lg leading-6 font-bold text-left inline-block ml-9'>
                Aktuálně<br /><span className='text-headlineWithAnnotation font-light'>Nejčtenější</span>
              </h3>
            </div>


            <div>
              <div className='flex pb-4 pr-4 border-b border-b-gray-800'>
                <img src='https://picsum.photos/132/87?v=3' width={'132'} height={'87'}></img>
                <p className='ml-6 text-xl'>
                  Titulek novinky lorem ipsum dolor sit amet
                  novinky lorem ipsum dolor sit amet
                </p>
              </div>
              <div className='flex py-4 pr-4 border-b border-b-gray-800'>
                <img src='https://picsum.photos/132/87?v=3' width={'132'} height={'87'}></img>
                <p className='ml-6 text-xl'>
                  Titulek novinky lorem ipsum dolor sit amet
                  novinky lorem ipsum dolor sit amet
                </p>
              </div>
              <div className='flex py-4 pr-4'>
                <img src='https://picsum.photos/132/87?v=3' width={'132'} height={'87'}></img>
                <p className='ml-6 text-xl'>
                  Titulek novinky lorem ipsum dolor sit amet
                  novinky lorem ipsum dolor sit amet
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>



      <section>
        <div className='container'>

          <div className='border border-gray-600 mt-4.5 grid grid-cols-3'>
            <Tile href={`/blog`} />
            <Tile href={`/blog`} />
            <Tile href={`/blog`} />
          </div>
          <div className='border border-gray-600 grid grid-cols-3'>
            <Tile href={`/blog`} />
            <Tile href={`/blog`} />
            <Tile href={`/blog`} />
          </div>
        </div>
      </section>
    </main>
  )
}
