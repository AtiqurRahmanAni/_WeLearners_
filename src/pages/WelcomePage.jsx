import React from 'react'
import { useLocation, useNavigate } from 'react-router'
export default function WelcomePage() {
    const location = useLocation()
  return (
    <div>
        <h1>
            Welcome {location.state.id}! Hope you will hae fun learning using WeLearners!
        </h1>
    </div>
  )
}
