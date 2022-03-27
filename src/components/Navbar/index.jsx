import './styles.css'
import {Button} from "../Button";
import logo from '../../assets/icons/student.ico'

const navButtons = [
  {
    id: 0,
    name: 'Главная',
    link: '/'
  },
  {
    id: 1,
    name: 'Что-то еще',
    link: '/secondPage'
  },
  {
    id: 2,
    name: 'О сайте',
    link: '/'
  }
]


export const Navbar = ({userName = 'Войти'}) => {

    return (
        <div className='navbar'>
          <div className='leftNavbar'>
            <a href='/' >
              <img className='logo' src={logo} alt='Logo' />
            </a>
            {navButtons.map((item, i) => (
              <Button
                key={i}
                title={item.name}
                link={item.link}
              />
            ))}
          </div>
          <Button title={userName} onClick={() => console.log('Hello')}/>
        </div>
    )
}
