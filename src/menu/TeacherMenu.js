import { Menu, MenuItemLink } from 'react-admin'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import SchoolIcon from '@material-ui/icons/School'

export const TeacherMenu = props => (
  <Menu {...props}>
    <MenuItemLink replace to='/profile' primaryText='Mon profil' leftIcon={<AccountCircleIcon />} />
    <MenuItemLink replace to='/students' primaryText='Étudiants' leftIcon={<SchoolIcon />} />
  </Menu>
)

export default TeacherMenu