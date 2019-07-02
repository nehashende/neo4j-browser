/*
 * This module depicts the behaviour of the edit drawer and
 * it imports DisplayNodeDetails which is used for rendering
 * selected node's properties.
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withBus } from 'react-suber'
import DisplayNodeDetails from './DisplayNodeDetails'
import { Drawer, DrawerHeader } from 'browser-components/drawer/index'

export class EditorInfo extends Component {
  render () {
    return (
      <div>
        {this.props.selectedItem !== undefined ? (
          <DisplayNodeDetails
            labels={this.props.selectedItem._fields[0].labels}
            selectedItem={this.props.selectedItem._fields[0].properties}
          />
        ) : (
          <Drawer>
            <DrawerHeader>Editor</DrawerHeader>
          </Drawer>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    selectedItem: state.itemEditor.selectedItem
  }
}

export default withBus(connect(mapStateToProps)(EditorInfo))
