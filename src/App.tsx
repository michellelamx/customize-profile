import { Button } from '@/components/Button/'
import { RadioGroup, RadioGroupItem } from '@/components/RadioGroup/radioGroup'
import { users, userItem } from './data/users.ts'
import { useLocalStorage } from './hooks/useLocalStorage'
import { ChangeEvent, memo, useState, useEffect } from 'react'
import './styles/main.css'

interface Settings {
  layoutStyle: 'classic-style' | 'grid-style';
  backgroundColor: string;
  buttonStyle: 'rounded' | 'squared';
  buttonColor: string;
  buttonTextColor: string;
}

const DEFAULT_SETTINGS: Settings = {
  layoutStyle: 'classic-style',
  backgroundColor: '#F3F3F1',
  buttonStyle: 'rounded',
  buttonColor: '#9541FF',
  buttonTextColor: '#ffffff',
}

{/* TODO: move UserProfile to a separate component */}
const UserProfile = memo(({ user, settings }: { user: userItem; settings: Settings }) => (
  <div className='user-profile-details' key={user.id}>
    <img className='profile-image' src={user.image} alt={user.username} />
    <h2 className='user-name'>{user.username}</h2>
    <p className='user-bio'>{user.bio}</p>
    <div className='user-socials'>
      {user.socials && user.socials.map((social) => (
        <a key={social.url} className='user-social' href={social.url}>
          {social.icon && (
            typeof social.icon === 'string'
              ? <img src={social.icon} alt={social.icon} className='social-icon' />
              : social.icon
          )}
        </a>
      ))}
    </div>
    <div className={`user-links ${settings.layoutStyle}`}>
      {user.links.map((link) => (
        <Button asChild
          key={link.url}
          className='user-link'
          variant={settings.buttonStyle}
          customStyle={{
            backgroundColor: settings.buttonColor,
            color: settings.buttonTextColor
          }}
        >
          <a href={link.url}>{link.title}</a>
        </Button>
      ))}
    </div>
  </div>
))

export const App = () => {
  {/* TODO: instead of localStorage, use a backend service - I just used localStorage for ease
      of development and to make sure that the settings persisted between page reloads. */}
  const [settings, setSettings] = useLocalStorage<Settings>('userProfileSettings', DEFAULT_SETTINGS)
  const [initialSettings, setInitialSettings] = useState<Settings>(settings)
  const [isSaved, setIsSaved] = useState(false)
  const [isChanged, setIsChanged] = useState(false)

  useEffect(() => {
    const settingsChanged = JSON.stringify(settings) !== JSON.stringify(initialSettings)
    setIsChanged(settingsChanged)
  }, [settings, initialSettings])

  const handleColorChange = (settingName: 'backgroundColor' | 'buttonColor' | 'buttonTextColor') => (e: ChangeEvent<HTMLInputElement>) => {
    setSettings({ ...settings, [settingName]: e.target.value })
  }

  const handleLayoutChange = (value: Settings['layoutStyle']) => {
    setSettings({ ...settings, layoutStyle: value })
  }

  const handleButtonStyleChange = (newStyle: Settings['buttonStyle']) => {
    setSettings({ ...settings, buttonStyle: newStyle })
  }

  const handleSaveChanges = () => {
    setInitialSettings(settings)
    setIsChanged(false)
    setIsSaved(true)
    setTimeout(() => setIsSaved(false), 3000)
  }

  return (
    <section className='customize-profile'>
      <h1>Customize your profile</h1>
      <div className='content-container'>
        <div className='settings-container'>
          <h2>Choose Your Styles</h2>
          <div className='customization-section'>
            <div className='section-title'>Layout Options</div>
            <div className='selection-wrapper'>
              <RadioGroup
                defaultValue={settings.layoutStyle}
                className='two-column'
                onValueChange={handleLayoutChange}
              >
                <div className='column'>
                  <RadioGroupItem value='classic-style' id='classic-style' />
                  <label htmlFor='classic-style'>classic style (single column)</label>
                </div>
                <div className='column'>
                  <RadioGroupItem value='grid-style' id='grid-style' />
                  <label htmlFor='grid-style'>grid style (two columns)</label>
                </div>
              </RadioGroup>
            </div>
          </div>
          {/* TODO: for all the customization sections, create a separate component and pass in the title,
          and the method of selecting the value (ie color picker, radio group, input, etc) as props. */}
          <div className='customization-section'>
            <div className='section-title'>Background Options</div>
            <div className='selection-wrapper'>
              <div className='selection-title'>color:</div>
              <input
                type='color'
                name='backgroundColor'
                value={settings.backgroundColor}
                onChange={handleColorChange('backgroundColor')}
                className='color-picker'
              />
            </div>
          </div>
          {/* TODO: clean up the layout of each section so that certain layout styles can be repurposed */}
          <div className='customization-section'>
            <div className='section-title'>Button Options</div>
            <div className='selection-wrapper gap-16'>
              <div className='selection-title'>style:</div>
              <Button
                variant='rounded'
                onClick={() => handleButtonStyleChange('rounded')}
                customStyle={{
                  backgroundColor: '#ffffff',
                  border: '2px solid #000000',
                  color: '#000000',
                }}
              >
                Rounded
              </Button>
              <Button
                variant='squared'
                onClick={() => handleButtonStyleChange('squared')}
                customStyle={{
                  backgroundColor: '#ffffff',
                  border: '2px solid #000000',
                  color: '#000000',
                }}
              >
                Squared
              </Button>
            </div>
            <div className='two-column'>
              <div className='selection-wrapper'>
                <div className='selection-title'>background color:</div>
                <input
                  type='color'
                  name='buttonColor'
                  value={settings.buttonColor}
                  onChange={handleColorChange('buttonColor')}
                  className='color-picker'
                />
              </div>
              <div className='selection-wrapper'>
                <div className='selection-title'>text color:</div>
                <input
                  type='color'
                  name='buttonTextColor'
                  value={settings.buttonTextColor}
                  onChange={handleColorChange('buttonTextColor')}
                  className='color-picker'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='preview-container'>
          <h2>Preview</h2>
          <div
            className={`preview-content ${settings.layoutStyle}`}
            style={{ backgroundColor: settings.backgroundColor }}
          >
            <div className='user-profile'>
              {users.map((user: userItem) => (
                <UserProfile key={user.id} user={user} settings={settings} />
              ))}
            </div>
          </div>
          {/* TODO: this button is just here for the user to feel confident that their changes are saved,
          but it's not actually needed because the settings are saved on every change. If we feel confident
          that our users don't need the extra confirmation, we can remove it. */}
          <Button
            className='save-changes-button'
            onClick={handleSaveChanges}
            disabled={!isChanged}
          >
            Save changes
          </Button>
          {isSaved && <p className='save-message'>Your changes have been saved!</p>}
        </div>
      </div>
    </section>
  )
}

{/* GENERAL TODOS:
  add unit tests,
  add aria-attributes and data-attributes for accessibility,
  add focus styles to the buttons, radio buttons, and inputs,
  add undo/redo functionality,
  add reset button to reset all settings to default,
  make the app responsive,
  implement css variables,
  separate styles into different files,
  clean up some of the CSS,
  NOTE: the save button is not using any of the same styles as the buttons for the user profile, so there should either be two different
    button components or two different classes for styling purposes: one that is styled for the user profiles and one for the settings
    page (a 'linktree' branded button) since those two buttons should look different.
*/}
