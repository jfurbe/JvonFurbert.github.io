import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyBill1, faBagShopping, faTags, faHandshake, faPeopleGroup, faSyringe} from '@fortawesome/free-solid-svg-icons'


const money = <FontAwesomeIcon icon={faMoneyBill1} size='xl'/>
const shop = <FontAwesomeIcon icon={faBagShopping} size='xl'/>
const tags = <FontAwesomeIcon icon={faTags} size='xl'/>
const shake = <FontAwesomeIcon icon={faHandshake} size='xl'/>
const ppl = <FontAwesomeIcon icon={faPeopleGroup} size='xl'/>
const syr = <FontAwesomeIcon icon={faSyringe} size='xl'/>

const stats = [
  {
    title : 'GPD',
    icon : money,
    high: '$1,479.1 million',
    text: 'Increasing 3.6 percent, estimated at constant prices'

  },
  {
  title: 'RSI',
  icon : shop,
  high: '5.8%',
  text:'Sales volume increase for January 2021'

  },
  {
  title: 'CPI',
  icon : tags,
  high : '108.6',
  text : 'A basket of goods/services have increased from $100.00 to $108.60'
  },
  {
    title: 'BOP',
    icon : shake,
    high : '$303 million',
    text : 'Bermuda’s trade surplus for the first quarter of 2021'
  },
  {
    title: 'Population',
    icon: ppl,
    high: '62,090',
    text: 'Boasting an expatriate population of 18,000'
  },
  {
    title: 'Vacinated',
    icon : syr,
    high: '73.7%',
    text: 'Fully Vacinated Individuals'

  }
]

export default stats;