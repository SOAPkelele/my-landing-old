import { LinkText } from 'components/Text'
import Project from 'models/Project'

const projects: Project[] = [
  {
    title: '@surfwaybookingbot',
    subtitle: 'Telegram bot for booking surfway classes.',
    url: 'https://t.me/surfwaybookingbot',
    description: [
      "This is my biggest and most complex bot I've done. It provides automation of booking classes, buying and activating certificates, making deposits. I've connected it to a payment solution and made integration with a CRM system. The bot features calendar for choosing dates of classes which is implemented using native telegram buttons. The initial schema of database was totally redisigned by me to make it possible to store all types of calendars, classes and certificates. It also has a messaging system. Metabase is used to provide charts and tables for analytics. The bot and metabase run in docker containers.",
    ],
    technologies: ['Python', 'MySQL', 'Redis', 'Docker', 'Metabase'],
  },
  {
    title: '@workoutybot',
    subtitle: 'Telegram bot for saving workouts and weight measurements.',
    url: 'https://t.me/workoutybot',
    description: [
      "Workoutybot is my favourite pet project. I love sports and some time ago I didn't find an app which would be simple enough and better than plain textbook, so I created this bot. It provides minimalistic interface with calendar to view and save workouts. I also added a graph chart to view weight progress.",
      'I wrote an article at vc.ru promoting this bot. More than 2000+ users registred since then and they are still coming.',
    ],
    technologies: ['Python', 'PostgreSQL', 'Redis', 'Docker', 'TypeScript'],
  },
  {
    title: 'antonbuev.com',
    subtitle: 'This is this website!',
    url: 'https://antonbuev.com/',
    github: 'https://github.com/SOAPkelele/my-landing',
    description: ['Any developer needs one!'],
    technologies: ['TypeScript', 'TailwindCSS', 'React'],
  },
  {
    title: '@ltuniversity_bot',
    subtitle: 'Multilingual Telegram bot for crypto quizes.',
    url: 'https://t.me/ltuniversity_bot',
    description: [
      'Beatiful Telegram bot for taking polls from LocalTrade University. It utilizes built-in telegram quizes providing flowless experience. It is available in 4 languages and has a small admin panel where you can get stats. Adding new polls and questions is automated by parsing google spreadsheet.',
    ],
    technologies: ['Python', 'PostgreSQL', 'Docker'],
  },
  {
    title: 'Smart camera',
    subtitle: 'Rasberry Pi and camera to detect people.',
    github: 'https://github.com/soapkelele/smart-camera',
    description: [
      "A coursework project for Sberbank's internal use. It's a program to identify people who perform maintenance and repair of equipment in the office environment. I found, trained and compressed a neural network so we could start it on a Rasberry  Pi.",
    ],
    technologies: ['Python', 'Rasberry Pi', 'OpenCV', 'YoloV4', 'TFLite'],
  },
]

export default projects