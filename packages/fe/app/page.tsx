import { Button } from '@/components/form/button/Button'
import { Form } from '@/components/form/Form'
import { Input } from '@/components/form/input/Input'
import { Icon } from '@/components/icon/Icon'
import { Tile } from '@/components/tile/Tile'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <section>
        <div className='pl-7.5 pt-14 pb-20 container grid grid-cols-headerIlustaration bg-hero bg-no-repeat bg-right-bottom'>
          <div>
            <h2 className='font-reenie text-annotationHp'>Vzdeláváním k sobe</h2>
            <h1 className='font-light text-headlineHp text-yellow'>
              Vítejte v lorem<br></br>
              ipsum dolor sit
            </h1>
            <p className='text-lg mt-4 mb-9'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
            </p>
            <Button href='/o-nas' label='Více o nás' style='primary'></Button>
          </div>
        </div>
      </section>

      <section className='bg-gray-100 pt-17 pb-23'>
        <div className='container text-center'>
          <h3 className='text-lg leading-6 font-bold text-left inline-block px-10 bg-gray-100 relative z-10'>
            Co u nás<br /><span className='text-headlineWithAnnotation font-light'>Najdete</span>
          </h3>
          <div className='grid grid-cols-1 lg:grid-cols-4 shadow-cards border border-gray-600 bg-white text-left mt-7'>
            <div className='relative before:hidden md:before:block after:hidden md:after:block before:content-[""] before:absolute before:-top-[60px] before:right-0 before:h-[60px] before:w-[1px] before:bg-gray-600 after:w-full after:h-[1px] after:bg-gray-600 after:absolute after:-top-[60px] after:-right-full'>
              <div className='pl-18 pr-12 pt-10 pb-18 border-b border-b-gray-600 lg:border-b-0 lg:border-r border-r-gray-600 group lg:hover:bg-yellow lg:hover:shadow-card lg:hover:border-none lg:hover:absolute lg:hover:-top-6 lg:hover:-bottom-14 lg:hover:-left-2.5 lg:hover:pt-16 lg:hover:pl-[82px] cursor-pointer transition-shadow'>
                <Icon icon='branch' width='58px' height='41px' />
                <h4 className='text-2xl leading-snug text-blue-100 group-hover:text-blue mt-1.5 mb-3'>
                  Alternativy<br></br> běžného vzdělávání
                </h4>
                <p>
                  Zjistěte, co vše je možné.
                  Consectetur adipiscing elit. Aenean euismod.
                </p>
                <div className='hidden lg:group-hover:block mt-6'>
                  <Button href='/o-nas' label='Prohlédnout' style='secondary'></Button>
                </div>
              </div>
            </div>
            <div className='relative'>
              <div className='lg:hover:bg-yellow lg:hover:shadow-card pl-18 pr-12 pt-10 pb-18 border-b border-b-gray-600 lg:border-b-0 lg:border-r border-r-gray-600 group lg:hover:border-none lg:hover:absolute lg:hover:-top-6 lg:hover:-bottom-14 lg:hover:-right-[5px] lg:hover:-left-[5px] lg:hover:pl-[77px] lg:hover:pt-16 cursor-pointer transition-shadow'>
                <Icon icon='map' width='58px' height='41px' />
                <h4 className='text-2xl leading-snug text-blue-100 group-hover:text-blue mt-1.5 mb-3'>
                  Katalog<br></br>
                  škol v ČR
                </h4>
                <p>
                  Zjistěte, co vše je možné.
                  Consectetur adipiscing elit. Aenean euismod.
                </p>
                <div className='hidden lg:group-hover:block mt-6'>
                  <Button href='/o-nas' label='Prohlédnout' style='secondary'></Button>
                </div>
              </div>
            </div>
            <div className='relative after:hidden lg:after:block before:hidden lg:before:block after:content-[""] after:absolute after:-top-[60px] after:right-0 after:h-[60px] after:w-[1px] after:bg-gray-600 before:w-full before:h-[1px] before:bg-gray-600 before:absolute before:-top-[60px]'>
              <div className='lg:hover:bg-yellow lg:hover:shadow-card pl-18 pr-12 pt-10 pb-18 border-b border-b-gray-600 lg:border-b-0 lg:border-r border-r-gray-600 group lg:hover:border-none lg:hover:absolute lg:hover:-top-6 lg:hover:-bottom-14 lg:hover:-right-[5px] lg:hover:-left-[5px] lg:hover:pl-[77px] lg:hover:pt-16 cursor-pointer transition-shadow'>
                <Icon icon='blocks' width='58px' height='41px' />
                <h4 className='text-2xl leading-snug text-blue-100 group-hover:text-blue mt-1.5 mb-3'>
                  Alternativní<br></br>
                  vzdělávání prakticky
                </h4>
                <p>
                  Zjistěte, co vše je možné.
                  Consectetur adipiscing elit. Aenean euismod.
                </p>
                <div className='hidden lg:group-hover:block mt-6'>
                  <Button href='/o-nas' label='Prohlédnout' style='secondary'></Button>
                </div>
              </div>
            </div>
            <div className='relative'>
              <div className='lg:hover:bg-yellow lg:hover:shadow-card pl-18 pr-12 pt-10 pb-18 group lg:hover:absolute lg:hover:-top-6 lg:hover:-bottom-14 lg:hover:-right-2.5 lg:hover:pt-16 cursor-pointer transition-shadow'>
                <Icon icon='blog' width='58px' height='41px' />
                <h4 className='text-2xl leading-snug text-blue-100 group-hover:text-blue mt-1.5 mb-3'>
                  Jedinečný soubor
                  vzdělávacích materiálů
                </h4>
                <p>
                  Zjistěte, co vše je možné.
                  Consectetur adipiscing elit. Aenean&nbsp;euismod.
                </p>
                <div className='hidden lg:group-hover:block mt-6'>
                  <Button href='/o-nas' label='Prohlédnout' style='secondary'></Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='container pt-20'>
          <h3 className='text-lg leading-6 font-bold text-left inline-block'>
            Nejnovější články<br /><span className='text-headlineWithAnnotation font-light'>Děje se</span>
          </h3>
          <div className='border border-gray-600 mt-4.5 grid grid-cols-1 md:grid-cols-3'>
            <Tile href={`/blog`} />
            <Tile href={`/blog`} />
            <Tile href={`/blog`} />
          </div>
        </div>
      </section>

      <section>
        <div className='container'>
          <div className='pt-16 flex'>
            <div className='w-[590px] bg-footer bg-top'></div>
            {/* <img src='https://picsum.photos/590/384?v=3' width={'590px'} height={'590px'} className=''></img> */}

            <div className='ml-4 pt-16 pb-36 flex flex-col items-start'>
              <h3 className='text-lg leading-6 font-bold text-left inline-block mb-3.5'>
                Máte nějaký nápad, prosbu, připomínku?<br /><span className='text-headlineWithAnnotation font-light'>Chcete se zapojit?</span>
              </h3>
              <Button label='Napište nám'></Button>
            </div>
          </div>
        </div>
      </section>


      <section>
        <div className='container'>

          <div className='relative flex justify-center mb-7 -top-3 before:w-full before:h-[1px] before:bg-gray-600 before:block before:absolute before:top-[50%]'>
            <div className='flex items-center justify-center bg-white px-12 gap-8 relative z-10'>
              <Icon icon='fb' className='fill-blue-200 w-6 h-6' />
              <Icon icon='instagram' className='fill-blue-200 w-6 h-6' />
              <Icon icon='yt' className='fill-blue-200 w-6 h-6' />
              <Icon icon='in' className='fill-blue-200 w-6 h-6' />
            </div>
          </div>

          <div className='grid grid-cols-2'>
            <div className='px-28 border-r border-r-gray-600'>
              <div className='grid grid-cols-2'>
                <div>
                  <h5 className='text-blue text-lg font-bold leading-6 mb-3.5'>Edunaco</h5>
                  <ul>
                    <Link href='/'><li className='text-base text-blue-200 leading-9'>Školy</li></Link>
                    <Link href='/'><li className='text-base text-blue-200 leading-9'>Materiály</li></Link>
                    <Link href='/'><li className='text-base text-blue-200 leading-9'>Lidé</li></Link>
                    <Link href='/'><li className='text-base text-blue-200 leading-9'>O nás</li></Link>
                    <Link href='/'><li className='text-base text-blue-200 leading-9'>Kontakty</li></Link>
                  </ul>
                </div>
                <div>
                  <h5 className='text-blue text-lg font-bold leading-6 mb-3.5'>Nejčastěji hledáte</h5>
                  <ul>
                    <Link href='/'><li className='text-base text-blue-200 leading-9'>Mateřské školky</li></Link>
                    <Link href='/'><li className='text-base text-blue-200 leading-9'>Jak učit doma?</li></Link>
                    <Link href='/'><li className='text-base text-blue-200 leading-9'>Daltonské školy</li></Link>
                    <Link href='/'><li className='text-base text-blue-200 leading-9'>Učební pomůcky upcycle</li></Link>
                    <Link href='/'><li className='text-base text-blue-200 leading-9'>Legislativa</li></Link>
                    <Link href='/'><li className='text-base text-blue-200 leading-9'>Registrace</li></Link>
                  </ul>
                </div>
              </div>
            </div>
            <div className='px-28'>
              <h5 className='text-blue text-lg font-bold leading-6 mb-3.5'>Ať vám nic neuteče</h5>
              <p className='text-base text-blue-200 leading-5 mb-5'>Novinky, rady a tipy budeme zasílat na váš e-mail</p>
              <div className='mb-5'>
                <Form onSubmit={false}>

                  <Input label='' name='mail' />
                </Form>
              </div>
              <p className='text-sm text-blue-200'>Kliknutím na „Přihlásit odběr“ souhlasím se <span className='text-underline'>zpracováním osobních údajů</span>.</p>
            </div>
          </div>
        </div>
      </section>



    </main>
  )
}
