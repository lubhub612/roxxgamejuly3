import EventCountdown from '../components/EventCountdown';
import EventMenu from '../components/EventMenu';
import Layout from '../components/Layout';
import UpcomingTable from '../components/UpcomingTable';
export default function upcoming() {
  return (
    <>
      <Layout>
        <EventMenu active="upcoming" />
        <EventCountdown />
        <UpcomingTable />
      </Layout>
    </>
  );
}
