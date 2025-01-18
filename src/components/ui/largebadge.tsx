import React from 'react'

type LargeBadgeProps = {
  image :string;
  name: string;
};

const Largebadge = ({ image, name }: LargeBadgeProps) => {
  return (
  <div className="flex items-center p-2 bg-neutral-800 hover:bg-white rounded hover:opacity-100 transition-all cursor-default bottom-0 hover:bottom-1 relative duration-100 group">
    <img alt="Icon 1" loading="lazy" width="25" height="25" decoding="async" data-nimg="1" className="filter invert group-hover:invert-0" src={`/images/svg/${image}.svg`} />
    <p className="ml-2 mr-1 text-sm text-neutral-300 group-hover:text-black">{name}</p>
  </div>
  )
}

export default Largebadge