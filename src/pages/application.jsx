import React,{useState} from "react";
import '../application.css';
import { useNavigate } from 'react-router-dom';
import Navbar from "../components/nav";

export default function EmployeeApplication() {

  const navigate = useNavigate();

  function handleClick (){
    navigate("/submit")
  }

  return (
    <><><><><><><><><><><><><><>
      <Navbar/>
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
        <div className='fields'>

        <div class='input-field'>
          <label>Full Name</label>
          <input type="text" placeholder="Enter your name"/>
        </div>

        <div class='input-field'>
          <label>Address</label>
          <input type="text" placeholder="Enter your address"/>
        </div>

        <div class='input-field'>
          <label>E-mail</label>
          <input type="text" placeholder="Enter your email address"/>
        </div>

        <div class='input-field'>
          <label>Contact No</label>
          <input type="text" placeholder="Enter your contact number"/>
        </div>

        <div class='input-field'>
          <label>Nationallity</label>
          <input type="text" placeholder="Your nationality"/>
        </div>
        </div>
      </div></>

      <div className='position'>
        <h3>POSITION INFORMATION</h3>
      </div></>

      <div className='position_details'>
      
       <div className='fields'>

<div class='input-field'>
  <label>Position Applied For</label>
  <input type="text" placeholder="Position you are applying"/>
</div>

<div class='input-field'>
  <label>Division</label>
  <input type="text" placeholder="Enter the job sector"/>
</div>

<div class='input-field'>
  <label>Desired Salary</label>
  <input type="text" placeholder="Enter desired salary (LKR)"/>
</div>

<div class='input-field'>
  <label>Date Available to Start</label>
  <input type="date"/>
</div>

</div>
      </div></>

      <div className='education'>
        <h3>EDUCATIONAL BACKGROUND</h3>
      </div></>

      <div className='table1'>
        <table>
          <tr>
            <th width="400">Degree</th>
            <th width="400">Institution</th>
            <th width="400">Year of Completion</th>
          </tr>
          <tr>
            <td width="400"><input type="text" name="degree" size="55" /></td>
            <td width="400"><input type="text" name="instition" size="55"/></td>
            <td width="400"><input type="text" name="year" size="55"/></td>
          </tr>
          <tr>
            <td width="400"><input type="text" name="degree" size="55"/></td>
            <td width="400"><input type="text" name="instition" size="55"/></td>
            <td width="400"><input type="text" name="year" size="55"/></td>
          </tr>
        </table>
      </div></>

      <div className='professional'>
        <h3>PROFESSIONAL BACKGROUND</h3>
      </div>
      
      <div className='table2'>
        <table>
          <tr>
            <th width="300">Company Name</th>
            <th width="300">Job Title</th>
            <th width="300">Responsibilities</th>
            <th width="300">Work Duration</th>
          </tr>
          <tr>
            <td width="300"><input type="text" name="company" size="40" /></td>
            <td width="300"><input type="text" name="job" size="40" /></td>
            <td width="300"><input type="text" name="work" size="40" /></td>
            <td width="300"><input type="text" name="duration" size="40" /></td>
          </tr>
          <tr>
            <td width="300"><input type="text" name="company" size="40" /></td>
            <td width="300"><input type="text" name="job" size="40" /></td>
            <td width="300"><input type="text" name="work" size="40" /></td>
            <td width="300"><input type="text" name="duration" size="40" /></td>
          </tr>
        </table><br />
      </div></>

      <div className='resume'>
        <label>Resume/CV Attachment:</label> 
        <input type="file" name="Attachment" accept="doc/*" />
        <label>Cover Letter:</label> 
        <input type="file" name="Attachment" accept="doc/*" />
      </div></>

      <div className='declaration'>
        <h2>Declaration</h2>
        <p>By submitting this application, I confirm that the information provided is accurate,<br />
          and I understand that any false statements may disqualify me from employment.</p>
      </div></>
      <br/>

      <div className='sign'>
        ....................................<br/>
        Signature
      </div></>
      <br/>

      <div className='submit'>
        
        <button onClick={handleClick} >Submit</button>

      </div></></></>
      
      
);
}