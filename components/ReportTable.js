export default function ReportTable() {
  return (
    <table>
      <thead>
        <tr>
          <th>Location</th>
          <th>Min / Cust</th>
          <th>Max / Cust</th>
          <th>Avg Cookie / Sale</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Seattle</td>
          <td>23</td>
          <td>65</td>
          <td>6.3</td>
        </tr>
        <tr>
          <td>Tokyo</td>
          <td>3</td>
          <td>24</td>
          <td>1.2</td>
        </tr>
        <tr>
          <td>Dubai</td>
          <td>11</td>
          <td>38</td>
          <td>3.7</td>
        </tr>
        <tr>
          <td>Paris</td>
          <td>20</td>
          <td>38</td>
          <td>2.3</td>
        </tr>
        <tr>
          <td>Lima</td>
          <td>2</td>
          <td>16</td>
          <td>4.6</td>
        </tr>
      </tbody>
    </table>
  )
}