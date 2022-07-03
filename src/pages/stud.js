import Layout from '../components/Layout';
import StudList from '../components/StudList';

export default function stud() {
  return (
    <>
      <Layout>
        <div className="stud">
          <div className="container">
            <div className="stud-inner">
              <StudList />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
