import React,{useState} from "react";
import '../application.css';

export default function EmployeeApplication() {
  return (
    <><><><><><><><><><><><><><>

      <div className='topic1'>
        APPLICATION <br />FOR EMPLOYEE
      </div>

      <div className='topic2'>
        <p>Intern Web Hub</p>
      </div></>

      <div className='personal'>
        <h3>PERSONAL INFORMATION</h3>
      </div></>

      <div className='personal_details'>
        Full Name  :<input type="text" name="full name" class="textbox" /><br/>
        Address    :<input type="text" name="address" class="textbox"/><br />    
        Email      :<input type="text" name="email" class="textbox"/><br/>
        Contact No :<input type="text" name="contact no" class="textbox"/><br />
        Nationality:<input type="text" name="nationality" class="textbox"/>
      </div></>

      <div className='position'>
        <h3>POSITION INFORMATION</h3>
      </div></>

      <div class name='position details'>
        Position Applied for:<input type="text" name="position" /><br />
        Division:<input type="text" name="division" /><br />
        Desired Salary:<input type="currency" name="Salary" /><br />
        Date Available to Start:<input type="date" name="starting date" /><br />
      </div></>

      <div className='education'>
        <h3>EDUCATION BACKGROUND</h3>
      </div></>

      <div>
        <table>
          <tr>
            <th>Degree</th>
            <th>Institution</th>
            <th>Year of Completion</th>
          </tr>
          <tr>
            <td><input type="text" name="degree" /></td>
            <td><input type="text" name="instition" /></td>
            <td><input type="text" name="year" /></td>
          </tr>
          <tr>
            <td><input type="text" name="degree" /></td>
            <td><input type="text" name="instition" /></td>
            <td><input type="text" name="year" /></td>
          </tr>
        </table>
      </div></>

      <div className='professional'>
        <h3> BACKGROUND</h3>
      </div><div>
        <table>
          <tr>
            <th>Company Name</th>
            <th>Job Title</th>
            <th>Responsibilities</th>
            <th>Work Duration</th>
          </tr>
          <tr>
            <td><input type="text" name="company" /></td>
            <td><input type="text" name="job" /></td>
            <td><input type="text" name="work" /></td>
            <td><input type="text" name="duration" /></td>
          </tr>
          <tr>
            <td><input type="text" name="company" /></td>
            <td><input type="text" name="job" /></td>
            <td><input type="text" name="work" /></td>
            <td><input type="text" name="duration" /></td>
          </tr>
        </table><br />
      </div></>

      <div>
        Resume/CV Attachment: <input type="file" name="Attachment" accept="doc/*" />
        Cover Letter: <input type="file" name="Attachment" accept="doc/*" />
      </div></>

      <div className='declaration'>
        <h2>Declaration</h2>
        <p>By submitting this application, I confirm that the information provided is accurate,<br />
          and I understand that any false statements may disqualify me from employment.</p>
      </div></>

      <div className='sign'>
        ....................................
        <h5>Signature</h5>
      </div></><div>
        <button><a href="submit.js">Submit</a></button>
      </div></></></>
);
}