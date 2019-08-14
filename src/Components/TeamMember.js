import React from 'react';
import { useState } from 'react';

function TeamMember(props) {
    return (
        <div>
            <h1>{props.member.name}</h1>
            <h1>{props.member.email}</h1>
            <h1>{props.member.role}</h1>
        </div>
    );
}

export default TeamMember;
