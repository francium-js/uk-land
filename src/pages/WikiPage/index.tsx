import { RoutesPath } from 'src/routes/routes'

import useWikiPage from 'src/pages/WikiPage/useWikiPage'
import SearchInput from 'src/components/inputs/searchInput'
import MedalIcon from 'src/assets/SVG/MedalIcon'

import {
  WikiPageContainer,
  PasportLi,
  PasportUl,
  UserNameContainer,
  SelectContainer,
  OptionFilter,
  FormContainer,
} from 'src/pages/WikiPage/styles'

const WikiPage = (): JSX.Element => {
  const {
    data = [],
    value,
    isLoading,
    navigate,
    setValue,
    setOption,
  } = useWikiPage()

  return (
    <WikiPageContainer>
      <FormContainer>
        <SearchInput
          placeholder="Введіть нік гравця"
          value={value}
          onChange={e => {
            setValue(e.target.value)
          }}
        />

        <SelectContainer>
          <OptionFilter onClick={() => setOption('optionToTop')}>
            <MedalIcon medalIsUp={true} />
          </OptionFilter>
          <OptionFilter onClick={() => setOption('optionToDown')}>
            <MedalIcon />
          </OptionFilter>
          <OptionFilter onClick={() => setOption('optionAbc')}>A...</OptionFilter>
          <OptionFilter onClick={() => setOption('optionCba')}>Z...</OptionFilter>
        </SelectContainer>
      </FormContainer>

      {!isLoading && (
        <PasportUl>
          {data.map(({ userName, rating }) => (
            <PasportLi
              key={userName}
              onClick={() => {
                navigate(`${RoutesPath.WIKI}/${userName}`)
              }}
            >
              <UserNameContainer>
                <p>{userName}</p>
                <div>{rating}</div>
              </UserNameContainer>
            </PasportLi>
          ))}
        </PasportUl>
      )}
    </WikiPageContainer>
  )
}

export default WikiPage
