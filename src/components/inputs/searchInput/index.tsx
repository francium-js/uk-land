import { Input } from 'src/components/inputs/searchInput/styles'
import type { SearchInputProps } from 'src/components/inputs/searchInput/types'

const SearchInput = ({
  styles,
  placeholder,
  ...props
}: SearchInputProps): JSX.Element => {
  return <Input style={styles} placeholder={placeholder} {...props}></Input>
}

export default SearchInput
