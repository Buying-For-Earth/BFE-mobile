import React, {useState} from 'react';
import Styled from 'styled-components/native';

function SearchHeader() {
  const [text, setText] = useState('');
  return (
    <Header>
      <SearchText
        placeholder="검색어를 입력해주세요"
        onChangeText={text => setText(text)}
        returnKeyType="search"
        // TODO: 검색기능 작동
        onSubmitEditing={() => console.log(text)}
      />
      <Line />
    </Header>
  );
}

const Header = Styled.View`
  background: white;
  width: 100%;
  height: 60px;
`;

const SearchText = Styled.TextInput`
  margin: 5px;
  padding: 10px;
  height: 50px;
  font-size: 18px;
`;

const Line = Styled.View`
  height: 1px;
  background: #bbb;
`;

export default SearchHeader;
