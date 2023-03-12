import { Breadcrumb } from '@/components/breadcrumb/Breadcrumb'
import { Button } from '@/components/form/button/Button'
import { Icon } from '@/components/icon/Icon'
import { Tile } from '@/components/tile/Tile'

export async function generateMetadata({ params, searchParams }) {
  return { title: '...' }
}

export default function Blog() {
  return (
    <main>
      <Breadcrumb></Breadcrumb>

      <section className='mt-16'>
        <div className='pt-8 container flex'>
          <div className='w-710 border border-gray-700 p-4 mr-26 flex-shrink-0'>
            <img src='https://picsum.photos/678/453?v=3' width={'678'} height={'453'} className=''></img>
          </div>
          <div className='pr-34'>
            <h1 className='font-light text-headlineHp text-yellow mb-4'>
              Základní a střední
              škola waldorfská
            </h1>
            <p className='text-blue-100 mb-4'>
              12.1. 2022 &nbsp;|&nbsp; Metodika
            </p>
            <p className='text-xl mb-4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
            </p>
            <div className='flex items-center'>
              <Icon icon='eye' height='20' width='33'></Icon>
              <div className='ml-2'>35</div>

              <Icon icon='info' height='20' width='33'></Icon>
              <div className='ml-2'>čtení 2 minuty</div>
            </div>
          </div>
        </div>
      </section>

      <section className='mt-20'>


        <div className='w-[947px] mx-auto'>
          <p className='text-xl'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.
          </p>

          <h2 className='text-headlineWithAnnotation mt-18 mb-4'>Obrázky z akce H2</h2>

          <p className='text-xl'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.
          </p>

          <div className='cursor-pointer relative'>
            <div className='absolute inset-0 flex justify-center items-center'>
              <div className='w-24 h-24 rounded-full bg-blue flex justify-center items-center'>
                <Icon icon='play' width='30' height='34' className='translate-x-1'></Icon>
              </div>
            </div>
            <img src='https://picsum.photos/952/530?v=3' width={'952'} height={'530'} className='w-full mt-8 mb-10'></img>
          </div>

          <p className='text-xl'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.
          </p>

          <h3 className='text-h3 mt-12 mb-2'>Nadpis H3</h3>

          <p className='text-xl'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.
          </p>
          <ul className='my-4 text-xl'>
            <li className='before:content-[">"] before:text-blue-100 before:text-xl before:mr-4.5'>orem ipsum dolor sit amet, consectetur adipiscing elit </li>
            <li className='before:content-[">"] before:text-blue-100 before:text-xl before:mr-4.5'>enean euismod bibendum laoreet </li>
            <li className='before:content-[">"] before:text-blue-100 before:text-xl before:mr-4.5'>roin gravida dolor sit amet lacus accumsan et viverra  </li>
            <li className='before:content-[">"] before:text-blue-100 before:text-xl before:mr-4.5'>roin sodales pulvinar sic tempor </li>
            <li className='before:content-[">"] before:text-blue-100 before:text-xl before:mr-4.5'>ociis natoque penatibus et magnis dis </li>
          </ul>

          <h4 className='text-h4 mt-7 mb-1.5'>Nadpis H4</h4>
          <p className='text-xl'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.
          </p>
          <h5 className='text-xl mt-7 mb-2'>Nadpis H5</h5>
          <p className='text-xl'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.
          </p>


          <div>
            <img src='https://picsum.photos/952/530?v=3' width={'952'} height={'530'} className='w-full mt-4 mb-10'></img>

            <div className='flex gap-4'>
              <img src='https://picsum.photos/226/125?v=3' width={'226'} height={'125'} className=''></img>
              <img src='https://picsum.photos/226/125?v=3' width={'226'} height={'125'} className=''></img>
              <img src='https://picsum.photos/226/125?v=3' width={'226'} height={'125'} className=''></img>

            </div>
          </div>


          <section className='mt-20'>
            <div className='flex items-center mb-6'>
              <h3 className='text-lg leading-6 font-bold text-left inline-block'>
                Dokumenty<br /><span className='text-headlineWithAnnotation font-light'>Ke stažení</span>
              </h3>
            </div>

            <div className='border-t border-t-gray-200'>
              <div className='px-2 pt-4 pb-3 flex items-center border-b border-b-gray-200'>
                <Icon icon='document_active' width='30' height='30'></Icon>
                <span className='text-xl ml-7'>Dokument ke stažení</span>
                <span className='text-base ml-3.5'>PDF - 14kB</span>
              </div>
              <div className='px-2 pt-4 pb-3 flex items-center border-b border-b-gray-200'>
                <Icon icon='document_active' width='30' height='30'></Icon>
                <span className='text-xl ml-7'>Dokument ke stažení</span>
                <span className='text-base ml-3.5'>PDF - 14kB</span>
              </div>
              <div className='px-2 pt-4 pb-3 flex items-center border-b border-b-gray-200'>
                <Icon icon='document_active' width='30' height='30'></Icon>
                <span className='text-xl ml-7'>Dokument ke stažení</span>
                <span className='text-base ml-3.5'>PDF - 14kB</span>
              </div>
              <div className='px-2 pt-4 pb-3 flex items-center border-b border-b-gray-200'>
                <Icon icon='document_active' width='30' height='30'></Icon>
                <span className='text-xl ml-7'>Dokument ke stažení</span>
                <span className='text-base ml-3.5'>PDF - 14kB</span>
              </div>
            </div>
          </section>

          <section className='mt-20'>
            <div className='border-t border-t-gray-200 border-b border-b-gray-200 py-6 px-7 flex items-center'>
              <Icon icon='share' width='98px' height='102px'></Icon>
              <div className='flex items-center ml-10'>
                <h3 className='text-lg leading-6 font-bold text-left inline-block text-yellow'>
                  Líbí se vám článek?<br /><span className='text-headlineWithAnnotation font-light text-blue'>Sdílejte!</span>
                </h3>
              </div>
              <div className='flex items-center ml-24 gap-9'>
                <Icon icon='fb' width='36' height='36'></Icon>
                <Icon icon='instagram' width='36' height='36'></Icon>
                <Icon icon='tw' width='36' height='36'></Icon>
                <Icon icon='in' width='36' height='36'></Icon>

              </div>
              <Button label='Přeposlat odkaz' classname='ml-9' />

            </div>
          </section>

          <section className='mt-20'>
            <div className='flex items-center'>
              <div className='w-[130px] h-[130px] rounded-full border border-blue-100 flex justify-center items-center flex-grow-0 flex-shrink-0'>
                <img src='https://picsum.photos/120/120?v=3' width={'120'} height={'120'} className='rounded-full'></img>
              </div>
              <div className='ml-10 max-w-[510px]'>
                <div className='text-lg leading-6 font-bold'>Autor</div>
                <div className='text-h4 font-light mb-2'>Jana Astra</div>
                <p className='text-base leading-snug'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales. Všechny články autorky</p>
              </div>
            </div>
          </section>

          <section className='mt-20'>
            <div className='flex items-center mb-4'>
              <h3 className='text-lg leading-6 font-bold text-left inline-block'>
                Podobné články<br /><span className='text-headlineWithAnnotation font-light'>Pokračujte ve čtení</span>
              </h3>
            </div>

            <div className='border border-gray-600 mt-4.5 grid grid-cols-2'>
              <Tile href={`/blog`} />
              <Tile href={`/blog`} />
            </div>
          </section>

        </div>



      </section>
    </main>
  )
}
