'use client'

import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  EmailIcon,
} from 'react-share'

interface ShareButtonsProps {
  title: string
  url: string
}

export default function ShareButtons({ title, url }: ShareButtonsProps) {
  const fullUrl = typeof window !== 'undefined' ? window.location.origin + url : url

  return (
    <div className="flex items-center gap-4">
      <span className="text-text/70 font-medium">Share:</span>
      <div className="flex items-center gap-2">
        <FacebookShareButton url={fullUrl} quote={title}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <TwitterShareButton url={fullUrl} title={title}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <LinkedinShareButton url={fullUrl} title={title}>
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
        <EmailShareButton url={fullUrl} subject={title}>
          <EmailIcon size={32} round />
        </EmailShareButton>
      </div>
    </div>
  )
}

