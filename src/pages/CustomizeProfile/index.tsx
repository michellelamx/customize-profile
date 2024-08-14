import { Button } from '@/components/Button'
import { Checkbox } from '@/components/Checkbox/checkbox'
import { ChangeEvent, useState, useEffect } from 'react'
import './main.css'


export const CustomizeProfile = () => {
  const [settings, setSettings] = useState({
    backgroundColor: '#F3F3F1',
    buttonStyle: 'rounded' as 'rounded' | 'squared',
    buttonColor: '#9541FF',
    buttonTextColor: '#ffffff',
  })
  const [initialSettings, setInitialSettings] = useState(settings)
  const [isSaved, setIsSaved] = useState(false)

  useEffect(() => {
    const savedSettings = localStorage.getItem('userProfileSettings')
    if (savedSettings) {
      const parsedSettings = JSON.parse(savedSettings)
      setSettings(parsedSettings)
      setInitialSettings(parsedSettings)
    }
  }, [])

  const handleSaveChanges = () => {
    localStorage.setItem('userProfileSettings', JSON.stringify(settings))
    setInitialSettings(settings)
    setIsSaved(true)
    setTimeout(() => {
      setIsSaved(false)
    }, 3000)
  }

  const isChanged = JSON.stringify(settings) !== JSON.stringify(initialSettings)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setSettings((prevSettings) => ({
      ...prevSettings,
      [name]: value
    }))
  }

  const handleButtonStyleChange = (newStyle: 'rounded' | 'squared') => {
    setSettings(prev => ({ ...prev, buttonStyle: newStyle }))
  }

  const ButtonPreview = () => (
    <Button
      variant={settings.buttonStyle}
      customStyle={{
        backgroundColor: settings.buttonColor,
        color: settings.buttonTextColor
      }}
    >
      Button Preview
    </Button>
  )

  return (
    <section className='customize-profile'>
      <h1>Customize your profile</h1>
      <div className='content-container'>
        <div className='settings-container'>
          <h2>Choose Your Styles</h2>
          <div className='customization-section'>
            <div className='section-title'>Layout Options</div>
            <div className='selection-wrapper two-column'>
              <Checkbox />
              <div className='selection-title'>classic list:</div>

              <div className='selection-title'>grid:</div>

            </div>
          </div>
          <div className='customization-section'>
            <div className='section-title'>Background Options</div>
            <div className='selection-wrapper'>
              <div className='selection-title'>color:</div>
              <input
                type='color'
                name='backgroundColor'
                value={settings.backgroundColor}
                onChange={handleChange}
                className='color-picker'
              />
            </div>
          </div>
          <div className='customization-section'>
            <div className='section-title'>Button Options</div>
            <div className='selection-wrapper'>
              <div className='selection-title'>style:</div>
              <Button
                variant='rounded'
                onClick={() => handleButtonStyleChange('rounded')}
                customStyle={{
                  backgroundColor: '#9541FF',
                  color: '#ffffff',
                }}
              >
                Rounded
              </Button>
              <Button
                variant='squared'
                onClick={() => handleButtonStyleChange('squared')}
                customStyle={{
                  backgroundColor: '#9541FF',
                  color: '#ffffff',
                }}
              >
                Squared
              </Button>
            </div>
          </div>
          <div className='selection-wrapper'>
            <div className='selection-title'>background color:</div>
            <input
              type='color'
              name='buttonColor'
              value={settings.buttonColor}
              onChange={handleChange}
              className='color-picker'
            />
          </div>
          <div className='selection-wrapper'>
            <div className='selection-title'>text color:</div>
            <input
              type='color'
              name='buttonTextColor'
              value={settings.buttonTextColor}
              onChange={handleChange}
              className='color-picker'
            />
          </div>
        </div>
        <div className='preview-container'>
          <h2>Preview</h2>
          <div className='preview-content' style={{ backgroundColor: settings.backgroundColor }}>
            <ButtonPreview />
          </div>
          <Button
            className='save-changes-button'
            onClick={handleSaveChanges}
            disabled={!isChanged}
          >
            Save changes
          </Button>
          {isSaved && <p className='save-message'>changes have been saved</p>}
        </div>
      </div>
    </section>
  )
}
