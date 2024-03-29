import React from 'react';
import classNames from '../_util/classNames';
import getPrefix from '../_util/getPrefix';

type TagType = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

function Tag(props: TagType): JSX.Element {
  const { children, onClick, className } = props;
  return (
    <span role="presentation" onClick={onClick} className={classNames(getPrefix('tag'), className)}>
      {children}
    </span>
  );
}

export default Tag;
