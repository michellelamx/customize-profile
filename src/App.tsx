import { users, userItem } from './data/users.ts'
import './styles/main.css'


export const App = () => {

  return (
    <section className='user-profile'>
      {users.map((user: userItem) => (
        <div className='user-profile-details' key={user.id}>
          <img className='profile-image' src={user.image} alt={user.username} />
          <h1 className='user-name'>{user.username}</h1>
          <p className='user-bio'>{user.bio}</p>
          <div className='user-socials'>
            {user.socials &&user.socials.map((social) => (
              <a key={social.url} className='user-social' href={social.url}>
                {social.icon && (
                  typeof social.icon === 'string'
                    ? <img src={social.icon} alt={social.title} className='social-icon' />
                    : social.icon
                )}
              </a>
            ))}
          </div>
          <div className='user-links'>
            {user.links.map((link) => (
              <a key={link.url} className='user-link' href={link.url}>
                {link.title}
              </a>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}
