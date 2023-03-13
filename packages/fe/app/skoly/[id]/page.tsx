import { Breadcrumb } from '@/components/breadcrumb/Breadcrumb'
import { Icon } from '@/components/icon/Icon'
import { getGqlData } from '@/src/getGqlData';
import { Query } from '@/src/types.codegen';
// import type { Metadata } from 'next'
import Link from 'next/link';
import { notFound } from 'next/navigation';

const schoolQuery = `
query Item($id: String!) {
  getItem(id: $id) {
    data {
      id
      title
      type
      subType
      fee
      inRegistry
      individualTuition
      combinedStudy
      remoteStudy
      educationStyle
      street
      city
      postCode
      www
      phone
      email
      contact
      location {
        coordinates
      }
    }
  }
}
`

async function getSchool(id) {
  // const res = await fetch(`https://.../api/products/${id}`);
  // return res.json();
  return {}
}

// export async function generateMetadata({ params }): Promise<Metadata> {
//   console.log(params);

//   const product = await getSchool(params);
//   return { title: product.title }
// }

export default async function School({ params }: any) {
  const { getItem }: Query = await getGqlData({ query: schoolQuery, variables: { id: params.id } });
  const school = getItem?.data;
  if (!school) {
    notFound()
  }

  return (
    <main>
      <Breadcrumb></Breadcrumb>

      <section className='mt-16'>
        <div className='pt-8 pb-23 container flex'>
          <div className='w-[710px] border border-gray-700 p-4 mr-26 flex-shrink-0'>
            <img src='https://picsum.photos/678/453?v=3' width={'678'} height={'453'} className=''></img>
          </div>
          <div className='pr-34'>
            <h1 className='font-light text-headlineHp text-yellow mb-4'>
              {school.title}
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
      <section className='mt-12'>
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

      <section className='mt-20'>
        <div className='container'>
          <div className='pb-4 border-b border-gray-900'>
            <ul className='flex justify-center items-center gap-12'>
              <Link href={`/skoly/${params.slug}/#info`} shallow={true}><li>Základní informace</li></Link>
              <Link href={`/skoly/${params.slug}/#a`}><li>Fotogalerie</li></Link>
              <Link href={`/skoly/${params.slug}/#a`}><li>Popis</li></Link>
              <Link href={`/skoly/${params.slug}/#a`}><li>Hodnocení</li></Link>
              <Link href={`/skoly/${params.slug}/#a`}><li>Ke stažení</li></Link>
              <Link href={`/skoly/${params.slug}/#a`}><li>Naši lidé</li></Link>
            </ul>
          </div>
        </div>
      </section>



      <section className='mt-20'>
        <div className='container'>

          <div className='w-[952px] mx-auto'>

            <div className='flex items-center mb-4'>
              <h3 className='text-lg leading-0 font-bold text-left inline-block'>
                Dokumenty<br /><span className='text-headlineWithAnnotation font-light'>Ke stažení</span>
              </h3>
            </div>
            <div className='flex items-center'>
              <Icon icon='star_full' className='h-3 w-3 mr-2.5' />
              <Icon icon='star_full' className='h-3 w-3 mr-2.5' />
              <Icon icon='star_full' className='h-3 w-3 mr-2.5' />
              <Icon icon='star_full' className='h-3 w-3 mr-2.5' />
              <Icon icon='star_empty' className='h-3 w-3 mr-2.5' />
              <span>
                4,4
              </span>
              &nbsp;
              {/* <Link href={`/skoly/csd`}> */}
              <span className='underline'>
                26 Hodnocení
              </span>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </section>


      <section className='mt-23'>

        <div className='w-[952px] mx-auto'>

          <div className='flex items-center mb-6'>
            <h3 className='text-lg leading-0 font-bold text-left inline-block'>
              Jak to na škole vypadá<br /><span className='text-headlineWithAnnotation font-light'>Fotogalerie</span>
            </h3>
          </div>
          <div>
            <img src='https://picsum.photos/952/530?v=3' width={'952'} height={'530'} className='w-full mt-4 mb-10'></img>

            <div className='flex gap-4'>
              <img src='https://picsum.photos/226/125?v=3' width={'226'} height={'125'} className=''></img>
              <img src='https://picsum.photos/226/125?v=3' width={'226'} height={'125'} className=''></img>
              <img src='https://picsum.photos/226/125?v=3' width={'226'} height={'125'} className=''></img>

            </div>
          </div>
        </div>
      </section>


      <section className='mt-23'>

        <div className='w-[952px] mx-auto'>

          <div className='flex items-center mb-6'>
            <h3 className='text-lg leading-0 font-bold text-left inline-block'>
              Podrobný<br /><span className='text-headlineWithAnnotation font-light'>Popis školy</span>
            </h3>
          </div>
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
        </div>
      </section>


      <section className='mt-23'>

        <div className='w-[952px] mx-auto'>

          <div className='flex items-center mb-6'>
            <h3 className='text-lg leading-0 font-bold text-left inline-block'>
              Uživatelské<br /><span className='text-headlineWithAnnotation font-light'>Hodnocení školy</span>
            </h3>
          </div>
        </div>
      </section>



      <section className='mt-20'>
        <div className='w-[952px] mx-auto'>
          <div className='flex items-center mb-6'>
            <h3 className='text-lg leading-0 font-bold text-left inline-block'>
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
        </div>
      </section>


      <section className='mt-20'>
        <div className='w-[952px] mx-auto'>
          <div className='flex items-center mb-6'>
            <h3 className='text-lg leading-0 font-bold text-left inline-block'>
              Kontakty,<br /><span className='text-headlineWithAnnotation font-light'>Lidé</span>
            </h3>
          </div>
        </div>
        <div className='container'>

          <div className='grid grid-cols-2 gap-[1px] bg-gray-600 border border-gray-600 border-b-0'>
            <div className='bg-white px-20 pt-14 pb-16'>
              <div className='mb-8'>
                <div className='w-[130px] h-[130px] rounded-full border border-blue-100 flex justify-center items-center flex-grow-0 flex-shrink-0'>
                  <img src='https://picsum.photos/120/120?v=3' width={'120'} height={'120'} className='rounded-full'></img>
                </div>
              </div>
              <p className='text-xl italic'>
                „Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor.“
              </p>

            </div>
            <div className='bg-white px-20 py-10'></div>
            <div className='bg-white px-20 py-10'></div>
            <div className='bg-white px-20 py-10'></div>
            <div className='bg-white px-20 py-10'></div>
            <div className='bg-white'></div>
            <div className='bg-white'></div>
            <div className='bg-white'></div>
          </div>
        </div>
      </section>

    </main>
  )
}
