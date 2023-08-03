import { hours } from '../data';

export default function ReportTable({ cookieStands }) {
  return (
    <div>
      {cookieStands.length === 0 ? (
        <h2>No Cookie Stands Available</h2>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Location</th>
              {hours.map((hour) => (
                <th key={hour}>{hour}</th>
              ))}
              <th>Totals</th>
            </tr>
          </thead>
          <tbody>
            {cookieStands.map((stand, index) => (
              <tr key={index}>
                <td>{stand.location}</td>
                {stand.hourly_sales.map((sales, index) => (
                  <td key={index}>{sales}</td>
                ))}
                <td>{stand.hourly_sales.reduce((acc, cur) => acc + cur, 0)}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th>Totals</th>
              {hours.map((_, index) => (
                <th key={index}>
                  {cookieStands.reduce((acc, stand) => acc + stand.hourly_sales[index], 0)}
                </th>
              ))}
              <th>
                {cookieStands.reduce(
                  (acc, stand) =>
                    acc + stand.hourly_sales.reduce((accSales, curSales) => accSales + curSales, 0),
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