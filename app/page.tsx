import PageShell from '@/components/layout/PageShell'
import HomeHero from '@/components/home/Hero'
import HomePhilosophy from '@/components/home/Philosophy'
import HomeChronicleRow from '@/components/home/ChronicleRow'
import HomeTriplet from '@/components/home/Triplet'
import HomeDuo from '@/components/home/Duo'
import { getReports, getNewsList, getJournalIssues } from '@/lib/microcms'

export default async function HomePage() {
  const [{ contents: reports }, { contents: news }, { contents: journals }] = await Promise.all([
    getReports(),
    getNewsList(),
    getJournalIssues(),
  ])

  return (
    <PageShell sidebarProps={{ variant: 'minimal', pageLabel: 'SINCE' }}>
      <HomeHero recentNews={news.slice(0, 3)}/>
      <HomePhilosophy/>
      <HomeChronicleRow reports={reports.slice(0, 5)}/>
      <HomeTriplet journals={journals} news={news}/>
      <HomeDuo/>
    </PageShell>
  )
}
