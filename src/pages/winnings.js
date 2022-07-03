import EventCountdown from '../components/EventCountdown';
import EventMenu from '../components/EventMenu';
import Layout from '../components/Layout';
import WinnerBanner from '../components/WinnerBanner';

export default function winnings() {
  return (
    <>
      <Layout>
        <EventMenu active="winnings" />
        <EventCountdown />
        <WinnerBanner />
      </Layout>
    </>
  );
}
