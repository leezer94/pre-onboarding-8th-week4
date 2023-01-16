import { Input, Button } from 'components/@commons';

import * as S from './Form.style';

const Form = () => {
  return (
    <S.Form>
      <Input
        type='list'
        placeholder='프로필 이미지'
        css={{ height: '30px' }}
        list='imgList'
      />
      <datalist id='imgList' style={{ width: '100%' }}>
        <option value='컴퓨터공학과'></option>
        <option value='영어영문과'></option>
        <option value='경영학과'></option>
        <option value='사회체육과'></option>
      </datalist>
      <Input type='text' placeholder='작성자' css={{ height: '30px' }} />
      <Input type='text' placeholder='내용' css={{ height: '30px' }} />
      <textarea
        placeholder='내용을 입력해 주세요.'
        style={{ resize: 'none', height: '100px' }}
      />
      <Button type='button' content='등록' onClick={() => console.log('aa')} />
    </S.Form>
  );
};

export default Form;
