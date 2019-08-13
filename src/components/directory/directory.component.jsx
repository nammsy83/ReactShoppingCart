import React from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import { connect } from 'react-redux';


const Directory = ({ sections }) => (

  <div className="directory-menu">
    {sections.map(({ id, ...otherSectionProps }) =>
      <MenuItem key={id} {...otherSectionProps} />
    )}
  </div>

)

const mapStateToProps = state => ({
  sections: selectDirectorySections(state)
})
export default connect(mapStateToProps)(Directory);