import React from 'react';
import { useState } from 'react';

function TeamMember(props) {
    return (
        <div>
            <h1>{props.member.name}</h1>
            <p>{props.member.email}</p>
            <p>{props.member.role}</p>
        </div>
    );
}

export default TeamMember;
