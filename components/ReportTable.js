// import { hours } from '../data'; // Check the correct relative path to data.js

// export default function ReportTable({ cookieStands }) {
//   // Sample data for demonstration purposes; replace with actual data if available
// const reports = [
//   { location: 'Calexico', hourly_sales: [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36] },
//   { location: 'Barcelona', hourly_sales: [95, 95, 60, 95, 90, 50, 100, 55, 65, 80, 90, 95, 50, 70] },
//   { location: 'Vancouver', hourly_sales: [30, 20, 30, 20, 20, 25, 30, 35, 40, 20, 20, 45, 35, 30] },
//   { location: 'Milano', hourly_sales: [19, 9, 25, 25, 28, 19, 28, 19, 9, 9, 22, 19, 9, 25] },
//   { location: 'Detroit', hourly_sales: [70, 77, 62, 81, 92, 77, 62, 88, 85, 70, 77, 92, 66, 88] },
//   { location: 'Addis Ababa', hourly_sales: [51, 33, 25, 66, 51, 66, 37, 40, 29, 66, 18, 33, 55, 22] },
//   { location: 'Dublin', hourly_sales: [30, 13, 44, 14, 54, 34, 57, 17, 64, 64, 17, 27, 27, 57] },
//   { location: 'Tacoma', hourly_sales: [33, 44, 14, 33, 44, 18, 25, 40, 44, 29, 37, 25, 25, 37] },

// ];

//   return (
//     <div>
//       {reports.length === 0 ? (
//         <h2>No Cookie Stands Available</h2>
//       ) : (
//         <table>
//           <thead>
//             <tr>
//               <th>Location</th>
//               {hours.map((hour) => (
//                 <th key={hour}>{hour}</th>
//               ))}
//               <th>Totals</th>
//             </tr>
//           </thead>
//           <tbody>
//             {reports.map((report) => (
//               <tr key={report.location}>
//                 <td>{report.location}</td>
//                 {report.hourly_sales.map((sales, index) => (
//                   <td key={index}>{sales}</td>
//                 ))}
//                 <td>{report.hourly_sales.reduce((acc, cur) => acc + cur, 0)}</td>
//               </tr>
//             ))}
//           </tbody>
//           <tfoot>
//             <tr>
//               <th>Totals</th>
//               {hours.map((_, index) => (
//                 <th key={index}>
//                   {reports.reduce((acc, report) => acc + report.hourly_sales[index], 0)}
//                 </th>
//               ))}
//               <th>
//                 {reports.reduce(
//                   (acc, report) =>
//                     acc + report.hourly_sales.reduce((accSales, curSales) => accSales + curSales, 0),
//                   0
//                 )}
//               </th>
//             </tr>
//           </tfoot>
//         </table>
//       )}
//     </div>
//   );
// }


import { hours } from '../data'; // Check the correct relative path to data.js

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
