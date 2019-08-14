import React from 'react';
import { useState } from 'react';
import TeamMember from "./TeamMember"

const TeamDisplay = (props) => {
    console.log(props.members);
    return (
        <div>
            {props.members.map(element => ( <TeamMember member={element}/>))}
        </div>
      )
}

export default TeamDisplay;
