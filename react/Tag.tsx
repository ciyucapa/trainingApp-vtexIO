import React from 'react';

import useTag from './hooks/useTaq';
import InformationTagProps from './interfaces/InformationTag';

const InformationTag = (props: InformationTagProps) => (
    <>{props.tag ? `Ultimas ${props.tag} UD.` : ''}</>
)

const Tag = () => {
    const hooks = useTag();
    return <InformationTag {...hooks} />
}

export default Tag;
