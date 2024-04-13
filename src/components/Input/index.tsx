import React, { useState } from "react";
import { Container, IconContainer, StyledInput } from "./styles";
/* import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'; */

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  onSearch: (searchTerm: string) => void;
}

const SearchInput = ({ placeholder, onSearch }: SearchInputProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch(searchTerm);
      console.log(searchTerm);
    }
  };

  return (
    <Container>
      <IconContainer>
        {/*   <FontAwesomeIcon icon={faSearch} /> */}
      </IconContainer>
      <StyledInput
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </Container>
  );
};

export default SearchInput;
