import React, { useContext } from 'react'
import { GlobalContext } from '../assets/context/GlobalState'
import useAutocomplete from '@material-ui/lab/useAutocomplete'
import NoSsr from '@material-ui/core/NoSsr'
import CheckIcon from '@material-ui/icons/Check'
import Tag from './Tag'

export default function ContactPicker() {
  const { contacts } = useContext(GlobalContext)

  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getTagProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    value,
    focused,
    setAnchorEl,
  } = useAutocomplete({
    id: 'customized-hook-demo',
    defaultValue: [contacts[0]],
    multiple: true,

    options: contacts,
    getOptionLabel: (option) => option.firstName,
  })

  return (
    <NoSsr>
      <div>
        <div {...getRootProps()}>
          <label className="add-contact-header" {...getInputLabelProps()}>
            Customized hook
          </label>
          <div
            ref={setAnchorEl}
            className="input-wrapper {focused ? 'focused' : ''} "
          >
            {value.map((option, index) => (
              <Tag
                label={
                  <span>
                    <strong>{option.firstName}</strong>
                    {' ' + option.lastName}
                  </span>
                }
                {...getTagProps({ index })}
              />
            ))}

            <input {...getInputProps()} />
          </div>
        </div>
        {groupedOptions.length > 0 ? (
          <ul className="add-date-listcontainer" {...getListboxProps()}>
            {groupedOptions.map((option, index) => (
              <li {...getOptionProps({ option, index })}>
                <span>
                  <strong>{option.firstName}</strong>
                  {' ' + option.lastName}
                </span>

                <CheckIcon fontSize="small" />
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </NoSsr>
  )
}
