import React from 'react';
import { useState } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'

function TeamMember(props) {
    return (
        <Card>
            <Card.Content>
            <Card.Header>{props.member.name}</Card.Header>
            <p>{props.member.email}</p>
            <p>{props.member.role}</p>
            </Card.Content>
        </Card>
    );
}

export default TeamMember;
