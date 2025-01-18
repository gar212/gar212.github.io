import React from 'react'

const WebsiteIcon: React.FC<{ className?: string; fill?: string }> = ({ className, fill = 'ffffff' }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 26 26" fill="none" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
  )
}

export default WebsiteIcon