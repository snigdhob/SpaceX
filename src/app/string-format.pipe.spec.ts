import { TitleCasePipe } from '@angular/common';
import { StringFormatPipe } from './string-format.pipe';

describe('StringFormatPipe', () => {
  it('create an instance', () => {
    const pipe = new StringFormatPipe(new TitleCasePipe());
    expect(pipe).toBeTruthy();
  });
});
