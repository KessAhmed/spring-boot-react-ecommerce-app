import React from 'react';
import styled from 'styled-components';
import {Button, Dimmer, Segment} from 'semantic-ui-react';

export const StyledSegment = styled(Segment)({
    border: 'none !important',
    margin: '0 !important',
    padding: '0 !important',
});

export const StyledDimmer = styled(Dimmer)({
    padding: '0 !important',
    backgroundColor: 'rgba(0,0,0,0.2) !important',
});

export const StyledWebButton = styled(Button)({
    width: '10em !important'
});