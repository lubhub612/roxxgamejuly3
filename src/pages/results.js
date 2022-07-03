import EventCountdown from '../components/EventCountdown';
import EventMenu from '../components/EventMenu';
import Layout from '../components/Layout';
import ResultBanner from '../components/ResultBanner';

export default function results() {
  return (
    <>
      <Layout>
        <EventMenu active="results" />
        <EventCountdown />
        <ResultBanner />
      </Layout>
    </>
  );
}
