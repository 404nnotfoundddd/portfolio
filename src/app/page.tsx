import { Inter } from 'next/font/google'
import HelloSection from './_components/HelloSection'
import AboutMeSection from './_components/AboutMeSection'
import pfp from '@/jpg/pfp.jpeg'
import ProjectsSection from './_components/ProjectsSection'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400'],
})

const Home = () => {
  return (
    <div className="overflow-y-auto">
      <main
        style={{
          backgroundColor: 'hsla(152,100%,50%,1)',
          backgroundImage:
            'radial-gradient(at 40% 20%, hsla(188,100%,74%,1) 0px, transparent 50%),radial-gradient(at 80% 0%, hsla(189,100%,56%,1) 0px, transparent 50%),radial-gradient(at 0% 100%, hsla(309,100%,75%,1) 0px, transparent 50%),radial-gradient(at 64% 4%, hsla(61,100%,76%,1) 0px, transparent 50%),radial-gradient(at 0% 100%, hsla(178,100%,50%,1) 0px, transparent 50%),radial-gradient(at 100% 95%, hsla(200,100%,70%,1) 0px, transparent 50%),radial-gradient(at 0% 0%, hsla(113,100%,79%,1) 0px, transparent 50%)',
        }}
        className="flex h-full w-full flex-col"
      >
        <HelloSection />
        <AboutMeSection
          name="I'm 404"
          description={
            <div
              className={`${inter.className} flex flex-col gap-2 rounded-md bg-gradient-to-r from-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.3)] p-3 leading-5 text-[rgba(255,255,255,0.7)] shadow-[0_0px_15px_0px_rgba(0,0,0,0.5)]`}
            >
              <div>{`Hi i'm full-stack web developer`}</div>
              <div className="pb-2 pt-5 font-[900]">{`Qualifications:`}</div>
              <div>{`- A minimum of 1-2 years of experience in the web`}</div>
              <div>{`- Nextjs, Reactjs, Typesript, Zod, Zedux,Tailwind, TRPC, Mysql, SQL, RESTFull, Websockets, NextAuth knowledge`}</div>
            </div>
          }
          hobbies={
            <div
              className={`${inter.className} flex flex-col gap-1 rounded-md bg-gradient-to-r from-[#ff738a8b] to-[#ff6e86b1] p-3 leading-5 text-[rgba(255,255,255,0.7)] shadow-[0_0px_15px_0px_rgba(0,0,0,0.5)]`}
            >
              <div className="pb-2 pt-5 font-[900]">{`My Hobbies:`}</div>
              <div>{`- Watching film`}</div>
              <div>{`- Playing video games`}</div>
              <div>{`- Learning new things`}</div>
              <div>{`- Reading book`}</div>
              <div>{`- Drawing picture`}</div>

            </div>
          }
          pfp={pfp}
        />
        <ProjectsSection />
      </main>
    </div>
  )
}

export default Home