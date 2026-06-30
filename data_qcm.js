const QCM_DATA = [
  {
    "id": 1,
    "question": "Which of the following threat actors is the most likely to be hired by a foreign government to attack critical systems located in other countries?",
    "options": [
      "A. Hacktivist",
      "B. Whistleblower",
      "C. Organized crime",
      "D. Unskilled attacker"
    ],
    "correct": "C",
    "confirmed": true
  },
  {
    "id": 2,
    "question": "Which of the following is used to add extra complexity before using a one-way data transformation algorithm?",
    "options": [
      "A. Key stretching",
      "B. Data masking",
      "C. Steganography",
      "D. Salting"
    ],
    "correct": "D",
    "confirmed": true
  },
  {
    "id": 3,
    "question": "An employee clicked a link in an email from a payment website that asked the employee to update contact information. The employee entered the log-in information but received a 'page not found' error message. Which of the following types of social engineering attacks occurred?",
    "options": [
      "A. Brand impersonation",
      "B. Pretexting",
      "C. Typosquatting",
      "D. Phishing"
    ],
    "correct": "D",
    "confirmed": true
  },
  {
    "id": 4,
    "question": "An enterprise is trying to limit outbound DNS traffic originating from its internal network. Outbound DNS requests will only be allowed from one device with the IP address 10.50.10.25. Which of the following firewall ACLs will accomplish this goal?",
    "options": [
      "A. Access list outbound permit 0.0.0.0/0 0.0.0.0/0 port 53; Access list outbound deny 10.50.10.25/32 0.0.0.0/0 port 53",
      "B. Access list outbound permit 0.0.0.0/0 10.50.10.25/32 port 53; Access list outbound deny 0.0.0.0/0 0.0.0.0/0 port 53",
      "C. Access list outbound permit 0.0.0.0/0 0.0.0.0/0 port 53; Access list outbound deny 0.0.0.0/0 10.50.10.25/32 port 53",
      "D. Access list outbound permit 10.50.10.25/32 0.0.0.0/0 port 53; Access list outbound deny 0.0.0.0/0 0.0.0.0/0 port 53"
    ],
    "correct": "D",
    "confirmed": true
  },
  {
    "id": 5,
    "question": "A data administrator is configuring authentication for a SaaS application and would like to reduce the number of credentials employees need to maintain. The company prefers to use domain credentials to access new SaaS applications. Which of the following methods would allow this functionality?",
    "options": [
      "A. SSO",
      "B. LEAP",
      "C. MFA",
      "D. PEAP"
    ],
    "correct": "A",
    "confirmed": true
  },
  {
    "id": 6,
    "question": "Which of the following scenarios describes a possible business email compromise attack?",
    "options": [
      "A. An employee receives a gift card request in an email that has an executive's name in the display field of the email.",
      "B. Employees who open an email attachment receive messages demanding payment in order to access files.",
      "C. A service desk employee receives an email from the HR director asking for log-in credentials to a cloud administrator account.",
      "D. An employee receives an email with a link to a phishing site that is designed to look like the company's email portal."
    ],
    "correct": "C",
    "confirmed": true
  },
  {
    "id": 7,
    "question": "A company prevented direct access from the database administrators' workstations to the network segment that contains database servers. Which of the following should a database administrator use to access the database servers?",
    "options": [
      "A. Jump server",
      "B. RADIUS",
      "C. HSM",
      "D. Load balancer"
    ],
    "correct": "A",
    "confirmed": true
  },
  {
    "id": 8,
    "question": "An organization's internet-facing website was compromised when an attacker exploited a buffer overflow. Which of the following should the organization deploy to best protect against similar attacks in the future?",
    "options": [
      "A. NGFW",
      "B. WAF",
      "C. TLS",
      "D. SD-WAN"
    ],
    "correct": "B",
    "confirmed": true
  },
  {
    "id": 9,
    "question": "An administrator notices that several users are logging in from suspicious IP addresses. After speaking with the users, the administrator determines that the employees were not logging in from those IP addresses and resets the affected users' passwords. Which of the following should the administrator implement to prevent this type of attack from succeeding in the future?",
    "options": [
      "A. Multifactor authentication",
      "B. Permissions assignment",
      "C. Access management",
      "D. Password complexity"
    ],
    "correct": "A",
    "confirmed": true
  },
  {
    "id": 10,
    "question": "An employee receives a text message that appears to have been sent by the payroll department and is asking for credential verification. Which of the following social engineering techniques are being attempted? (Choose two.)",
    "options": [
      "A. Typosquatting",
      "B. Phishing",
      "C. Impersonation",
      "D. Vishing",
      "E. Smishing",
      "F. Misinformation"
    ],
    "correct": "CE",
    "confirmed": true
  },
  {
    "id": 11,
    "question": "Several employees received a fraudulent text message from someone claiming to be the Chief Executive Officer (CEO). The message stated: 'I'm in an airport right now with no access to email. I need you to buy gift cards for employee recognition awards. Please send the gift cards to following email address.' Which of the following are the best responses to this situation? (Choose two.)",
    "options": [
      "A. Cancel current employee recognition gift cards.",
      "B. Add a smishing exercise to the annual company training.",
      "C. Issue a general email warning to the company.",
      "D. Have the CEO change phone numbers.",
      "E. Conduct a forensic investigation on the CEO's phone.",
      "F. Implement mobile device management."
    ],
    "correct": "BC",
    "confirmed": true
  },
  {
    "id": 12,
    "question": "A company is required to use certified hardware when building networks. Which of the following best addresses the risks associated with procuring counterfeit hardware?",
    "options": [
      "A. A thorough analysis of the supply chain",
      "B. A legally enforceable corporate acquisition policy",
      "C. A right to audit clause in vendor contracts and SOWs",
      "D. An in-depth penetration test of all suppliers and vendors"
    ],
    "correct": "A",
    "confirmed": true
  },
  {
    "id": 13,
    "question": "Which of the following provides the details about the terms of a test with a third-party penetration tester?",
    "options": [
      "A. Rules of engagement",
      "B. Supply chain analysis",
      "C. Right to audit clause",
      "D. Due diligence"
    ],
    "correct": "A",
    "confirmed": true
  },
  {
    "id": 14,
    "question": "A penetration tester begins an engagement by performing port and service scans against the client environment according to the rules of engagement. Which of the following reconnaissance types is the tester performing?",
    "options": [
      "A. Active",
      "B. Passive",
      "C. Defensive",
      "D. Offensive"
    ],
    "correct": "A",
    "confirmed": true
  },
  {
    "id": 15,
    "question": "Which of the following is required for an organization to properly manage its restore process in the event of system failure?",
    "options": [
      "A. IRP",
      "B. DRP",
      "C. RPO",
      "D. SDLC"
    ],
    "correct": "B",
    "confirmed": true
  },
  {
    "id": 16,
    "question": "Which of the following vulnerabilities is associated with installing software outside of a manufacturer's approved software repository?",
    "options": [
      "A. Jailbreaking",
      "B. Memory injection",
      "C. Resource reuse",
      "D. Side loading"
    ],
    "correct": "D",
    "confirmed": true
  },
  {
    "id": 17,
    "question": "A security analyst is reviewing the following logs: [10:00:00 AM] Login rejected - username administrator - password Spring2023; [10:00:01 AM] Login rejected - username jsmith - password Spring2023; [10:00:01 AM] Login rejected - username guest - password Spring2023; [10:00:02 AM] Login rejected - username cpolk - password Spring2023; [10:00:03 AM] Login rejected - username fmartin - password Spring2023. Which of the following attacks is most likely occurring?",
    "options": [
      "A. Password spraying",
      "B. Account forgery",
      "C. Pass-the-hash",
      "D. Brute-force"
    ],
    "correct": "A",
    "confirmed": true
  },
  {
    "id": 18,
    "question": "An analyst is evaluating the implementation of Zero Trust principles within the data plane. Which of the following would be most relevant for the analyst to evaluate?",
    "options": [
      "A. Secured zones",
      "B. Subject role",
      "C. Adaptive identity",
      "D. Threat scope reduction"
    ],
    "correct": "A",
    "confirmed": true
  },
  {
    "id": 19,
    "question": "An engineer needs to find a solution that creates an added layer of security by preventing unauthorized access to internal company resources. Which of the following would be the best solution?",
    "options": [
      "A. RDP server",
      "B. Jump server",
      "C. Proxy server",
      "D. Hypervisor"
    ],
    "correct": "B",
    "confirmed": true
  },
  {
    "id": 20,
    "question": "A company's web filter is configured to scan the URL for strings and deny access when matches are found. Which of the following search strings should an analyst employ to prohibit access to non-encrypted websites?",
    "options": [
      "A. encryption=off",
      "B. http://",
      "C. www.*.com",
      "D. :443"
    ],
    "correct": "B",
    "confirmed": true
  },
  {
    "id": 21,
    "question": "During a security incident, the security operations team identified sustained network traffic from a malicious IP address: 10.1.4.9. A security analyst is creating an inbound firewall rule to block the IP address from accessing the organization's network. Which of the following fulfills this request?",
    "options": [
      "A. access-list inbound deny ip source 0.0.0.0/0 destination 10.1.4.9/32",
      "B. access-list inbound deny ip source 10.1.4.9/32 destination 0.0.0.0/0",
      "C. access-list inbound permit ip source 10.1.4.9/32 destination 0.0.0.0/0",
      "D. access-list inbound permit ip source 0.0.0.0/0 destination 10.1.4.9/32"
    ],
    "correct": "B",
    "confirmed": true
  },
  {
    "id": 22,
    "question": "A company needs to provide administrative access to internal resources while minimizing the traffic allowed through the security boundary. Which of the following methods is most secure?",
    "options": [
      "A. Implementing a bastion host",
      "B. Deploying a perimeter network",
      "C. Installing a WAF",
      "D. Utilizing single sign-on"
    ],
    "correct": "A",
    "confirmed": true
  },
  {
    "id": 23,
    "question": "A security analyst is reviewing alerts in the SIEM related to potential malicious network traffic coming from an employee's corporate laptop. The security analyst has determined that additional data about the executable running on the machine is necessary to continue the investigation. Which of the following logs should the analyst use as a data source?",
    "options": [
      "A. Application",
      "B. IPS/IDS",
      "C. Network",
      "D. Endpoint"
    ],
    "correct": "D",
    "confirmed": true
  },
  {
    "id": 24,
    "question": "A cyber operations team informs a security analyst about a new tactic malicious actors are using to compromise networks. SIEM alerts have not yet been configured. Which of the following best describes what the security analyst should do to identify this behavior?",
    "options": [
      "A. Digital forensics",
      "B. E-discovery",
      "C. Incident response",
      "D. Threat hunting"
    ],
    "correct": "D",
    "confirmed": true
  },
  {
    "id": 25,
    "question": "A company purchased cyber insurance to address items listed on the risk register. Which of the following strategies does this represent?",
    "options": [
      "A. Accept",
      "B. Transfer",
      "C. Mitigate",
      "D. Avoid"
    ],
    "correct": "B",
    "confirmed": true
  },
  {
    "id": 26,
    "question": "A security administrator would like to protect data on employees' laptops. Which of the following encryption techniques should the security administrator use?",
    "options": [
      "A. Partition",
      "B. Asymmetric",
      "C. Full disk",
      "D. Database"
    ],
    "correct": "C",
    "confirmed": true
  },
  {
    "id": 27,
    "question": "Which of the following security control types does an acceptable use policy best represent?",
    "options": [
      "A. Detective",
      "B. Compensating",
      "C. Corrective",
      "D. Preventive"
    ],
    "correct": "D",
    "confirmed": true
  },
  {
    "id": 28,
    "question": "An IT manager informs the entire help desk staff that only the IT manager and the help desk lead will have access to the administrator console of the help desk software. Which of the following security techniques is the IT manager setting up?",
    "options": [
      "A. Hardening",
      "B. Employee monitoring",
      "C. Configuration enforcement",
      "D. Least privilege"
    ],
    "correct": "D",
    "confirmed": true
  },
  {
    "id": 29,
    "question": "Which of the following is the most likely to be used to document risks, responsible parties, and thresholds?",
    "options": [
      "A. Risk tolerance",
      "B. Risk transfer",
      "C. Risk register",
      "D. Risk analysis"
    ],
    "correct": "C",
    "confirmed": true
  },
  {
    "id": 30,
    "question": "Which of the following should a security administrator adhere to when setting up a new set of firewall rules?",
    "options": [
      "A. Disaster recovery plan",
      "B. Incident response procedure",
      "C. Business continuity plan",
      "D. Change management procedure"
    ],
    "correct": "D",
    "confirmed": true
  },
  {
    "id": 31,
    "question": "A company is expanding its threat surface program and allowing individuals to security test the company's internet-facing application. The company will compensate researchers based on the vulnerabilities discovered. Which of the following best describes the program the company is setting up?",
    "options": [
      "A. Open-source intelligence",
      "B. Bug bounty",
      "C. Red team",
      "D. Penetration testing"
    ],
    "correct": "",
    "confirmed": false
  },
  {
    "id": 32,
    "question": "Which of the following threat actors is the most likely to use large financial resources to attack critical systems located in other countries?",
    "options": [
      "A. Insider",
      "B. Unskilled attacker",
      "C. Nation-state",
      "D. Hacktivist"
    ],
    "correct": "",
    "confirmed": false
  },
  {
    "id": 33,
    "question": "Which of the following enables the use of an input field to run commands that can view or manipulate data?",
    "options": [
      "A. Cross-site scripting",
      "B. Side loading",
      "C. Buffer overflow",
      "D. SQL injection"
    ],
    "correct": "",
    "confirmed": false
  },
  {
    "id": 34,
    "question": "Employees in the research and development business unit receive extensive training to ensure they understand how to best protect company data. Which of the following is the type of data these employees are most likely to use in day-to-day work activities?",
    "options": [
      "A. Encrypted",
      "B. Intellectual property",
      "C. Critical",
      "D. Data in transit"
    ],
    "correct": "",
    "confirmed": false
  },
  {
    "id": 35,
    "question": "A company has begun labeling all laptops with asset inventory stickers and associating them with employee IDs. Which of the following security benefits do these actions provide? (Choose two.)",
    "options": [
      "A. If a security incident occurs on the device, the correct employee can be notified.",
      "B. The security team will be able to send user awareness training to the appropriate device.",
      "C. Users can be mapped to their devices when configuring software MFA tokens.",
      "D. User-based firewall policies can be correctly targeted to the appropriate laptops.",
      "E. When conducting penetration testing, the security team will be able to target the desired laptops.",
      "F. Company data can be accounted for when the employee leaves the organization."
    ],
    "correct": "",
    "confirmed": false
  },
  {
    "id": 36,
    "question": "A technician wants to improve the situational and environmental awareness of existing users as they transition from remote to in-office work. Which of the following is the best option?",
    "options": [
      "A. Send out periodic security reminders.",
      "B. Update the content of new hire documentation.",
      "C. Modify the content of recurring training.",
      "D. Implement a phishing campaign."
    ],
    "correct": "",
    "confirmed": false
  },
  {
    "id": 37,
    "question": "A newly appointed board member with cybersecurity knowledge wants the board of directors to receive a quarterly report detailing the number of incidents that impacted the organization. The systems administrator is creating a way to present the data to the board of directors. Which of the following should the systems administrator use?",
    "options": [
      "A. Packet captures",
      "B. Vulnerability scans",
      "C. Metadata",
      "D. Dashboard"
    ],
    "correct": "",
    "confirmed": false
  },
  {
    "id": 38,
    "question": "A systems administrator receives the following alert from a file integrity monitoring tool: The hash of the cmd.exe file has changed. The systems administrator checks the OS logs and notices that no patches were applied in the last two months. Which of the following most likely occurred?",
    "options": [
      "A. The end user changed the file permissions.",
      "B. A cryptographic collision was detected.",
      "C. A snapshot of the file system was taken.",
      "D. A rootkit was deployed."
    ],
    "correct": "",
    "confirmed": false
  },
  {
    "id": 39,
    "question": "Which of the following roles, according to the shared responsibility model, is responsible for securing the company's database in an IaaS model for a cloud environment?",
    "options": [
      "A. Client",
      "B. Third-party vendor",
      "C. Cloud provider",
      "D. DBA"
    ],
    "correct": "",
    "confirmed": false
  },
  {
    "id": 40,
    "question": "A client asked a security company to provide a document outlining the project, the cost, and the completion time frame. Which of the following documents should the company provide to the client?",
    "options": [
      "A. MSA",
      "B. SLA",
      "C. BPA",
      "D. SOW"
    ],
    "correct": "",
    "confirmed": false
  },
  {
    "id": 41,
    "question": "A security team is reviewing the findings in a report that was delivered after a third party performed a penetration test. One of the findings indicated that a web application form field is vulnerable to cross-site scripting. Which of the following application security techniques should the security analyst recommend the developer implement to prevent this vulnerability?",
    "options": [
      "A. Secure cookies",
      "B. Version control",
      "C. Input validation",
      "D. Code signing"
    ],
    "correct": "",
    "confirmed": false
  },
  {
    "id": 42,
    "question": "Which of the following must be considered when designing a high-availability network? (Choose two.)",
    "options": [
      "A. Ease of recovery",
      "B. Ability to patch",
      "C. Physical isolation",
      "D. Responsiveness",
      "E. Attack surface",
      "F. Extensible authentication"
    ],
    "correct": "",
    "confirmed": false
  },
  {
    "id": 43,
    "question": "A technician needs to apply a high-priority patch to a production system. Which of the following steps should be taken first?",
    "options": [
      "A. Air gap the system.",
      "B. Move the system to a different network segment.",
      "C. Create a change control request.",
      "D. Apply the patch to the system."
    ],
    "correct": "",
    "confirmed": false
  },
  {
    "id": 44,
    "question": "Which of the following describes the reason root cause analysis should be conducted as part of incident response?",
    "options": [
      "A. To gather IoCs for the investigation",
      "B. To discover which systems have been affected",
      "C. To eradicate any trace of malware on the network",
      "D. To prevent future incidents of the same nature"
    ],
    "correct": "",
    "confirmed": false
  },
  {
    "id": 45,
    "question": "Which of the following is the most likely outcome if a large bank fails an internal PCI DSS compliance assessment?",
    "options": [
      "A. Fines",
      "B. Audit findings",
      "C. Sanctions",
      "D. Reputation damage"
    ],
    "correct": "",
    "confirmed": false
  },
  {
    "id": 46,
    "question": "A company is developing a business continuity strategy and needs to determine how many staff members would be required to sustain the business in the case of a disruption. Which of the following best describes this step?",
    "options": [
      "A. Capacity planning",
      "B. Redundancy",
      "C. Geographic dispersion",
      "D. Tabletop exercise"
    ],
    "correct": "",
    "confirmed": false
  },
  {
    "id": 47,
    "question": "A company's legal department drafted sensitive documents in a SaaS application and wants to ensure the documents cannot be accessed by individuals in high-risk countries. Which of the following is the most effective way to limit this access?",
    "options": [
      "A. Data masking",
      "B. Encryption",
      "C. Geolocation policy",
      "D. Data sovereignty regulation"
    ],
    "correct": "",
    "confirmed": false
  },
  {
    "id": 48,
    "question": "Which of the following is a hardware-specific vulnerability?",
    "options": [
      "A. Firmware version",
      "B. Buffer overflow",
      "C. SQL injection",
      "D. Cross-site scripting"
    ],
    "correct": "",
    "confirmed": false
  },
  {
    "id": 49,
    "question": "While troubleshooting a firewall configuration, a technician determines that a 'deny any' policy should be added to the bottom of the ACL. The technician updates the policy, but the new policy causes several company servers to become unreachable. Which of the following actions would prevent this issue?",
    "options": [
      "A. Documenting the new policy in a change request and submitting the request to change management",
      "B. Testing the policy in a non-production environment before enabling the policy in the production network",
      "C. Disabling any intrusion prevention signatures on the 'deny any' policy prior to enabling the new policy",
      "D. Including an 'allow any' policy above the 'deny any' policy"
    ],
    "correct": "",
    "confirmed": false
  },
  {
    "id": 50,
    "question": "An organization is building a new backup data center with cost-benefit as the primary requirement and RTO and RPO values around two days. Which of the following types of sites is the best for this scenario?",
    "options": [
      "A. Real-time recovery",
      "B. Hot",
      "C. Cold",
      "D. Warm"
    ],
    "correct": "",
    "confirmed": false
  },
  {
    "id": 51,
    "question": "A company requires hard drives to be securely wiped before sending decommissioned systems to recycling. Which of the following best describes this policy?",
    "options": [
      "A. Enumeration",
      "B. Sanitization",
      "C. Destruction",
      "D. Inventory"
    ],
    "correct": "",
    "confirmed": false
  },
  {
    "id": 52,
    "question": "A systems administrator works for a local hospital and needs to ensure patient data is protected and secure. Which of the following data classifications should be used to secure patient data?",
    "options": [
      "A. Private",
      "B. Critical",
      "C. Sensitive",
      "D. Public"
    ],
    "correct": "",
    "confirmed": false
  },
  {
    "id": 53,
    "question": "A U.S.-based cloud-hosting provider wants to expand its data centers to new international locations. Which of the following should the hosting provider consider first?",
    "options": [
      "A. Local data protection regulations",
      "B. Risks from hackers residing in other countries",
      "C. Impacts to existing contractual obligations",
      "D. Time zone differences in log correlation"
    ],
    "correct": "",
    "confirmed": false
  },
  {
    "id": 54,
    "question": "Which of the following would be the best way to block unknown programs from executing?",
    "options": [
      "A. Access control list",
      "B. Application allow list",
      "C. Host-based firewall",
      "D. DLP solution"
    ],
    "correct": "",
    "confirmed": false
  },
  {
    "id": 55,
    "question": "A company hired a consultant to perform an offensive security assessment covering penetration testing and social engineering. Which of the following teams will conduct this assessment activity?",
    "options": [
      "A. White",
      "B. Purple",
      "C. Blue",
      "D. Red"
    ],
    "correct": "",
    "confirmed": false
  },
  {
    "id": 56,
    "question": "A software development manager wants to ensure the authenticity of the code created by the company. Which of the following options is the most appropriate?",
    "options": [
      "A. Testing input validation on the user input fields",
      "B. Performing code signing on company-developed software",
      "C. Performing static code analysis on the software",
      "D. Ensuring secure cookies are use"
    ],
    "correct": "",
    "confirmed": false
  },
  {
    "id": 57,
    "question": "Which of the following can be used to identify potential attacker activities without affecting production servers?",
    "options": [
      "A. Honeypot",
      "B. Video surveillance",
      "C. Zero Trust",
      "D. Geofencing"
    ],
    "correct": "",
    "confirmed": false
  },
  {
    "id": 58,
    "question": "During an investigation, an incident response team attempts to understand the source of an incident. Which of the following incident response activities describes this process?",
    "options": [
      "A. Analysis",
      "B. Lessons learned",
      "C. Detection",
      "D. Containment"
    ],
    "correct": "",
    "confirmed": false
  },
  {
    "id": 59,
    "question": "A security practitioner completes a vulnerability assessment on a company's network and finds several vulnerabilities, which the operations team remediates. Which of the following should be done next?",
    "options": [
      "A. Conduct an audit.",
      "B. Initiate a penetration test.",
      "C. Rescan the network.",
      "D. Submit a report."
    ],
    "correct": "",
    "confirmed": false
  },
  {
    "id": 60,
    "question": "An administrator was notified that a user logged in remotely after hours and copied large amounts of data to a personal device. Which of the following best describes the user's activity?",
    "options": [
      "A. Penetration testing",
      "B. Phishing campaign",
      "C. External audit",
      "D. Insider threat"
    ],
    "correct": "",
    "confirmed": false
  },
  {
    "id": 61,
    "question": "Which of the following allows for the attribution of messages to individuals?",
    "options": [
      "A. Adaptive identity",
      "B. Non-repudiation",
      "C. Authentication",
      "D. Access logs"
    ],
    "correct": "",
    "confirmed": false
  },
  {
    "id": 62,
    "question": "Which of the following is the best way to consistently determine on a daily basis whether security settings on servers have been modified?",
    "options": [
      "A. Automation",
      "B. Compliance checklist",
      "C. Attestation",
      "D. Manual audit"
    ],
    "correct": "",
    "confirmed": false
  },
  {
    "id": 63,
    "question": "Which of the following tools can assist with detecting an employee who has accidentally emailed a file containing a customer's PII?",
    "options": [
      "A. SCAP",
      "B. NetFlow",
      "C. Antivirus",
      "D. DLP"
    ],
    "correct": "",
    "confirmed": false
  },
  {
    "id": 64,
    "question": "An organization recently updated its security policy to include the following statement: Regular expressions are included in source code to remove special characters such as $, |, ;, &, `, and ? from variables set by forms in a web application. Which of the following best explains the security technique the organization adopted by making this addition to the policy?",
    "options": [
      "A. Identify embedded keys",
      "B. Code debugging",
      "C. Input validation",
      "D. Static code analysis"
    ],
    "correct": "",
    "confirmed": false
  },
  {
    "id": 65,
    "question": "A security analyst and the management team are reviewing the organizational performance of a recent phishing campaign. The user click-through rate exceeded the acceptable risk threshold, and the management team wants to reduce the impact when a user clicks on a link in a phishing message. Which of the following should the analyst do?",
    "options": [
      "A. Place posters around the office to raise awareness of common phishing activities.",
      "B. Implement email security filters to prevent phishing emails from being delivered.",
      "C. Update the EDR policies to block automatic execution of downloaded programs.",
      "D. Create additional training for users to recognize the signs of phishing attempts."
    ],
    "correct": "",
    "confirmed": false
  },
  {
    "id": 66,
    "question": "Which of the following has been implemented when a host-based firewall on a legacy Linux system allows connections from only specific internal IP addresses?",
    "options": [
      "A. Compensating control",
      "B. Network segmentation",
      "C. Transfer of risk",
      "D. SNMP traps"
    ],
    "correct": "",
    "confirmed": false
  },
  {
    "id": 67,
    "question": "The management team notices that new accounts that are set up manually do not always have correct access or permissions. Which of the following automation techniques should a systems administrator use to streamline account creation?",
    "options": [
      "A. Guard rail script",
      "B. Ticketing workflow",
      "C. Escalation script",
      "D. User provisioning script"
    ],
    "correct": "",
    "confirmed": false
  },
  {
    "id": 68,
    "question": "A company is planning to set up a SIEM system and assign an analyst to review the logs on a weekly basis. Which of the following types of controls is the company setting up?",
    "options": [
      "A. Corrective",
      "B. Preventive",
      "C. Detective",
      "D. Deterrent"
    ],
    "correct": "",
    "confirmed": false
  },
  {
    "id": 69,
    "question": "A systems administrator is looking for a low-cost application-hosting solution that is cloud-based. Which of the following meets these requirements?",
    "options": [
      "A. Serverless framework",
      "B. Type 1 hypervisor",
      "C. SD-WAN",
      "D. SDN"
    ],
    "correct": "",
    "confirmed": false
  },
  {
    "id": 70,
    "question": "A security operations center determines that the malicious activity detected on a server is normal. Which of the following activities describes the act of ignoring detected activity in the future?",
    "options": [
      "A. Tuning",
      "B. Aggregating",
      "C. Quarantining",
      "D. Archiving"
    ],
    "correct": "",
    "confirmed": false
  },
  {
    "id": 71,
    "question": "A security analyst reviews domain activity logs and notices the following: UserID jsmith, password authentication: succeeded, MFA: failed (invalid code) - repeated multiple times. Which of the following is the best explanation for what the security analyst has discovered?",
    "options": [
      "A. The user jsmith's account has been locked out.",
      "B. A keylogger is installed on jsmith's workstation.",
      "C. An attacker is attempting to brute force jsmith's account.",
      "D. Ransomware has been deployed in the domain."
    ],
    "correct": "",
    "confirmed": false
  },
  {
    "id": 72,
    "question": "A company is concerned about weather events causing damage to the server room and downtime. Which of the following should the company consider?",
    "options": [
      "A. Clustering servers",
      "B. Geographic dispersion",
      "C. Load balancers",
      "D. Off-site backups"
    ],
    "correct": "",
    "confirmed": false
  },
  {
    "id": 73,
    "question": "Which of the following is a primary security concern for a company setting up a BYOD program?",
    "options": [
      "A. End of life",
      "B. Buffer overflow",
      "C. VM escape",
      "D. Jailbreaking"
    ],
    "correct": "",
    "confirmed": false
  },
  {
    "id": 74,
    "question": "A company decided to reduce the cost of its annual cyber insurance policy by removing the coverage for ransomware attacks. Which of the following analysis elements did the company most likely use in making this decision?",
    "options": [
      "A. MTTR",
      "B. RTO",
      "C. ARO",
      "D. MTBF"
    ],
    "correct": "",
    "confirmed": false
  },
  {
    "id": 75,
    "question": "Which of the following is the most likely to be included as an element of communication in a security awareness program?",
    "options": [
      "A. Reporting phishing attempts or other suspicious activities",
      "B. Detecting insider threats using anomalous behavior recognition",
      "C. Verifying information when modifying wire transfer data",
      "D. Performing social engineering as part of third-party penetration testing"
    ],
    "correct": "",
    "confirmed": false
  },
  {
    "id": 76,
    "question": "HOTSPOT - Select the appropriate attack and remediation from each drop-down list to label the corresponding attack with its remediation. (Simulation question with table of attacks: SYN packets from multiple sources, remote command execution, self-propagating SQL database compromise, hardware keylogger monitoring, hidden backdoor in internally developed application)",
    "options": [
      "A. Simulation-based question - see original image",
      "B. N/A - Interactive hotspot",
      "C. Requires matching multiple items",
      "D. See question 76 image for details"
    ],
    "correct": "",
    "confirmed": false
  },
  {
    "id": 77,
    "question": "Question 77 image was not available in the provided files.",
    "options": [
      "A. N/A",
      "B. N/A",
      "C. N/A",
      "D. N/A"
    ],
    "correct": "",
    "confirmed": false
  },
  {
    "id": 78,
    "question": "Which of the following is the phase in the incident response process when a security analyst reviews roles and responsibilities?",
    "options": [
      "A. Preparation",
      "B. Recovery",
      "C. Lessons learned",
      "D. Analysis"
    ],
    "correct": "",
    "confirmed": false
  },
  {
    "id": 79,
    "question": "After a recent vulnerability scan, a security engineer needs to harden the routers within the corporate network. Which of the following is the most appropriate to disable?",
    "options": [
      "A. Console access",
      "B. Routing protocols",
      "C. VLANs",
      "D. Web-based administration"
    ],
    "correct": "",
    "confirmed": false
  },
  {
    "id": 80,
    "question": "A security administrator needs a method to secure data in an environment that includes some form of checks so track any changes. Which of the following should the administrator set up to achieve this goal?",
    "options": [
      "A. SPF",
      "B. GPO",
      "C. NAC",
      "D. FIM"
    ],
    "correct": "",
    "confirmed": false
  },
  {
    "id": 81,
    "question": "An administrator is reviewing a single server's security logs and discovers multiple audit failure logon events (Event ID 4625) occurring in rapid succession. Which of the following best describes the action captured in this log file?",
    "options": [
      "A. Brute-force attack",
      "B. Privilege escalation",
      "C. Failed password audit",
      "D. Forgotten password by the user"
    ],
    "correct": "",
    "confirmed": false
  },
  {
    "id": 82,
    "question": "A security engineer is implementing FDE for all laptops in an organization. Which of the following are the most important for the engineer to consider as part of the planning process? (Choose two.)",
    "options": [
      "A. Key escrow",
      "B. TPM presence",
      "C. Digital signatures",
      "D. Data tokenization",
      "E. Public key management",
      "F. Certificate authority linking"
    ],
    "correct": "",
    "confirmed": false
  },
  {
    "id": 83,
    "question": "A security analyst scans a company's public network and discovers a host is running a remote desktop that can be used to access the production network. Which of the following changes should the security analyst recommend?",
    "options": [
      "A. Changing the remote desktop port to a non-standard number",
      "B. Setting up a VPN and placing the jump server inside the firewall",
      "C. Using a proxy for web connections from the remote desktop server",
      "D. Connecting the remote server to the domain and increasing the password length"
    ],
    "correct": "",
    "confirmed": false
  },
  {
    "id": 84,
    "question": "An enterprise has been experiencing attacks focused on exploiting vulnerabilities in older browser versions with well-known exploits. Which of the following security solutions should be configured to best provide the ability to monitor and block these known signature-based attacks?",
    "options": [
      "A. ACL",
      "B. DLP",
      "C. IDS",
      "D. IPS"
    ],
    "correct": "",
    "confirmed": false
  },
  {
    "id": 85,
    "question": "Security controls in a data center are being reviewed to ensure data is properly protected and that human life considerations are included. Which of the following best describes how the controls should be set up?",
    "options": [
      "A. Remote access points should fail closed.",
      "B. Logging controls should fail open.",
      "C. Safety controls should fail open.",
      "D. Logical security controls should fail closed."
    ],
    "correct": "",
    "confirmed": false
  },
  {
    "id": 86,
    "question": "Which of the following would be best suited for constantly changing environments?",
    "options": [
      "A. RTOS",
      "B. Containers",
      "C. Embedded systems",
      "D. SCADA"
    ],
    "correct": "",
    "confirmed": false
  },
  {
    "id": 87,
    "question": "Which of the following incident response activities ensures evidence is properly handled?",
    "options": [
      "A. E-discovery",
      "B. Chain of custody",
      "C. Legal hold",
      "D. Preservation"
    ],
    "correct": "",
    "confirmed": false
  },
  {
    "id": 88,
    "question": "An accounting clerk sent money to an attacker's bank account after receiving fraudulent instructions to use a new account. Which of the following would most likely prevent this activity in the future?",
    "options": [
      "A. Standardizing security incident reporting",
      "B. Executing regular phishing campaigns",
      "C. Implementing insider threat detection measures",
      "D. Updating processes for sending wire transfers"
    ],
    "correct": "",
    "confirmed": false
  },
  {
    "id": 89,
    "question": "A systems administrator is creating a script that would save time and prevent human error when performing account creation for a large number of end users. Which of the following would be a good use case for this task?",
    "options": [
      "A. Off-the-shelf software",
      "B. Orchestration",
      "C. Baseline",
      "D. Policy enforcement"
    ],
    "correct": "",
    "confirmed": false
  },
  {
    "id": 90,
    "question": "A company's marketing department collects, modifies, and stores sensitive customer data. The infrastructure team is responsible for securing the data while in transit and at rest. Which of the following data roles describes the customer?",
    "options": [
      "A. Processor",
      "B. Custodian",
      "C. Subject",
      "D. Owner"
    ],
    "correct": "",
    "confirmed": false
  }
];
