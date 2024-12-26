import Header from './components/header';
import { ProjectBox } from './components/ProjectCard';

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr]] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Header />
        <main className="flex flex-col gap-8 row-start-2 items-left sm:items-start">
        <h1> aarushi ammavajjala </h1>
        <h2> developer, studying computer science @ tbd </h2>
        <ProjectBox title="Machine Learning Intern" org="Stanford AIMI Research Group" />
        <ProjectBox title="AI Researcher" org="Cornell University" />
      </main>
    </div>
  );
}
