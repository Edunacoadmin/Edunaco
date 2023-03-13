import { Breadcrumb } from '@/components/breadcrumb/Breadcrumb';
import { Button } from '@/components/form/button/Button';
import { Checkbox } from '@/components/form/checkbox/Checkbox';
import { Form } from '@/components/form/Form';
import { Input } from '@/components/form/input/Input';
import { Icon } from '@/components/icon/Icon';
import { getGqlData } from '@/src/getGqlData';
import { ItemResult, Query } from '@/src/types.codegen';
import Link from 'next/link';
import { useForm, FormProvider } from 'react-hook-form';

const schoolsQuery = `
  query ItemsFilter {
    filterItems {
      count
      data {
          id
          title
          type
          subType,
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

export const metadata = {
  title: 'Školy'
};

export type FilterType = {
  title: string;
  info?: string;
  count: number;
}

export default async function Schools() {
  const { filterItems }: Query = await getGqlData({ query: schoolsQuery });
  const schools = filterItems?.data ?? [];


  const activeFilters: string[] = ['Školy', 'Soukromá'];
  const filters: FilterType[] = [{
    title: 'Svobodné sebeřízené',
    info: 'info',
    count: 34
  }, {
    title: 'Svobodné sebeřízené',
    info: 'info',
    count: 34
  }, {
    title: 'Svobodné sebeřízené',
    info: 'info',
    count: 34
  }];

  return (
    <main>
      <Breadcrumb pages={[{
        href: '/skoly', title: 'Školy'
      }]}></Breadcrumb>

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


      <section className='mt-14'>
        <div className='container grid grid-cols-filterPage gap-[110px]'>
          <Form onSubmit={false}>
            <aside className=''>
              <div className='pb-4 border-b border-b-gray-200'>
                <span>Filtry | nalezeno 164 škol</span>
              </div>
              <div className='pt-4 pb-12 border-b border-b-gray-200 flex gap-2.5'>
                {activeFilters.map((item, index) => {
                  return <div key={`filters${index}`} className="text-base px-3 py-0.5 border border-blue-200 flex items-center cursor-pointer">
                    <Icon icon='filter_close' className='w-2 h-2 mr-1.5' />
                    {item}
                  </div>
                })}
              </div>

              <div className='pt-4 pb-12 border-b border-b-gray-200'>
                <div className='mb-3.5'>
                  <span className='text-lg font-bold'>Lokalita</span>
                </div>
                <div className='mb-2'>
                  <span className='text-base leading-tight'>Zadejte adresu či oblast, kde hledáte školu.</span>
                </div>
                <div>
                  <Input label='' name='loca' placeholder="Zadejte ulici, město, PSČ" />
                </div>
              </div>

              <div className='pt-4 pb-12 border-b border-b-gray-200'>
                <div className='mb-3.5'>
                  <div className='mb-3.5'>
                    <span className='text-lg font-bold'>Zařízení</span>
                  </div>
                  {filters.map((filter, index) => {
                    return <div key={`filter${index}`} className='mb-4 flex items-center cursor-pointer'>
                      <Checkbox label={`${filter.title} (${filter.count})`} name='filter' />
                      {
                        filter.info && <>
                          <Icon icon='info' className='w-5 h-5 ml-auto' />
                        </>
                      }
                    </div>
                  })}
                </div>
              </div>

              <div className='pt-4 pb-12 border-b border-b-gray-200'>
                <div className='mb-3.5'>
                  <div className='mb-3.5'>
                    <span className='text-lg font-bold'>Vzdělávací přístupy</span>
                  </div>
                  {filters.map((filter, index) => {
                    return <div key={`filter${index}`} className='mb-4 flex items-center cursor-pointer'>
                      <Checkbox label={`${filter.title} (${filter.count})`} name='filter' />
                      {
                        filter.info && <>
                          <Icon icon='info' className='w-5 h-5 ml-auto' />
                        </>
                      }
                    </div>
                  })}
                </div>
              </div>

            </aside>
          </Form>


          <div>
            <div className='pb-4 border-b border-b-gray-200 flex items-center'>
              <span>Zobrazení:</span>
              <div className='flex items-center'>
                <div className='flex items-center'>
                  <Icon icon='list' className='h-5 w-5'></Icon>
                  Seznam
                </div>
                <div className='flex items-center'>
                  <Icon icon='pin_active' className='w-6 h-6' ></Icon>
                  Mapa
                </div>
                <div>
                  Řazení: <span>Nejlépe hodnocené</span>
                </div>
              </div>
            </div>
            {
              schools.map((item, index) => {
                if (item == null) return null;
                return (
                  <Link href={`/skoly/${item.id}`} key={`item${index}`} >
                    <div className='flex items-end py-5 border-b border-b-gray-200'>
                      <div className='w-[218px] p-[5px] border border-gray-700 mr-9'>
                        <img src={`https://picsum.photos/208/153?v=${index}`} width={'208'} height={'153'} className=''></img>

                      </div>
                      <div className='pb-[5px]'>
                        <h3 className='text-schoolsTile font-medium mb-0.5'>{item.title}</h3>
                        <p className='text-base text-blue-200 mb-9'>{item.street}, {item.postCode} {item.city}</p>
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
                          <span className="text-blue-200 text-xs leading-6 mr-2">|</span>

                          <Icon icon='heart_active' className='w-4 h-3.5' />
                        </div>
                      </div>
                    </div>
                  </Link>
                )
              })
            }
            <Button classname='' label='Zobrazit další' />




          </div>
        </div>
      </section>
    </main >
  )
}
