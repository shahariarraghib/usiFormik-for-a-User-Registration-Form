
import './App.css';
import { Formik, Field, Form } from 'formik';
import { useState } from 'react';

function App() {
  const [data, setData] = useState([])
  console.log(data);


  return (
    <div>
      <Formik
        initialValues={{
          Personal: [],
          Contact_Details: [],
          Address_Details: [],
          Other_Details: []

        }}

        onSubmit={async (values, { resetForm }) => {
          await new Promise((r) => setTimeout(r, 500));
          let oldVal = [];
          oldVal.push(...data, values)
          setData(oldVal);
          resetForm();
          // alert(JSON.stringify(values, null, 2));
        }}
      >

        <Form >

          <h4>Personal Details</h4>
          <label htmlFor="Name" className='star' >Name <span style={{ color: "#ff0000" }}>*</span></label>
          <Field id="Emput-style" name="Personal[0]" placeholder="Enter Name" required />

          <label htmlFor="DOB" className='star'>Date of Birth or age <span style={{ color: "#ff0000" }}>*</span></label>
          <Field id="Emput-style" name="Personal[1]" placeholder="DD/MM/YYYY or Age in Years" required />

          <label htmlFor="sex" className='star'>Sex <span style={{ color: "#ff0000" }}>*</span></label>
          <Field id="Emput-style" name="Personal[2]" as="select" required>
            <option >Enter Sex</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </Field>

          <br />
          <br />
          <label htmlFor="Mobile">Mobile</label>
          <Field id="Emput-style" name="Personal[3]" placeholder=" Enter Mobile" type="Number" />



          <label htmlFor="GovtIssuedID">Govt Issued ID</label>

          <Field id="Emput-style" name="Personal[4]" as="select" >
            <option >ID Type</option>
            <option value="Type A">Type A</option>
            <option value="Type B">Type B</option>
          </Field>
          <Field id="Emput-style" name="Personal[5]" placeholder="Enter Govt ID" />



          <h4>Contact Details</h4>

          <label htmlFor="Guardian">Guardian Details</label>

          <Field id="Emput-style" name="Contact_Details[0]" as="select" >
            <option >Enter Lable</option>
            <option value="Type A">Type A</option>
            <option value="Type B">Type B</option>
          </Field>
          <Field id="Emput-style" name="Contact_Details[1]" placeholder="Enter Guardian Name" />



          <label htmlFor="email">Email</label>
          <Field
            id="Emput-style"
            name="Contact_Details[2]"
            placeholder="Enter Email"
            type="email"
          />

          <label htmlFor="Number">Emergency Contact Number</label>
          <Field
            id="Emput-style"
            name="Contact_Details[3]"
            placeholder="Enter Emergency No"
            type="Number"
          />


          <h4>Address Details</h4>

          <label htmlFor="Address">Address</label>
          <Field
            id="Emput-style"
            name="Address_Details[0]"
            placeholder="Enter Address"
            type="text"
          />

          <label htmlFor="State">State</label>

          <Field id="Emput-style" name="Address_Details[1]" as="select" >
            <option >Enter State</option>
            <option value="Type A">Type A</option>
            <option value="Type B">Type B</option>
          </Field>

          <label htmlFor="City">City</label>

          <Field id="Emput-style" name="Address_Details[2]" as="select" >
            <option >Enter City/town/village</option>
            <option value="Type A">Type A</option>
            <option value="Type B">Type B</option>
          </Field>
          <br />
          <br />
          <label htmlFor="Country">Country</label>
          <Field id="Emput-style" name="Address_Details[3]" as="select" >
            <option >Enter County</option>
            <option value="Type A">India</option>

          </Field>

          <label htmlFor="Pincode">Pincode</label>
          <Field
            id="Emput-style"
            name="Address_Details[4]"
            placeholder="Enter pincode"
            type="Number"
          />



          <h4>Other Details</h4>

          <label htmlFor="Occupation">Occupation</label>
          <Field
            id="Emput-style"
            name="Other_Details[0]"
            placeholder="Enter Occupation"
            type="text"
          />

          <label htmlFor="Religion">Religion</label>
          <Field id="Emput-style" name="Other_Details[1]" as="select" >
            <option >Enter Religion</option>
            <option value="Type A">Type A</option>
            <option value="Type B">Type B</option>
          </Field>

          <label htmlFor="Marital">Marital Status</label>
          <Field id="Emput-style" name="Other_Details[2]" as="select" >
            <option >Enter Marital Status</option>
            <option value="Type A">Single</option>
            <option value="Type B">Married</option>
            <option value="Type B">Divorced</option>
          </Field>

          <label htmlFor="Blood">Blood Group</label>
          <Field id="Emput-style" name="Other_Details[3]" as="select" >
            <option >Enter Blood Group</option>
            <option value="Type A">Type A</option>
            <option value="Type B">Type B</option>
          </Field>
          <br />
          <br />
          <label htmlFor="Nationality">Nationality</label>
          <Field id="Emput-style" name="Other_Details[4]" as="select" >
            <option >Enter Nationality</option>
            <option value="Type A">Type A</option>
            <option value="Type B">Type B</option>
          </Field>
          <br />

          <div className='button-style'>
            <button onClick={() => window.location.reload(false)} style={{ color: "red", background: "none", border: "1px solid black" }}>Cancle</button>
            <button type="submit" >Submit</button>

          </div>

        </Form>
      </Formik>
      <div style={{ marginTop: 20 }}>
        <table>
          <tr>
            <th>Name</th>
            <th> Date of Birth or age</th>
            <th>Sex</th>
            <th>Mobile</th>

            <th style={{ textAlign: 'center' }}>Govt Issued ID
              <td>Type</td>
              <td>Govt Issued ID</td>
            </th>

            <th style={{ textAlign: 'center' }}>Guardian Details
              <td>Type</td>
              <td>Guardian Name</td>
            </th>
            <th>Email</th>
            <th>Emergency Contact Number</th>

            <th>Address</th>
            <th>State</th>
            <th>City</th>
            <th>Country</th>
            <th>Pincode</th>

            <th>Occupation</th>
            <th>Religion</th>
            <th>Marital Status</th>
            <th>Blood Group</th>
            <th>Nationality</th>

          </tr>
          {data.map(value => (<tr>
            <td>{value.Personal[0]}</td>
            <td>{value.Personal[1]}</td>
            <td>{value.Personal[2]}</td>
            <td>{value.Personal[3]}</td>

            <td>

              <td>{value.Personal[4]}</td>
              <td>{value.Personal[5]}</td>
            </td>

            <td>

              <td>{value.Contact_Details[0]}</td>
              <td>{value.Contact_Details[1]}</td>
            </td>
            <td>{value.Contact_Details[2]}</td>
            <td>{value.Contact_Details[3]}</td>


            <td>{value.Address_Details[0]}</td>
            <td>{value.Address_Details[1]}</td>
            <td>{value.Address_Details[2]}</td>
            <td>{value.Address_Details[3]}</td>
            <td>{value.Address_Details[4]}</td>

            <td>{value.Other_Details[0]}</td>
            <td>{value.Other_Details[1]}</td>
            <td>{value.Other_Details[2]}</td>
            <td>{value.Other_Details[3]}</td>
            <td>{value.Other_Details[4]}</td>

          </tr>

          ))}
        </table>
      </div>


      {/* <div>
        {
          data.map(a => console.log(a.Address_Details[0], a.Address_Details[1]))
        }
      </div> */}
    </div>

  );

}

export default App;
