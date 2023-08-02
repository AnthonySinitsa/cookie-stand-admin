import CreateForm from '@/components/CreateForm';
import ReportTable from '@/components/ReportTable';

export default function Main({ locations }) {
  return (
    <div className="main">

      <CreateForm />
      {locations > 0 && <ReportTable />}
      {locations === 0 && <p>No Cookie Stands Available</p>}

    </div>
  );
}