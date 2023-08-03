import { hours } from '../data';

export default function ReportTable({ cookieStands }) {
  const reports = [
    { location: 'Calexico', hourly_sales: [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36] },
    { location: 'Barcelona', hourly_sales: [95, 95, 60, 95, 90, 50, 100, 55, 65, 80, 90, 95, 50, 70] },
    { location: 'Vancouver', hourly_sales: [30, 20, 30, 20, 20, 25, 30, 35, 40, 20, 20, 45, 35, 30] },
    { location: 'Milano', hourly_sales: [19, 9, 25, 25, 28, 19, 28, 19, 9, 9, 22, 19, 9, 25] },
    { location: 'Detroit', hourly_sales: [70, 77, 62, 81, 92, 77, 62, 88, 85, 70, 77, 92, 66, 88] },
    { location: 'Addis Ababa', hourly_sales: [51, 33, 25, 66, 51, 66, 37, 40, 29, 66, 18, 33, 55, 22] },
    { location: 'Dublin', hourly_sales: [30, 13, 44, 14, 54, 34, 57, 17, 64, 64, 17, 27, 27, 57] },
    { location: 'Tacoma', hourly_sales: [33, 44, 14, 33, 44, 18, 25, 40, 44, 29, 37, 25, 25, 37] },

  ];

  return (
    <div>
      {reports.length === 0 ? (
        <h2>No Cookie Stands Available</h2>
      ) : (
        <table className="w-1/2 mx-auto my-4 border border-collapse">
          <thead>
            <tr className="text-white bg-green-700">
              <th className="p-2">Location</th>
              {hours.map((hour) => (
                <th key={hour} className="p-2">{hour}</th>
              ))}
              <th className="p-2">Totals</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report, index) => (
              <tr key={report.location} className={index % 2 === 0 ? 'bg-green-100' : 'bg-green-200'}>
                <td className="p-2">{report.location}</td>
                {report.hourly_sales.map((sales, index) => (
                  <td key={index} className="p-2">{sales}</td>
                ))}
                <td className="p-2">{report.hourly_sales.reduce((acc, cur) => acc + cur, 0)}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="text-white bg-green-700">
              <th className="p-2">Totals</th>
              {hours.map((_, index) => (
                <th key={index} className="p-2">
                  {reports.reduce((acc, report) => acc + report.hourly_sales[index], 0)}
                </th>
              ))}
              <th className="p-2">
                {reports.reduce(
                  (acc, report) =>
                    acc + report.hourly_sales.reduce((accSales, curSales) => accSales + curSales, 0),
                  0
                )}
              </th>
            </tr>
          </tfoot>
        </table>
      )}
    </div>
  );
}