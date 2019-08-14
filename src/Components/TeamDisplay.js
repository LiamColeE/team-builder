import React from 'react';
import { useState } from 'react';
import TeamMember from "./TeamMember"
import { Divider } from 'semantic-ui-react'
import { Card, Icon, Image } from 'semantic-ui-react'

const TeamDisplay = (props) => {
    return (
        <div>
            <Divider />
            <Card.Group>
                {props.members.map(element => ( <TeamMember key={element.name + (Math.random() * 2000).toString()} member={element}/>))}
            </Card.Group>

        </div>
      )
}

export default TeamDisplay;
