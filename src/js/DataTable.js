
import '../css/Overview.css';
import '../css/Container_Body_Table.css';
import '../css/DataTable.css';


function ContentAdminOverview() {
    return (
        <div className="body">

            <div class="container-body">
                <div class="sub-container">
                    <h1 class="titleTable">Customers Overview</h1>
                    <table id="example" class="table table-hover ">

                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Mail</th>
                                <th>Phone</th>
                                <th>Address</th>
                                <th>Birthday</th>
                                <th>Images</th>
                                <th>Start Work</th>
                                <th>End Work</th>
                                <th>Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>123456</td>
                                <td>John Doe</td>
                                <td>39</td>
                                <td>JD@gmail.com</td>
                                <td>0964567899</td>
                                <td>29/39 Quan 1 TP.HCM</td>
                                <td>19/9/1999</td>
                                <td class="pixelblock">
                                    <img
                                        src="https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                                </td>
                                <td>19/9/2019</td>
                                <td>Null</td>
                                <td>Employee</td>
                            </tr>
                            <tr>
                                <td>123456</td>
                                <td>Tiger Nixon</td>
                                <td>39</td>
                                <td>TN@gmail.com</td>
                                <td>123456789</td>
                                <td>0964567899</td>
                                <td>29/39 Quan 1 TP.HCM</td>
                                <td class="pixelblock">
                                    <img
                                        src="https://image1.masterfile.com/getImage/NjE0LTA5MTI3NDc0ZW4uMDAwMDAwMDA=AJ4TBp/614-09127474en_Masterfile.jpg" />
                                </td>
                                <td>Not Delete</td>
                                <td>22/10/2020</td>
                                <td>Null</td>
                            </tr>
                            <tr>
                                <td>123456</td>
                                <td>Tiger Nixon</td>
                                <td>39</td>
                                <td>TN@gmail.com</td>
                                <td>123456789</td>
                                <td>0964567899</td>
                                <td>29/39 Quan 1 TP.HCM</td>
                                <td class="pixelblock">
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT6zzLUMeSm7zTuL65asWu07V0X5K376rFdJw&usqp=CAU" />
                                </td>
                                <td>Not Delete</td>
                                <td>22/10/2020</td>
                                <td>Null</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
}

export default ContentAdminOverview;