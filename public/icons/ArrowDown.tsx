import React from 'react'

interface PropsType{
  color?: string
  size?: number
}
export default function ArrowDown({color , size = 15} : PropsType) {
  return (
    <svg width={size} height={size} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.66542 10.3004C7.25708 10.3004 6.84875 10.1429 6.53958 9.8337L2.73625 6.03036C2.56708 5.8612 2.56708 5.5812 2.73625 5.41203C2.90542 5.24286 3.18542 5.24286 3.35458 5.41203L7.15792 9.21536C7.43792 9.49536 7.89292 9.49536 8.17292 9.21536L11.9762 5.41203C12.1454 5.24286 12.4254 5.24286 12.5946 5.41203C12.7638 5.5812 12.7638 5.8612 12.5946 6.03036L8.79125 9.8337C8.48208 10.1429 8.07375 10.3004 7.66542 10.3004Z" fill="#0F0F0E"/>
    </svg>
  )
}
