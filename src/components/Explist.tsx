import React from 'react'

type ExplistProps = {
  image: string;
  company: string;
  title: string;
  time: string;
};

const Explist = ({ image, company, title, time }: ExplistProps) => {
  return (
    <li className="relative ml-10 py-4">
      <a target="_blank" className="absolute -left-16 top-4 flex items-center justify-center rounded-full bg-white" href="#">
        <span className="relative flex shrink-0 rounded-full size-12 border">
          <img className="aspect-square h-full w-full bg-background object-contain" alt={image} src={`/images/${image}`} />
          </span>
      </a>
      <div className="flex flex-1 flex-col justify-start gap-1">
        <time className="text-xs text-muted-foreground">
          <span>{time}</span>
        </time>
        <h2 className="font-semibold leading-none">{company}</h2>
        <p className="text-sm text-foreground">{title}</p>
      </div>
    </li>
  )
}

export default Explist