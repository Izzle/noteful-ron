import React from 'react';
import { NavLink } from 'react-router-dom';

export default function FolderList(props) {
  return (
    <div className='FolderList'>
      <ul className='FolderList-list'>
        {props.folders.map(folder =>
            // console.log(folder)
          <li key={folder.id}>
            <NavLink
              className='FolderList-folder'
              to={`/folder/${folder.id}`}
            >
              <span>Some Number ++</span>
              {folder.name}
            </NavLink>
          </li>
        )}
      </ul>
      <div className='FolderList-button'>
        <button>Add Folder (change to Navlink maybe)</button>
      </div>
    </div>
  )
}

FolderList.defaultProps = {
  folders: []
}