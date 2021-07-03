import fs from 'fs';
import path from 'path';
import assert from 'assert';
import md2html from '../md2HTML';

it('converts Markdown to HTML (GFM=false)', () => {
  const sample = fs.readFileSync(path.resolve(__dirname, './fixture/sample.md'), { encoding: 'utf8' });
  const expected = fs.readFileSync(path.resolve(__dirname, './fixture/expected.html'), { encoding: 'utf8' });
  // 末尾の改行の有無の違いを無視するため、変換後のHTMLのスペースをtrimメソッドで削除してから比較しています
  assert.strictEqual(md2html(sample, { gfm: false }).trimEnd(), expected.trimEnd());
});

it('converts Markdown to HTML (GFM=true)', () => {
  const sample = fs.readFileSync(path.resolve(__dirname, './fixture/sample.md'), { encoding: 'utf8' });
  const expected = fs.readFileSync(path.resolve(__dirname, './fixture/expected-gfm.html'), { encoding: 'utf8' });
  // 末尾の改行の有無の違いを無視するため、変換後のHTMLのスペースをtrimメソッドで削除してから比較しています
  assert.strictEqual(md2html(sample, { gfm: true }).trimEnd(), expected.trimEnd());
});
