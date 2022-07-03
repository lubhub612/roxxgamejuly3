import EventCarousel from '../components/EventCarousel';
import EventCountdown from '../components/EventCountdown';
import EventMenu from '../components/EventMenu';
import EventOpen from '../components/EventOpen';
import Layout from '../components/Layout';

export default function events() {
  return (
    <Layout>
      <EventMenu active="events" />
      <EventCountdown />
      <EventCarousel />
      <EventOpen />
    </Layout>
  );
}
