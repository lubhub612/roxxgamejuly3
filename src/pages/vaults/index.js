import Layout from '../../components/Layout';
import VaultsBanner from '../../components/VaultsBanner';
import VaultsList from '../../components/VaultsList';
export default function Vaults() {
  return (
    <Layout>
      <VaultsBanner />
      <VaultsList />
    </Layout>
  );
}
