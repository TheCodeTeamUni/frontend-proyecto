import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  countries = [
    'Select...',
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Anguilla',
    'Antigua &amp; Barbuda',
    'Argentina',
    'Armenia',
    'Aruba',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bermuda',
    'Bhutan',
    'Bolivia',
    'Bosnia &amp; Herzegovina',
    'Botswana',
    'Brazil',
    'British Virgin Islands',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Cape Verde',
    'Cayman Islands',
    'Chad',
    'Chile',
    'China',
    'Colombia',
    'Congo',
    'Cook Islands',
    'Costa Rica',
    'Cote D Ivoire',
    'Croatia',
    'Cruise Ship',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Estonia',
    'Ethiopia',
    'Falkland Islands',
    'Faroe Islands',
    'Fiji',
    'Finland',
    'France',
    'French Polynesia',
    'French West Indies',
    'Gabon',
    'Gambia',
    'Georgia',
    'Germany',
    'Ghana',
    'Gibraltar',
    'Greece',
    'Greenland',
    'Grenada',
    'Guam',
    'Guatemala',
    'Guernsey',
    'Guinea',
    'Guinea Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hong Kong',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Isle of Man',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jersey',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kuwait',
    'Kyrgyz Republic',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macau',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Montenegro',
    'Montserrat',
    'Morocco',
    'Mozambique',
    'Namibia',
    'Nepal',
    'Netherlands',
    'Netherlands Antilles',
    'New Caledonia',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palestine',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Puerto Rico',
    'Qatar',
    'Reunion',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Pierre &amp; Miquelon',
    'Samoa',
    'San Marino',
    'Satellite',
    'Saudi Arabia',
    'Senegal',
    'Serbia',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'South Africa',
    'South Korea',
    'Spain',
    'Sri Lanka',
    'St Kitts &amp; Nevis',
    'St Lucia',
    'St Vincent',
    'St. Lucia',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    "Timor L'Este",
    'Togo',
    'Tonga',
    'Trinidad &amp; Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Turks &amp; Caicos',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'Uruguay',
    'Uzbekistan',
    'Venezuela',
    'Vietnam',
    'Virgin Islands (US)',
    'Yemen',
    'Zambia',
    'Zimbabwe',
  ];

  positions = [
    'Select...',
    'Chief Technology Officer (CTO)',
    'Chief Information Officer (CIO)',
    'IT Project Manager',
    'Software Developer',
    'Network Engineer',
    'Systems Administrator',
    'Database Administrator',
    'Information Security Specialist',
    'Data Analyst',
    'Business Analyst',
    'IT Consultant',
    'Technical Support Specialist',
    'Software Architect',
    'User Experience (UX) Designer',
    'Front-end Developer',
    'Back-end Developer',
    'Artificial Intelligence (AI) Specialist',
    'Cybersecurity Analyst',
    'DevOps Engineer',
    'Cloud Computing Specialist',
  ];

  skills = [
    'Python',
    'Java',
    'JavaScript',
    'C++',
    'Ruby',
    'Swift',
    'Kotlin',
    'Go',
    'React.js',
    'Angular',
    'Node.js',
    'Django',
    'Ruby on Rails',
    'TensorFlow',
    'PyTorch',
    '.NET',
    'Windows',
    'Linux (Ubuntu, CentOS, etc.)',
    'macOS',
    'Android',
    'iOS',
    'MySQL',
    'PostgreSQL',
    'MongoDB',
    'Microsoft SQL Server',
    'Oracle',
    'Redis',
    'HTML5',
    'CSS3',
    'RESTful API',
    'GraphQL',
    'WebSockets',
    'Docker',
    'Kubernetes',
    'VMware',
    'Amazon Web Services (AWS)',
    'Microsoft Azure',
    'Google Cloud Platform (GCP)',
    'Firewall',
    'VPN',
    'IDS/IPS (Sistemas de Detección/Prevención de Intrusiones)',
    'Criptografía',
    'TCP/IP',
    'DNS (Sistema de Nombres de Dominio)',
    'SDN (Redes Definidas por Software)',
    '5G',
    'TensorFlow',
    'PyTorch',
    'scikit-learn',
    'Keras',
    'Android Studio',
    'Xcode',
    'React Native',
    'Flutter',
    'Ethereum',
    'Hyperledger',
    'Solidity',
    'Jenkins',
    'Ansible',
    'Puppet',
    'Terraform',
    'Tableau',
    'Power BI',
    'Google Data Studio',
    'Jupyter Notebook',
    'Raspberry Pi',
    'Arduino',
    'MQTT (Protocolo de Mensajería Telemétrica Ligera)',
    'Unity',
    'Unreal Engine',
    'ARKit',
    'Oculus Rift',
  ];

  yearsOfExperience = [
    'select...',
    'Menos de 1 año de experiencia',
    '1 año de experiencia',
    '2 años de experiencia',
    '3 años de experiencia',
    '4 años de experiencia',
    '5 años de experiencia',
    '6 años de experiencia',
    '7 años de experiencia',
    '8 años de experiencia',
    '9 años de experiencia',
    '10 años de experiencia o más',
  ];
}
