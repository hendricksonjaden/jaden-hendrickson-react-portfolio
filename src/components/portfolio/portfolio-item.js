import React from 'react'; 

export default function PortfolioItems(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <h4>{props.url}</h4>
    </div>
  )
}