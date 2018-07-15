import React from 'react';

const RecruiterMessage = (props) => (
  <div>
    <h2> Recruiter Message </h2>
    <p>Hi {props.devName},</p>
    <p>Thanks for accepting my request!</p>
    <p>
      I’m a software engineer looking for permanent roles in the Dallas/Fort Worth area. I am proficient in web technologies including HTML, CSS, JavaScript, React, and Redux.

    </p>
    <p>
      How are you enjoying working for {props.devCompany}? Do you have any
      recommendations for someone looking to get into software
      engineering?
    </p>
    <p>
      Thanks,<br />
      Joe
    </p>
  </div>
)

export default RecruiterMessage;