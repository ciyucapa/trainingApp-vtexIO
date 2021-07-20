import React, { FC } from 'react';

import ExpirationInformation from './interfaces/ExpirationInformation';
import useExpiration from './hooks/useExpiration';

const Information = (props: ExpirationInformation) => (
  <>
    <div>{props.pum ? `Pum ${props.pum}` : ""}</div>
  </>
);

const InformationPum: FC = () => {
  const hook = useExpiration();
  return <Information {...hook} />;
}
export default InformationPum;
