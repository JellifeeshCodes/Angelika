import { Avatar, Checkbox, Fieldset, ProgressBar, Tab, Tabs } from '@react95/core';

function Resume() {
  return (
    <Tabs defaultActiveTab="Introduction">
      <Tab title="Introduction">
        <h3>Welcome, I'm Angelika Dael</h3>
        <Avatar src="https://media.licdn.com/dms/image/v2/D5603AQFLBdRxeCt_MA/profile-displayphoto-scale_400_400/B56ZrH2m2nKwAg-/0/1764289575340?e=1769644800&v=beta&t=7ZLw4_gZwJJpr3Qi1n7JMTfZ5myZVtxWrQSLOX_9sf8" alt="A portrait of the artisan" size="140px" />

        <p>An ICT Support Officer at St Vincent de Paul Society Australia</p>
        <Fieldset legend="My Story">
          <p>
            I began my IT journey in Wirreanda Highschool, where I studied Information Technology and 3D Animation. 
            I completed work experience at IT & Computers in Christies, SA. I then changed my course path to working with animals. 
            After years of working in kennels and catteries, I decided that I wanted to return to IT. 
            So I applied for jobs in the IT industry and landed a job as an ICT Support Officer at St Vincent de Paul Society Australia. 
            Here, I provide technical support and solutions to ensure smooth operations across the organization.
          </p>
        </Fieldset>
      </Tab>
      <Tab title="Employment History">
        <Fieldset legend="ICT Support Officer - St Vincent de Paul Society Australia (Jan 2026 - Present)">
          <Checkbox readOnly checked>
            Delivered top-tier technical support and solutions, ensuring seamless operations across the organization.
          </Checkbox>
          <Checkbox readOnly checked>
            Handling the IT Helpdesk, managing asset registers, and answering phone calls.
          </Checkbox>
        </Fieldset>
        <Fieldset legend="Deli Team Member - Coles Supermarkets (Nov 2024 - Jan 2025)">
          <Checkbox readOnly checked>
            Providing great customer service and maintaining high standards of food safety and hygiene.
          </Checkbox>
        </Fieldset>
        <Fieldset legend="Kennal Attendant & Recceptionist - Hanrob Pet Hotel (Aug-Dec 2023)">
          <Checkbox readOnly checked>
            Ensured the well-being and comfort of pets, delivering exceptional care and customer service in a fast-paced environment.
          </Checkbox>
          <Checkbox readOnly checked>
            Managed front desk operations, including bookings, inquiries, and administrative tasks, contributing to smooth daily operations.
          </Checkbox>
        </Fieldset>
        <Fieldset legend="Service Assistant - Coles Supermarkets (2014 - 2017 & 2022 - 2023)">
          <Checkbox readOnly checked>
            Delivered exceptional customer service, ensuring a positive shopping experience for all customers.
          </Checkbox>
          <Checkbox readOnly checked>
            Assisting with Coles Online Click and Collect services, ensuring accurate and timely order fulfillment.
          </Checkbox>
        </Fieldset>
      </Tab>
      <Tab title="Skills & Languages">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
          <Fieldset legend="IT Skills & Languages">
            <ul>
              <li className="resume-skills">Critical Thinking & Problem Solving</li>
              <ProgressBar percent={98} width="200px" />
              <li className="resume-skills">Cyber Security Risk Management</li>
              <ProgressBar percent={80} width="200px" />
              <li className="resume-skills">Proficiebt Microsoft and Linux OS</li>
              <ProgressBar percent={97} width="200px" />
              <li className="resume-skills">Customer Service Skills</li>
              <ProgressBar percent={98} width="200px" />
              <li className="resume-skills">Python</li>
              <ProgressBar percent={69} width="200px" />
              <li className="resume-skills">CSS</li>
              <ProgressBar percent={80} width="200px" />
              <li className="resume-skills">HTML</li>
              <ProgressBar percent={78} width="200px" />
            </ul>
          </Fieldset>
          <Fieldset legend="Animal Care Skills">
            <ul>
              <li className="resume-skills">Maintain & Monitor Animal Health</li>
              <ProgressBar percent={92} width="200px" />
              <li className="resume-skills">Provide Enrichment for Animals</li>
              <ProgressBar percent={100} width="200px" />
              <li className="resume-skills">Provide Nutritional Requirements</li>
              <ProgressBar percent={94} width="200px" />
              <li className="resume-skills">Provide Reception Services</li>
              <ProgressBar percent={85} width="200px" />
            </ul>
          </Fieldset>
        </div>
      </Tab>
      <Tab title="Education">
        <Fieldset legend="Education">
          <Checkbox readOnly checked>
            2020 - CERTIFICATE III ANIMAL STUDIES (SPECIALISED IN VET NURSING), BOXHILL LILYDALE VIC
          </Checkbox>
          <Checkbox readOnly checked>
            2013-2017 | YEAR 12, WIRREANDA SECONDARY SCHOOL MORPHETT VALE, SA
             <li>· Award for Outstanding Achievement in Digital Technology.</li>
          </Checkbox>
        </Fieldset>
                <Fieldset legend="Achievements">
          <Checkbox readOnly checked>
            Current - South Australian Full Driver's License
          </Checkbox>
          <Checkbox readOnly checked>
            2025 - Certificate of Completion (CC-RNCKPX92) – SQL Intermediate
          </Checkbox>          <Checkbox readOnly checked>
           2025 - Certificate of Completion (CC-LV755ADA) – Introduction to SQL
          </Checkbox> 
                    <Checkbox readOnly checked>
            2020 - Certificate III in Animal Studies (Specialized in Vet Nursing) | Bravecto Online Training.
          </Checkbox>
                    <Checkbox readOnly checked>
            2015 - Certificate II Creative Industries (Media) - 3D Animation Foundation (CUA20215) at Wirreanda Secondary School, partnered by AIE.
          </Checkbox>        
        </Fieldset>
      </Tab>
      <Tab title="References & Availability">
        <Fieldset legend="References">
            <ul>
              <li className="references">Maria DeBoer – Manager – Coles Supermarket – 0451 093 758</li>
              <li className="references">Christian Dael – Manager – Pizza Pan – 0404 638 772</li>
            </ul>
        </Fieldset>
                <Fieldset legend="Availability">
            <ul>
              <li className="availability">Mondays, Saturdays & Sundays</li>
            </ul>
        </Fieldset>
      </Tab>
    </Tabs>
  );
}

export default Resume;