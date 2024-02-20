import { useNavigate } from 'react-router-dom'

import { WikiPageContainer, PasportWindow } from 'src/pages/WikiPage/styles'
import { RoutesPath } from 'src/routes/routes'

const WikiPage = (): JSX.Element => {
  const navigate = useNavigate()

  return (
    <WikiPageContainer>
      <PasportWindow
        onClick={() => navigate(RoutesPath.ACHIEVEMENTS)}
        src="/assets/pasport.png"
      ></PasportWindow>

      {/* {Object.keys(overworld).map(key => {
        return <div key={key}>{key}</div>
      })} */}
    </WikiPageContainer>
  )
}

export default WikiPage
